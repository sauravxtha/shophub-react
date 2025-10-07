// Scroll handler utility
export const createScrollHandler = (callback) => {
  return () => {
    callback(window.scrollY);
  };
};

// Intersection Observer utility
export const createIntersectionObserver = (callback, options = {}) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        callback(true);
      }
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    }
  );
  
  return observer;
};

// Format price utility
export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

// Generate star rating display
export const generateStarRating = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return {
    fullStars,
    hasHalfStar,
    emptyStars
  };
};

// Debounce utility for performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
