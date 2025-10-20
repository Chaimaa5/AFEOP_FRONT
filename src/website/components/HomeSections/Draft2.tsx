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
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-greenlight via-white to-greenlight overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-darkgreen/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cream/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
          {/* Left: Text Content with Animation */}
          <motion.div
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative element */}
            <motion.div
              className="absolute -left-8 top-0 w-1 h-32 bg-gradient-to-b from-darkgreen to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            <motion.span
              className="inline-block px-4 py-2 bg-darkgreen/10 text-green2 rounded-full text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              EXPLORE OUR SOLUTIONS
            </motion.span>

            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-green2 leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="block relative">
                Our Scientific
                <motion.span
                  className="absolute -bottom-2 left-0 w-1/2 h-1 bg-darkgreen"
                  initial={{ width: 0 }}
                  whileInView={{ width: "50%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
              <span className="block text-green2 mt-2">Applications</span>
            </motion.h2>

            <motion.div
              className="flex items-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full bg-darkgreen/20 border-2 border-white"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  />
                ))}
              </div>
              <p className="text-green2/70 text-sm font-medium">
                Trusted by agricultural researchers across Africa
              </p>
            </motion.div>
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
              className="text-green2/80 text-lg lg:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Leveraging Earth Observation data, GIS, and remote sensing for sustainable natural resource management under global change.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { value: "4", label: "Applications" },
                { value: "1km", label: "Resolution" },
                { value: "24/7", label: "Monitoring" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-darkgreen/10 hover:shadow-md transition-shadow"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-green2">{stat.value}</div>
                  <div className="text-xs text-green2/60 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Cards Grid - More Creative Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            onClick={() => navigate('/applications')}
            className="group inline-flex items-center gap-4 px-10 py-5 bg-darkgreen hover:bg-darkgreen/90 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore All Applications</span>
            <motion.div
              className="w-6 h-6"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </motion.button>
        </motion.div>
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