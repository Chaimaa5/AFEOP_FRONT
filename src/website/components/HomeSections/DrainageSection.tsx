import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const HydrologySection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const features = [
    {
      id: 1,
      title: "Increased Efficiency",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2940&auto=format&fit=crop",
      description: "Optimize water usage and improve irrigation planning with real-time evapotranspiration data"
    },
    {
      id: 2,
      title: "Enhanced Safety",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2940&auto=format&fit=crop",
      description: "Monitor field conditions remotely to ensure safer agricultural operations"
    },
    {
      id: 3,
      title: "Cost Reduction",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2874&auto=format&fit=crop",
      description: "Reduce operational costs through precise water management and resource optimization"
    },
    {
      id: 4,
      title: "Precision Agriculture",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2940&auto=format&fit=crop",
      description: "Implement data-driven farming techniques for maximum yield and sustainability"
    },
    {
      id: 5,
      title: "Problem Detection",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2793&auto=format&fit=crop",
      description: "Early detection of water stress and drainage issues before they impact crop health"
    },
  ];

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const currentFeature = features[hoveredIndex];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-greenlight/20 overflow-hidden"
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
          className="mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-green2 leading-[1.1] mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Future of Farming,<br />
            <span className="text-green2/60">Delivered by Drone</span>
          </motion.h2>
        </motion.div>

        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT: Feature Text List */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag lines */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold text-green2/60 uppercase tracking-wider mb-2">
                LESS INPUT WASTE,
              </p>
              <p className="text-sm font-semibold text-green2/60 uppercase tracking-wider">
                REDUCED FUEL USE
              </p>
            </motion.div>

            {/* Feature Items */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className={`relative cursor-pointer transition-all duration-500 py-6 lg:py-8 border-b-2 ${
                  hoveredIndex === index
                    ? 'border-darkgreen'
                    : 'border-gray-200'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between group">
                  <motion.h3
                    className={`text-4xl lg:text-5xl xl:text-6xl font-bold transition-all duration-500 ${
                      hoveredIndex === index
                        ? 'text-green2'
                        : 'text-gray-300'
                    }`}
                    animate={{
                      x: hoveredIndex === index ? 10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>

                  {/* Circular indicator that appears on active */}
                  <motion.div
                    className="flex-shrink-0"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-darkgreen flex items-center justify-center">
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-darkgreen"
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Description that appears on hover */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.p
                      className="text-green2/70 text-base lg:text-lg mt-4 max-w-xl"
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* View All Benefits Button */}
            <motion.div
              className="pt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                to="/applications"
                className="inline-flex items-center gap-3 px-8 py-4 bg-darkgreen/80 hover:bg-darkgreen text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>View All Benefits</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT: Image Display */}
          <motion.div
            className="relative lg:sticky lg:top-24 h-[500px] lg:h-[650px]"
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
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  {/* Image */}
                  <img
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Badge with counter */}
              <motion.div
                className="absolute top-6 right-6 z-10"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredIndex}
                    className="px-5 py-3 bg-white/95 backdrop-blur-md rounded-full text-green2 font-bold text-base shadow-xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    0{hoveredIndex + 1} / 0{features.length}
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Bottom Info Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredIndex}
                  className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl z-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-green2 mb-2">{currentFeature.title}</h4>
                      <p className="text-sm text-green2/70 leading-relaxed">{currentFeature.description}</p>
                    </div>
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-darkgreen/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: "#204E51" }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-5 h-5 text-green2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/20 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/20 rounded-br-3xl" />
            </div>

            {/* Floating accent circle */}
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 bg-cream/30 rounded-full blur-2xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HydrologySection;
