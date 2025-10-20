import React from "react";
import { Button } from "@nextui-org/react";

const VerdaHero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
          alt="Tractor in field at sunset"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-6">
        <div className="h-full flex flex-col justify-between py-32">
          {/* Main Hero Text - Left Side */}
          <div className="flex justify-between items-start mt-16">
            <div className="max-w-3xl">
              <h1 className="text-cream font-bold leading-tight mb-8">
                <span className="block text-7xl lg:text-8xl mb-2">Cultivating</span>
                <span className="block text-7xl lg:text-8xl mb-2">a Sustainable</span>
                <span className="block text-7xl lg:text-8xl">Future</span>
              </h1>
            </div>

            {/* Right Side Text */}
            <div className="hidden lg:block max-w-md mt-8">
              <p className="text-white/90 text-lg leading-relaxed">
                We are committed to growing more than crops — we're growing a
                better future for people, communities, and the planet.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-end">
            {/* Left Bottom - More About Us & Phone */}
            <div className="flex flex-col space-y-4">
              <Button
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-[#2D2416] font-semibold px-8 py-6 rounded-full transition-all duration-300 flex items-center space-x-3"
                size="lg"
              >
                <span className="w-3 h-3 bg-white rounded-full"></span>
                <span>More About Us</span>
              </Button>

              <div className="flex items-center space-x-3 text-white">
                <span className="text-white/80 font-medium">Call Us:</span>
                <a
                  href="tel:+18001234556"
                  className="text-cream font-bold text-lg hover:underline underline-offset-4 decoration-2"
                >
                  +1 800 123 45 56
                </a>
              </div>
            </div>

            {/* Right Bottom - Video Card */}
            <div className="hidden lg:block">
              <div className="relative group cursor-pointer">
                <div className="w-[380px] h-[240px] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="From Field to Market"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-cream">
                      <svg
                        className="w-7 h-7 text-[#2D2416] ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-2xl font-bold">
                      From Field To Market
                    </h3>
                  </div>
                </div>

                {/* Pink Badge */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#FF4D7D] rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default VerdaHero;
