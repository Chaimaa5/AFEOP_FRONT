import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import WebsiteLayout from "../components/Layout/WebsiteLayout";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <WebsiteLayout>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-greenlight via-white to-cream overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-darkgreen/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-cream/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Number - Large and Bold */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <h1 className="text-[200px] lg:text-[280px] font-bold text-green2/10 leading-none select-none">
                404
              </h1>
            </motion.div>

            {/* Animated Icon */}
            <motion.div
              className="mb-8 -mt-32 lg:-mt-48"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-block relative">
                <motion.div
                  className="w-32 h-32 lg:w-40 lg:h-40 bg-cream rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg
                    className="w-16 h-16 lg:w-20 lg:h-20 text-green2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </motion.div>
                
                {/* Floating particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-darkgreen/30 rounded-full"
                    style={{
                      top: `${20 + i * 20}%`,
                      left: `${20 + i * 30}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-4xl lg:text-6xl font-bold text-green2 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Page Not Found
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg lg:text-xl text-green2/70 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back to exploring Earth observation data.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                variant="primary"
                size="lg"
                showDot
                onClick={() => navigate('/')}
              >
                Back to Home
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="mt-16 pt-12 border-t border-darkgreen/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="text-sm text-green2/60 mb-6 uppercase tracking-wider font-semibold">
                Popular Pages
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  { label: "Applications", path: "/applications" },
                  { label: "About Us", path: "/about" },
                  { label: "Soil Moisture", path: "/soilmoisture" },
                  { label: "Drought Monitor", path: "/drought" },
                  { label: "Contact", path: "/contact" },
                ].map((link, index) => (
                  <motion.button
                    key={link.path}
                    onClick={() => navigate(link.path)}
                    className="px-6 py-2 text-sm font-medium text-green2 hover:text-white bg-white hover:bg-darkgreen border-2 border-darkgreen/20 hover:border-darkgreen rounded-full transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Satellite Icon */}
        <motion.div
          className="absolute top-20 right-20 opacity-10 pointer-events-none hidden lg:block"
          animate={{ 
            rotate: 360,
            y: [0, -20, 0],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg className="w-32 h-32 text-green2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3"/>
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          </svg>
        </motion.div>
      </section>
    </WebsiteLayout>
  );
};

export default NotFoundPage;
