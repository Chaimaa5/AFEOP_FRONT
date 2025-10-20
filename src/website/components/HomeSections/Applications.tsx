import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ApplicationsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const cards = [
    {
      image: "/images/SM.jpg",
      tags: ["HYDROLOGY", "WATER RESOURCES"],
      title: "Hydrological Classification",
      description: "Advanced soil moisture regime analysis across African regions",
      stats: { value: "1km", label: "Resolution" },
      color: "from-blue-500/20 to-cyan-500/20",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      alt: "Hydrological classification and water management",
    },
    {
      image: "/images/YieldBg.png",
      tags: ["AGRICULTURE", "FORECASTING"],
      title: "Crop Yield Forecasting",
      description: "AI-powered predictions with 90%+ accuracy using satellite data",
      stats: { value: "90%+", label: "Accuracy" },
      color: "from-amber-500/20 to-orange-500/20",
      gradient: "bg-gradient-to-br from-amber-500 to-orange-500",
      alt: "Crop yield forecasting and prediction",
    },
    {
      image: "/images/evaporation.png",
      tags: ["WATER CYCLE", "CLIMATE"],
      title: "Drainage & Evaporation",
      description: "Real-time evapotranspiration monitoring for water management",
      stats: { value: "Daily", label: "Updates" },
      color: "from-teal-500/20 to-emerald-500/20",
      gradient: "bg-gradient-to-br from-teal-500 to-emerald-500",
      alt: "Evapotranspiration and water cycle monitoring",
    },
    {
      image: "/images/drought2.jpg",
      tags: ["CLIMATE", "MONITORING"],
      title: "Drought Monitoring",
      description: "Continental-scale drought indices and cascade analysis",
      stats: { value: "Africa", label: "Coverage" },
      color: "from-red-500/20 to-rose-500/20",
      gradient: "bg-gradient-to-br from-red-500 to-rose-500",
      alt: "Drought monitoring and early warning",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-greenlight overflow-hidden">
      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12 lg:mb-20">
          {/* Left: Text Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-green2 leading-[1.1] mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="block">Our Scientific</span>
              <span className="block text-green2">Applications</span>
            </motion.h2>
          </motion.div>

          {/* Right: Subheading */}
          <motion.div
            className="order-1 lg:order-2 flex items-start lg:items-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-green2 text-base lg:text-lg max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
             Leveraging Earth Observation data, GIS, and remote sensing for sustainable natural resource management under global change.
            </motion.p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 h-[500px] lg:h-[600px]">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl lg:rounded-3xl cursor-pointer h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              animate={{
                flex: hoveredCard === index ? "1.5" : hoveredCard !== null ? "0.8" : "1",
              }}
              style={{
                transition: "flex 0.5s ease-in-out",
              }}
            >
              {/* Image Container */}
              <div className="absolute inset-0">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
                {/* Tags */}
                <div className="flex gap-2 lg:gap-3 flex-wrap">
                  {card.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-3 py-1.5 lg:px-4 lg:py-2 border border-white/50 rounded-full text-white text-xs font-semibold tracking-wider backdrop-blur-sm bg-white/20 transition-all duration-300 group-hover:bg-white/30 group-hover:border-white"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + tagIndex * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                    {card.title}
                  </h3>
                </motion.div>
              </div>

              {/* Read More Button - Center with circular background */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                onClick={() => navigate('/applications')}
              >
                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-cream flex flex-col items-center justify-center shadow-2xl">
                  <span className="text-[#2D2416] text-sm lg:text-base font-bold">Read</span>
                  <span className="text-[#2D2416] text-sm lg:text-base font-bold">More</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button (optional) */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-cream text-[#2D2416] shadow-xl flex items-center justify-center hover:bg-white transition-all duration-300 z-50 opacity-0 hover:opacity-100"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1 }}
        whileHover={{ scale: 1.1, y: -5, opacity: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className="w-6 h-6"
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
      </motion.button>
    </section>
  );
};

export default ApplicationsSection;