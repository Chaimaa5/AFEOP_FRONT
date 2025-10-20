import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";
import { Link } from "react-router-dom";
import WebsiteLayout from "../components/Layout/WebsiteLayout";
import Breadcrumb from "../components/Breadcrumb";
import { SatelliteHero } from "../components/Hero";
import { link } from "@nextui-org/theme";


const features = [
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
    title: "African Data Infrastructure",
    description: "Develop and build an African data portal / infrastructure for EO data. The built portal/warehouse will use mainly EO data and spatial information in combination with systems modelling, geographical information systems and remote sensing. The developed platform will benefit from the UM6P high storage and cloud computing capacities as the university working toward the development of a huge African Data Center.",
    link: "/app" 
},
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Empowering African Researchers",
    description: "Use the developed EO platform data for the assessment, monitoring, planning and management of natural resources, for their sustainable use, development and restoration under global change The project identifies four main scientific applications, by adopting this innovative approach, the platform will enable near-real-time, efficient, scalable, and rapid processing of satellite data within a creative big data and cloud computing architecture.",
    link: "/applications"
},

];
const AboutPage: React.FC = () => {
  // State for team carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handler functions for carousel navigation
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? team.length - 2 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev >= team.length - 2 ? 0 : prev + 1));
  };

  // Counter animation hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (!isInView) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration]);

    return { count, ref };
  };
  const team = [
    {
      name: "Prof. Abdelghani Chehbouni",
      role: "Project Lead - UM6P",
      image: "/images/team/chehbouni.jpg",
      bio: "Leading expert in Earth Observation and agricultural water management.",
    },
    {
      name: "Prof. Dara Entekhabi",
      role: "Bacardi and Stockholm Water Foundations Professor - MIT",
      image: "/images/team/dara.png",
      bio: "Renowned climate scientist specializing in African climate systems.",
    },
    {
      name: "Dr. Bouchra Ait Hssaine",
      role: "Project PI - UM6P",
      image: "/images/team/bouchra.jpg",
      bio: "Expert in satellite data processing and agricultural applications.",
    },
    {
      name: "Dr. Abdelhakim Amazirh",
      role: "Assistant Professor - CRSA",
      image: "/images/team/hakim.png",
      bio: "Assistant Professor at the center for remote sensing applications.",
    },
    {
      name: "Dr. Ouatiki Hamza",
      role: "Assistant Professor - CRSA",
      image: "/images/team/hamza.png",
      bio: "Assistant Professor at the center for remote sensing applications.",
    },
    {
      name: "Dr. El Mahdi El Khalki",
      role: "Assistant Professor - IWRI",
      image: "/images/team/mehdi.png",
      bio: "Assistant Professor at International Water Research Institute.",
    },
    {
      name: "Dr. El Houssaine Bouras",
      role: "Assistant Professor - CRSA",
      image: "/images/team/houssain.png",
      bio: "Assistant Professor at the center for remote sensing applications.",
    },
    {
      name: "Touria Benmira",
      role: "Data Scientist - CRSA",
      image: "/images/team/touria.png",
      bio: "Data scientist at the center for remote sensing applications.",
    },
    {
      name: "Chaimaa El Mhandez",
      role: "Full Stack Developer - CRSA",
      image: "/images/team/chaimaa.jpg",
      bio: "Full Stack Developer at the center for remote sensing applications.",
    },
  ];


  const stats = [
    { number: 2, label: "Partner Institutions", suffix: "+" },
    { number: 50, label: "Research Publications", suffix: "+" },
    { number: 10, label: "Active Researchers", suffix: "+" },
    { number: 1, label: "Hectares Monitored", suffix: "M" },
  ];

  // Counter Component
  const StatCounter: React.FC<{ stat: typeof stats[0]; delay: number }> = ({ stat, delay }) => {
    const counter = useCounter(stat.number, 2000);

    return (
      <motion.div
        ref={counter.ref}
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
      >
        <div className="flex justify-center items-end text-7xl lg:text-9xl font-bold text-green2 mb-3">
          {counter.count}<p className="text-4xl">{stat.suffix}</p>
        </div>
        <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
      </motion.div>
    );
  };

  return (
    <WebsiteLayout>
      <div className="bg-white">
        <SatelliteHero
          title="Empowering Africa Through Earth Observation"
          subtitle="Building cutting-edge geospatial infrastructure to advance agricultural research, climate science, and sustainable development across the African continent"
          breadcrumbItems={[
            { label: "About Us" }
          ]}
          primaryButtonText="Our Mission"
          secondaryButtonText="Meet the Team"
          onPrimaryClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
          onSecondaryClick={() => window.scrollTo({ top: 2800, behavior: 'smooth' })}
        />

        {/* <Breadcrumb current="About Us" /> */}
        <section className="pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            {/* Header Section */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Badge variant="light">ABOUT THE PROJECT</Badge>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-green2 mb-8 leading-tight max-w-4xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Empowering Africa Through Earth Observation
              </motion.h1>

              {/* Description */}
              <motion.div
                className="max-w-4xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <p className="text-xl text-gray-700 leading-relaxed">
                  Mohammed VI Polytechnic University (UM6P) and Massachusetts Institute of Technology (MIT) have enabled this new research to help African researchers to process large data sets for African applications. The main objectives of this project are:
                </p>
              </motion.div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.6 + index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex flex-col space-y-6">
                    {/* Icon */}
                    <motion.div
                      className="flex-shrink-0 text-[#9CA67C] group-hover:text-green2 transition-colors duration-300"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.8 + index * 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {feature.icon}
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      className="flex-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-green2 mb-4 group-hover:text-[#9CA67C] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {feature.description}
                      </p>
                    </motion.div>

                    {/* Number Badge */}
                    <motion.div
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                    >
                      <motion.span 
                        className="text-6xl font-bold text-green2/10"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 1.3 + index * 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        0{index + 1}
                      </motion.span>
                      <motion.button 
                        className="w-12 h-12 rounded-full hover:bg-darkgreen hover:text-cream flex items-center justify-center bg-cream text-green2 transition-all duration-300 hover:scale-110"
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 1.4 + index * 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ rotate: 45 }}
                        onClick={() => { window.location.href = feature.link; }}
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
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>


          </div>
        </section>



        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <StatCounter key={index} stat={stat} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Scientific Applications Section */}
        <section className="py-20 bg-darkgreen relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 max-w-7xl mx-auto">
              <div>
                <Badge variant="dark">SCIENTIFIC APPLICATIONS</Badge>
                <motion.h2

                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }} 
                >
                  What Our Earth Observation Platform Offers
                </motion.h2>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                 <Button variant="primary" size="sm" showDot redirect="/applications">
                  Explore
                </Button>
              </motion.div>
            </div>

            {/* Applications List */}
            <div className="space-y-6 max-w-7xl mx-auto">
              {[
                {
                  number: "01",
                  title: "Drought Monitoring",
                  description: "We prioritize eco-friendly practices that protect natural resources and ensure long-term agricultural sustainability through advanced satellite monitoring.",
                  image: "/images/drought2.jpg", // Cracked dry earth
                },
                {
                  number: "02",
                  title: "Evapotranspiration Estimation",
                  description: "Every solution we offer is designed to support researchers — helping them increase accuracy, reduce uncertainty, and advance climate science.",
                  image: "/images/evaporation.png", // Water droplets on leaves
                },
                {
                  number: "03",
                  title: "Hydrological classification",
                  description: "We prioritize your unique needs and preferences, creating personalized analysis plans that align with your research goals and objectives.",
                  image: "/images/SM.jpg", // River/water flow
                },
                {
                  number: "04",
                  title: "Crop Yield Forecasting",
                  description: "We embrace smart technologies and proven methods that bring efficiency, precision, and progress to agricultural research and monitoring.",
                  image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop", // Wheat/crop field
                },
              ].map((app, index) => (
                <motion.div
                  key={index}
                  className="group relative rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col md:flex-row items-stretch"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Background Image - Always visible */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 scale-100 group-hover:scale-105"
                    style={{ backgroundImage: `url(${app.image})` }}
                  />

                  {/* Overlay - Solid color by default, semi-transparent on hover to reveal image */}
                  <div className="absolute inset-0 bg-green2 group-hover:bg-darkgreen/20 transition-all duration-500" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full">
                    {/* Number */}
                    <span className="text-base sm:text-lg md:text-xl font-normal text-cream group-hover:text-white transition-colors duration-300 flex-shrink-0 w-10 sm:w-12">
                      {app.number}
                    </span>

                    {/* Title - Responsive width */}
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white flex-shrink-0 w-40 sm:w-64 lg:w-80">
                      {app.title}
                    </h3>

                    {/* Description - Responsive */}
                    <p className="text-white/80 group-hover:text-white/90 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed transition-colors duration-300 flex-1">
                      {app.description}
                    </p>

                    {/* Arrow */}
                    <div className="text-cream group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0 ml-auto">
                      <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="absolute left-0 bottom-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </section>

        {/* Our Skilled Team Section */}
        <section className="py-40 bg-[#F5F5F0]">
          <div className="container mx-auto px-6 lg:px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left - Header & Description */}
              <div>
                <Badge variant="light">MEET PROFESSIONALS</Badge>

                <motion.h2
                               className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-green2 leading-[1.1] mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Our Skilled Team
                </motion.h2>

                <motion.p
                  className="text-lg text-gray-600 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Leading researchers and scientists driving innovation in Earth Observation
                </motion.p>

                {/* Navigation Arrows */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <button
                    onClick={handlePrevSlide}
                    className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-darkgreen hover:border-darkgreen hover:text-white transition-all duration-300"
                    aria-label="Previous team members"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-darkgreen hover:border-darkgreen hover:text-white transition-all duration-300"
                    aria-label="Next team members"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              </div>

              {/* Right - Team Cards Carousel */}
              <div className="relative overflow-hidden">
                <motion.div
                  className="flex gap-6"
                  animate={{
                    x: `calc(-${currentSlide * 50}% - ${currentSlide * 12}px)`
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  {team.map((member, index) => (
                    <motion.div
                      key={index}
                      className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex-shrink-0"
                      style={{ width: "calc(50% - 12px)" }}
                    >
                      {/* Image */}
                      <div className="relative h-[450px] overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-darkgreen via-darkgreen/50 to-transparent opacity-80"></div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                          <p className="text-cream text-sm uppercase tracking-wider">{member.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos Section */}
        {/* <section className="py-20 bg-[#F5F5F0]">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-wrap items-center justify-between gap-12 lg:gap-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 flex-1 flex justify-center"
              whileHover={{ y: -5 }}
            >
              <img
                src="/logo/green.svg"
                alt="CRSA"
                className="h-12 lg:h-16 w-auto object-contain"
              />
            </motion.div>

            <motion.div
              className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 flex-1 flex justify-center"
              whileHover={{ y: -5 }}
            >
              <img
                src="/images/partners/crsa.png"
                alt="CRSA Partner"
                className="h-16 lg:h-20 w-auto object-contain"
              />
            </motion.div>

            <motion.div
              className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 flex-1 flex justify-center"
              whileHover={{ y: -5 }}
            >
              <img
                src="/images/partners/um6p.png"
                alt="Mohammed VI Polytechnic University"
                className="h-20 lg:h-24 w-auto object-contain"
              />
            </motion.div>

            <motion.div
              className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 flex-1 flex justify-center"
              whileHover={{ y: -5 }}
            >
              <img
                src="/images/partners/ocp.png"
                alt="OCP Group"
                className="h-20 lg:h-24 w-auto object-contain"
              />
            </motion.div>

            <motion.div
              className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 flex-1 flex justify-center"
              whileHover={{ y: -5 }}
            >
              <img
                src="/images/partners/mit.png"
                alt="Massachusetts Institute of Technology"
                className="h-24 lg:h-28 w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </section> */}






        {/* Scroll to Top Button */}
        <motion.button
          className="fixed bottom-8 right-8 w-14 h-14 bg-cream rounded-full flex items-center justify-center shadow-lg hover:bg-darkgreen hover:text-cream transition-all hover:scale-110 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </WebsiteLayout>
  );
};

export default AboutPage;
