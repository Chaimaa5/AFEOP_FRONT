import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ShoppingCart, Search } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between px-4 sm:px-8 py-4 rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-white/95 backdrop-blur-md'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img className="h-8 w-auto" src="/logo/green.svg" alt="AFEOP Logo"/>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/" 
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
              to="/team" 
              className="text-green2 hover:text-green2/70 transition-colors duration-200 font-medium"
            >
              Team
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

          {/* Mobile Burger Icon */}
          <button
            className="lg:hidden text-green2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>

          {/* Right Side Actions (desktop only) */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/app"
              className="px-6 py-3 bg-cream text-green2 rounded-full font-semibold hover:bg-darkgreen hover:text-greenlight transition-all duration-300 hover:scale-105"
            >
              Explore
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center space-y-8">
            <button
              className="absolute top-6 right-6 text-green2 text-3xl focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <Link to="/home" className="text-green2 text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-green2 text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/team" className="text-green2 text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>Team</Link>
            <Link to="/applications" className="text-green2 text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>Applications</Link>
            <Link to="/articles" className="text-green2 text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>Articles</Link>
            <Link to="/faqs" className="text-green2 text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
            <Link to="/contact" className="text-green2 text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/app" className="px-6 py-3 bg-cream text-green2 rounded-full font-semibold hover:bg-darkgreen hover:text-greenlight transition-all duration-300 hover:scale-105" onClick={() => setMobileMenuOpen(false)}>Explore</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
