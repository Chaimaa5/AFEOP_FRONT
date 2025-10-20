import { Button } from "../Button";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Articles: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div className="relative container mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12 lg:mb-20">
          {/* Left: Badge and Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="px-6 py-2 border border-darkgreen/40 rounded-full text-green2 text-xs lg:text-sm font-medium tracking-widest uppercase">
                RESEARCH & PUBLICATIONS
              </span>
            </div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-green2 leading-[1.1] mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="block">Latest Research</span>
              <span className="block">& Publications</span>
            </motion.h2>
          </motion.div>

          {/* Right: Description and Button */}
          <motion.div
            className="flex flex-col justify-center space-y-6 lg:pt-16"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-green2/80 text-base lg:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Explore our scientific contributions and platform updates, advancing Earth observation research across Africa.
            </motion.p>

            <div className="hidden lg:block">

               <Button variant="primary" size="md" showDot redirect="/articles">
                View All
              </Button>
            
            </div>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                image: "/images/soil-health.jpg",
                title: "TEMLI: A High-Resolution Air Temperature Estimation Using Machine Learning and Land Surface Data Across Morocco",
                description: "April 2025",
                category: "Springer Nature Link"
              },
              {
                image: "/images/irrigation.jpg", 
                title: "Physics-informed neural networks for enhanced reference evapotranspiration estimation in Morocco: Balancing semi-physical models and deep learning",
                description: "April 2025",
                category: "Science Direct"
              },
              {
                image: "/images/precision-agriculture.jpg",
                title: "Evaluation of the Performance of Multi-Source Satellite Products in Simulating Observed Precipitation over the Tensift Basin in Morocco",
                description: "February 2022",
                category: "Remote Sensing"
              },
              {
                image: "/images/crop-monitoring.jpg",
                title: "A comprehensive assessment of satellite precipitation products over a semi-arid region: focus on extreme events",
                description: "November 2023",
                category: "Natural Hazards"
              }
            ].map((card, index) => (
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-2xl h-64 mb-4">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const fallbackImages = [
                        '/images/articles/fig4.png',
                        '/images/articles/fig3.jpg',
                        '/images/articles/fig2.png',
                        '/images/articles/fig1.webp',
                      ];
                      e.currentTarget.src = fallbackImages[index % fallbackImages.length];
                    }}
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darkgreen/80 via-darkgreen/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-greenlight text-green2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {card.category}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-green2/60 text-sm font-medium uppercase tracking-wider">{card.description}</p>
                  <h3 className="text-lg lg:text-xl font-bold text-green2 leading-tight line-clamp-3 group-hover:text-green2/80 transition-colors">
                    {card.title}
                  </h3>
                  
               <Button variant="outline" size="xs" showDot redirect="/articles">
                Read More
              </Button>
                  
                
                </div>
              </motion.div>
            ))}
          </div>

        {/* Mobile Button */}
        <motion.div 
          className="lg:hidden mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
             <Button 
                        onClick={() => navigate('/articles')}
                        className="bg-cream text-[#2D2416] hover:bg-cream/90 font-semibold px-8 py-6 rounded-full text-base transition-all hover:scale-105 flex items-center space-x-2"
                      >
                        <span className="w-2 h-2 bg-[#2D2416] rounded-full"></span>
                        <span>View All</span>
                      </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default Articles;