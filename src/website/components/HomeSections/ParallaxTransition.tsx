import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "../Button";
import { Badge } from "../Badge";

const ParallaxTransition: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Complex parallax effects
  const y1 = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const y2 = useTransform(smoothProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.4, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.2]);

  return (
    <>
      {/* Animated CSS Styles */}
      <style>{`
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
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in-up { 
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        .animate-scale-in { 
          animation: scaleIn 1s ease-out forwards;
          opacity: 0;
        }
        .animate-delay-100 { animation-delay: 0.1s; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; }
        .animate-delay-400 { animation-delay: 0.4s; }
        .animate-delay-500 { animation-delay: 0.5s; }
        .animate-delay-600 { animation-delay: 0.6s; }
        
        .shimmer-text {
          background: linear-gradient(
            90deg,
            #f4fee6 0%,
            #FFFFFF 50%,
            #f4fee6 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
      
      <div ref={ref} className="relative min-h-screen h-auto w-full overflow-hidden bg-[#0D1621] flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24">

      {/* Background gradient - clean dark blue */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-satellite-navy via-deep-earth to-deep-ocean z-0"></div> */}
      {/* Subtle animated gradient orbs - minimal and elegant */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-greenlight/40 via-greenlight/25 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/4 -right-40 w-[700px] h-[700px] bg-gradient-to-br from-darkgreen to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-1/2 left-1/4 w-[650px] h-[650px] bg-gradient-to-br from-satellite-navy/60 via-satellite-navy/40 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.55, 0.8, 0.55],
            x: [-15, 15, -15],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-3/4 right-1/4 w-[750px] h-[750px] bg-gradient-to-br from-greenlight/30 via-darkgreen/20 to-transparent rounded-full blur-3xl"
        />
      </div> */}

      {/* Subtle grid pattern */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(244, 254, 230, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(244, 254, 230, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div> */}

      {/* Background satellite image layer with parallax */}
      <motion.div
        style={{ 
          y: y1, 
          scale,
        }}
        className="flex justify-center items-center inset-0 z-5 w-full"
      >
        {/* <div className="absolute inset-0 bg-gradient-to-b from-satellite-navy/90 via-deep-ocean/85 to-deep-earth/90"></div> */}
        <img
          src="/images/loop.gif"
          alt="Satellite view of Earth"
          className="w-full max-w-[600px] h-auto object-cover"
          style={{
            clipPath: 'circle(34% at center)',
            borderRadius: '100%'
          }}
        />
      </motion.div>

      {/* Main content layer - VerdaAgro style */}
      <motion.div
        style={{ 
          y: y2,
          opacity,
        }}
        className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-8 md:px-16"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            
           
                            <Badge variant="dark">Earth Observation Platform</Badge>


            {/* Main Title - Clean and Professional */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-[600px] leading-tight animate-fade-in-up animate-delay-200">
              <span className="shimmer-text">
                AFEOP
              </span>
          
              
            </h1>

            {/* Subtitle - Clean Typography */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
              African Geospatial Data Portal Frameworks For Science,
              <br className="hidden md:block" />
              <span className="text-greenlight font-medium">  Capacity Building And Decision Making Porpuse</span>
            </p>

         

            {/* Scroll Indicator - Elegant and Simple */}
            <div className="pt-12 animate-fade-in-up animate-delay-500">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center gap-3"
              >
                <span className="text-white/60 text-xs sm:text-sm lg:text-base uppercase tracking-wider font-medium">Scroll to Explore</span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
                  <motion.div
                    animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-1.5 h-1.5 bg-greenlight rounded-full"
                  />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade - clean transition to next section */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-satellite-navy via-satellite-navy/95 to-transparent z-40 pointer-events-none"></div> */}
      </div>
    </>
  );
};

export default ParallaxTransition;
