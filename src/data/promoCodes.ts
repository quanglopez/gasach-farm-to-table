export interface PromoCode {
  code: string;
  discount: number; // percentage
  minOrder?: number; // minimum order amount
  description: string;
  validUntil: string;
}

export const promoCodes: Record<string, PromoCode> = {
  'WELCOME10': {
    code: 'WELCOME10',
    discount: 10,
    minOrder: 0,
    description: 'Giảm 10% cho đơn hàng đầu tiên',
    validUntil: '31/12/2024',
  },
};

export const validatePromoCode = (code: string): PromoCode | null => {
  // Trim and uppercase for case-insensitive matching
  const normalizedCode = code.trim().toUpperCase();
  
  // Check if code exists
  if (!promoCodes[normalizedCode]) {
    return null;
  }
  
  return promoCodes[normalizedCode];
};

export const calculateDiscount = (subtotal: number, promoCode: PromoCode | null): number => {
  if (!promoCode) return 0;
  
  // Check minimum order requirement
  if (promoCode.minOrder && subtotal < promoCode.minOrder) {
    return 0;
  }
  
  // Calculate discount amount
  const discountAmount = Math.floor(subtotal * (promoCode.discount / 100));
  
  return discountAmount;
};
