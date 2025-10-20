// ALTERNATIVE 2: Horizontal Scrolling Timeline with Large Images
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "../Badge";
import { Button } from "../Button";

const HydrologySectionAlt2: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      id: 1,
      number: "01",
      title: "SM Threshold Mapping",
      subtitle: "Stage Separation Analysis",
      image: "/images/SM.jpg",
      description: "High-resolution mapping of soil moisture thresholds that separate Stage I and Stage II evaporation regimes across diverse landscapes.",
      details: [
        "Pixel-level threshold detection",
        "Multi-temporal analysis",
        "Regional pattern identification",
      ],
      color: "from-darkgreen to-darkgreen/80",
      badge: "THRESHOLD",
    },
    {
      id: 2,
      number: "02",
      title: "dT Analysis",
      subtitle: "Temperature Differential",
      image: "https://images.unsplash.com/photo-1685660478008-69441afef904?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2256",
      description: "Comprehensive dT (temperature difference) analysis at pixel scale spanning long-term observation periods for hydrological regime characterization.",
      details: [
        "Long-term time series",
        "Pixel-scale precision",
        "Climate trend detection",
      ],
      color: "from-cream to-cream/70",
      badge: "TEMPORAL",
    },
    {
      id: 3,
      number: "03",
      title: "Water-Limited Regime",
      subtitle: "Temporal Fraction Analysis",
      image: "https://images.unsplash.com/photo-1555412654-72a95a495858?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
      description: "Quantitative assessment of the temporal fraction that ecosystems spend in water-limited conditions, crucial for drought resilience planning.",
      details: [
        "Temporal dynamics tracking",
        "Water stress indicators",
        "Ecosystem vulnerability",
      ],
      color: "from-darkgreen to-darkgreen/80",
      badge: "DYNAMICS",
    },
    {
      id: 4,
      number: "04",
      title: "Regime Classification",
      subtitle: "Hydrological Zoning",
      image: "https://images.unsplash.com/photo-1691064404410-4ffa8cdf0e30?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3432",
      description: "Advanced classification system for hydrologic regimes based on soil moisture dynamics, evaporation patterns, and water availability.",
      details: [
        "Four regime categories",
        "Machine learning based",
        "Continental coverage",
      ],
      color: "from-cream to-cream/70",
      badge: "CLASSIFICATION",
    },
    {
      id: 5,
      number: "05",
      title: "NDVI Contribution",
      subtitle: "Vegetation Impact",
      image: "https://images.unsplash.com/photo-1555248600-0ebbee897949?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2676",
      description: "Analysis of vegetation index contribution to soil moisture threshold variability, revealing plant-water interactions at landscape scale.",
      details: [
        "Vegetation-moisture coupling",
        "NDVI-SM correlation",
        "Biophysical modeling",
      ],
      color: "from-darkgreen to-darkgreen/80",
      badge: "VEGETATION",
    },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
  

   <motion.div 
        className="relative container mx-auto px-6 lg:px-8"
        style={{ y, opacity }}
      >
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-16 lg:mb-24">
        
           
 <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
          <Badge> HYDROLOGICAL CLASSIFICATION </Badge>


            {/* Main Title with Background Clipped to Text */}
            <motion.h2            

              className="text-4xl md:text-5xl  lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1644419932195-66e1fab6c068?q=80&w=2618&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              Hydrological Classification
            </motion.h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto" >
              Comprehensive suite of advanced hydrological analysis tools powered by satellite remote sensing and machine learning
            </p>

            {/* Progress Indicator */}
            {/* <div className="flex items-center justify-center gap-3">
              {features.map((_, index) => (
                <motion.button
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeIndex === index 
                      ? 'w-12 bg-darkgreen' 
                      : 'w-8 bg-darkgreen/20 hover:bg-darkgreen/40'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div> */}
          </motion.div>
        </div>

        {/* Main Content - Horizontal Scroll View */}
        <div className="relative w-full flex items-center justify-center ">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid lg:grid-cols-2 gap-12    lg:gap-16  align-content-center  "
            >
              {/* Left: Image */}
              <motion.div
                className="relative order-2 lg:order-1  "
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  {/* Main Image */}
                  <motion.img
                    src={features[activeIndex].image}
                    alt={features[activeIndex].title}
                    className="w-[500px] h-[400px] lg:h-[500px]  object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${features[activeIndex].color} opacity-20 mix-blend-multiply`} />
                  
                  {/* Number Badge */}
                  <motion.div
                    className="absolute top-8 left-8"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="w-20 h-20 border border-white/50   bg-white/20 transition-all duration-300 group-hover:bg-white/30 group-hover:border-white backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-3xl font-bold text-darkgreen">
                        {features[activeIndex].number}
                      </span>
                    </div>
                  </motion.div>

                  {/* Badge */}
                  <motion.div
                    className="absolute top-8 right-8"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="px-5 py-2.5 border border-white/50  bg-white/20 transition-all duration-300 group-hover:bg-white/30 group-hover:border-white backdrop-blur-md rounded-full shadow-xl">
                      <span className="text-xs font-bold text-darkgreen tracking-wider">
                        {features[activeIndex].badge}
                      </span>
                    </div>
                  </motion.div>
   
                  {/* Bottom Info Bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <div className="text-sm font-semibold mb-1 opacity-80">
                          {activeIndex + 1} of {features.length}
                        </div>
                        <div className="text-xs opacity-60">
                          Hydrological Analysis
                        </div>
                      </div>
                    
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className={`absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br ${features[activeIndex].color} opacity-20 rounded-full blur-3xl -z-10`}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>

              {/* Right: Content */}
              <motion.div
                className="flex    flex-col items-start justify-between order-1 lg:order-2 space-y-4 h-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex flex-col space-y-6 ">
 {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="text-sm font-light text-green2 uppercase tracking-widest border-b-2">
                    {features[activeIndex].subtitle}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-2xl lg:text-2xl xl:text-2xl font-bold text-darkgreen leading-tight  "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {features[activeIndex].title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-lg text-gray-600 max-w-[500px] text-justify leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {features[activeIndex].description}
                </motion.p>

                {/* Details List */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {features[activeIndex].details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${features[activeIndex].color}`} />
                      <span className="text-base text-gray-600 font-normal">
                        {detail}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                </div>
               
                {/* Action Buttons */}
                <motion.div
                  className="flex flex-wrap gap-4 pt-4 "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <Link to="/soilmoisture">
                    <Button variant="primary" showDot size="md" redirect="/dashboard">
                      Explore Data
                    </Button>
                  </Link>

                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4 lg:-mx-20">
            <motion.button
              className="w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-darkgreen pointer-events-auto hover:bg-darkgreen hover:text-white transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              className="w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-darkgreen pointer-events-auto hover:bg-darkgreen hover:text-white transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              onClick={() => setActiveIndex(Math.min(features.length - 1, activeIndex + 1))}
              disabled={activeIndex === features.length - 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Bottom Quick Links */}
        <motion.div
          className="mt-20 lg:mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-darkgreen text-white shadow-lg'
                    : 'bg-white text-darkgreen border-2 border-darkgreen/20 hover:border-darkgreen/50'
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {feature.title}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HydrologySectionAlt2;
