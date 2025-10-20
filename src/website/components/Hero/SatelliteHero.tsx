import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home as HomeIcon } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface SatelliteHeroProps {
  title: string;
  subtitle: string;
  breadcrumbItems?: BreadcrumbItem[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;

}

export const SatelliteHero: React.FC<SatelliteHeroProps> = ({
  title,
  subtitle,
  breadcrumbItems = [{ label: "Home", path: "/" }],
  primaryButtonText = "Learn More",
  secondaryButtonText = "Browse Articles",
  onPrimaryClick,
  onSecondaryClick,

}) => {
  return (
    <section className="relative grid lg:grid-cols-2 overflow-hidden min-h-screen items-center bg-navy">
 
          {/* Left Content */}
          <div className="flex justify-center p-20 items-center relative bg-navy h-full">

          <motion.div
            className="space-y-8 p-8 lg:p-10 md:p-10 flex flex-col justify-center bg-navy"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb Navigation */}
            <motion.nav
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                to="/" 
                className="flex items-center text-white/70 hover:text-cream transition-colors duration-300 group"
              >
                <HomeIcon className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Home</span>
              </Link>
              
              {breadcrumbItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4 text-cream/50" />
                  {item.path ? (
                    <Link 
                      to={item.path}
                      className="text-sm font-medium text-white/70 hover:text-cream transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-sm font-medium text-white">{item.label}</span>
                  )}
                </div>
              ))}
            </motion.nav>

            {/* Title */}
            <motion.h1
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {subtitle}
            </motion.p>

            {/* Buttons - VerdaAgro Style */}
            {/* <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={onPrimaryClick}
                className="px-8 py-3.5 bg-transparent border-2 border-cream text-cream rounded-lg font-semibold hover:bg-cream hover:text-green2 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {primaryButtonText}
              </motion.button>
              <motion.button
                onClick={onSecondaryClick}
                className="px-8 py-3.5 bg-cream text-green2 rounded-lg font-semibold hover:bg-cream/90 transition-all duration-300 shadow-lg shadow-cream/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {secondaryButtonText}
              </motion.button>
            </motion.div> */}

     
          </motion.div>
          </div>

          {/* Right Side - Satellite Image */}
          <motion.div
            className="relative h-full bg-[#0D1621] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Abstract background pattern - behind everything */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ zIndex: 1 }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 120,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <img
                src="/images/Abstract.png"
                alt="Abstract Background"
                className="w-[140%] h-[140%] object-contain opacity-40"
              />
            </motion.div>

            {/* Satellite Image with floating animation - on top */}
            <motion.div
              className="relative"
              style={{ zIndex: 10 }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="/images/satellite.png"
                alt="Satellite"
                className="w-full h-auto drop-shadow-2xl relative z-10"
              />
            </motion.div>
          </motion.div>
        {/* </div> */}
       </section>
  );
};
