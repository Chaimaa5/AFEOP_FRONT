import React from "react";

const YieldPrediction: React.FC = () => {
  const solutions = [
    {
      number: "01",
      title: "Soft wheat",
      image: "https://imgs.search.brave.com/TJyFWknlTw2uSRBj9Euh7blVA0fmrNzSXN3V5hiPWiU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbHVz/aC1ncmVlbi13aGVh/dC1maWVsZC1wbmct/OTQtZGZmYXl6ZWkw/aHB1NzM2Zi5wbmc",
      imageAlt: "Fresh corn",
      bgColor: "hover:bg-gradient-to-br hover:from-yellow-50 hover:to-green-50",
    },
    {
      number: "02",
      title: "Durum wheat",
      image: "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/serv-1-2.webp",
      imageAlt: "Wheat grains",
      bgColor: "hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50",
    },
    {
      number: "03",
      title: "Barley",
      image: "https://imgs.search.brave.com/VMfvr6mRFC6U5KzxLEzh900B3QLT5IEGoCk_Gc5YH28/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMi9CYXJs/ZXktUE5HLVBpY3R1/cmUucG5n",
      imageAlt: "Sunflower seeds",
      bgColor: "hover:bg-gradient-to-br hover:from-gray-50 hover:to-slate-100",
    },
   
  ];

  return (
    <section className="py-20 bg-greenlight">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 border-2 border-darkgreen/30 rounded-full text-green2 text-sm font-medium tracking-wider">
              YIELD FORCAST
            </span>
          </div>

          <div className="flex justify-between items-start">
            <h2 className="text-5xl lg:text-6xl font-bold text-green2 leading-tight max-w-2xl">
              What Our an Agricultural Company Offers
            </h2>

            {/* Navigation dots */}
            {/* <div className="hidden lg:flex items-center space-x-3 mt-8">
              <button className="w-12 h-12 rounded-full border-2 border-[#2D2416] flex items-center justify-center hover:bg-[#2D2416] hover:text-white transition-all">
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#2D2416]"></div>
                <div className="w-3 h-3 rounded-full bg-[#2D2416]/30"></div>
                <div className="w-3 h-3 rounded-full bg-[#2D2416]/30"></div>
              </div>
              <button className="w-12 h-12 rounded-full border-2 border-[#2D2416] flex items-center justify-center hover:bg-[#2D2416] hover:text-white transition-all">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div> */}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-greenlight hover:bg-cream rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border-2 border-darkgreen hover:scale-110 min-h-[400px]"
            >
              {/* Card Content */}
              <div className="relative p-8 pb-32 z-10">
                <span className="text-gray-400 text-base font-medium">
                  {solution.number}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#2D2416] mt-3 mb-6 leading-tight">
                  {solution.title}
                </h3>

                {/* Arrow Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#2D2416] group-hover:bg-[#2D2416] transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-[#2D2416] group-hover:text-white transition-colors"
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
                </div>
              </div>

              {/* Image at bottom-right - Always visible, clean look */}
              <div className="absolute bottom-0 right-0 w-[70%] h-[55%] overflow-hidden pointer-events-none">
                <img
                  src={solution.image}
                  alt={solution.imageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-[#2D2416]/80 text-lg">
            We Embrace Smart Technologies And Proven Methods That Bring Efficiency.{" "}
            <a
              href="#"
              className="text-[#2D2416] font-semibold underline underline-offset-4 decoration-2 hover:text-[#9CA67C] transition-colors"
            >
              View all Offers
            </a>
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-cream rounded-full flex items-center justify-center shadow-lg hover:bg-cream/90 transition-all hover:scale-110 z-50">
        <svg
          className="w-6 h-6 text-[#2D2416]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </section>
  );
};

export default YieldPrediction;
