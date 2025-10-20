import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ShoppingCart, Search } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold
      setIsScrolled(currentScrollY > 50);
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-2' : 'py-4'
    } ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between px-8 py-4 rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-white/95 backdrop-blur-md'
        }`}>
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2">
            <img className="h-8 w-auto" src="/logo/green.svg" alt="AFEOP Logo"/>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/home" 
              className="text-green2 hover:text-green2/70 transition-colors duration-200 font-medium"
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className="text-green2 hover:text-green2/70 transition-colors duration-200 font-medium"
            >
              About
            </Link>

            <Link 
              to="/applications" 
              className="text-green2 hover:text-green2/70 transition-colors duration-200 font-medium"
            >
              Applications
            </Link>

            <Link 
              to="/articles" 
              className="text-green2 hover:text-green2/70 transition-colors duration-200 font-medium"
            >
              Articles
            </Link>

            <Link 
              to="/faqs" 
              className="text-green2 hover:text-green2/70 transition-colors duration-200 font-medium"
            >
              FAQ
            </Link>

            <Link 
              to="/contact" 
              className="text-green2 hover:text-green2/70 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            {/* <button className="text-green2 hover:text-green2/70 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button> */}

            {/* Get in Touch Button */}

            <Link
              to="/app"
              className="px-6 py-3 bg-cream text-green2 rounded-full font-semibold hover:bg-darkgreen hover:text-greenlight transition-all duration-300 hover:scale-105"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
