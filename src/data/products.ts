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
  // SKU Basic - Gà ta thường
  {
    id: '1',
    name: 'SKU Basic - Gà Ta Thường',
    price: 80000,
    weight: '1.6 - 1.9 kg',
    image: chickenRegular,
    category: 'regular',
    badge: 'Bán chạy',
    description: 'Gà thịt độ dài thấp, thịt vẫn thơm nhe, vàng nhe phù hợp với món nướng, chiên, kho và khách hàng chỉ thích ăn dai ít',
    origin: 'Trang trại Gasach, nuôi tự nhiên tại Hà Nội',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp để nướng, chiên, kho và khách hàng chỉ thích ăn dai ít',
  },
  
  // SKU Standard - Gà chuẩn ta
  {
    id: '2',
    name: 'SKU Standard - Gà Chuẩn Ta (Trống)',
    price: 95000,
    weight: '2.0 - 2.2 kg',
    image: chickenPremium,
    category: 'premium',
    badge: 'Tươi ngon',
    description: 'Gà thịt có độ dai vừa tới, thịt thơm, ít mỡ, vàng óng tự nhiên, với gà mái có độ béo nhe, trong thỏ thịt. Phù hợp với các món lẩu, kho, luộc,...',
    origin: 'Trang trại Gasach, chăn thả tự nhiên tại vùng ngoại thành',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp với các món lẩu, kho, luộc',
  },
  {
    id: '3',
    name: 'SKU Standard - Gà Chuẩn Ta (Mái)',
    price: 110000,
    weight: '1.5 kg',
    image: chickenPremium,
    category: 'premium',
    badge: 'Tươi ngon',
    description: 'Gà thịt có độ dai vừa tới, thịt thơm, ít mỡ, vàng óng tự nhiên, với gà mái có độ béo nhe, trong thỏ thịt. Phù hợp với các món lẩu, kho, luộc,...',
    origin: 'Trang trại Gasach, chăn thả tự nhiên tại vùng ngoại thành',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp với các món lẩu, kho, luộc',
  },
  
  // SKU Premium - Gà ta già ngon
  {
    id: '4',
    name: 'SKU Premium - Gà Ta Già Ngon (Trống)',
    price: 125000,
    weight: '1.8 - 2.0 kg',
    image: chickenSuper,
    category: 'super',
    badge: 'Cao cấp',
    description: 'Sản phẩm "gà ta ngon" Đảm bảo được độ dai ngon, thơm, da giòn, vàng óng hoặc đỏ, ít mỡ. Gà mái tỏ có ớm trứng chưa để thịt béo thơm. Phù hợp các món luộc, hấp, lẩu,...',
    origin: 'Trang trại hữu cơ Gasach, nuôi tự nhiên với chế độ dinh dưỡng đặc biệt',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp các món luộc, hấp, lẩu',
  },
  {
    id: '5',
    name: 'SKU Premium - Gà Ta Già Ngon (Mái)',
    price: 135000,
    weight: '1.5 - 1.8 kg',
    image: chickenSuper,
    category: 'super',
    badge: 'Cao cấp',
    description: 'Sản phẩm "gà ta ngon" Đảm bảo được độ dai ngon, thơm, da giòn, vàng óng hoặc đỏ, ít mỡ. Gà mái tỏ có ớm trứng chưa để thịt béo thơm. Phù hợp các món luộc, hấp, lẩu,...',
    origin: 'Trang trại hữu cơ Gasach, nuôi tự nhiên với chế độ dinh dưỡng đặc biệt',
    storage: 'Bảo quản trong ngăn mát tủ lạnh (0-4°C) trong 2-3 ngày. Có thể đông lạnh (-18°C) để bảo quản lâu hơn.',
    cooking: 'Phù hợp các món luộc, hấp, lẩu',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: 'regular' | 'premium' | 'super'): Product[] => {
  return products.filter(p => p.category === category);
};
