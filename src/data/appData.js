// Navigation data
export const navigationItems = [
  { name: "Home", href: "#home" },
  {
    name: "Products",
    href: "#products",
    dropdown: [
      { name: "Electronics", href: "#electronics", icon: "📱" },
      { name: "Fashion", href: "#fashion", icon: "👗" },
      { name: "Home & Garden", href: "#home", icon: "🏠" },
      { name: "Sports", href: "#sports", icon: "⚽" },
    ],
  },
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

// Hero slides data
export const heroSlides = [
  {
    title: "Discover Amazing Products",
    subtitle: "Shop the latest trends with confidence",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
  },
  {
    title: "Premium Quality Assured",
    subtitle: "Every product meets our high standards",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
  },
  {
    title: "Fast & Secure Delivery",
    subtitle: "Get your orders delivered safely and quickly",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop",
  },
];

// Features data
export const features = [
  {
    icon: "🚀",
    title: "Lightning Fast",
    description:
      "Experience blazing fast performance with our optimized platform.",
  },
  {
    icon: "🔒",
    title: "Secure Shopping",
    description:
      "Your data is protected with enterprise-grade security measures.",
  },
  {
    icon: "📱",
    title: "Mobile First",
    description: "Optimized for all devices with responsive design principles.",
  },
  {
    icon: "💎",
    title: "Premium Quality",
    description:
      "Curated selection of high-quality products from trusted brands.",
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    description: "Get your orders delivered within 24-48 hours nationwide.",
  },
  {
    icon: "🎯",
    title: "Smart Recommendations",
    description:
      "AI-powered suggestions based on your preferences and history.",
  },
];

// Statistics data
export const statistics = [
  { number: "10K+", label: "Happy Customers" },
  { number: "50K+", label: "Products Available" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Customer Support" },
];

// Product categories
export const productCategories = [
  { id: "all", name: "All Products", icon: "🛍️" },
  { id: "electronics", name: "Electronics", icon: "📱" },
  { id: "fashion", name: "Fashion", icon: "👗" },
  { id: "home", name: "Home & Garden", icon: "🏠" },
  { id: "sports", name: "Sports", icon: "⚽" },
];

// Products data
export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    rating: 4.8,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    rating: 4.6,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Designer T-Shirt",
    price: 49.99,
    rating: 4.5,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 129.99,
    rating: 4.7,
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 79.99,
    rating: 4.4,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: 29.99,
    rating: 4.3,
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
  },
];

// Footer links data
export const footerLinks = {
  quickLinks: [
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
  ],
  categories: [
    { name: "Electronics", href: "#electronics" },
    { name: "Fashion", href: "#fashion" },
    { name: "Home & Garden", href: "#home" },
    { name: "Sports", href: "#sports" },
    { name: "Books", href: "#books" },
  ],
  socialLinks: [
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "Instagram", href: "#", icon: "📷" },
    { name: "LinkedIn", href: "#", icon: "💼" },
  ],
};

// App configuration
export const appConfig = {
  name: "ShopHub",
  tagline: "Your Ultimate Shopping Destination",
  contact: {
    email: "hello@shophub.com",
    phone: "+1 (555) 123-4567",
    address: "123 Commerce St, Business City, BC 12345",
  },
};
