/**
 * Remote Sensing Icon - Clean representation of Earth observation
 * Features: Earth globe, satellites, scanning beams, data transmission
 */
export const RemoteSensingIcon = ({ 
  className = "", 
  size = 200 
}: { 
  className?: string; 
  size?: number;
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central Earth Globe */}
      <circle 
        cx="100" 
        cy="100" 
        r="35" 
        fill="url(#earthGradient)" 
        stroke="#1A674E" 
        strokeWidth="2.5"
      />
      
      {/* Grid pattern on Earth - representing data collection */}
      <g opacity="0.4">
        <circle cx="100" cy="100" r="35" fill="none" stroke="#1A674E" strokeWidth="0.5" strokeDasharray="3,3" />
        <line x1="100" y1="65" x2="100" y2="135" stroke="#1A674E" strokeWidth="0.5" />
        <line x1="65" y1="100" x2="135" y2="100" stroke="#1A674E" strokeWidth="0.5" />
        <ellipse cx="100" cy="100" rx="25" ry="35" stroke="#1A674E" strokeWidth="0.5" />
        <ellipse cx="100" cy="100" rx="15" ry="35" stroke="#1A674E" strokeWidth="0.5" />
      </g>

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="earthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A9B7F" />
          <stop offset="50%" stopColor="#2D6F5C" />
          <stop offset="100%" stopColor="#1A674E" />
        </linearGradient>
        <linearGradient id="scanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9CA67C" stopOpacity="0" />
          <stop offset="50%" stopColor="#9CA67C" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#9CA67C" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Satellite 1 - Top (Landsat/Sentinel style with detailed structure) */}
      <g transform="translate(100, 25)">
        {/* Main satellite body */}
        <rect x="-3" y="-4" width="6" height="8" fill="#1A674E" rx="0.5" />
        {/* Top antenna */}
        <line x1="0" y1="-4" x2="0" y2="-6.5" stroke="#1A674E" strokeWidth="0.8" />
        <circle cx="0" cy="-7" r="1" fill="#9CA67C" />
        {/* Solar panel left - with grid pattern */}
        <rect x="-11" y="-3.5" width="7" height="7" fill="#204E51" opacity="0.9" rx="0.3" />
        <line x1="-11" y1="0" x2="-4" y2="0" stroke="#1A674E" strokeWidth="0.3" opacity="0.5" />
        <line x1="-7.5" y1="-3.5" x2="-7.5" y2="3.5" stroke="#1A674E" strokeWidth="0.3" opacity="0.5" />
        {/* Solar panel right - with grid pattern */}
        <rect x="4" y="-3.5" width="7" height="7" fill="#204E51" opacity="0.9" rx="0.3" />
        <line x1="4" y1="0" x2="11" y2="0" stroke="#1A674E" strokeWidth="0.3" opacity="0.5" />
        <line x1="7.5" y1="-3.5" x2="7.5" y2="3.5" stroke="#1A674E" strokeWidth="0.3" opacity="0.5" />
        {/* Central sensor/camera */}
        <rect x="-1.5" y="1" width="3" height="2" fill="#9CA67C" rx="0.3" />
        {/* Details on body */}
        <rect x="-2" y="-2" width="4" height="1" fill="#204E51" opacity="0.6" />
      </g>

      {/* Scanning beam from Satellite 1 */}
      <path 
        d="M 100,30 L 85,65 L 115,65 Z" 
        fill="url(#scanGradient)" 
        opacity="0.3"
      />

      {/* Satellite 2 - Bottom Right (Cube satellite with 4-panel design) */}
      <g transform="translate(150, 130)">
        {/* Main body */}
        <rect x="-3.5" y="-3.5" width="7" height="7" fill="#1A674E" rx="0.4" />
        {/* Solar panels - 4 small panels */}
        <rect x="-7" y="-1.5" width="3" height="3" fill="#204E51" opacity="0.9" rx="0.2" />
        <rect x="4" y="-1.5" width="3" height="3" fill="#204E51" opacity="0.9" rx="0.2" />
        <rect x="-1.5" y="-7" width="3" height="3" fill="#204E51" opacity="0.9" rx="0.2" />
        <rect x="-1.5" y="4" width="3" height="3" fill="#204E51" opacity="0.9" rx="0.2" />
        {/* Panel lines */}
        <line x1="-7" y1="0" x2="-4" y2="0" stroke="#1A674E" strokeWidth="0.3" opacity="0.5" />
        <line x1="4" y1="0" x2="7" y2="0" stroke="#1A674E" strokeWidth="0.3" opacity="0.5" />
        {/* Central sensor */}
        <circle cx="0" cy="0" r="1.8" fill="#9CA67C" opacity="0.9" />
        <circle cx="0" cy="0" r="1" fill="#1A674E" opacity="0.6" />
        {/* Details */}
        <rect x="-2.5" y="-2.5" width="5" height="5" fill="none" stroke="#204E51" strokeWidth="0.4" opacity="0.5" />
      </g>

      {/* Scanning beam from Satellite 2 */}
      <path 
        d="M 150,130 L 115,115 L 135,95 Z" 
        fill="url(#scanGradient)" 
        opacity="0.25"
      />

      {/* Satellite 3 - Left (Weather satellite with cylindrical body) */}
      <g transform="translate(40, 85)">
        {/* Main cylindrical body */}
        <rect x="-2.5" y="-4" width="5" height="8" fill="#1A674E" rx="0.4" />
        {/* Top dome */}
        <ellipse cx="0" cy="-4" rx="2.5" ry="1.5" fill="#204E51" opacity="0.9" />
        {/* Solar panels - extended */}
        <rect x="-9" y="-2.5" width="6" height="5" fill="#204E51" opacity="0.9" rx="0.3" />
        <rect x="3" y="-2.5" width="6" height="5" fill="#204E51" opacity="0.9" rx="0.3" />
        {/* Panel grid */}
        <line x1="-9" y1="0" x2="-3" y2="0" stroke="#1A674E" strokeWidth="0.3" opacity="0.5" />
        <line x1="-6" y1="-2.5" x2="-6" y2="2.5" stroke="#1A674E" strokeWidth="0.3" opacity="0.5" />
        <line x1="3" y1="0" x2="9" y2="0" stroke="#1A674E" strokeWidth="0.3" opacity="0.5" />
        <line x1="6" y1="-2.5" x2="6" y2="2.5" stroke="#1A674E" strokeWidth="0.3" opacity="0.5" />
        {/* Communications dish */}
        <ellipse cx="0" cy="0" rx="2" ry="1" fill="#9CA67C" opacity="0.8" />
        <line x1="0" y1="0" x2="0" y2="-2" stroke="#1A674E" strokeWidth="0.5" />
        {/* Body stripes */}
        <line x1="-2.5" y1="-1" x2="2.5" y2="-1" stroke="#204E51" strokeWidth="0.4" opacity="0.6" />
        <line x1="-2.5" y1="1" x2="2.5" y2="1" stroke="#204E51" strokeWidth="0.4" opacity="0.6" />
      </g>

      {/* Scanning beam from Satellite 3 */}
      <path 
        d="M 40,85 L 65,95 L 65,115 Z" 
        fill="url(#scanGradient)" 
        opacity="0.25"
      />

      {/* Orbit paths */}
      <circle cx="100" cy="100" r="75" stroke="#1A674E" strokeWidth="1.5" fill="none" opacity="0.3" strokeDasharray="5,5" />
      <circle cx="100" cy="100" r="60" stroke="#9CA67C" strokeWidth="1" fill="none" opacity="0.25" strokeDasharray="4,4" />
      <circle cx="100" cy="100" r="90" stroke="#1A674E" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="6,6" />

      {/* Data transmission dots */}
      <circle cx="100" cy="25" r="2" fill="#9CA67C" opacity="0.7" />
      <circle cx="150" cy="130" r="2" fill="#9CA67C" opacity="0.7" />
      <circle cx="40" cy="85" r="2" fill="#9CA67C" opacity="0.7" />
      
      {/* Signal indicators around satellites */}
      <circle cx="100" cy="20" r="1" fill="#9CA67C" opacity="0.5" />
      <circle cx="155" cy="130" r="1" fill="#9CA67C" opacity="0.5" />
      <circle cx="35" cy="85" r="1" fill="#9CA67C" opacity="0.5" />

      {/* Communication lines (dashed) */}
      <line x1="100" y1="30" x2="100" y2="65" stroke="#9CA67C" strokeWidth="1" strokeDasharray="2,2" opacity="0.4" />
      <line x1="145" y1="130" x2="120" y2="115" stroke="#9CA67C" strokeWidth="1" strokeDasharray="2,2" opacity="0.4" />
      <line x1="45" y1="85" x2="70" y2="95" stroke="#9CA67C" strokeWidth="1" strokeDasharray="2,2" opacity="0.4" />

      {/* Corner data nodes - representing ground stations */}
      <g opacity="0.6">
        <circle cx="25" cy="25" r="3" fill="none" stroke="#1A674E" strokeWidth="1.5" />
        <circle cx="25" cy="25" r="1" fill="#1A674E" />
        
        <circle cx="175" cy="25" r="3" fill="none" stroke="#1A674E" strokeWidth="1.5" />
        <circle cx="175" cy="25" r="1" fill="#1A674E" />
        
        <circle cx="25" cy="175" r="3" fill="none" stroke="#1A674E" strokeWidth="1.5" />
        <circle cx="25" cy="175" r="1" fill="#1A674E" />
        
        <circle cx="175" cy="175" r="3" fill="none" stroke="#1A674E" strokeWidth="1.5" />
        <circle cx="175" cy="175" r="1" fill="#1A674E" />
      </g>
    </svg>
  );
};

// Keep old export name for backwards compatibility
export const AfricaSatelliteLogo = RemoteSensingIcon;
