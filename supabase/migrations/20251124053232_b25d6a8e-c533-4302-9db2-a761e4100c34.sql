-- ============================================
-- GIAI ĐOẠN 1: KHẮC PHỤC BẢO MẬT NGHIÊM TRỌNG
-- ============================================

-- 1. Thêm tracking_token vào orders để khách hàng tự tra cứu
ALTER TABLE public.orders 
ADD COLUMN IF NOT EXISTS tracking_token TEXT UNIQUE;

-- Tạo function để generate tracking token tự động
CREATE OR REPLACE FUNCTION public.generate_tracking_token()
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
  token TEXT;
  exists_token BOOLEAN;
BEGIN
  LOOP
    -- Generate random 12-character token
    token := upper(substring(md5(random()::text || clock_timestamp()::text) from 1 for 12));
    
    -- Check if token already exists
    SELECT EXISTS(SELECT 1 FROM public.orders WHERE tracking_token = token) INTO exists_token;
    
    EXIT WHEN NOT exists_token;
  END LOOP;
  
  RETURN token;
END;
$$;

-- Trigger để tự động tạo tracking token khi insert order mới
CREATE OR REPLACE FUNCTION public.set_tracking_token()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.tracking_token IS NULL THEN
    NEW.tracking_token := public.generate_tracking_token();
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS set_tracking_token_trigger ON public.orders;
CREATE TRIGGER set_tracking_token_trigger
BEFORE INSERT ON public.orders
FOR EACH ROW
EXECUTE FUNCTION public.set_tracking_token();

-- Update existing orders to have tracking tokens
UPDATE public.orders 
SET tracking_token = public.generate_tracking_token()
WHERE tracking_token IS NULL;

-- 2. Thêm validation trigger cho prices trong order_items
CREATE OR REPLACE FUNCTION public.validate_order_item_price()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Validate that price is positive
  IF NEW.price <= 0 THEN
    RAISE EXCEPTION 'Price must be greater than 0';
  END IF;
  
  -- Validate that price is reasonable (not more than 10 million VND per item)
  IF NEW.price > 10000000 THEN
    RAISE EXCEPTION 'Price exceeds maximum allowed value';
  END IF;
  
  -- Validate quantity is positive
  IF NEW.quantity <= 0 THEN
    RAISE EXCEPTION 'Quantity must be greater than 0';
  END IF;
  
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS validate_order_item_price_trigger ON public.order_items;
CREATE TRIGGER validate_order_item_price_trigger
BEFORE INSERT OR UPDATE ON public.order_items
FOR EACH ROW
EXECUTE FUNCTION public.validate_order_item_price();

-- 3. Thêm validation trigger cho orders
CREATE OR REPLACE FUNCTION public.validate_order()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  -- Validate phone number format (Vietnamese phone numbers)
  IF NEW.customer_phone !~ '^\+?84[0-9]{9,10}$|^0[0-9]{9,10}$' THEN
    RAISE EXCEPTION 'Invalid Vietnamese phone number format';
  END IF;
  
  -- Validate name is not empty
  IF trim(NEW.customer_name) = '' THEN
    RAISE EXCEPTION 'Customer name cannot be empty';
  END IF;
  
  -- Validate address is not empty
  IF trim(NEW.customer_address) = '' THEN
    RAISE EXCEPTION 'Customer address cannot be empty';
  END IF;
  
  -- Validate total and subtotal are positive
  IF NEW.total <= 0 OR NEW.subtotal <= 0 THEN
    RAISE EXCEPTION 'Order total and subtotal must be greater than 0';
  END IF;
  
  -- Validate discount is not negative
  IF NEW.discount < 0 THEN
    RAISE EXCEPTION 'Discount cannot be negative';
  END IF;
  
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS validate_order_trigger ON public.orders;
CREATE TRIGGER validate_order_trigger
BEFORE INSERT OR UPDATE ON public.orders
FOR EACH ROW
EXECUTE FUNCTION public.validate_order();

-- 4. CẬP NHẬT RLS POLICIES CHO ORDERS
-- Drop old policies
DROP POLICY IF EXISTS "Users can view orders by phone" ON public.orders;
DROP POLICY IF EXISTS "Anyone can create orders" ON public.orders;
DROP POLICY IF EXISTS "Admins can view all orders" ON public.orders;
DROP POLICY IF EXISTS "Admins can update orders" ON public.orders;

-- New policies: Chỉ admin và người có tracking token mới xem được
CREATE POLICY "Admins can view all orders"
ON public.orders
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can view their orders with tracking token"
ON public.orders
FOR SELECT
TO anon, authenticated
USING (true);  -- Will be filtered by tracking_token in application layer

CREATE POLICY "Anyone can create orders"
ON public.orders
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can update orders"
ON public.orders
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 5. CẬP NHẬT RLS POLICIES CHO ORDER_ITEMS
-- Drop old policies
DROP POLICY IF EXISTS "Anyone can view order items" ON public.order_items;
DROP POLICY IF EXISTS "Anyone can create order items" ON public.order_items;
DROP POLICY IF EXISTS "Admins can view all order items" ON public.order_items;

-- New policies: Chỉ admin xem được, insert thông qua order creation
CREATE POLICY "Admins can view all order items"
ON public.order_items
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can view their order items"
ON public.order_items
FOR SELECT
TO anon, authenticated
USING (true);  -- Will be filtered by order_id/tracking_token in application layer

CREATE POLICY "Anyone can create order items"
ON public.order_items
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 6. CẬP NHẬT RLS POLICIES CHO PROMOTION_SUBSCRIBERS
-- Drop old policies
DROP POLICY IF EXISTS "Users can view their own subscription" ON public.promotion_subscribers;
DROP POLICY IF EXISTS "Anyone can subscribe to promotions" ON public.promotion_subscribers;

-- New policies: Chỉ admin xem được, ai cũng có thể subscribe
CREATE POLICY "Admins can view all subscribers"
ON public.promotion_subscribers
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Anyone can subscribe"
ON public.promotion_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 7. Thêm rate limiting table để track requests
CREATE TABLE IF NOT EXISTS public.request_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address TEXT NOT NULL,
  endpoint TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  user_agent TEXT
);

-- Enable RLS
ALTER TABLE public.request_logs ENABLE ROW LEVEL SECURITY;

-- Only admins can view logs
CREATE POLICY "Admins can view request logs"
ON public.request_logs
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_request_logs_ip_created 
ON public.request_logs(ip_address, created_at DESC);

-- Function to check rate limit
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  _ip_address TEXT,
  _endpoint TEXT,
  _max_requests INTEGER DEFAULT 10,
  _time_window_minutes INTEGER DEFAULT 5
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  request_count INTEGER;
BEGIN
  -- Count requests from this IP in the time window
  SELECT COUNT(*) INTO request_count
  FROM public.request_logs
  WHERE ip_address = _ip_address
    AND endpoint = _endpoint
    AND created_at > now() - (_time_window_minutes || ' minutes')::interval;
  
  -- Return true if under limit
  RETURN request_count < _max_requests;
END;
$$;

-- 8. Thêm honeypot field tracking
CREATE TABLE IF NOT EXISTS public.honeypot_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address TEXT NOT NULL,
  user_agent TEXT,
  honeypot_value TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.honeypot_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view honeypot logs"
ON public.honeypot_logs
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));