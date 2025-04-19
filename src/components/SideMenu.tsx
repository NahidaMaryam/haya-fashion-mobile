
import React from 'react';
import { X } from 'lucide-react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  'Hijabs',
  'Abayas',
  'Jilbabs & Khimars',
  'Bukini Wear',
  'Activewear',
  'Clearance Sale',
];

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div 
        className={`slide-menu ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-playfair font-semibold">Categories</h2>
          <X className="h-6 w-6 cursor-pointer" onClick={onClose} />
        </div>
        
        <ul className="py-4">
          {categories.map((category, index) => (
            <li key={index} className="px-6 py-3 hover:bg-mh-lavender/20 transition-colors cursor-pointer">
              {category}
            </li>
          ))}
        </ul>
        
        <div className="mt-8 px-6">
          <h3 className="text-lg font-playfair mb-3">Account</h3>
          <ul className="space-y-2">
            <li className="py-2 cursor-pointer hover:text-gray-700">My Profile</li>
            <li className="py-2 cursor-pointer hover:text-gray-700">My Orders</li>
            <li className="py-2 cursor-pointer hover:text-gray-700">Wishlist</li>
            <li className="py-2 cursor-pointer hover:text-gray-700">Notifications</li>
            <li className="py-2 cursor-pointer hover:text-gray-700">Settings</li>
          </ul>
        </div>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default SideMenu;
