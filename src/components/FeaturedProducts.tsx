
import React from 'react';
import ProductCard, { Product } from './ProductCard';
import { useIsMobile } from '@/hooks/use-mobile';

interface FeaturedProductsProps {
  title: string;
  products: Product[];
  onProductClick: (product: Product) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ title, products, onProductClick }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-playfair font-semibold">{title}</h2>
        <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
          View All
        </button>
      </div>
      
      <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'} gap-4 md:gap-6`}>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            onClick={onProductClick} 
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
