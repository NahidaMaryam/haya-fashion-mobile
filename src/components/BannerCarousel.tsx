
import React, { useState, useEffect } from 'react';

const banners = [
  {
    id: 1,
    title: "Eid Collection",
    description: "Elegant designs for your special occasions",
    color: "bg-mh-lavender",
  },
  {
    id: 2,
    title: "Summer Sale",
    description: "Up to 40% off on selected items",
    color: "bg-mh-peach",
  },
  {
    id: 3,
    title: "New Arrivals",
    description: "Discover our latest modest fashion",
    color: "bg-mh-blue",
  }
];

const BannerCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === banners.length - 1 ? 0 : current + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative h-48 overflow-hidden rounded-lg">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 flex flex-col justify-center px-6 transition-opacity duration-500 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          } ${banner.color}`}
        >
          <h2 className="text-2xl font-playfair font-bold mb-2">{banner.title}</h2>
          <p className="text-gray-700">{banner.description}</p>
        </div>
      ))}
      
      <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white w-4" : "bg-white/50"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
