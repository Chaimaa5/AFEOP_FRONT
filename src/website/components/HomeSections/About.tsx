import React from "react";
// import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex items-start">
      {/* Animated Sliding Background Text */}
     

      {/* Content Container */}
      <div className="relative container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Heading Only */}
          <div className="space-y-8 z-10">
            <div className="inline-block">
              <span className="px-6 py-2 border border-white/40 rounded-full text-white text-xs lg:text-sm font-medium tracking-widest uppercase">
                ABOUT THE PROJECT
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              UM6P & MIT
              <br />
              Partnership
              
            </h1>
          </div>

          {/* Right Side - Description and Button */}
          <div className="space-y-8 z-10 lg:pt-16">
            <p className="text-white/90 text-base lg:text-lg leading-relaxed max-w-xl text-justify">
              Mohammed VI Polytechnic University (UM6P) and Massachusetts Institute of Technology (MIT) 
              have enabled this research to help African researchers process large datasets for African applications. 
              The platform develops an African data portal for Earth Observation data, combining spatial information 
              with systems modeling, GIS, and remote sensing. The platform benefits from UM6P's high storage and 
              cloud computing capacities toward developing a huge African Data Center.
            </p>

 <Button variant="primary" size="sm" showDot redirect="/about">
  Learn More
</Button>
            {/* <Button 
              onClick={() => navigate('/about')}
              className="bg-cream text-[#2D2416] hover:bg-cream/90 font-semibold px-8 py-6 rounded-full text-base transition-all hover:scale-105 flex items-center space-x-2"
            >
              <span className="w-2 h-2 bg-[#2D2416] rounded-full"></span>
              <span>Learn More</span>
            </Button> */}
          </div>
        </div>
      </div>
 <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
        <div className="animate-scroll whitespace-nowrap">
          <h2 className="inline-block text-[8rem] lg:text-[12rem] xl:text-[14rem] font-bold text-[#0d1621] select-none leading-none pr-20">
            Earth Observation · Big Data · Cloud Computing · Earth Observation · Big Data · Cloud Computing
          </h2>
        </div>
      </div>
      {/* Circular Images at Bottom - Horizontally Overlapping with Floating Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-96 lg:h-[500px] overflow-hidden">
        <div className="relative container mx-auto h-full">
          {/* Images positioned horizontally at bottom with more spacing and floating animation */}
          
          {/* Circle 1 - Drone aerial photography */}
          <div className="absolute bottom-0 left-[2%] w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl z-10 animate-float-slow">
            <img
              src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Drone aerial view"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Circle 2 - Small satellite imagery */}
          <div className="absolute bottom-[160px] lg:bottom-[200px] left-[10%] w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-2xl z-20 animate-float-medium">
            <img
              src="https://images.unsplash.com/photo-1708257105880-11cd2deba6e8?q=80&w=2311&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Satellite observation"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Circle 3 - Large remote sensing landscape */}
          <div className="absolute bottom-[-30px] left-[20%] w-72 h-72 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden shadow-2xl z-15 animate-float-fast">
            <img
              src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Remote sensing landscape"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Circle 4 - Drone technology */}
          <div className="absolute bottom-[180px] lg:bottom-[220px] left-[38%] w-32 h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-2xl z-25 animate-float-slow-delay">
            <img
              alt="Drone technology"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              src="https://images.unsplash.com/photo-1676944229914-2194fdafd024?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
          </div>

          {/* Circle 5 - Medium GIS mapping */}
          <div className="absolute bottom-[20px] left-[48%] w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl z-20 animate-float-medium-delay">
            <img
              alt="GIS mapping technology"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          src="https://images.unsplash.com/photo-1702499903230-867455db1752?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
          </div>

          {/* Circle 6 - Small aerial drone view */}
          <div className="absolute bottom-[140px] lg:bottom-[180px] left-[65%] w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-2xl z-25 animate-float-fast-delay">
            <img
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Agricultural drone monitoring"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Circle 7 - Large satellite earth observation */}
          <div className="absolute bottom-[-50px] left-[72%] w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl z-10 animate-float-slow">
            <img
              src="https://images.unsplash.com/photo-1712512161895-e6952657d3fd?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Earth observation from space"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Circle 8 - Drone surveying */}
          {/* <div className="absolute bottom-[30px] right-[6%] w-48 h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden shadow-2xl z-20 animate-float-medium">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Drone surveying terrain"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div> */}

          {/* Circle 9 - Small remote sensing sensor */}
          {/* <div className="absolute bottom-[170px] lg:bottom-[210px] right-[12%] w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-2xl z-15 animate-float-fast">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Remote sensing equipment"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div> */}
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

      {/* CSS Animation for scrolling text and floating circles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        
        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-40px);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: inline-block;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-slow-delay {
          animation: float-slow 6s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }
        
        .animate-float-medium-delay {
          animation: float-medium 5s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        .animate-float-fast-delay {
          animation: float-fast 4s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default About;
