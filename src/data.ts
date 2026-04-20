export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Siber Şövalye",
    category: "Karakter Modelleme",
    description: "ZBrush ve Maya kullanılarak tasarlanmış yüksek detaylı oyun karakteri.",
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Neo-Tokyo Sokakları",
    category: "Çevre Tasarımı (Environment)",
    description: "Unreal Engine 5 ile oluşturulmuş gerçek zamanlı siberpunk çevre render'ı.",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Modern Villa",
    category: "Mimari Render",
    description: "Blender ve Cycles motoru ile hazırlanmış fotogerçekçi dış mekan görselleştirmesi.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Uzay Aracı Konsepti",
    category: "Hard Surface Modelleme",
    description: "Orijinal bir uzay aracı konseptinin baştan sona modellenmesi ve kaplanması.",
    image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=600&auto=format&fit=crop"
  }
];

export const skills: string[] = [
  "Blender", "ZBrush", "Maya", "Substance Painter", "Unreal Engine 5", "Three.js", "WebGL"
];
