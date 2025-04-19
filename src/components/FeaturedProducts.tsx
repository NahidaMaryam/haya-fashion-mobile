
import React from 'react';
import ProductCard, { Product } from './ProductCard';

interface FeaturedProductsProps {
  title: string;
  products: Product[];
  onProductClick: (product: Product) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ title, products, onProductClick }) => {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-playfair font-semibold">{title}</h2>
        <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
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
