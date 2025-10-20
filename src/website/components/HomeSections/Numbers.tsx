import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const AnimatedCounter: React.FC<{ 
  value: number; 
  suffix: string;
  duration?: number;
}> = ({ value, suffix, duration = 2 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const motionValue = useSpring(0, {
    stiffness: 50,
    damping: 30,
    duration: duration * 1000,
  });

  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView && !hasAnimated) {
      motionValue.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, motionValue, hasAnimated]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center md:flex-row md:items-baseline md:justify-start">
      <motion.span className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-cream leading-none text-center md:text-left">
        {rounded}
      </motion.span>
      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream ml-0 md:ml-2 text-center md:text-left">
        {suffix}
      </span>
    </div>
  );
};

const Statistics: React.FC = () => {
  const stats = [
    {
      number: 11,
      suffix: "+",
      label: "Team member",
    },
    {
      number: 5,
      suffix: "+",
      label: "Case Study",
    },
    {
      number: 12,
      suffix: "+",
      label: "Research Article",
    },
  ];

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
          alt="Hand touching wheat in field"
          className="w-full h-full object-cover"
        />
        {/* Green overlay for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-br from-darkgreen/70 via-darkgreen/60 to-darkgreen/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-6">
        <div className="h-full flex flex-col justify-between py-20 text-center md:text-left">
          {/* Statistics Grid */}
          <div className="flex-1 flex items-center">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center md:text-left space-y-4 text-lightyellow2"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Animated Number */}
                  <AnimatedCounter 
                    value={stat.number} 
                    suffix={stat.suffix}
                    duration={2.5}
                  />

                  {/* Label */}
                  <motion.p 
                    className="text-center md:text-left text-white text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-xs mx-auto md:mx-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Section - Call to Action */}
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-block mb-8">
              <span className="px-6 py-3 border-2 border-white/40 rounded-full text-white text-sm font-medium tracking-wider backdrop-blur-sm bg-white/10">
                OUR RESEARCH APPLICATIONS
              </span>
            </div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              From Data to Insights —<br />
              Our Scientific Applications
            </motion.h2>

            {/* Optional: Scroll indicator or learn more button */}
            <motion.div 
              className="flex items-center space-x-4 mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button 
                onClick={handleScrollDown}
                className="w-12 h-12 rounded-full border-2  text-cream border-white/50 flex items-center justify-center hover:bg-white hover:text-[#2D2416] transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ 
                  y: { 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  } 
                }}
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.button>
              <span className="text-white/80 text-sm">Scroll to explore</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;