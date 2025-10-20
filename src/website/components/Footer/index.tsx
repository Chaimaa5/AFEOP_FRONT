import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const text = "AFEOP";
  
  return (
    <footer className="relative overflow-hidden bg-darkgreen">
      {/* Background Image with Overlay */}
      {/* <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1644419932195-66e1fab6c068?q=80&w=2618&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Agricultural landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 "></div>
      </div> */}

      {/* Container */}
      <div className="relative container mx-auto px-6 py-16 lg:py-20">
        
        {/* Large Logo/Title - Centered and behind the blur */}
        {/* <motion.div
          className="relative z-0 text-center mb-[-20px] lg:mb-[-50px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl lg:text-8xl font-bold text-greenlight mb-6 tracking-tight">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.1,
                  delay: 0.6 + index * 0.1, // Start after the container animation (0.6s) + stagger
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h2>
        </motion.div> */}

        {/* Glassmorphism Card */}
        <div className="relative z-10 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl p-10 lg:p-16 pt-24 lg:pt-28">
        
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <p className="text-white/90 text-base lg:text-lg max-w-lg leading-relaxed">
            Driven by innovation. Grounded in science. Focused on Africa's agricultural future.
          </p>
            {/* <div className="space-y-6">
              <a 
                href="mailto:info@afeop.org" 
                className="block text-greenlight hover:text-white transition-colors duration-300 text-xl lg:text-2xl font-medium"
              >
                info@afeop.com
              </a>
            </div> */}

            {/* Social Media Buttons */}
            <div className="flex flex-wrap gap-3 mt-10">
              {[
                { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="px-5 py-2.5 rounded-full border border-white/30 hover:border-greenlight hover:bg-greenlight/10 text-white hover:text-greenlight text-sm font-medium transition-all duration-300 flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {['Project', 'Applications', 'Features', 'FAQs', 'Getting Started'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/80 hover:text-greenlight transition-colors duration-300 text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Subscribe</h3>
            <p className="text-white/90 text-base font-medium mb-4">
              Get news & updates
            </p>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Our expertise, as well as our passion for Earth Observation, sets us apart from other platforms.
            </p>

            {/* Email Signup - Simplified */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b-2 border-white/30 focus:border-greenlight text-white placeholder-white/50 px-0 py-3 focus:outline-none transition-colors duration-300 text-base"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-greenlight hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </motion.div>

        </div>

        {/* Bottom Copyright */}
        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-white/60 text-sm">
            © 2025 AFEOP by CRSA. All Rights Reserved
          </p>
        </motion.div>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;