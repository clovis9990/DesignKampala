export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Namukasa",
    role: "CEO, Kampala Fresh Market",
    content: "DesignKampala didn't just build us a website – they created a digital ecosystem that revolutionized how we connect with customers. Their deep understanding of local market dynamics made all the difference.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "David Okello",
    role: "Founder, Safari Tours Uganda",
    content: "Working with DesignKampala transformed our business. They created a platform that not only showcases Uganda's beauty but also streamlines our entire booking process.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  }
];