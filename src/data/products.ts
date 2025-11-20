import gaMaiTa from '@/assets/ga-mai-ta-main.jpg';
import gaMaiTa2 from '@/assets/ga-mai-ta-2.jpg';
import gaMaiTa3 from '@/assets/ga-mai-ta-3.jpg';
import gaMaiTa4 from '@/assets/ga-mai-ta-4.jpg';
import gaNuaCon from '@/assets/ga-nua-con-main.jpg';
import gaNuaCon2 from '@/assets/ga-nua-con-2.jpg';
import gaNuaCon3 from '@/assets/ga-nua-con-3.jpg';
import gaNuaCon4 from '@/assets/ga-nua-con-4.jpg';
import gaTrongTa from '@/assets/ga-trong-ta-1.jpg';
import gaTrongTa2 from '@/assets/ga-trong-ta-hero.jpg';
import comboLong from '@/assets/combo-long.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  weight: string;
  image: string;
  gallery?: string[];
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
    name: 'Gà Ta lai/Tam Hoàng',
    price: 80000,
    weight: '1.6 - 1.9 kg',
    image: gaMaiTa,
    gallery: [gaMaiTa, gaMaiTa2, gaMaiTa3, gaMaiTa4],
    category: 'regular',
    badge: 'SKU Basic',
    description: 'Gà thịt độ dai thấp, thịt vẫn thơm nhẹ, vàng nhẹ phù hợp với món nướng, chiên, kho và khách hàng chỉ thích ăn dai ít',
    origin: 'Trang trại Gasach, nuôi tự nhiên tại Hà Nội',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp với các món nướng, chiên, kho',
  },
  {
    id: '2',
    name: 'Gà chuẩn ta (Trống)',
    price: 95000,
    weight: '2.2 - 2.4 kg',
    image: gaTrongTa,
    gallery: [gaTrongTa, gaTrongTa2],
    category: 'regular',
    badge: 'SKU Standard',
    description: 'Gà thịt có độ dai vừa tới, thịt thơm, ít mỡ, vàng óng tự nhiên, với gà mái có độ béo nhẹ, trong thớ thịt. Phù hợp với các món lẩu, kho, luộc',
    origin: 'Trang trại Gasach, nuôi tự nhiên tại Hà Nội',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp với các món lẩu, kho, luộc',
  },
  {
    id: '3',
    name: 'Gà chuẩn ta (Mái)',
    price: 110000,
    weight: '1.5 kg',
    image: gaMaiTa,
    gallery: [gaMaiTa, gaMaiTa2, gaMaiTa3, gaMaiTa4],
    category: 'regular',
    badge: 'SKU Standard',
    description: 'Gà thịt có độ dai vừa tới, thịt thơm, ít mỡ, vàng óng tự nhiên, với gà mái có độ béo nhẹ, trong thớ thịt. Phù hợp với các món lẩu, kho, luộc',
    origin: 'Trang trại Gasach, nuôi tự nhiên tại Hà Nội',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp với các món lẩu, kho, luộc',
  },
  {
    id: '4',
    name: 'Gà ta thả rẫy (Trống)',
    price: 125000,
    weight: '1.8 - 2.0 kg',
    image: gaTrongTa,
    gallery: [gaTrongTa, gaTrongTa2],
    category: 'premium',
    badge: 'SKU Premium',
    description: 'Sản phẩm "gà ta ngon" Đảm bảo được độ dai ngon, thơm, da giòn, vàng óng hoặc đỏ, ít mỡ. Gà mái tơ có ôm trứng chưa đẻ thịt béo thơm. Phù hợp các món luộc, hấp, lẩu',
    origin: 'Trang trại Gasach, nuôi tự nhiên tại Hà Nội',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp với các món luộc, hấp, lẩu',
  },
  {
    id: '5',
    name: 'Gà ta thả rẫy (Mái)',
    price: 135000,
    weight: '1.5 - 1.8 kg',
    image: gaMaiTa,
    gallery: [gaMaiTa, gaMaiTa2, gaMaiTa3, gaMaiTa4],
    category: 'premium',
    badge: 'SKU Premium',
    description: 'Sản phẩm "gà ta ngon" Đảm bảo được độ dai ngon, thơm, da giòn, vàng óng hoặc đỏ, ít mỡ. Gà mái tơ có ôm trứng chưa đẻ thịt béo thơm. Phù hợp các món luộc, hấp, lẩu',
    origin: 'Trang trại Gasach, nuôi tự nhiên tại Hà Nội',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp với các món luộc, hấp, lẩu',
  },
  {
    id: '6',
    name: 'Combo Hạnh phúc',
    price: 199000,
    weight: 'Trống 2.3kg + Mái 1.6kg',
    image: gaNuaCon,
    gallery: [gaNuaCon, gaNuaCon2, gaNuaCon3, gaNuaCon4],
    category: 'super',
    badge: 'Combo',
    description: 'Combo gà trống và mái, tặng kèm Chanh + Xả + Gừng. Hoàn hảo cho gia đình',
    origin: 'Trang trại Gasach, nuôi tự nhiên tại Hà Nội',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp với các món luộc, hấp, lẩu, nướng',
  },
  {
    id: '7',
    name: 'Combo sum Vầy',
    price: 289000,
    weight: 'Trống 2.3kg + Mái 1.6kg',
    image: comboLong,
    gallery: [comboLong],
    category: 'super',
    badge: 'Combo',
    description: 'Combo gà trống và mái cao cấp, tặng kèm Chanh + Xả + Gừng + 1 hũ muối tiêu. Đầy đủ cho bữa tiệc gia đình',
    origin: 'Trang trại Gasach, nuôi tự nhiên tại Hà Nội',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp với các món luộc, hấp, lẩu, nướng',
  },
  {
    id: '8',
    name: 'Combo cúng rằm',
    price: 209000,
    weight: 'Trống 2.3kg + Mái 1.6kg',
    image: gaNuaCon,
    gallery: [gaNuaCon, gaNuaCon2, gaNuaCon3, gaNuaCon4],
    category: 'super',
    badge: 'Combo',
    description: 'Combo gà trống và mái đặc biệt cho ngày cúng rằm, tặng kèm 1 bộ đồ cúng và chéo cánh (Làm sạch sẽ đầy đủ)',
    origin: 'Trang trại Gasach, nuôi tự nhiên tại Hà Nội',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp với các món luộc, hấp, lẩu, cúng bái',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: 'regular' | 'premium' | 'super'): Product[] => {
  return products.filter(p => p.category === category);
};
