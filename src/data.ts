export interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  price?: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Özel Tasarım Figür",
    category: "Koleksiyon / Oyuncak",
    description: "İstediğiniz karakterin yüksek detaylı reçine (resin) baskısı.",
    price: "₺500'den başlayan fiyatlarla",
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Prototip Parçalar",
    category: "Mühendislik / Yedek Parça",
    description: "Dayanıklı PETG veya ABS filament ile endüstriyel parça üretimi.",
    price: "Boyuta göre fiyatlandırılır",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Dekoratif Objeler",
    category: "Ev Dekorasyonu",
    description: "Modern tasarımlı vazolar, saksılar ve ev aksesuarları.",
    price: "₺300'den başlayan fiyatlarla",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Mimari Maketler",
    category: "Mimari",
    description: "Projeleriniz için hassas ölçekli 3 boyutlu maket basımı.",
    price: "Projeye göre fiyatlandırılır",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop"
  }
];

export const features: string[] = [
  "Yüksek Hassasiyetli Baskı", "Hızlı Teslimat", "Özel Tasarım Desteği", "Farklı Malzeme Seçenekleri", "Seri Üretim İmkanı"
];
