import React from "react";
import { Button } from "@nextui-org/react";

const VerdaMission: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#CAD591] overflow-hidden flex items-start">
      {/* Animated Sliding Background Text */}
     

      {/* Content Container */}
      <div className="relative container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Heading Only */}
          <div className="space-y-8 z-10">
            <div className="inline-block">
              <span className="px-6 py-2 border border-white/40 rounded-full text-white text-xs lg:text-sm font-medium tracking-widest uppercase">
                ABOUT COMPANY
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Our Mission:
              <br />
              Better Farming for
              <br />
              a Better Future
            </h1>
          </div>

          {/* Right Side - Description and Button */}
          <div className="space-y-8 z-10 lg:pt-16">
            <p className="text-white/90 text-base lg:text-lg leading-relaxed max-w-xl text-justify">
              With deep roots in tradition and a focus on innovation, our
              company provides high-quality agricultural products and solutions
              that support farmers, enhance food security, and promote
              sustainable practices. From soil to harvest, we offer expertise in
              crop production, agri-technology, supply chain logistics, and
              eco-conscious farming.
            </p>

            <Button className="bg-cream text-[#2D2416] hover:bg-cream/90 font-semibold px-8 py-6 rounded-full text-base transition-all hover:scale-105 flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#2D2416] rounded-full"></span>
              <span>Get in Touch</span>
            </Button>
          </div>
        </div>
      </div>
 <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
        <div className="animate-scroll whitespace-nowrap">
          <h2 className="inline-block text-[8rem] lg:text-[12rem] xl:text-[14rem] font-bold text-green2/50 select-none leading-none pr-20">
            Harvest. We Grow with Purpose Harvest. We Grow with Purpose
          </h2>
        </div>
      </div>
      {/* Circular Images at Bottom - Horizontally Overlapping */}
      <div className="absolute bottom-0 left-0 right-0 h-64 lg:h-80 overflow-hidden">
        <div className="relative container mx-auto h-full">
          {/* Images positioned horizontally at bottom, overlapping */}
          
          {/* Circle 1 - Farm (leftmost) */}
          <div className="absolute bottom-0 left-[5%] w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 z-10">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Farm"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circle 2 - Small egg/vegetable */}
          <div className="absolute bottom-[120px] lg:bottom-[140px] left-[12%] w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 z-20">
            <img
              src="https://images.unsplash.com/photo-1587735243615-c03f25aaff15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Vegetable"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circle 3 - Large corn (center-left) */}
          <div className="absolute bottom-[-20px] left-[18%] w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 z-15">
            <img
              src="https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Corn"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circle 4 - Small sprouts */}
          <div className="absolute bottom-[150px] lg:bottom-[180px] left-[35%] w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 z-25">
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Sprouts"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circle 5 - Medium wheat/grains */}
          <div className="absolute bottom-[10px] left-[40%] w-52 h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 z-20">
            <img
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Wheat grains"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circle 6 - Small dark sprouts */}
          <div className="absolute bottom-[100px] lg:bottom-[120px] left-[55%] w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 z-25">
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Dark sprouts"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circle 7 - Large grass field */}
          <div className="absolute bottom-[-40px] left-[60%] w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 z-10">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Grass field"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circle 8 - Harvester */}
          <div className="absolute bottom-[20px] right-[8%] w-44 h-44 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 z-20">
            <img
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Harvester"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circle 9 - Small seeds */}
          <div className="absolute bottom-[130px] lg:bottom-[150px] right-[15%] w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 z-15">
            <img
              src="https://images.unsplash.com/photo-1595855759920-86c7d651f371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Seeds"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll to top button - Bottom Right */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-cream rounded-full flex items-center justify-center shadow-lg hover:bg-cream/90 transition-all hover:scale-110 z-50"
      >
        <svg
          className="w-6 h-6 text-[#2D2416]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      {/* CSS Animation for scrolling text */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: inline-block;
        }
      `}</style>
    </section>
  );
};

export default VerdaMission;
