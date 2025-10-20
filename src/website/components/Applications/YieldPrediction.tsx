import React from "react";
import { Badge } from "../Badge";
import { motion } from "framer-motion";

const YieldPrediction: React.FC = () => {
  const solutions = [
    {
      number: "01",
      title: "Soft Wheat",
      description: "Yield estimation using soil moisture and VOD integration",
      image: "/images/softwheat.png",
      imageAlt: "Soft wheat field",
      bgColor: "hover:bg-gradient-to-br hover:from-yellow-50 hover:to-green-50",
    },
    {
      number: "02",
      title: "Durum Wheat",
      description: "Advanced predictive analytics for optimal harvest planning",
      image: "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/serv-1-2.webp",
      imageAlt: "Durum wheat field",
      bgColor: "hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50",
    },
    {
      number: "03",
      title: "Barley",
      description: "Real-time monitoring for accurate yield forecasting",
      image: "/images/barley.png",
      imageAlt: "Barley crop",
      bgColor: "hover:bg-gradient-to-br hover:from-gray-50 hover:to-slate-100",
    },
   
  ];

  return (
    <section className="py-20 bg-greenlight">
      <div className="container mx-auto px-6">
        {/* Header */}
    
  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12 lg:mb-20">
    <div>

     <Badge variant="light"> YIELD FORECASTING</Badge>
          {/* Left: Text Content */}
          <motion.div
            className="order-2 lg:order-"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              <span className="block"> Advanced Crop </span>
              <span className="block text-green2">Yield Prediction Platform</span>
            </motion.h2>
          </motion.div>
    </div>

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
                Our AI-powered forecasting model combines soil moisture status and Vegetation Optical Depth (VOD) data to deliver highly accurate yield estimates. With <span className="font-bold text-green2">over 90% prediction accuracy</span>, we're revolutionizing agricultural planning across Morocco.
            </motion.p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-greenlight hover:bg-cream rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border-2 border-darkgreen hover:scale-105 min-h-[450px]"
            >
              {/* Card Content */}
              <div className="relative p-8 pb-32 z-10">
                <span className="text-green2/60 text-base font-medium">
                  {solution.number}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-green2 mt-3 mb-4 leading-tight">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {solution.description}
                </p>

                {/* Arrow Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-darkgreen group-hover:bg-darkgreen transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-green2 group-hover:text-cream transition-colors"
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
                </div>
              </div>

              {/* Image at bottom-right - Always visible, clean look */}
              <div className="absolute bottom-0 right-0 w-[70%] h-[50%] overflow-hidden pointer-events-none group-hover:opacity-80 transition-opacity duration-500">
                <img
                  src={solution.image}
                  alt={solution.imageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

      
      </div>

      {/* Scroll to top button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-cream rounded-full flex items-center justify-center shadow-lg hover:bg-cream/90 transition-all hover:scale-110 z-50">
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
    </section>
  );
};

export default YieldPrediction;
