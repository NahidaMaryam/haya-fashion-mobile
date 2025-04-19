
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Heart, ShoppingCart, User, Laptop, LayoutDashboard } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const isMobile = useIsMobile();
  const [searchOpen, setSearchOpen] = useState(false);

  const categories = [
    { name: 'Hijabs', path: '/category/hijabs' },
    { name: 'Abayas', path: '/category/abayas' },
    { name: 'Jilbabs & Khimars', path: '/category/jilbabs-khimars' },
    { name: 'Bukini Wear', path: '/category/bukini-wear' },
    { name: 'Activewear', path: '/category/activewear' },
    { name: 'Sale', path: '/category/sale' },
  ];

  const collections = [
    { name: 'New Arrivals', path: '/collection/new-arrivals' },
    { name: 'Best Sellers', path: '/collection/best-sellers' },
    { name: 'Trending Now', path: '/collection/trending' },
    { name: 'Seasonal Essentials', path: '/collection/seasonal' },
  ];

  return (
    <header className="sticky top-0 bg-white z-40 shadow-sm">
      <div className="container mx-auto">
        {/* Mobile Header */}
        {isMobile ? (
          <div className="flex items-center justify-between py-4 px-4">
            <Menu className="header-icon" onClick={onMenuClick} />
            
            <div className="flex items-center">
              <Link to="/">
                <h1 className="text-2xl font-playfair font-bold">Maryam Haya</h1>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Search className="header-icon" onClick={() => setSearchOpen(!searchOpen)} />
              <Link to="/wishlist">
                <Heart className="header-icon" />
              </Link>
              <Link to="/cart">
                <ShoppingCart className="header-icon" />
              </Link>
              <Link to="/profile">
                <User className="header-icon" />
              </Link>
            </div>
          </div>
        ) : (
          /* Desktop Header */
          <div className="py-4 px-6">
            {/* Top Row */}
            <div className="flex items-center justify-between mb-4">
              <Link to="/" className="flex items-center">
                <h1 className="text-3xl font-playfair font-bold">Maryam Haya</h1>
              </Link>
              
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className={`border rounded-full px-4 py-1.5 pr-8 transition-all w-56 focus:w-64 focus:outline-none focus:ring-2 focus:ring-mh-lavender`}
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
                
                <Link to="/wishlist" className="flex items-center hover:text-gray-900">
                  <Heart className="header-icon mr-1.5" />
                  <span className="hidden lg:inline">Wishlist</span>
                </Link>
                
                <Link to="/cart" className="flex items-center hover:text-gray-900">
                  <ShoppingCart className="header-icon mr-1.5" />
                  <span className="hidden lg:inline">Cart</span>
                </Link>
                
                <Link to="/profile" className="flex items-center hover:text-gray-900">
                  <User className="header-icon mr-1.5" />
                  <span className="hidden lg:inline">Account</span>
                </Link>
                
                <Link to="/admin" className="flex items-center hover:text-gray-900">
                  <LayoutDashboard className="header-icon mr-1.5" />
                  <span className="hidden lg:inline">Admin</span>
                </Link>
              </div>
            </div>
            
            {/* Navigation Menu */}
            <NavigationMenu className="flex justify-center border-t border-b py-2">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent h-8 px-3">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white p-4 rounded-md shadow-md grid grid-cols-2 gap-3 w-[400px]">
                    {categories.map((category) => (
                      <NavigationMenuLink 
                        key={category.path}
                        asChild
                        className="block px-3 py-2 hover:bg-mh-lavender/20 rounded-md transition-colors"
                      >
                        <Link to={category.path}>{category.name}</Link>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent h-8 px-3">
                    Collections
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white p-4 rounded-md shadow-md w-[250px]">
                    {collections.map((collection) => (
                      <NavigationMenuLink 
                        key={collection.path}
                        asChild
                        className="block px-3 py-2 hover:bg-mh-lavender/20 rounded-md transition-colors"
                      >
                        <Link to={collection.path}>{collection.name}</Link>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    asChild
                    className="block px-3 py-2 hover:text-gray-900 transition-colors"
                  >
                    <Link to="/about">About Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    asChild
                    className="block px-3 py-2 hover:text-gray-900 transition-colors"
                  >
                    <Link to="/blog">Blog</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    asChild
                    className="block px-3 py-2 hover:text-gray-900 transition-colors"
                  >
                    <Link to="/contact">Contact</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
        
        {/* Search input for mobile (conditionally rendered) */}
        {isMobile && searchOpen && (
          <div className="px-4 py-3 border-t border-gray-100 bg-white">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full border rounded-full px-4 py-1.5 pr-8 focus:outline-none"
                autoFocus
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
