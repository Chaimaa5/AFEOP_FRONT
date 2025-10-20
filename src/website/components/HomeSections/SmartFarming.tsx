import React from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const ProjectHighlight: React.FC = () => {
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
        <section className="relative py-40  h-[1000px]  lg:py-32 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1687985826611-80b714011d0b?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                    }}
                ></div>
            </div>

            <div className="relative container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        className="space-y-8 order-2 lg:order-1"
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
                            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-green2 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            African Data Portal
                            <br />
                            for Earth Observation
                            <br />
                            Research
                        </motion.h2>

                        {/* Read More Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Button className="bg-cream text-green2 hover:bg-[#d4c9a5] font-semibold px-8 py-6 rounded-full text-base transition-all hover:scale-105 flex items-center space-x-2">
                                <span className="w-2 h-2 bg-darkgreen rounded-full"></span>
                                <span>Read More</span>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Image */}
                    <motion.div
                        className="relative order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            {/* Main Image */}
                            <img
                                src="https://images.unsplash.com/photo-1687985826611-80b714011d0b?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Aerial view of agricultural land with technology overlay"
                                className="w-full h-[50%] lg:h-[50%] object-cover"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-darkgreen/30 via-transparent to-transparent"></div>
                        </div>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
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
                                    <button className="mt-4 w-10 h-10 rounded-full bg-cream text-green2 flex items-center justify-center hover:bg-darkgreen hover:text-cream transition-all duration-300 hover:scale-110">
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
