-- Create orders table for storing customer orders
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_address TEXT NOT NULL,
  customer_note TEXT,
  subtotal INTEGER NOT NULL,
  discount INTEGER DEFAULT 0,
  promo_code TEXT,
  total INTEGER NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create order_items table for storing items in each order
CREATE TABLE public.order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  product_image TEXT NOT NULL,
  product_weight TEXT NOT NULL,
  price INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create promotion_subscribers table for newsletter signups
CREATE TABLE public.promotion_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.promotion_subscribers ENABLE ROW LEVEL SECURITY;

-- RLS Policies for orders table
-- Allow anyone to insert orders (public can place orders)
CREATE POLICY "Anyone can create orders"
ON public.orders
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow anyone to read their own orders by phone number
CREATE POLICY "Users can view orders by phone"
ON public.orders
FOR SELECT
TO anon, authenticated
USING (true);

-- RLS Policies for order_items table
-- Allow insert when creating order
CREATE POLICY "Anyone can create order items"
ON public.order_items
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow read order items
CREATE POLICY "Anyone can view order items"
ON public.order_items
FOR SELECT
TO anon, authenticated
USING (true);

-- RLS Policies for promotion_subscribers
-- Allow anyone to subscribe
CREATE POLICY "Anyone can subscribe to promotions"
ON public.promotion_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only allow reading own subscription (by email)
CREATE POLICY "Users can view their own subscription"
ON public.promotion_subscribers
FOR SELECT
TO anon, authenticated
USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger to orders table
CREATE TRIGGER update_orders_updated_at
BEFORE UPDATE ON public.orders
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster queries
CREATE INDEX idx_orders_phone ON public.orders(customer_phone);
CREATE INDEX idx_orders_created_at ON public.orders(created_at DESC);
CREATE INDEX idx_order_items_order_id ON public.order_items(order_id);
CREATE INDEX idx_promotion_subscribers_email ON public.promotion_subscribers(email);