import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WebsiteLayout from "../components/Layout/WebsiteLayout";
import { MinimalBreadcrumb } from "../components/Breadcrumb/BreadcrumbVariations";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is AFEOP's core infrastructure?",
      answer:
        "AFEOP operates a comprehensive Earth observation platform built on Cloud-Optimized GeoTIFF (COG) infrastructure. We maintain a vast satellite data repository processed for rapid access and analysis, serving researchers, scientists, and institutions with high-performance geospatial data services across Africa.",
    },
    {
      question: "What are the main applications available on the platform?",
      answer:
        "Our platform provides four core scientific applications: (1) Soil Moisture Monitoring - high-resolution fused satellite data for hydrological analysis, (2) Drought Assessment - multi-index drought monitoring and forecasting, (3) Yield Prediction - machine learning models for crop productivity forecasting, and (4) Evapotranspiration Analysis - water balance and agricultural water use estimation.",
    },
    {
      question: "How do you process and serve satellite data?",
      answer:
        "We utilize Cloud-Optimized GeoTIFF (COG) format for all satellite imagery, enabling efficient streaming and partial reading of large datasets. Our infrastructure integrates data from multiple satellite missions (Sentinel, Landsat, MODIS, SMAP) with automated processing pipelines, GeoServer for WMS/WCS services, and PostGIS for spatial queries and analysis.",
    },
    {
      question: "What satellite data sources do you integrate?",
      answer:
        "AFEOP integrates multi-source Earth observation data including Sentinel-1 (SAR), Sentinel-2 (optical), Landsat 8/9 (multispectral), MODIS (Terra/Aqua), SMAP (soil moisture), ERA5 climate reanalysis, and other mission data. All datasets are harmonized, cloud-masked, and processed to analysis-ready data (ARD) format for scientific research.",
    },
    {
      question: "Can I access your data programmatically via API?",
      answer:
        "Yes. AFEOP provides RESTful APIs for programmatic access to all datasets and applications. You can query time-series data, download raster layers, access pre-computed indices (NDVI, EVI, NDWI), and integrate our services into your research workflows. We support standard OGC protocols (WMS, WCS, WFS) and provide comprehensive API documentation.",
    },
    {
      question: "What is your spatial and temporal coverage?",
      answer:
        "AFEOP provides pan-African coverage with spatial resolutions ranging from 10m (Sentinel-2) to 1km (MODIS) depending on the product. Temporal coverage extends from 2015 to present with daily to dekadal (10-day) updates. Historical archives are available for climate analysis, trend detection, and long-term environmental monitoring studies.",
    },
    {
      question: "How accurate are your soil moisture and drought products?",
      answer:
        "Our fused soil moisture product combines optical, thermal, and microwave data with machine learning calibration against in-situ measurements, achieving RMSE < 0.04 m³/m³. Drought indices are validated against meteorological records and show strong correlation (R² > 0.85) with ground observations. All products include uncertainty metrics and validation reports.",
    },
    {
      question: "What technical requirements are needed to use the platform?",
      answer:
        "The web platform works on modern browsers with WebGL support for map rendering. For API access, any programming language with HTTP capabilities works (Python, R, JavaScript). We recommend Python with libraries like requests, rasterio, and geopandas for advanced geospatial analysis. Docker containers are available for reproducible research environments.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <WebsiteLayout>
      {/* Breadcrumb */}
      <MinimalBreadcrumb
        title="Frequently Asked Questions"
        subtitle="Technical information about AFEOP's Earth observation platform, data infrastructure, and scientific applications."
        items={[
          // { label: "Home", path: "/" },
          { label: "FAQs", path: "/faqs" },
        ]}
      />

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Side - Title & CTA */}
            <motion.div
              className="lg:sticky lg:top-24 h-fit"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="light">
                TECHNICAL INFORMATION
              </Badge>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight mt-6">
                Platform & Data Infrastructure FAQs
              </h2>

              <Button
                variant="secondary"
                size="md"
                shape="pill"
                showDot
                redirect="/contact"
              >
                Get in Touch
              </Button>
            </motion.div>

            {/* Right Side - FAQ List */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-gray-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-5 flex items-center justify-between text-left group"
                  >
                    <h3 className="text-lg lg:text-xl font-semibold text-green2/50 group-hover:text-black transition-colors duration-300 pr-8">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-green2 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-gray-600 text-sm lg:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-darkgreen">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-greenlight mb-4">
              Need More Technical Information?
            </h2>
            <p className="text-white/80 text-base mb-6">
              Our team is available to discuss research collaborations, data partnerships, and custom processing workflows for your scientific projects.
            </p>
            <Button
              variant="primary"
              size="lg"
              shape="pill"
              redirect="/contact"
            >
              Contact Us
              <svg
                className="w-4 h-4 ml-2"
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
            </Button>
          </motion.div>
        </div>
      </section>
    </WebsiteLayout>
  );
};

export default FAQPage;
