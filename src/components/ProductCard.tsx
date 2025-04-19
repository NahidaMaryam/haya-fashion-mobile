import React from 'react';
import { Heart } from 'lucide-react';
import { convertUSDtoINR, formatINR } from '@/utils/currency';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const priceInINR = convertUSDtoINR(product.price);
  
  return (
    <div 
      className="product-card bg-white animate-fade-in"
      onClick={() => onClick(product)}
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white/70 hover:bg-white transition-colors">
          <Heart className="w-5 h-5 text-gray-700" />
        </button>
      </div>
      
      <div className="p-3">
        <h3 className="font-medium text-gray-800 truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <p className="font-semibold">{formatINR(priceInINR)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
