import { Code2, Palette, Megaphone, Globe, Shield, Zap } from 'lucide-react';
import type { Service } from '../types/services';

export const services: Service[] = [
  {
    icon: Palette,
    title: 'Strategic Web Design',
    description: "Captivating, user-centric designs that embody your brand's essence and drive meaningful engagement. We craft experiences that resonate with both local and international audiences."
  },
  {
    icon: Code2,
    title: 'Advanced Development',
    description: 'Future-proof web solutions engineered for the African market. We build lightning-fast, scalable platforms that work flawlessly even in challenging connectivity environments.'
  },
  {
    icon: Megaphone,
    title: 'Digital Brand Evolution',
    description: 'Comprehensive digital strategies that elevate your brand above the competition. We help you build a powerful online presence that connects with your target audience and drives growth.'
  },
  {
    icon: Globe,
    title: 'Local Market Integration',
    description: 'Deep understanding of East African business dynamics and consumer behavior. We integrate local payment systems and optimize for regional infrastructure challenges.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Robust security measures and compliance with local regulations. We ensure your digital assets are protected while maintaining trust with your customers.'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed-optimized solutions for the local infrastructure. We implement advanced caching and progressive enhancement techniques for seamless user experiences.'
  }
];