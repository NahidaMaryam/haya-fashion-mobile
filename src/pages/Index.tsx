
import React, { useState } from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import BannerCarousel from '../components/BannerCarousel';
import FeaturedProducts from '../components/FeaturedProducts';
import BlogPreview from '../components/BlogPreview';
import ProductDetail from '../components/ProductDetail';
import { Product } from '../components/ProductCard';
import { featuredProducts, newArrivals } from '../data/products';

const Index: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };
  
  const handleCloseProductDetail = () => {
    setSelectedProduct(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={handleMenuToggle} />
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <main className="mh-container">
        <BannerCarousel />
        
        <FeaturedProducts 
          title="Featured Products" 
          products={featuredProducts}
          onProductClick={handleProductClick} 
        />
        
        <FeaturedProducts 
          title="New Arrivals" 
          products={newArrivals}
          onProductClick={handleProductClick} 
        />
        
        <BlogPreview />
      </main>
      
      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={handleCloseProductDetail} 
        />
      )}
    </div>
  );
};

export default Index;
