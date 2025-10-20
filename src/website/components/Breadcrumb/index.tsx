
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
    return (
           <section className="relative h-[60vh] min-h-[500px] bg-gradient-to-br from-darkgreen via-[#4a6741] to-[#5a7951] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3272&auto=format&fit=crop")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cream/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center space-x-2 text-cream/80 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="hover:text-cream transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-cream font-semibold">Research & Articles</span>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="px-6 py-2 border-2 border-cream/30 rounded-full text-cream text-sm font-medium tracking-wider uppercase backdrop-blur-sm">
                RESEARCH & PUBLICATIONS
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-cream mb-6 leading-tight">
              Latest Research &
              <br />
              Platform Updates
            </h1>

            <p className="text-xl text-cream/90 mb-8 leading-relaxed">
              Explore cutting-edge research in Earth Observation, remote sensing, and geospatial technologies advancing African agriculture and environmental monitoring.
            </p>

        
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F5F5F0"
            />
          </svg>
        </div>
      </section>
    );
    }
export default Breadcrumb;
