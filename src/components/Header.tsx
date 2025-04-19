
import React from 'react';
import { Menu, Search, Heart, ShoppingCart, User } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 bg-white z-40 shadow-sm">
      <div className="flex items-center justify-between py-4 px-4">
        <Menu className="header-icon" onClick={onMenuClick} />
        
        <div className="flex items-center">
          <h1 className="text-2xl font-playfair font-bold">Maryam Haya</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <Search className="header-icon" />
          <Heart className="header-icon" />
          <ShoppingCart className="header-icon" />
          <User className="header-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
