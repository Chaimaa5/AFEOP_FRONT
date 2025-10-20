import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

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
    <div className=" bg-white overflow-x-hidden">
      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in-up { 
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-in-left { 
          animation: slideInLeft 1s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-in-right { 
          animation: slideInRight 1s ease-out forwards;
          opacity: 0;
        }
        .animate-scale-in { 
          animation: scaleIn 1s ease-out forwards;
          opacity: 0;
        }
        .animate-stagger-1 { animation-delay: 0.1s; }
        .animate-stagger-2 { animation-delay: 0.2s; }
        .animate-stagger-3 { animation-delay: 0.3s; }
        .animate-stagger-4 { animation-delay: 0.4s; }
        .animate-stagger-5 { animation-delay: 0.5s; }
        .animate-stagger-6 { animation-delay: 0.6s; }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .hero-overlay {
          background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%);
        }
      `}</style>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 z-10">
              {isScrolled ? 
                <img className="h-10 w-auto" src="/logo/green.svg" alt="Logo"/> :
                <img className="h-10 w-auto" src="/logo/white.svg" alt="Logo"/>
              }
            </div>
            
            {/* Centered Navigation */}
            <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
              {[
                { name: 'Home', path: '/home' },
                { name: 'About', path: '/about' },
                { name: 'Applications', path: '/home#services' },
                { name: 'Articles', path: '/articles' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-all duration-300 relative group ${
                    isScrolled ? 'text-green2 hover:text-green2-lighter' : 'text-white hover:text-cream'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-darkgreen' : 'bg-cream'
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* Action Button */}
            <div className="flex items-center space-x-4 z-10">
              <Button 
                as={Link}
                to="/app"
                className={`px-8 py-6 rounded-full font-semibold text-base transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                  isScrolled 
                    ? 'bg-darkgreen text-cream hover:bg-darkgreen-dark' 
                    : 'bg-cream text-green2 hover:bg-cream'
                }`}
              >
                <span>Explore Platform</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              
              {/* Mobile Menu Button */}
              <button className="lg:hidden">
                <svg className={`w-6 h-6 ${isScrolled ? 'text-green2' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
 
     
    </div>
  );
};

export default Header;
