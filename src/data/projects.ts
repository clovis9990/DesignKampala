export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Kampala Fresh Market",
    category: "E-commerce Revolution",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    description: "Transforming local commerce with a seamless digital marketplace that connects farmers directly with urban consumers."
  },
  {
    title: "Safari Tours Uganda",
    category: "Tourism Innovation",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    description: "Showcasing Uganda's natural beauty through an immersive booking platform that attracts global adventurers."
  },
  {
    title: "Pearl Banking",
    category: "FinTech Excellence",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f",
    description: "Revolutionizing mobile banking in East Africa with intuitive, secure financial solutions."
  }
];