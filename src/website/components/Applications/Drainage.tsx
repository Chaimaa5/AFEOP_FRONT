import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../components/Badge";

const DrainageSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const cards = [
    {
      image: "https://images.unsplash.com/photo-1661116462545-51ba1856ef49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
      tags: ["HYDROLOGY", "WATER RESOURCES"],
      title: "Precipitation",
      description: "Corrected satellite precipitation products",
      stats: { value: "1km", label: "Resolution" },
     color: "from-teal-500/20 to-emerald-500/20",
     gradient: "bg-gradient-to-br from-teal-500 to-emerald-500",
      alt: "Hydrological classification and water management",
    },
    {
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670",
      tags: ["AGRICULTURE", "FORECASTING"],
      title: "Soil Moisture",
      description: "Daily satellite-based soil moisture time series",
      stats: { value: "95%", label: "Accuracy" },
       color: "from-teal-500/20 to-emerald-500/20",
     gradient: "bg-gradient-to-br from-teal-500 to-emerald-500",
      alt: "Crop yield forecasting and prediction",
    },
    {
      image: "https://images.unsplash.com/photo-1726095618560-e4edd1ea7865?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670",
      tags: ["WATER CYCLE", "CLIMATE"],
      title: "Discharge",
      description: "Observed discharge for major Moroccan basins ",
      stats: { value: "Monthly", label: "Updates" },
      color: "from-teal-500/20 to-emerald-500/20",
      gradient: "bg-gradient-to-br from-teal-500 to-emerald-500",
      alt: "Evapotranspiration and water cycle monitoring",
    },
  
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-greenlight overflow-hidden">

      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
          <motion.div
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
       
            
                      <Badge> SCIENTIFIC APPLICATION </Badge>


            <motion.h2
                                                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-green2 leading-[1.1] mb-0"
                                           initial={{ opacity: 0, y: 20 }}
                                           whileInView={{ opacity: 1, y: 0 }}
                                           viewport={{ once: true }}
                                           transition={{ duration: 0.6, delay: 0.1 }}
                                         >
                Drainage
             
              Evaporation
            </motion.h2>
          </motion.div>

          {/* Right: Description with Stats */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-black text-lg lg:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Leveraging Earth Observation data, GIS, and remote sensing for sustainable natural resource management under global change.
            </motion.p>

        
          </motion.div>
        </div>

        {/* Cards Grid - More Creative Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-3xl cursor-pointer h-[500px]"
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ scale: 1.02, y: -8 }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <motion.img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredCard === index ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />
                {/* Gradient Overlays */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} mix-blend-multiply transition-opacity duration-500 ${hoveredCard === index ? 'opacity-60' : 'opacity-40'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Animated Border */}
              <motion.div
                className={`absolute inset-0 ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{
                  padding: "2px",
                  borderRadius: "1.5rem",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 z-10">
                {/* Top Section - Tags & Stats */}
                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {card.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-4 py-1.5 border border-white/40 rounded-full text-white text-xs font-semibold tracking-wider backdrop-blur-md bg-white/10 group-hover:bg-white/20 group-hover:border-white/60 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 + tagIndex * 0.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Stat Badge */}
                  <motion.div
                    className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-xl rounded-2xl px-5 py-3 border border-white/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  >
                    <div className="text-3xl font-bold text-white">{card.stats.value}</div>
                    <div className="text-xs text-white/80 uppercase tracking-wider">{card.stats.label}</div>
                  </motion.div>
                </div>

                {/* Bottom Section - Title & Description */}
                <div className="space-y-4">
                  {/* Description - Hidden by default, shows on hover */}
                  <motion.p
                    className="text-white/90 text-sm leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredCard === index ? 1 : 0,
                      height: hoveredCard === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.description}
                  </motion.p>

                  {/* Title */}
                  <motion.div
                    className="flex items-end justify-between gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                  >
                    <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                      {card.title}
                    </h3>

                    {/* Arrow Button */}
                    <motion.button
                      className="flex-shrink-0 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:bg-cream group-hover:border-cream transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate('/applications')}
                    >
                      <svg
                        className="w-6 h-6 text-white group-hover:text-green2 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.button>
                  </motion.div>

                  {/* Index Number */}
                  <motion.div
                    className="absolute top-8 right-8 text-8xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                  >
                    0{index + 1}
                  </motion.div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                }}
              />
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

export default DrainageSection;