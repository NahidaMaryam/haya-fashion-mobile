
import React, { useState } from 'react';
import { ArrowLeft, Minus, Plus, Heart, ShoppingCart } from 'lucide-react';
import { Product } from './ProductCard';

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
}

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  
  if (!product) return null;
  
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const addToCart = () => {
    console.log('Added to cart:', { product, size: selectedSize, quantity });
    // Add cart logic here
  };
  
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center justify-between p-4">
          <ArrowLeft className="h-6 w-6 cursor-pointer" onClick={onClose} />
          <h1 className="text-xl font-playfair font-semibold">Product Details</h1>
          <Heart className="h-6 w-6" />
        </div>
      </div>
      
      <div className="mh-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-80 object-cover rounded-lg mb-6"
        />
        
        <div className="mb-6">
          <h2 className="text-2xl font-playfair font-bold mb-1">{product.name}</h2>
          <p className="text-sm text-gray-500 mb-2">by Maryam Haya</p>
          <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Select Size</h3>
          <div className="flex space-x-3">
            {sizes.map(size => (
              <button
                key={size}
                className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                  selectedSize === size 
                    ? 'bg-mh-lavender border-gray-400' 
                    : 'border-gray-300 bg-white'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-2">Quantity</h3>
          <div className="flex items-center border border-gray-300 rounded-md w-32">
            <button 
              className="px-3 py-2" 
              onClick={decreaseQuantity}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="flex-1 text-center">{quantity}</span>
            <button 
              className="px-3 py-2" 
              onClick={increaseQuantity}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <div className="flex space-x-4 mb-8">
          <button 
            className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-md bg-mh-lavender hover:bg-mh-lavender/80 transition-colors"
            onClick={addToCart}
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
          <button className="flex-1 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition-colors">
            Buy It Now
          </button>
        </div>
        
        <div className="border-t pt-6">
          <h3 className="text-lg font-playfair font-semibold mb-2">Description</h3>
          <p className="text-gray-700 mb-6">
            This elegant piece is crafted with premium breathable fabric, perfect for everyday wear. 
            The design combines traditional modesty with contemporary style, making it a versatile 
            addition to your wardrobe.
          </p>
          
          <h3 className="text-lg font-playfair font-semibold mb-2">Features</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Premium quality fabric</li>
            <li>Breathable and comfortable</li>
            <li>Elegant finish</li>
            <li>Easy to style</li>
          </ul>
          
          <h3 className="text-lg font-playfair font-semibold mb-2">Shipping Information</h3>
          <p className="text-gray-700">
            Delivery within 3-5 business days. Free shipping on orders above $100.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
