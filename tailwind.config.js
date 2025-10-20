/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        poppins: ["Poppins"],
      },
       screens: {
        sm: "640px",  // Small screens (default)
        md: "768px",  // Medium screens (default)
        lg: "1024px", // Large screens (default)
        xl: "1280px", // Extra large screens (default)
        "2xl": "1536px", // 2x Extra large screens (default)
        // Custom breakpoints (if needed):
        "3xl": "1920px", // Ultra-wide monitors
      },
      colors: {
        // Legacy colors (kept for backward compatibility)
        bg: "#FDFFF2",
        navy: "#101a2b",
        lightgreen: "#3bf6790a",
        darkgreen: '#10282B',
        green2: "#163638",
        greenlight: '#f4fee6',
        white: "#ffffff",
        grey: "#F4F4F4",
        darkgrey: "#B5B5C3",
        lightblue: "#E6F1FF",
        cream: "#FFF397",
        darkblue: "#1F3D3D",
        lightyellow: "#F2FFF2",
        black: "#1A202C",
        hover: "rgba(167, 218, 220, 0.21)",
        input: "#EBF2FA",
        color1: "#1F3D3D",
        color2: "#DEE3E3",
        color3: "#152F37",
        color4: "#35528B",

        // 🌍 New Remote Sensing Color Palette
        // Core Brand Colors
        'earth-teal': '#204E51',      // Main brand color (same as darkgreen)
        'ocean-blue': '#2A9CBD',      // Complementary blue for water/satellite
        'forest-green': '#27B464',    // Vegetation/growth green
        'sand-cream': '#FFF3A3',      // Accent color (same as cream)
        
        // Light Backgrounds
        'sky-light': '#E8F4F8',       // Light blue background
        'earth-light': '#E6F4F5',     // Light teal background
        'vegetation-light': '#F0F9F4', // Light green background
        'neutral-light': '#FDFFF2',   // Off-white background (same as bg)
        
        // Dark Variants
        'deep-ocean': '#0F4354',      // Dark blue for depth
        'deep-earth': '#143537',      // Dark teal for contrast
        'deep-forest': '#176C3C',     // Dark green for vegetation
        'satellite-navy': '#101A2B',  // Deep navy for hero sections
        
        // UI Neutrals (Grayscale)
        'neutral': {
          50: '#FDFFF2',   // Lightest
          100: '#F4F4F4',  // Very light
          200: '#DEE3E3',  // Light
          300: '#C4C9C9',  // Medium-light
          400: '#B5B5C3',  // Medium
          500: '#8E8E9D',  // Medium-dark
          600: '#6B6B7A',  // Dark
          700: '#4A4A56',  // Very dark
          800: '#2A2A33',  // Almost black
          900: '#1A202C',  // Darkest
        },

        // Accent Colors for Data Visualization
        'data': {
          'water': '#2A9CBD',       // Water bodies
          'vegetation': '#27B464',  // High vegetation/NDVI
          'drought': '#E0A82E',     // Dry/drought conditions
          'warning': '#F5C842',     // Alerts
          'cool': '#4FB8D4',        // Cool temperature
          'warm': '#FFE870',        // Warm temperature
        },
      },
      fontSize: {
        // Define custom font sizes
        // 'xxs': '0.65rem', // Extra extra small
        'tab': '0.75rem', // Smaller than small
        // '2xl': '1.5rem',
        // '3xl': '1.875rem',
        // '4xl': '2.25rem',
      },
      keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'flow': {
					'0%': { transform: 'translateX(0) scale(1)' },
					'50%': { transform: 'translateX(10px) scale(1.05)' },
					'100%': { transform: 'translateX(0) scale(1)' }
				},
				'pulse-opacity': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				}
			},
      animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'flow': 'flow 3s ease-in-out infinite',
				'pulse-opacity': 'pulse-opacity 2s ease-in-out infinite'
			}
    },
  },
  darkMode: "class",

  plugins: [nextui(), require("tailwindcss-animate")],	
  
};

