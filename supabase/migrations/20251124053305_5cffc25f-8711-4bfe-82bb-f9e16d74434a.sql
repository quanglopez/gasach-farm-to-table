-- Fix function search_path warnings
CREATE OR REPLACE FUNCTION public.generate_tracking_token()
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
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

CREATE OR REPLACE FUNCTION public.set_tracking_token()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.tracking_token IS NULL THEN
    NEW.tracking_token := public.generate_tracking_token();
  END IF;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.validate_order()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
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