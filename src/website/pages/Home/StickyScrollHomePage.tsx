import React, { useState, useEffect, useRef } from "react";
import { Button } from "@nextui-org/react";

const StickyScrollHomePage: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const stickyRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Soil Health & Management",
      description: "Advanced soil analysis and nutrient management systems that optimize crop growth while maintaining long-term soil sustainability.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🌱",
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Advanced Irrigation Systems",
      description: "Smart irrigation technology with IoT sensors and automated controls that conserve water while ensuring optimal plant hydration.",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "💧",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Precision Agriculture",
      description: "GPS-guided farming equipment and variable rate application technology that maximizes efficiency while minimizing resource waste.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🎯",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Crop Monitoring & Analytics",
      description: "Real-time crop monitoring using drones and satellite imagery combined with AI-powered analytics for predictive farming insights.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "📊",
      color: "from-orange-600 to-red-600"
    }
  ];

  // Handle scroll for sticky section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = rect.height;
        const scrollPosition = window.scrollY - sectionTop;
        
        // Calculate which card should be active
        if (scrollPosition > 0 && scrollPosition < sectionHeight) {
          const progress = scrollPosition / sectionHeight;
          const cardIndex = Math.floor(progress * services.length);
          setActiveCardIndex(Math.min(cardIndex, services.length - 1));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [services.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                AgroTech
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className={`font-medium hover:text-green-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>Home</a>
              <a href="#services" className={`font-medium hover:text-green-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>Services</a>
              <a href="#about" className={`font-medium hover:text-green-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>About</a>
              <a href="#contact" className={`font-medium hover:text-green-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>Contact</a>
            </nav>
            <Button className="bg-green-600 text-white hover:bg-green-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Agriculture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              Smart Farming for a
              <br />
              <span className="text-green-400">Sustainable Future</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 animate-fade-in-up">
              Revolutionizing agriculture with cutting-edge technology and data-driven solutions
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up-delay">
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 px-8 py-6 text-lg">
                Explore Solutions
              </Button>
              <Button size="lg" variant="bordered" className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-6 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Sticky Scroll Section */}
      <section 
        ref={stickyRef}
        className="relative bg-gradient-to-b from-gray-50 to-white"
        style={{ minHeight: `${services.length * 100}vh` }}
      >
        {/* Section Header */}
        <div className="container mx-auto px-4 py-20 text-center">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
            INNOVATIVE SOLUTIONS
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-green-600">Agriculture</span> Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of agriculture solutions designed for performance, sustainability, and scale.
          </p>
        </div>

        {/* Sticky Container */}
        <div className="sticky top-0 h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Sticky Text */}
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 text-4xl shadow-lg">
                      {services[activeCardIndex].icon}
                    </div>
                    <h3 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
                      Smart Farming<br />
                      <span className="text-green-600">Starts Here</span>
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Transform your agricultural operations with our cutting-edge technology solutions. 
                      From soil analysis to crop monitoring, we provide the tools you need to succeed.
                    </p>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-4 mb-8">
                    {services.map((service, index) => (
                      <div 
                        key={index}
                        className={`flex items-center space-x-3 transition-all duration-300 ${
                          activeCardIndex === index ? 'opacity-100' : 'opacity-50'
                        }`}
                      >
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeCardIndex === index ? 'bg-green-600 scale-125' : 'bg-gray-400'
                        }`}></div>
                        <span className={`font-medium transition-all duration-300 ${
                          activeCardIndex === index ? 'text-gray-900 text-lg' : 'text-gray-600'
                        }`}>
                          {service.title}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-green-600 text-white hover:bg-green-700 px-8 py-6 text-lg w-full lg:w-auto shadow-lg">
                    VIEW ALL SERVICES
                  </Button>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center space-x-2">
                  {services.map((_, index) => (
                    <div 
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        activeCardIndex === index ? 'bg-green-600 w-12' : 'bg-gray-300 w-8'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Right Side - Cards */}
              <div className="relative h-[600px] hidden lg:block">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      activeCardIndex === index
                        ? 'opacity-100 scale-100 translate-y-0 z-10'
                        : activeCardIndex > index
                        ? 'opacity-0 scale-95 -translate-y-10 z-0'
                        : 'opacity-0 scale-95 translate-y-10 z-0'
                    }`}
                  >
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full group cursor-pointer transform hover:scale-105 transition-transform duration-300">
                      <div className="relative h-full">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                        
                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">
                          <div className="mb-6">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-xl">
                              {service.icon}
                            </div>
                            <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                            <p className="text-white/90 text-lg leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-white font-semibold group-hover:translate-x-2 transition-transform">
                            <span>LEARN MORE</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Cards - Stacked */}
              <div className="lg:hidden space-y-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden"
                  >
                    <div className="relative h-64">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-2xl">
                            {service.icon}
                          </div>
                          <h3 className="text-xl font-bold">{service.title}</h3>
                        </div>
                        <p className="text-white/90 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-green-700 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Farms Transformed", icon: "🌾" },
              { number: "95%", label: "Client Satisfaction", icon: "⭐" },
              { number: "30%", label: "Avg. Yield Increase", icon: "📈" },
              { number: "50+", label: "Countries Served", icon: "🌍" }
            ].map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Join thousands of farmers who have revolutionized their operations with our technology
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                Start Free Trial
              </Button>
              <Button size="lg" variant="bordered" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-6 text-lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-xl font-bold">AgroTech</span>
              </div>
              <p className="text-gray-400">
                Leading the agricultural revolution with innovative technology solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400">Soil Management</a></li>
                <li><a href="#" className="hover:text-green-400">Irrigation</a></li>
                <li><a href="#" className="hover:text-green-400">Precision Agriculture</a></li>
                <li><a href="#" className="hover:text-green-400">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400">About Us</a></li>
                <li><a href="#" className="hover:text-green-400">Careers</a></li>
                <li><a href="#" className="hover:text-green-400">Blog</a></li>
                <li><a href="#" className="hover:text-green-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-gray-400"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AgroTech. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s both;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 1s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
};

export default StickyScrollHomePage;
