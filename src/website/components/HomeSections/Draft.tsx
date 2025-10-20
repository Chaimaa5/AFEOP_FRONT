import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ApplicationsSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const applications = [
    {
      id: 1,
      title: "Hydrological Classification",
      subtitle: "Advanced Soil Moisture Analysis",
      description: "Advanced soil moisture regime analysis across African regions using satellite data and machine learning algorithms.",
      image: "/images/SM.jpg",
      icon: "💧",
      stats: { value: "1km", label: "Resolution" },
      features: [
        "Increased Efficiency",
        "Enhanced Safety", 
        "Cost Reduction",
        "Precision Agriculture"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50/50",
      tags: ["HYDROLOGY", "WATER RESOURCES"]
    },
    {
      id: 2,
      title: "Crop Yield Forecasting",
      subtitle: "AI-Powered Predictions",
      description: "AI-powered yield predictions with 90%+ accuracy using satellite data, weather patterns, and historical trends.",
      image: "/images/YieldBg.png",
      icon: "🌾",
      stats: { value: "90%+", label: "Accuracy" },
      features: [
        "Wheat Forecasting",
        "Barley Analysis",
        "Seasonal Predictions",
        "Historical Trends"
      ],
      gradient: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50/50",
      tags: ["AGRICULTURE", "FORECASTING"]
    },
    {
      id: 3,
      title: "Drainage & Evaporation",
      subtitle: "Water Cycle Monitoring",
      description: "Real-time evapotranspiration monitoring for water management and agricultural planning across diverse ecosystems.",
      image: "/images/evaporation.png",
      icon: "🌊",
      stats: { value: "Daily", label: "Updates" },
      features: [
        "ET Monitoring",
        "Water Balance",
        "Basin Analysis",
        "Real-time Data"
      ],
      gradient: "from-teal-500 to-emerald-500",
      bgColor: "bg-teal-50/50",
      tags: ["WATER CYCLE", "CLIMATE"]
    },
    {
      id: 4,
      title: "Drought Monitoring",
      subtitle: "Early Warning Systems",
      description: "Continental-scale drought indices and cascade analysis with early warning systems for climate resilience.",
      image: "/images/drought2.jpg",
      icon: "🌡️",
      stats: { value: "Africa", label: "Coverage" },
      features: [
        "Drought Indices",
        "Early Warning",
        "Risk Assessment",
        "Climate Resilience"
      ],
      gradient: "from-red-500 to-rose-500",
      bgColor: "bg-red-50/50",
      tags: ["CLIMATE", "MONITORING"]
    },
  ];

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const currentApp = applications[hoveredIndex];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-greenlight via-white to-greenlight overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-darkgreen/5 rounded-full blur-3xl"
          style={{ y: y1 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cream/30 rounded-full blur-3xl"
          style={{ y: y2 }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
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
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-green2 leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Scientific Applications
          </motion.h2>

          <motion.p
            className="text-green2/70 text-lg lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Leveraging Earth Observation data, GIS, and remote sensing for sustainable natural resource management
          </motion.p>
        </motion.div>

        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* LEFT: Applications List */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag line */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-px w-12 bg-darkgreen/30" />
              <span className="text-sm font-semibold text-green2/60 uppercase tracking-wider">
                Smarter Farming, Stronger Results
              </span>
            </motion.div>

            {applications.map((app, index) => (
              <motion.div
                key={app.id}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl border-2 transition-all duration-500 ${
                  hoveredIndex === index
                    ? `border-transparent bg-gradient-to-br ${app.gradient} text-white shadow-2xl scale-[1.02]`
                    : 'border-darkgreen/10 bg-white hover:border-darkgreen/30 hover:shadow-lg'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative p-6 lg:p-8">
                  {/* Number Badge */}
                  <motion.div
                    className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                      hoveredIndex === index
                        ? 'bg-white/20 backdrop-blur-md text-white'
                        : 'bg-darkgreen/5 text-green2/40'
                    }`}
                  >
                    0{index + 1}
                  </motion.div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className="text-5xl"
                      animate={{
                        rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {app.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className={`text-2xl lg:text-3xl font-bold mb-2 transition-colors ${
                        hoveredIndex === index ? 'text-white' : 'text-green2'
                      }`}>
                        {app.title}
                      </h3>
                      <p className={`text-sm font-medium transition-colors ${
                        hoveredIndex === index ? 'text-white/80' : 'text-green2/60'
                      }`}>
                        {app.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <AnimatePresence mode="wait">
                    {hoveredIndex === index && (
                      <motion.div
                        className="space-y-3 mb-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {app.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center gap-3 text-white/90"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                          >
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Stats Badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    hoveredIndex === index
                      ? 'bg-white/20 backdrop-blur-md text-white'
                      : 'bg-darkgreen/5 text-green2'
                  }`}>
                    <span className="text-lg">{app.stats.value}</span>
                    <span className="text-xs opacity-80">{app.stats.label}</span>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    className={`absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      hoveredIndex === index
                        ? 'bg-white/20 backdrop-blur-md opacity-100'
                        : 'bg-darkgreen/5 opacity-0 group-hover:opacity-100'
                    }`}
                    animate={{
                      x: hoveredIndex === index ? [0, 5, 0] : 0,
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg className={`w-5 h-5 ${hoveredIndex === index ? 'text-white' : 'text-green2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: Image Display */}
          <motion.div
            className="relative lg:sticky lg:top-24 h-[500px] lg:h-[700px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredIndex}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Image */}
                  <img
                    src={currentApp.image}
                    alt={currentApp.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentApp.gradient} opacity-20 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Info Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredIndex}
                  className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentApp.gradient} flex items-center justify-center text-2xl flex-shrink-0`}>
                      {currentApp.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-green2 mb-2">{currentApp.title}</h4>
                      <p className="text-sm text-green2/70 leading-relaxed">{currentApp.description}</p>
                      
                      {/* Tags */}
                      <div className="flex gap-2 mt-4">
                        {currentApp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-darkgreen/5 text-green2 text-xs font-semibold rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Corner Decoration */}
              <div className="absolute top-6 right-6">
                <motion.div
                  className={`px-4 py-2 bg-white/95 backdrop-blur-md rounded-full text-green2 font-bold text-sm shadow-lg`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  0{hoveredIndex + 1} / 04
                </motion.div>
              </div>
            </div>
          </motion.div>
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
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-darkgreen hover:bg-darkgreen/90 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: [-200, 200] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            <span className="relative z-10">Explore All Applications</span>
            <motion.div
              className="relative z-10 w-6 h-6"
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
    </section>
  );
};


export default ApplicationsSection;
