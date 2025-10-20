# Breadcrumb Component Variations

Three modern, reusable breadcrumb components designed to match the VerdaAgro/AFEOP design system.

## Overview

All three variations follow the VerdaAgro color scheme:
- **darkgreen**: `#204E51` - Primary brand color
- **cream**: `#fff3a3` - Accent/text color for dark backgrounds
- **olive**: `#9CA67C` - Secondary accent
- **darkblue**: `#1F3D3D` - Alternative dark color

## Components

### 1. MinimalBreadcrumb
**Style**: Clean, minimal design with subtle animations and icons  
**Best for**: Standard pages, content-heavy sections, blog posts  
**Background**: Dark green gradient

#### Features:
- Home icon with hover effects
- Chevron separators
- Optional label badge
- Subtle grid pattern background
- Smooth animations

#### Usage:
```tsx
import { MinimalBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';

<MinimalBreadcrumb
  items={[
    { label: "About", path: "/about" },
    { label: "Our Team" }
  ]}
  title="Meet Our Team"
  subtitle="Discover the experts behind AFEOP's groundbreaking Earth observation platform"
  label="OUR TEAM"
/>
```

---

### 2. ImageOverlayBreadcrumb
**Style**: Hero-style with background image and elegant overlay  
**Best for**: Landing pages, feature sections, impactful headers  
**Background**: Custom image with gradient overlay

#### Features:
- Full background image support
- Adjustable overlay opacity
- Pill-style breadcrumb links with backdrop blur
- Animated floating shapes
- Large, dramatic typography
- Drop shadows for better readability

#### Usage:
```tsx
import { ImageOverlayBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';

<ImageOverlayBreadcrumb
  items={[
    { label: "Research", path: "/research" },
    { label: "Publications" }
  ]}
  title="Scientific Excellence"
  subtitle="Leading research in Earth observation and geospatial technologies"
  label="RESEARCH"
  backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
  overlayOpacity={0.7} // Optional, defaults to 0.7
/>
```

---

### 3. SplitLayoutBreadcrumb
**Style**: Modern split-screen design with geometric animations  
**Best for**: Modern landing pages, about sections, creative layouts  
**Background**: Cream/light background

#### Features:
- Two-column layout (content left, decorative right)
- Underline-style breadcrumb navigation
- Animated geometric shapes (circles and dots)
- Dark text on light background (inverse of others)
- Responsive - decorative side hidden on mobile
- Continuous shape animations

#### Usage:
```tsx
import { SplitLayoutBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';

<SplitLayoutBreadcrumb
  items={[
    { label: "About", path: "/about" },
    { label: "Mission" }
  ]}
  title="Innovation in Action"
  subtitle="Transforming African agriculture through cutting-edge technology"
  label="ABOUT US"
/>
```

---

## Props Interface

### Common Props (all variations)

```typescript
interface BreadcrumbItem {
  label: string;      // Display text for the breadcrumb item
  path?: string;      // Optional link path (omit for current page)
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];  // Array of breadcrumb items
  title: string;            // Main heading text
  subtitle?: string;        // Optional description text
  label?: string;           // Optional badge label (e.g., "OUR TEAM")
}
```

### ImageOverlayBreadcrumb Additional Props

```typescript
interface ImageBreadcrumbProps extends BreadcrumbProps {
  backgroundImage: string;  // URL to background image
  overlayOpacity?: number;  // Overlay darkness (0-1), defaults to 0.7
}
```

---

## Quick Comparison

| Feature | Minimal | ImageOverlay | SplitLayout |
|---------|---------|--------------|-------------|
| Background | Dark gradient | Custom image | Light cream |
| Best Height | Medium | Tall (50vh) | Medium-Tall |
| Visual Impact | Subtle | High | Modern |
| Animation | Light | Medium | Heavy |
| Mobile Friendly | ✅ | ✅ | ✅ |
| Image Support | ❌ | ✅ | ❌ |

---

## Example: Using in AboutPage

```tsx
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
      
      {/* Rest of your page content */}
    </>
  );
};
```

---

## Customization Tips

### Changing Colors
All colors use Tailwind classes, so you can easily customize:
- `from-darkgreen` → `from-darkblue`
- `text-cream` → `text-white`
- `bg-[#9CA67C]` → `bg-[#yourcolor]`

### Adjusting Height
- **MinimalBreadcrumb**: Change `py-16 lg:py-24`
- **ImageOverlayBreadcrumb**: Change `h-[50vh] min-h-[400px]`
- **SplitLayoutBreadcrumb**: Change `min-h-[60vh] py-16 lg:py-20`

### Animation Speed
All animations use Framer Motion. Adjust `duration` values:
```tsx
transition={{ duration: 0.6 }} // Make faster: 0.3, slower: 1.2
```

---

## Dependencies

These components require:
- `framer-motion` - For animations
- `react-router-dom` - For Link component
- `lucide-react` - For icons (ChevronRight, Home)

Install if needed:
```bash
npm install framer-motion react-router-dom lucide-react
```

---

## Live Demo Component

A `BreadcrumbExamples` component is included in the file to showcase all three variations:

```tsx
import { BreadcrumbExamples } from '../components/Breadcrumb/BreadcrumbVariations';

// Displays all three variations stacked
<BreadcrumbExamples />
```
