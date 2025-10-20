// ============================================================================
// BREADCRUMB QUICK-START SNIPPETS
// Copy and paste these into your pages for instant breadcrumb implementation
// ============================================================================

// ----------------------------------------------------------------------------
// SNIPPET 1: Minimal Breadcrumb (Most Common)
// ----------------------------------------------------------------------------
import { MinimalBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';

<MinimalBreadcrumb
  items={[
    { label: "Parent Page", path: "/parent" },
    { label: "Current Page" }
  ]}
  title="Your Page Title Here"
  subtitle="Optional description that provides context about this page"
  label="SECTION NAME"
/>


// ----------------------------------------------------------------------------
// SNIPPET 2: Image Overlay Breadcrumb (Hero Pages)
// ----------------------------------------------------------------------------
import { ImageOverlayBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';

<ImageOverlayBreadcrumb
  items={[
    { label: "Research", path: "/research" },
    { label: "Publications" }
  ]}
  title="Scientific Excellence"
  subtitle="Leading research in Earth observation and geospatial technologies"
  label="RESEARCH"
  backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3272"
  overlayOpacity={0.75}
/>


// ----------------------------------------------------------------------------
// SNIPPET 3: Split Layout Breadcrumb (Modern Pages)
// ----------------------------------------------------------------------------
import { SplitLayoutBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';

<SplitLayoutBreadcrumb
  items={[
    { label: "Platform", path: "/platform" },
    { label: "Features" }
  ]}
  title="Innovation in Action"
  subtitle="Transforming African agriculture through cutting-edge technology"
  label="INNOVATION"
/>


// ============================================================================
// REAL-WORLD EXAMPLES
// ============================================================================

// ----------------------------------------------------------------------------
// EXAMPLE 1: About Page
// ----------------------------------------------------------------------------
import { MinimalBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';

const AboutPage = () => {
  return (
    <>
      <MinimalBreadcrumb
        items={[{ label: "About Us" }]}
        title="Modern Solutions for Traditional Challenges"
        subtitle="Empowering African agriculture through advanced Earth observation"
        label="ABOUT COMPANY"
      />
      
      {/* Page content */}
      <section className="py-16">
        {/* Your content here */}
      </section>
    </>
  );
};


// ----------------------------------------------------------------------------
// EXAMPLE 2: Team Page with Navigation
// ----------------------------------------------------------------------------
import { MinimalBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';

const TeamPage = () => {
  return (
    <>
      <MinimalBreadcrumb
        items={[
          { label: "About", path: "/about" },
          { label: "Our Team" }
        ]}
        title="Meet Our Experts"
        subtitle="The scientists and researchers driving innovation at AFEOP"
        label="OUR TEAM"
      />
      
      {/* Team grid */}
    </>
  );
};


// ----------------------------------------------------------------------------
// EXAMPLE 3: Research Landing Page with Image
// ----------------------------------------------------------------------------
import { ImageOverlayBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';

const ResearchPage = () => {
  return (
    <>
      <ImageOverlayBreadcrumb
        items={[{ label: "Research & Publications" }]}
        title="Latest Research & Platform Updates"
        subtitle="Explore cutting-edge research in Earth Observation, remote sensing, and geospatial technologies advancing African agriculture"
        label="RESEARCH & PUBLICATIONS"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3272&auto=format&fit=crop"
      />
      
      {/* Research articles */}
    </>
  );
};


// ----------------------------------------------------------------------------
// EXAMPLE 4: Platform Features with Split Layout
// ----------------------------------------------------------------------------
import { SplitLayoutBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';

const FeaturesPage = () => {
  return (
    <>
      <SplitLayoutBreadcrumb
        items={[
          { label: "Platform", path: "/platform" },
          { label: "Features" }
        ]}
        title="Powerful Features for Earth Observation"
        subtitle="Advanced tools and capabilities designed for African agricultural monitoring"
        label="PLATFORM FEATURES"
      />
      
      {/* Feature showcase */}
    </>
  );
};


// ============================================================================
// COMMON PATTERNS
// ============================================================================

// ----------------------------------------------------------------------------
// PATTERN 1: Single-level breadcrumb (for main sections)
// ----------------------------------------------------------------------------
const breadcrumbItems = [
  { label: "Section Name" }
];


// ----------------------------------------------------------------------------
// PATTERN 2: Two-level breadcrumb (most common)
// ----------------------------------------------------------------------------
const breadcrumbItems = [
  { label: "Parent", path: "/parent" },
  { label: "Current Page" }
];


// ----------------------------------------------------------------------------
// PATTERN 3: Three-level breadcrumb (for deep pages)
// ----------------------------------------------------------------------------
const breadcrumbItems = [
  { label: "Section", path: "/section" },
  { label: "Category", path: "/section/category" },
  { label: "Current Page" }
];


// ============================================================================
// CUSTOMIZATION EXAMPLES
// ============================================================================

// ----------------------------------------------------------------------------
// Changing background image
// ----------------------------------------------------------------------------
<ImageOverlayBreadcrumb
  // ... other props
  backgroundImage="/images/custom-background.jpg"  // Use local image
  overlayOpacity={0.8}  // Darker overlay
/>


// ----------------------------------------------------------------------------
// No subtitle or label (minimal version)
// ----------------------------------------------------------------------------
<MinimalBreadcrumb
  items={[{ label: "Page Name" }]}
  title="Simple Page Title"
  // No subtitle or label
/>


// ----------------------------------------------------------------------------
// Longer breadcrumb chain
// ----------------------------------------------------------------------------
<MinimalBreadcrumb
  items={[
    { label: "Home", path: "/" },
    { label: "Resources", path: "/resources" },
    { label: "Documentation", path: "/resources/docs" },
    { label: "API Guide" }
  ]}
  title="API Documentation"
  subtitle="Complete guide to the AFEOP API"
  label="DOCUMENTATION"
/>


// ============================================================================
// TIPS & BEST PRACTICES
// ============================================================================

// ✅ DO:
// - Keep breadcrumb items short (1-3 words)
// - Use clear, descriptive titles
// - Add subtitle for context when helpful
// - Match label to page category/section
// - Ensure all paths are valid routes

// ❌ DON'T:
// - Use more than 4 breadcrumb levels
// - Make breadcrumb text too long
// - Forget to test links
// - Use unclear abbreviations
// - Overcomplicate the navigation

// 💡 CHOOSING THE RIGHT VARIATION:
// - Minimal: 80% of pages (standard, professional)
// - ImageOverlay: 15% of pages (heroes, high-impact)
// - SplitLayout: 5% of pages (creative, modern)


// ============================================================================
// FOLDER STRUCTURE REFERENCE
// ============================================================================

/*
src/
└── website/
    ├── components/
    │   └── Breadcrumb/
    │       ├── BreadcrumbVariations.tsx  ← Import from here
    │       ├── BreadcrumbComparison.tsx
    │       ├── README.md
    │       ├── IMPLEMENTATION.md
    │       └── SNIPPETS.tsx  ← This file
    └── pages/
        ├── AboutPage.tsx
        ├── TeamPage.tsx
        └── BreadcrumbDemo.tsx
*/


// ============================================================================
// IMPORT CHEATSHEET
// ============================================================================

// Import individual component:
import { MinimalBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';
import { ImageOverlayBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';
import { SplitLayoutBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';

// Import multiple components:
import { 
  MinimalBreadcrumb, 
  ImageOverlayBreadcrumb, 
  SplitLayoutBreadcrumb 
} from '../components/Breadcrumb/BreadcrumbVariations';

// Import comparison page:
import BreadcrumbComparison from '../components/Breadcrumb/BreadcrumbComparison';

// Import demo page:
import BreadcrumbDemo from '../pages/BreadcrumbDemo';
