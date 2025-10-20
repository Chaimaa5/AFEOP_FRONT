import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import WebsiteLayout from "../components/Layout/WebsiteLayout";
import { MinimalBreadcrumb } from "../components/Breadcrumb/BreadcrumbVariations";
import { Layers, TrendingUp, Droplets, Sun, ArrowRight, CheckCircle } from "lucide-react";
import YieldPrediction from "../components/Applications/YieldPrediction";
import DrainageSection from "../components/Applications/Drainage";
import HydrologySectionAlt2 from "../components/Applications/HydrologySectionAlt2";
import { Badge } from "../components/Badge";
// import DrainageSection from "../components/HomeSections/DrainageSection";

const ApplicationsPage: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("precipitation");

return (
    <WebsiteLayout>
      {/* Breadcrumb */}
      <MinimalBreadcrumb
        title="Scientific Applications"
        subtitle="Four main scientific applications of Earth observation data for African agriculture"
        items={[
          // { label: "Home", path: "/" },
          { label: "Applications", path: "/applications" },
        ]}
      />

      {/* Introduction Section */}
      {/* <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-greenlight text-green2 text-xs font-semibold rounded-full mb-6 uppercase tracking-wide">
              ADVANCED EO SOLUTIONS
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-green2 mb-6">
              Earth Observation for African Agriculture
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              AFEOP leverages cutting-edge satellite technology to provide four main scientific applications
              designed specifically for African agricultural monitoring, decision-making, and sustainable management.
            </p>
          </motion.div>
        </div>
      </section> */}


<HydrologySectionAlt2 />
  

<YieldPrediction/>

      {/* Drought Monitoring - Special Layout */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Title and Small Image */}
            <div className="space-y-6">
              {/* Badge */}

              <Badge variant="light">DROUGHT MONITORING</Badge>
              {/* Large Title */}
              <motion.h2 
                               className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-green2 leading-[1.1] mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Drought Indices Across Africa
              </motion.h2>

              {/* Aerial Image */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-xl h-[300px] lg:h-[350px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1717234637790-c85cff4f643e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Drought affected agricultural land from above"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Right Side - Large Drought Image */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] lg:h-[700px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1672761619560-f13835a70830?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cracked dry earth showing drought conditions"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Description and CTA Below */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our comprehensive drought monitoring system provides continental-scale analysis of drought indices across Africa. 
                We track drought propagation through the cascade framework, monitoring how meteorological drought evolves into 
                agricultural and hydrological drought across different basins in the African continent.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green2 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Multi-basin drought cascade analysis</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green2 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Continental-scale drought indices monitoring</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green2 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Early warning system for African agricultural regions</p>
                </div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-start lg:items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                to="/drought"
                className="group px-10 py-5 bg-greenlight text-green2 rounded-full font-semibold hover:bg-darkgreen hover:text-greenlight transition-all duration-500 inline-flex items-center space-x-3 hover:scale-105"
              >
                <div className="w-10 h-10 rounded-full border-2 border-darkgreen group-hover:border-greenlight flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <span>Explore Drought Analysis</span>
              </Link>
              <Link
                to="/contact"
                className="text-green2 font-semibold hover:text-green2/70 transition-colors duration-200 underline underline-offset-4"
              >
                Request Basin-Specific Data
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
<DrainageSection/>
  
    

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-darkgreen relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-greenlight mb-6">
              Ready to Transform Your Agricultural Monitoring?
            </h2>
            <p className="text-white/90 text-lg mb-10 leading-relaxed">
              Start using AFEOP's scientific applications today and leverage the power of Earth observation
              for data-driven agricultural decision-making across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/app"
                className="group px-12 py-5 bg-greenlight hover:bg-white text-green2 rounded-full font-semibold transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl inline-flex items-center justify-center space-x-3"
              >
                <span>Launch Platform</span>
                <div className="w-10 h-10 rounded-full border-2 border-darkgreen flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
              <Link
                to="/contact"
                className="px-12 py-5 bg-transparent border-2 border-greenlight hover:bg-greenlight text-greenlight hover:text-green2 rounded-full font-semibold transition-all duration-500 hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </WebsiteLayout>
  );
};

export default ApplicationsPage;

