import React from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { MinimalBreadcrumb } from "../components/Breadcrumb/BreadcrumbVariations";
import WebsiteLayout from "../components/Layout/WebsiteLayout";

const ArticlesPage: React.FC = () => {
  const articles = [
        {
      image: "/images/articles/Oubaha.png",
      title: "Multiscale assessment of drought spatiotemporal dynamics over the Mediterranean region: a case study of Morocco",
      description: "Understanding drought occurrence and evolution is important in minimizing the impacts associated with it.",
      date: "July 2025",
      category: "Journal of Hydrology",
      author: "Anas Oubaha",
      readTime: "8 min read",
      link: "https://www.sciencedirect.com/science/article/pii/S0022169425010613?pes=vor&utm_source=wiley&getft_integrator=wiley"
      
    },
    {
      image: "/images/articles/fig4.png",
      title: "TEMLI: A High-Resolution Air Temperature Estimation Using Machine Learning and Land Surface Data Across Morocco",
      description: "Exploring innovative machine learning approaches for accurate temperature modeling using satellite-derived land surface data across diverse Moroccan landscapes.",
      date: "April 2025",
      category: "Springer Nature Link",
      author: "Wiam Salih",
      readTime: "8 min read",
      link: "https://link.springer.com/article/10.1007/s41748-025-00629-8"
      
    },
    {
      image: "/images/articles/fig3.jpg",
      title: "Physics-informed Neural Networks for Enhanced Reference Evapotranspiration Estimation in Morocco",
      description: "Reference evapotranspiration is essential for agricultural water management, crop productivity, and irrigation systems.",
      date: "April 2025",
      category: "Science Direct",
      author: "Dr. Chouaib El Hachimi",
      readTime: "10 min read",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0045653525001808"
    },
  
    {
      image: "/images/articles/fig2.png",
      title: "Evaluation of Multi-Source Satellite Products in Simulating Observed Precipitation over the Tensift Basin",
      description: "The Tensift basin in Morocco is prominent for its ecological and hydrological diversity. This is marked by rivers flowing into areas such as Ourika. In addition to agriculture, the basin is a hub of variable land use systems.",
      date: "February 2022",
      category: "Remote Sensing",
      author: "Wiam Salih",
      readTime: "12 min read",
      link: "https://www.mdpi.com/2072-4292/14/5/1171"
    },
    {
      image: "/images/articles/fig1.webp",
      title: "A Comprehensive Assessment of Satellite Precipitation Products over a Semi-Arid Region",
      description: "Global warming has increased the frequency and intensity of extreme weather events worldwide. Arid and semi-arid regions, such as the Tensift basin in Morocco, have experienced severe water shortages as a result.",
      date: "November 2023",
      category: "Natural Hazards",
      author: "Wiam Salih",
      readTime: "9 min read",
      link:"https://link.springer.com/article/10.1007/s11069-023-06317-y"
    },
    {
      image: "/images/articles/droughtResult.png",
      title: "Drought cascade lag time estimation across Africa based on remote sensing of hydrological cycle components",
      description: "Droughts in Africa have a disproportionate detrimental influence on food security, water supply, social equilibrium and the economy compared to other regions in the World. Crop growth is principally rain-fed with highly seasonal rainfall regimes over most of the Continent. ",
      date: "December 2023",
      category: "Advances in water resources",
      author: "Dr. A. Amazirh",
      readTime: "7 min read",
      link: "https://www.sciencedirect.com/science/article/pii/S0309170823002208"
    },
    {
      image: "/images/articles/rainfall.png",
      title: "Accuracy assessment and bias correction of remote sensing–based rainfall products over semiarid watersheds",
      description: "In the context of water scarcity, the strong spatiotemporal fluctuation of rainfall combined with the sparsity of the rain gauge (RG) measurement networks",
      date: "August 2023",
      category: "Theoretical and Applied Climatology",
      author: "Dr. Hamza Ouatiki",
      readTime: "11 min read",
      link: "https://link.springer.com/article/10.1007/s00704-023-04586-y"
    },
    {
      image: "/images/articles/climate.png",
      title: "When climate variability partly compensates for groundwater depletion: An analysis of the GRACE signal in Morocco",
      description: "Since April 2002, the Gravity Recovery and Climate Experiment (GRACE) mission have opened new pathways for hydrologists to monitor the changes in terrestrial total water storage (TWS)",
      date: "August 2022",
      category: "Journal of Hydrology: Regional Studies",
      author: "Dr. Hamza Ouatiki",
      readTime: "6 min read",
      link: "https://www.sciencedirect.com/science/article/pii/S2214581822001902?via%3Dihub"
    },
 
  ];

  const categories = ["All", "Remote Sensing", "Machine Learning", "Agriculture", "Climate", "Water Resources"];

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  // Filter articles based on search query and category
  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <WebsiteLayout>
      <div className="bg-white">
        {/* Hero Section with Breadcrumb */}
        <MinimalBreadcrumb
          items={[
            // { label: "Research", path: "/research" },
            { label: "Publications" }
          ]}
          title="Discover our latest scientific publications"
          subtitle="Explore cutting-edge research in Earth Observation, climate science, and agricultural innovation. Access peer-reviewed articles and studies advancing sustainable development across Africa."
          label="Browse Articles"
        />
      {/* Category Filter */}
      <section className="py-8 sticky top-[80px] bg-white/95 backdrop-blur-sm z-40 border-b border-darkgreen/10">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-2xl">
              <input
                type="text"
                placeholder="Search articles by title, author, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3.5 pl-12 rounded-full border-2 border-darkgreen/20 focus:border-darkgreen focus:outline-none text-green2 placeholder:text-green2/50 transition-colors"
              />
              <svg 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green2/50" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-green2/50 hover:text-green2 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-darkgreen text-greenlight shadow-lg"
                      : "bg-greenlight/30 text-green2 hover:bg-greenlight/50"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-2 text-green2/70">
              <span className="text-sm font-semibold">{filteredArticles.length} {filteredArticles.length === 1 ? 'Article' : 'Articles'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          {filteredArticles.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <svg className="w-24 h-24 mx-auto mb-6 text-green2/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-3xl font-bold text-green2 mb-3">No Articles Found</h3>
              <p className="text-green2/70 text-lg mb-6">Try adjusting your search or filter to find what you're looking for.</p>
              <Button 
                className="bg-darkgreen text-greenlight hover:bg-darkgreen/90 font-semibold px-8 py-6 rounded-full transition-all hover:scale-105"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredArticles.map((article, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkgreen/70 via-darkgreen/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-greenlight text-green2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-green2/60">
                    <span className="font-medium">{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-green2 leading-tight line-clamp-2 group-hover:text-green2/80 transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-green2/70 leading-relaxed text-sm line-clamp-3">
                    {article.description}
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-2 border-t border-darkgreen/10">
                    <div className="w-10 h-10 rounded-full bg-greenlight flex items-center justify-center">
                      <span className="text-green2 font-bold text-base">
                        {article.author.split(" ")[1]?.charAt(0) || "A"}
                      </span>
                    </div>
                    <span className="text-sm text-green2/70 font-medium">{article.author}</span>
                  </div>

                  {/* Read More Button */}
                  <Button 
                    as="a"
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-darkgreen text-greenlight hover:bg-darkgreen/90 font-semibold py-6 rounded-full text-base transition-all hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Read Full Article</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </div>
              </motion.div>
            ))}
            </div>
          )}

          {/* Load More Button - only show if there are results */}
          {/* {filteredArticles.length > 0 && (
            <motion.div
              className="flex justify-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Button className="bg-darkgreen text-cream hover:bg-[#4a6741] font-semibold px-12 py-6 rounded-full text-lg transition-all hover:scale-105 flex items-center space-x-2">
                <span>Load More Articles</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </motion.div>
          )} */}
        </div>
      </section>

        

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-greenlight text-green2 rounded-full flex items-center justify-center shadow-lg hover:bg-darkgreen hover:text-greenlight transition-all hover:scale-110 z-50"
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

export default ArticlesPage;
