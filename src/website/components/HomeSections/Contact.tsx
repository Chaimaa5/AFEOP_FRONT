import React, { useState } from "react";
import { Button } from "../Button";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="bg-neutral-light py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0  overflow-hidden ">
          
          {/* Left Side - Form */}
          <div className="p-8 lg:p-12">
            {/* Badge */}
            <div className="inline-block mb-4">
              <span className="px-3 py-1 border border-darkgreen/30 rounded-full text-green2 text-xs font-medium tracking-wider uppercase">
                DROP US A LINE
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-green2 mb-6 leading-tight">
              Let's Start Working<br />
              Together. Get in Touch
            </h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-0 py-3 border-0 border-b border-darkgreen/20 bg-transparent focus:border-darkgreen focus:outline-none transition-colors duration-300 text-green2 placeholder:text-green2/40 text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full px-0 py-3 border-0 border-b border-darkgreen/20 bg-transparent focus:border-darkgreen focus:outline-none transition-colors duration-300 text-green2 placeholder:text-green2/40 text-sm"
                />
              </div>

              {/* subject */}
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-0 py-3 border-0 border-b border-darkgreen/20 bg-transparent focus:border-darkgreen focus:outline-none transition-colors duration-300 text-green2 placeholder:text-green2/40 text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Your Comment"
                  className="w-full px-0 py-3 border-0 border-b border-darkgreen/20 bg-transparent focus:border-darkgreen focus:outline-none transition-colors duration-300 resize-none text-green2 placeholder:text-green2/40 text-sm"
                />
              </div>

              {/* Submit Button */}
            <Button
                variant="secondary"
                size="sm"
                shape="pill"
                showDot
                redirect="/contact"
              >
                Get in Touch
              </Button>
            </form>
          </div>

          {/* Right Side - Map */}
          <div className="relative rounded-2xl h-[500px] lg:h-full min-h-[500px]">
            {/* Map Container */}
            <div className="absolute inset-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.8899274!2d-7.951461!3d32.231389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdaf7b845e8ffba1%3A0x6b7d4e8c7f8e8f8e!2sUniversit%C3%A9%20Mohammed%20VI%20Polytechnique!5e0!3m2!1sen!2sma!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UM6P Location"
                className="grayscale"
              ></iframe>
            </div>

            {/* Location Info Card */}
            <motion.div
              className="absolute top-6 right-6 bg-white rounded-xl shadow-xl p-5 max-w-xs z-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-lg font-bold text-green2 mb-1">UM6P - Ben Guerir</h3>
              <p className="text-green2/70 text-xs mb-0.5">
                Mohammed VI Polytechnic University
              </p>
              <p className="text-green2/70 text-xs mb-3">
                Ben Guerir, Morocco
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-green2/70">4.5</span>
              </div>
              
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green2 text-xs hover:underline inline-flex items-center gap-1"
              >
                View larger map
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
