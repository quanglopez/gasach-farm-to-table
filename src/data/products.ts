import gaMaiTa from '@/assets/ga-mai-ta-main.jpg';
import gaNuaCon from '@/assets/ga-nua-con-main.jpg';
import gaTrongTa from '@/assets/ga-trong-ta-1.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  weight: string;
  image: string;
  category: 'regular' | 'premium' | 'super';
  badge?: string;
  description: string;
  origin: string;
  storage: string;
  cooking: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Gà Mái Ta',
    price: 135000,
    weight: '1.5 - 1.8 kg',
    image: gaMaiTa,
    category: 'premium',
    badge: 'Tươi ngon',
    description: 'Gà mái ta nuôi tự nhiên, thịt thơm ngon, độ dai vừa phải, thích hợp cho các món luộc, hấp, lẩu',
    origin: 'Trang trại Gasach, nuôi tự nhiên tại Hà Nội',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp với các món luộc, hấp, lẩu',
  },
  {
    id: '2',
    name: 'Gà Nửa Con',
    price: 75000,
    weight: '0.8 - 1.0 kg',
    image: gaNuaCon,
    category: 'regular',
    badge: 'Tiện lợi',
    description: 'Gà ta nửa con, đã sơ chế sạch, tiện lợi cho gia đình nhỏ hoặc chế biến nhanh',
    origin: 'Trang trại Gasach, nuôi tự nhiên tại Hà Nội',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp với các món nướng, chiên, kho, lẩu',
  },
  {
    id: '3',
    name: 'Gà Trống Ta',
    price: 125000,
    weight: '1.8 - 2.2 kg',
    image: gaTrongTa,
    category: 'super',
    badge: 'Cao cấp',
    description: 'Gà trống ta già, thịt chắc ngon, thơm, da giòn, ít mỡ, thích hợp cho các món cao cấp',
    origin: 'Trang trại Gasach, nuôi tự nhiên tại Hà Nội',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp với các món luộc, hấp, hầm, lẩu',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: 'regular' | 'premium' | 'super'): Product[] => {
  return products.filter(p => p.category === category);
};
