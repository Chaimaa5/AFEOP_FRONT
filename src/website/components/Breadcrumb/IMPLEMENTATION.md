# Breadcrumb Implementation Guide

## 🎨 Three Variations Created

### 1️⃣ MinimalBreadcrumb - Clean & Professional
```tsx
import { MinimalBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';

<MinimalBreadcrumb
  items={[{ label: "About Us" }]}
  title="Your Page Title"
  subtitle="Optional description text"
  label="OPTIONAL BADGE"
/>
```
**Style**: Dark green gradient background, subtle grid pattern  
**Use when**: Standard pages, content sections, professional layouts

---

### 2️⃣ ImageOverlayBreadcrumb - Bold & Impactful
```tsx
import { ImageOverlayBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';

<ImageOverlayBreadcrumb
  items={[
    { label: "Parent", path: "/parent" },
    { label: "Current Page" }
  ]}
  title="Your Page Title"
  subtitle="Optional description"
  label="OPTIONAL BADGE"
  backgroundImage="/path/to/image.jpg"
  overlayOpacity={0.7}
/>
```
**Style**: Full background image with gradient overlay  
**Use when**: Landing pages, hero sections, high-impact headers

---

### 3️⃣ SplitLayoutBreadcrumb - Modern & Creative
```tsx
import { SplitLayoutBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';

<SplitLayoutBreadcrumb
  items={[
    { label: "Section", path: "/section" },
    { label: "Current" }
  ]}
  title="Your Page Title"
  subtitle="Optional description"
  label="OPTIONAL BADGE"
/>
```
**Style**: Light cream background with animated geometric shapes  
**Use when**: Modern layouts, creative sections, light-themed pages

---

## 📋 Props Breakdown

### Required Props (all variations)
- `items`: Array of breadcrumb links
- `title`: Main heading text

### Optional Props (all variations)
- `subtitle`: Description text below title
- `label`: Small badge above title (e.g., "ABOUT US")

### Additional Props (ImageOverlayBreadcrumb only)
- `backgroundImage`: URL to background image (required)
- `overlayOpacity`: Overlay darkness 0-1 (default: 0.7)

---

## 🔗 Breadcrumb Items Format

```tsx
const items = [
  { label: "Home", path: "/" },           // With link
  { label: "About", path: "/about" },     // With link
  { label: "Current Page" }                // Without link (current)
];
```

**Rules:**
- Include `path` for clickable links
- Omit `path` for current page (displayed differently)
- Last item typically has no path

---

## 🎯 Real-World Examples

### Example 1: About Page
```tsx
<MinimalBreadcrumb
  items={[{ label: "About Us" }]}
  title="Modern Solutions for Traditional Challenges"
  subtitle="Empowering African agriculture through advanced Earth observation"
  label="ABOUT COMPANY"
/>
```

### Example 2: Research Page with Image
```tsx
<ImageOverlayBreadcrumb
  items={[
    { label: "Research", path: "/research" },
    { label: "Publications" }
  ]}
  title="Latest Research & Platform Updates"
  subtitle="Explore cutting-edge research in Earth Observation and remote sensing"
  label="RESEARCH & PUBLICATIONS"
  backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
/>
```

### Example 3: Team Page with Split Layout
```tsx
<SplitLayoutBreadcrumb
  items={[
    { label: "About", path: "/about" },
    { label: "Team" }
  ]}
  title="Meet Our Experts"
  subtitle="The scientists and researchers driving innovation"
  label="OUR TEAM"
/>
```

---

## 🚀 Quick Start

1. **Import the component**
```tsx
import { MinimalBreadcrumb } from '../components/Breadcrumb/BreadcrumbVariations';
```

2. **Add to your page**
```tsx
const YourPage = () => {
  return (
    <>
      <MinimalBreadcrumb
        items={[{ label: "Your Page" }]}
        title="Page Title"
      />
      {/* Rest of page content */}
    </>
  );
};
```

3. **Customize as needed**
- Add subtitle for more context
- Add label for page category
- Chain multiple breadcrumb items

---

## 🎨 Visual Comparison

| Aspect | Minimal | ImageOverlay | SplitLayout |
|--------|---------|--------------|-------------|
| **Background** | Dark gradient | Custom image | Light cream |
| **Height** | Medium | Tall (50vh) | Flexible |
| **Text Color** | Light (cream) | Light (cream) | Dark (darkgreen) |
| **Animation** | Subtle | Medium | Heavy |
| **Best For** | Standard pages | Heroes | Modern pages |
| **Mobile** | ✅ Optimized | ✅ Optimized | ✅ Responsive |

---

## 💡 Tips

1. **Choosing a variation:**
   - Use **Minimal** for most pages (80% of cases)
   - Use **ImageOverlay** for high-impact pages
   - Use **SplitLayout** for modern, design-forward sections

2. **Breadcrumb items:**
   - Keep items short (1-2 words ideal)
   - Maximum 3-4 levels recommended
   - Current page should not have a link

3. **Titles:**
   - Keep titles concise but descriptive
   - Use sentence case or title case consistently
   - Aim for 3-8 words

4. **Subtitles:**
   - Optional but adds context
   - Keep under 20 words
   - Use for clarification or engagement

---

## 📦 File Locations

- **Components**: `/src/website/components/Breadcrumb/BreadcrumbVariations.tsx`
- **Demo Page**: `/src/website/pages/BreadcrumbDemo.tsx`
- **Documentation**: `/src/website/components/Breadcrumb/README.md`
- **This Guide**: `/src/website/components/Breadcrumb/IMPLEMENTATION.md`

---

## 🔧 Customization

### Change Background Color
```tsx
// In BreadcrumbVariations.tsx
className="bg-gradient-to-br from-darkgreen to-[#2d5f62]"
// Change to:
className="bg-gradient-to-br from-darkblue to-darkgreen"
```

### Adjust Height
```tsx
// Minimal: Change py-16 lg:py-24
// ImageOverlay: Change h-[50vh] min-h-[400px]
// SplitLayout: Change min-h-[60vh]
```

### Modify Animation Speed
```tsx
transition={{ duration: 0.6 }} // Faster: 0.3, Slower: 1.2
```

---

## ✅ Checklist for Implementation

- [ ] Choose appropriate variation for your page
- [ ] Import the component
- [ ] Define breadcrumb items array
- [ ] Add title (required)
- [ ] Add subtitle (optional but recommended)
- [ ] Add label if page belongs to a category
- [ ] Test on mobile and desktop
- [ ] Verify all links work correctly
- [ ] Ensure text is readable on all backgrounds

---

## 🐛 Troubleshooting

**Issue**: Breadcrumb not showing
- ✅ Check import path is correct
- ✅ Verify component is placed at top of page
- ✅ Ensure all required props are provided

**Issue**: Links not working
- ✅ Verify React Router is configured
- ✅ Check path format (should start with `/`)
- ✅ Ensure Link component is imported

**Issue**: Background image not loading
- ✅ Check image URL is accessible
- ✅ Verify image path is correct
- ✅ Try using absolute URL for testing

---

## 📞 Need Help?

Refer to the detailed README.md for more information:
`/src/website/components/Breadcrumb/README.md`

View live demo:
Import `BreadcrumbDemo` component or navigate to demo route.
