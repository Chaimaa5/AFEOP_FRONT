import React from "react";
import { Button } from "../Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProjectHighlight: React.FC = () => {
    const navigate = useNavigate();

    const features = [
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
            ),
            title: "African Data Infrastructure",
            description: "Building a comprehensive Earth Observation data portal specifically designed for African applications, leveraging UM6P's high storage and cloud computing capabilities.",
        },
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            ),
            title: "Empowering African Researchers",
            description: "Enabling African researchers to process large satellite datasets for African applications through near-real-time, efficient, and scalable data processing.",
        },
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Cloud Computing Architecture",
            description: "Combining Earth Observation data with spatial information, systems modeling, and remote sensing within a creative big data and cloud computing framework.",
        },
    ];

    return (
        <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0"></div>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        className="space-y-8 order-1 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="px-6 py-2 border-2 border-darkgreen/30 rounded-full text-green2 text-sm font-medium tracking-wider uppercase">
                                EARTH OBSERVATION PLATFORM
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-green2 leading-[1.1] mb-0"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            African Geospatial
                            <br />
                            Earth Observation
                            <br />
                            Data Portal
                        </motion.h2>

                        {/* Read More Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Button variant="primary" size="md" showDot redirect="/about">
                                Learn More
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Image */}
                    <motion.div
                        className="relative order-2 lg:order-2 flex justify-center items-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden mx-auto">
                            <img
                                src="/images/africa.png"
                                alt="Aerial view of agricultural land with technology overlay"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        >
                            <div className="flex flex-col items-start space-y-4">
                                {/* Icon */}
                                <div className="flex-shrink-0 text-[#9CA67C] group-hover:text-green2 transition-colors duration-300">
                                    {feature.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-green2 mb-2 group-hover:text-[#9CA67C] transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>

                                    {/* Expandable Button */}
                                    <button className="mt-4 w-10 h-10 rounded-full hover:bg-cream hover:text-green2 flex items-center justify-center bg-darkgreen text-cream transition-all duration-300 hover:scale-110">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 4v16m8-8H4"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectHighlight;
