import chickenRegular from '@/assets/chicken-regular.jpg';
import chickenPremium from '@/assets/chicken-premium.jpg';
import chickenSuper from '@/assets/chicken-super.jpg';

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
    name: 'Gà Thường',
    price: 120000,
    weight: '1.2 - 1.5 kg',
    image: chickenRegular,
    category: 'regular',
    badge: 'Bán chạy',
    description: 'Gà ta nuôi tự nhiên, không chất tăng trọng, không kháng sinh. Thịt gà dai, ngọt thơm tự nhiên, phù hợp cho mọi món ăn gia đình.',
    origin: 'Trang trại Gasach, nuôi tự nhiên tại Hà Nội',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp để luộc, hấp, nấu phở, nấu canh, kho, chiên... Thịt gà dai, ngọt tự nhiên.',
  },
  {
    id: '2',
    name: 'Gà Chuẩn Ta',
    price: 180000,
    weight: '1.3 - 1.6 kg',
    image: chickenPremium,
    category: 'premium',
    badge: 'Tươi ngon',
    description: 'Gà ta thuần chủng, nuôi chăn thả tự nhiên với thức ăn hữu cơ. Thịt săn chắc, da vàng óng, hương vị đậm đà.',
    origin: 'Trang trại Gasach, chăn thả tự nhiên tại vùng ngoại thành',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Đặc biệt thích hợp cho các món luộc, hấp, gà hấp lá chanh, gà nấu chao... để tận hưởng hương vị nguyên bản.',
  },
  {
    id: '3',
    name: 'Gà Siêu Ngon',
    price: 250000,
    weight: '1.4 - 1.7 kg',
    image: chickenSuper,
    category: 'super',
    badge: 'Cao cấp',
    description: 'Gà ta cao cấp nhất, nuôi tự nhiên 100% với thức ăn organic. Thịt săn chắc tuyệt đối, da vàng óng ánh, hương vị tuyệt hảo.',
    origin: 'Trang trại hữu cơ Gasach, nuôi tự nhiên với chế độ dinh dưỡng đặc biệt',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Hoàn hảo cho mọi món ăn cao cấp: gà hấp muối, gà luộc, gà nướng, gà nấu phở... Chất lượng đỉnh cao!',
  },
  {
    id: '4',
    name: 'Gà Thường - Combo 2 con',
    price: 230000,
    weight: '2.4 - 3.0 kg (2 con)',
    image: chickenRegular,
    category: 'regular',
    badge: 'Tiết kiệm',
    description: 'Combo 2 con gà thường với giá ưu đãi. Tiết kiệm hơn 10000₫ so với mua lẻ!',
    origin: 'Trang trại Gasach, nuôi tự nhiên tại Hà Nội',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp để luộc, hấp, nấu phở, nấu canh, kho, chiên...',
  },
  {
    id: '5',
    name: 'Gà Chuẩn Ta - Combo 2 con',
    price: 350000,
    weight: '2.6 - 3.2 kg (2 con)',
    image: chickenPremium,
    category: 'premium',
    badge: 'Ưu đãi',
    description: 'Combo 2 con gà chuẩn ta với giá ưu đãi. Tiết kiệm 10000₫ so với mua lẻ!',
    origin: 'Trang trại Gasach, chăn thả tự nhiên',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Đặc biệt thích hợp cho các món luộc, hấp...',
  },
  {
    id: '6',
    name: 'Gà Siêu Ngon - Combo 2 con',
    price: 480000,
    weight: '2.8 - 3.4 kg (2 con)',
    image: chickenSuper,
    category: 'super',
    badge: 'Giảm giá',
    description: 'Combo 2 con gà siêu ngon cao cấp. Tiết kiệm 20000₫ so với mua lẻ!',
    origin: 'Trang trại hữu cơ Gasach',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày.',
    cooking: 'Hoàn hảo cho mọi món ăn cao cấp',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: 'regular' | 'premium' | 'super'): Product[] => {
  return products.filter(p => p.category === category);
};
