import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home as HomeIcon } from "lucide-react";
import { AfricaSatelliteLogo } from "./AfricaSatelliteLogo";

// ============================================================================
// VARIATION 1: Minimal Modern Breadcrumb
// Clean, minimal design with subtle animations and icons
// ============================================================================

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  title: string;
  subtitle?: string;
  label?: string;
}

export const MinimalBreadcrumb = ({ items, title, subtitle, label }: BreadcrumbProps) => {
  return (
    <section className=" flex flex-col justify-center items-start  relative overflow-hidden min-h-[60vh]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=3274&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-darkgreen/90 via-darkgreen/85 to-[#2d5f62]/90" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative container mx-auto  px-10 max-w-8xl py-16 lg:py-32">
        {/* Breadcrumb Navigation */}
        <motion.nav
          className="flex items-center space-x-2 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="flex items-center text-greenlight/70 hover:text-greenlight transition-colors duration-300 group"
          >
            <HomeIcon className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Home</span>
          </Link>
          
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-greenlight/50" />
              {item.path ? (
                <Link 
                  to={item.path}
                  className="text-sm font-medium text-greenlight/70 hover:text-greenlight transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-sm font-medium text-greenlight">{item.label}</span>
              )}
            </div>
          ))}
        </motion.nav>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {label && (
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="px-4 py-1.5 border border-greenlight/40 rounded-full text-greenlight text-xs font-medium tracking-widest uppercase">
                {label}
              </span>
            </motion.div>
          )}

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// ============================================================================
// VARIATION 2: Image Overlay Breadcrumb
// Features a background image with overlay and elegant typography
// ============================================================================

interface ImageBreadcrumbProps extends BreadcrumbProps {
  backgroundImage: string;
  overlayOpacity?: number;
}

export const ImageOverlayBreadcrumb = ({ 
  items, 
  title, 
  subtitle, 
  label,
  backgroundImage,
  overlayOpacity = 0.7
}: ImageBreadcrumbProps) => {
  return (
    <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-br from-darkgreen via-darkblue to-darkgreen"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-cream/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-cream/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative container mx-auto px-6 h-full flex flex-col justify-center max-w-7xl">
        {/* Breadcrumb Navigation */}
        <motion.nav
          className="flex flex-wrap items-center gap-2 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="flex items-center px-3 py-1.5 bg-cream/10 backdrop-blur-sm rounded-lg text-cream hover:bg-cream/20 transition-all duration-300"
          >
            <HomeIcon className="w-3.5 h-3.5 mr-1.5" />
            <span className="text-sm font-medium">Home</span>
          </Link>
          
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-cream/60" />
              {item.path ? (
                <Link 
                  to={item.path}
                  className="px-3 py-1.5 bg-cream/10 backdrop-blur-sm rounded-lg text-cream hover:bg-cream/20 transition-all duration-300 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="px-3 py-1.5 bg-cream/20 backdrop-blur-sm rounded-lg text-cream text-sm font-semibold">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </motion.nav>

        {/* Content */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {label && (
            <motion.span
              className="inline-block px-5 py-2 mb-5 border-2 border-cream/40 rounded-full text-cream text-sm font-bold tracking-widest uppercase backdrop-blur-md bg-white/5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {label}
            </motion.span>
          )}

          <h1 className="text-5xl lg:text-7xl font-bold text-cream mb-5 leading-tight drop-shadow-lg">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg lg:text-xl text-cream/90 leading-relaxed drop-shadow-md">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// ============================================================================
// VARIATION 3: Split Layout Breadcrumb
// Modern split design with content on one side and decorative elements on the other
// ============================================================================

export const SplitLayoutBreadcrumb = ({ items, title, subtitle, label }: BreadcrumbProps) => {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[60vh] py-16 lg:py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb Navigation */}
            <nav className="flex flex-wrap items-center gap-2 mb-8">
              <Link 
                to="/" 
                className="flex items-center text-green2/70 hover:text-green2 transition-colors duration-300 group"
              >
                <div className="flex items-center space-x-1 border-b-2 border-transparent group-hover:border-darkgreen transition-all duration-300 pb-0.5">
                  <HomeIcon className="w-4 h-4" />
                  <span className="text-sm font-semibold">Home</span>
                </div>
              </Link>
              
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-darkgreen/30" />
                  {item.path ? (
                    <Link 
                      to={item.path}
                      className="text-sm font-semibold text-green2/70 hover:text-green2 border-b-2 border-transparent hover:border-darkgreen transition-all duration-300 pb-0.5"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-sm font-bold text-green2 border-b-2 border-darkgreen pb-0.5">
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </nav>

            {/* Content */}
            {label && (
              <motion.div
                className="inline-block mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="px-5 py-2 bg-darkgreen text-cream text-xs font-bold tracking-widest uppercase rounded-md shadow-lg">
                  {label}
                </span>
              </motion.div>
            )}

            <h1 className="text-4xl lg:text-6xl font-bold text-green2 mb-6 leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-lg text-green2/80 leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>

          {/* Right Decorative Side - Africa Globe with Satellites */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-[400px] flex items-center justify-center">
              {/* Central Globe - Africa */}
              <motion.div
                className="relative z-10 w-64 h-64 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #1A674E 0%, #2d8a6a 50%, #1A674E 100%)',
                  boxShadow: 'inset -20px -20px 40px rgba(0,0,0,0.3), 0 20px 50px rgba(26, 103, 78, 0.4)',
                }}
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Africa continent shape */}
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-40">
                  <path
                    d="M 48,20 C 48,20 52,18 54,20 C 56,22 58,20 60,22 C 62,24 64,26 64,30 C 64,34 66,36 66,40 C 66,44 64,46 64,50 C 64,54 62,58 60,60 C 58,62 56,66 54,68 C 52,70 48,72 46,70 C 44,68 42,66 40,64 C 38,62 36,58 36,54 C 36,50 38,46 38,42 C 38,38 40,34 42,30 C 44,26 46,22 48,20 Z"
                    fill="#204E51"
                    stroke="#9CA67C"
                    strokeWidth="0.5"
                  />
                </svg>

                {/* Grid lines - latitude/longitude */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`lat-${i}`}
                      className="absolute w-full border-t border-darkgreen/20"
                      style={{ top: `${(i + 1) * 12}%` }}
                    />
                  ))}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`lon-${i}`}
                      className="absolute h-full border-l border-darkgreen/20"
                      style={{ left: `${(i + 1) * 12}%` }}
                    />
                  ))}
                </div>

                {/* Atmospheric glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#9CA67C]/20 via-transparent to-transparent" />
              </motion.div>

              {/* Satellite 1 - High orbit (top right) */}
              <motion.div
                className="absolute"
                style={{ right: '15%', top: '5%' }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Satellite body */}
                <div className="relative">
                  {/* Main body */}
                  <div className="w-8 h-10 bg-gradient-to-b from-slate-700 to-slate-800 rounded-sm border border-slate-600 relative">
                    {/* Antenna */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-slate-600" />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-500 rounded-full shadow-lg shadow-amber-500/50" />
                    
                    {/* Camera lens */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-slate-600" />
                  </div>
                  
                  {/* Solar panels */}
                  <div className="absolute top-2 -left-8 w-7 h-6 bg-gradient-to-r from-blue-900 to-blue-800 border border-blue-700">
                    <div className="grid grid-cols-3 gap-0.5 p-0.5 h-full">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-blue-400/30" />
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-2 -right-8 w-7 h-6 bg-gradient-to-l from-blue-900 to-blue-800 border border-blue-700">
                    <div className="grid grid-cols-3 gap-0.5 p-0.5 h-full">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-blue-400/30" />
                      ))}
                    </div>
                  </div>

                  {/* Signal beam to Earth */}
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-20 origin-top"
                    style={{
                      background: 'linear-gradient(180deg, rgba(34, 211, 238, 0.6), transparent)',
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>
              </motion.div>

              {/* Satellite 2 - Low orbit (left) */}
              <motion.div
                className="absolute"
                style={{ left: '8%', top: '35%' }}
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="relative">
                  {/* CubeSat body */}
                  <div className="w-6 h-6 bg-gradient-to-br from-slate-600 to-slate-800 rounded border border-slate-500 relative">
                    {/* Central sensor */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-700 shadow-lg shadow-emerald-400/50" />
                    </div>
                  </div>
                  
                  {/* Mini solar panels - 4 sides */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-2 bg-gradient-to-b from-indigo-800 to-indigo-900 border border-indigo-700" />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-2 bg-gradient-to-t from-indigo-800 to-indigo-900 border border-indigo-700" />
                  <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-2 h-4 bg-gradient-to-r from-indigo-800 to-indigo-900 border border-indigo-700" />
                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-2 h-4 bg-gradient-to-l from-indigo-800 to-indigo-900 border border-indigo-700" />
 
                  {/* Signal */}
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-px h-16"
                    style={{
                      background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.6), transparent)',
                    }}
                    animate={{
                      opacity: [0.4, 0.9, 0.4],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                </div>
              </motion.div>

              {/* Satellite 3 - Medium orbit (bottom right) */}
              <motion.div
                className="absolute"
                style={{ right: '10%', bottom: '15%' }}
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <div className="relative">
                  {/* Weather satellite - cylindrical */}
                  <div className="relative">
                    {/* Main cylinder */}
                    <div className="w-6 h-12 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg border border-slate-500">
                      {/* Dome top */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-3 bg-gradient-to-b from-slate-500 to-slate-600 rounded-t-full border-t border-slate-400" />
                      
                      {/* Antenna dish */}
                      <div className="absolute top-2 -right-4 w-3 h-3 bg-amber-400 rounded-full border-2 border-amber-600" />
                      <div className="absolute top-2 -right-4 w-3 h-3 bg-amber-400/30 rounded-full animate-ping" />
                    </div>

                    {/* Extended solar panel */}
                    <div className="absolute top-3 -left-10 w-9 h-6 bg-gradient-to-r from-purple-900 to-purple-800 border border-purple-700">
                      <div className="grid grid-cols-3 gap-px p-px h-full">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="bg-purple-400/20" />
                        ))}
                      </div>
                    </div>

                    {/* Signal beam */}
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-px h-12"
                      style={{
                        background: 'linear-gradient(180deg, rgba(251, 191, 36, 0.6), transparent)',
                      }}
                      animate={{
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 1,
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Orbit paths */}
              <motion.div
                className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-darkgreen/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-[#9CA67C]/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Ambient glow around Earth */}
              <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#9CA67C]/10 to-transparent blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// VARIATION 4: Logo-Centered Breadcrumb (BONUS)
// Features the AFEOP logo prominently with satellite orbit animations
// Perfect for homepage and major landing pages
// ============================================================================

export const LogoCenteredBreadcrumb = ({ items, title, subtitle, label }: BreadcrumbProps) => {
  return (
    <section className="relative overflow-hidden min-h-[70vh]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3272&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-darkgreen/90 via-darkgreen/85 to-[#2d5f62]/90" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh] py-20">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb Navigation */}
            <motion.nav
              className="flex items-center space-x-2 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                to="/" 
                className="flex items-center text-greenlight/70 hover:text-greenlight transition-colors duration-300 group"
              >
                <HomeIcon className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Home</span>
              </Link>
              
              {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4 text-greenlight/50" />
                  {item.path ? (
                    <Link 
                      to={item.path}
                      className="text-sm font-medium text-greenlight/70 hover:text-greenlight transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-sm font-medium text-greenlight">{item.label}</span>
                  )}
                </div>
              ))}
            </motion.nav>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {label && (
                <motion.div
                  className="inline-block mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="px-4 py-1.5 border border-greenlight/40 rounded-full text-greenlight text-xs font-medium tracking-widest uppercase">
                    {label}
                  </span>
                </motion.div>
              )}

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                {title}
              </h1>

              {subtitle && (
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </motion.div>
          </motion.div>

          {/* Right Side - Logo with Orbit Animation */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Outer orbit ring with satellite */}
              <motion.div
                className="absolute w-72 h-72 rounded-full"
                style={{
                  border: '2px solid rgba(26, 103, 78, 0.12)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-darkgreen to-[#9CA67C] rounded-full shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(26, 103, 78, 0.4)",
                      "0 0 20px rgba(26, 103, 78, 0.8)",
                      "0 0 0px rgba(26, 103, 78, 0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              {/* Middle orbit ring with satellite */}
              <motion.div
                className="absolute w-56 h-56 rounded-full"
                style={{
                  border: '1.5px solid rgba(156, 166, 124, 0.15)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-gradient-to-br from-[#9CA67C] to-darkgreen rounded-full shadow-lg"
                />
              </motion.div>

              {/* Inner orbit ring with satellite */}
              <motion.div
                className="absolute w-40 h-40 rounded-full"
                style={{
                  border: '1.5px solid rgba(26, 103, 78, 0.15)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-darkgreen to-[#9CA67C] rounded-full shadow-lg"
                />
              </motion.div>

              {/* Central Icon */}
              <motion.div
                className="relative z-10"
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <AfricaSatelliteLogo size={280} className="filter drop-shadow-2xl" />
              </motion.div>

              {/* Scanning effect - rotating beam */}
              <motion.div
                className="absolute w-1 h-36 bg-gradient-to-b from-transparent via-[#9CA67C]/20 to-transparent origin-top"
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'top center',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Pulsing background glow */}
              <motion.div
                className="absolute w-48 h-48 bg-gradient-to-br from-darkgreen/8 via-[#9CA67C]/8 to-transparent rounded-full blur-3xl -z-10"
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Data collection points */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12;
                const radius = 110;
                return (
                  <motion.div
                    key={`point-${i}`}
                    className="absolute w-2 h-2 bg-darkgreen/30 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${angle}deg) translateY(-${radius}px)`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.25,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// VARIATION 5: Spectral Layers Breadcrumb
// Features animated data layers and spectral band visualization
// Represents multi-spectral remote sensing data processing
// ============================================================================

export const SpectralLayersBreadcrumb = ({ items, title, subtitle, label }: BreadcrumbProps) => {
  return (
    <section className="relative bg-gradient-to-br from-darkblue via-darkgreen to-darkblue py-16 lg:py-24 overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0">
        {/* Layer 1 - Red band (vegetation) */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Layer 2 - Green band */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tl from-green-900/10 to-transparent"
          animate={{
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Layer 3 - Blue band (water) */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - 7 columns */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb Navigation */}
            <motion.nav
              className="flex items-center space-x-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                to="/" 
                className="flex items-center text-cream/70 hover:text-cream transition-colors duration-300 group"
              >
                <HomeIcon className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Home</span>
              </Link>
              
              {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4 text-cream/50" />
                  {item.path ? (
                    <Link 
                      to={item.path}
                      className="text-sm font-medium text-cream/70 hover:text-cream transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-sm font-medium text-cream">{item.label}</span>
                  )}
                </div>
              ))}
            </motion.nav>

            {/* Content */}
            {label && (
              <motion.div
                className="inline-block mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="px-4 py-1.5 bg-cream/20 backdrop-blur-sm rounded-full text-cream text-xs font-semibold tracking-widest uppercase border border-cream/30">
                  {label}
                </span>
              </motion.div>
            )}

            <h1 className="text-4xl lg:text-6xl font-bold text-cream mb-4 leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-lg lg:text-xl text-cream/80 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}

            {/* Spectral bands indicator */}
            <motion.div 
              className="flex gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { label: 'Red', color: 'from-red-600 to-red-700' },
                { label: 'Green', color: 'from-green-600 to-green-700' },
                { label: 'Blue', color: 'from-blue-600 to-blue-700' },
                { label: 'NIR', color: 'from-purple-600 to-purple-700' },
              ].map((band, i) => (
                <motion.div
                  key={band.label}
                  className={`flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${band.color} rounded-lg text-white text-xs font-semibold shadow-lg`}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                  {band.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Animation - 5 columns */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-[400px] flex items-center justify-center">
              {/* Stacked data layers */}
              {[
                { color: '#ef4444', delay: 0, label: 'Red' },
                { color: '#22c55e', delay: 0.5, label: 'Green' },
                { color: '#3b82f6', delay: 1, label: 'Blue' },
                { color: '#a855f7', delay: 1.5, label: 'NIR' },
              ].map((layer, i) => (
                <motion.div
                  key={i}
                  className="absolute w-64 h-64 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${layer.color}20, ${layer.color}05)`,
                    border: `2px solid ${layer.color}40`,
                    zIndex: 4 - i,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotateY: [0, 5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: layer.delay,
                    ease: "easeInOut",
                  }}
                >
                  {/* Grid pattern inside layer */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(${layer.color} 1px, transparent 1px), linear-gradient(90deg, ${layer.color} 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                  
                  {/* Layer label */}
                  <div 
                    className="absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-bold text-white shadow-lg"
                    style={{ backgroundColor: layer.color }}
                  >
                    {layer.label} Band
                  </div>

                  {/* Scanning line effect */}
                  <motion.div
                    className="absolute inset-x-0 h-0.5"
                    style={{ backgroundColor: layer.color }}
                    animate={{
                      top: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: layer.delay,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              ))}

              {/* Center icon - Data processing indicator */}
              <motion.div
                className="absolute z-20 w-16 h-16 bg-cream rounded-full flex items-center justify-center shadow-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                  },
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <div className="w-8 h-8 border-4 border-darkgreen border-t-transparent rounded-full" />
              </motion.div>

              {/* Data flow particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: ['#ef4444', '#22c55e', '#3b82f6', '#a855f7'][i % 4],
                  }}
                  animate={{
                    x: [0, Math.cos((i * 30 * Math.PI) / 180) * 150],
                    y: [0, Math.sin((i * 30 * Math.PI) / 180) * 150],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.25,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// VARIATION 6: Temporal Analysis Breadcrumb
// Features: Time-series satellite observations, change detection animation
// Represents: Multi-temporal analysis for monitoring land use changes, vegetation dynamics
// ============================================================================

export const TemporalAnalysisBreadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  title,
  subtitle,
  label,
}) => {
  // Time periods for temporal analysis
  const timePeriods = [
    { year: '2020', season: 'Jan', color: '#8b5cf6' },
    { year: '2021', season: 'Jul', color: '#06b6d4' },
    { year: '2022', season: 'Jan', color: '#10b981' },
    { year: '2023', season: 'Jul', color: '#f59e0b' },
    { year: '2024', season: 'Jan', color: '#ef4444' },
  ];

  // Change detection zones (areas where changes are detected)
  const changeZones = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: 30 + Math.random() * 40,
    y: 20 + Math.random() * 60,
    size: 30 + Math.random() * 40,
    delay: i * 0.3,
  }));

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-16">
      {/* Animated background grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1A674E 1px, transparent 1px),
            linear-gradient(to bottom, #1A674E 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side - Content */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.nav
              className="flex items-center space-x-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                to="/" 
                className="flex items-center text-cream/70 hover:text-cream transition-colors duration-300 group"
              >
                <HomeIcon className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Home</span>
              </Link>
              
              {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4 text-cream/50" />
                  {item.path ? (
                    <Link 
                      to={item.path}
                      className="text-sm font-medium text-cream/70 hover:text-cream transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-sm font-medium text-cream">{item.label}</span>
                  )}
                </div>
              ))}
            </motion.nav>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {title}
            </h1>
            
            {subtitle && (
              <motion.p
                className="text-lg md:text-xl text-slate-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {subtitle}
              </motion.p>
            )}

            {/* Temporal Analysis Info */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 bg-blue-900/30 px-4 py-2 rounded-lg border border-blue-500/30">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm text-blue-200">Time-Series Analysis</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-900/30 px-4 py-2 rounded-lg border border-emerald-500/30">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm text-emerald-200">Change Detection</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-900/30 px-4 py-2 rounded-lg border border-amber-500/30">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-sm text-amber-200">5-Year Archive</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Temporal Analysis Animation */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-[450px] flex items-center justify-center">
              {/* Earth observation area (main viewing window) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-80 h-80 rounded-2xl border-2 border-cyan-500/40 overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
                  }}
                >
                  {/* Grid overlay on viewing area */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, #22d3ee 1px, transparent 1px),
                        linear-gradient(to bottom, #22d3ee 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px',
                    }}
                  />

                  {/* Change detection zones */}
                  {changeZones.map((zone) => (
                    <motion.div
                      key={zone.id}
                      className="absolute rounded-full border-2"
                      style={{
                        left: `${zone.x}%`,
                        top: `${zone.y}%`,
                        width: `${zone.size}px`,
                        height: `${zone.size}px`,
                        borderColor: '#f59e0b',
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 0.6, 0],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: zone.delay,
                        ease: 'easeInOut',
                      }}
                    >
                      {/* Center dot */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full" />
                    </motion.div>
                  ))}

                  {/* Scanning beam */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(34, 211, 238, 0.3) 50%, transparent 100%)',
                    }}
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  {/* Satellite pass indicator */}
                  <motion.div
                    className="absolute top-4 left-4 flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-xs text-green-300">Sentinel-2</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Timeline at bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-4">
                <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
                  {/* Timeline track */}
                  <div className="relative h-2 bg-slate-700 rounded-full mb-4">
                    {/* Progress indicator */}
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-red-500 rounded-full"
                      animate={{
                        width: ['0%', '100%'],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    
                    {/* Playhead */}
                    <motion.div
                      className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-cyan-400"
                      animate={{
                        left: ['0%', '100%'],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </div>

                  {/* Time period markers */}
                  <div className="flex justify-between items-center">
                    {timePeriods.map((period, i) => (
                      <motion.div
                        key={i}
                        className="flex flex-col items-center gap-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <motion.div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                          style={{
                            backgroundColor: `${period.color}30`,
                            border: `2px solid ${period.color}`,
                            color: period.color,
                          }}
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 2,
                          }}
                        >
                          {period.season}
                        </motion.div>
                        <span className="text-xs text-slate-400">{period.year}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Corner indicators - Data acquisition dates */}
              <motion.div
                className="absolute top-4 right-4 bg-slate-800/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-700/50"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              >
                <div className="text-xs text-slate-400">Images</div>
                <div className="text-lg font-bold text-cyan-400">248</div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-4 bg-slate-800/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-700/50"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              >
                <div className="text-xs text-slate-400">Changes</div>
                <div className="text-lg font-bold text-amber-400">{changeZones.length}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// Example Usage Component (for reference)
// ============================================================================

export const BreadcrumbExamples = () => {
  const breadcrumbItems = [
    { label: "About", path: "/about" },
    { label: "Our Team" },
  ];

  return (
    <div className="space-y-0">
      {/* Variation 1 */}
      <MinimalBreadcrumb
        items={breadcrumbItems}
        title="Meet Our Team"
        subtitle="Discover the experts behind AFEOP's groundbreaking Earth observation platform"
        label="OUR TEAM"
      />

      {/* Variation 2 */}
      <ImageOverlayBreadcrumb
        items={breadcrumbItems}
        title="Scientific Excellence"
        subtitle="Leading research in Earth observation and geospatial technologies"
        label="RESEARCH"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3272&auto=format&fit=crop"
      />

      {/* Variation 3 */}
      <SplitLayoutBreadcrumb
        items={breadcrumbItems}
        title="Innovation in Action"
        subtitle="Transforming African agriculture through cutting-edge technology"
        label="ABOUT US"
      />

      {/* Variation 4 */}
      <LogoCenteredBreadcrumb
        items={breadcrumbItems}
        title="Welcome to AFEOP"
        subtitle="Empowering Africa through Earth observation and geospatial intelligence"
        label="HOME"
      />

      {/* Variation 5 */}
      <SpectralLayersBreadcrumb
        items={breadcrumbItems}
        title="Spectral Insights"
        subtitle="Visualizing multi-spectral data for advanced remote sensing applications"
        label="SPECTRAL DATA"
      />

      {/* Variation 6 */}
      <TemporalAnalysisBreadcrumb
        items={breadcrumbItems}
        title="Temporal Analysis"
        subtitle="Monitoring land use changes and vegetation dynamics over time"
        label="TEMPORAL DATA"
      />
    </div>
  );
};
