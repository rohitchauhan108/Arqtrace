## 1. Architecture Design
The application is a single-page layout built with Next.js, utilizing the App Router for efficient rendering and routing.

```mermaid
graph TD
  subgraph "Frontend (Next.js)"
    "Components" --> "Pages"
    "Hooks/Utils" --> "Components"
    "Tailwind CSS" --> "Styling"
    "Swiper.js" --> "Sliders"
    "Framer Motion" --> "Animations"
  end
```

## 2. Technology Description
- **Framework**: Next.js 14+ (App Router)
- **Language**: JavaScript (as requested)
- **Styling**: Tailwind CSS
- **Icons**: Lucide-React
- **Animations**: Framer Motion
- **Slider**: Swiper.js
- **Fonts**: Google Fonts (Plus Jakarta Sans)

## 3. Route Definitions
| Route | Purpose |
|-------|---------|
| /     | Main landing page with the full cloned layout |

## 4. Component Structure
- `src/components/layout/Header.jsx`: Sticky navigation and top bar.
- `src/components/layout/Footer.jsx`: Multi-column footer.
- `src/components/home/Hero.jsx`: Animated slider.
- `src/components/home/About.jsx`: Two-column about section.
- `src/components/home/Services.jsx`: Grid of service cards.
- `src/components/home/Projects.jsx`: Portfolio showcase.
- `src/components/home/Stats.jsx`: Animated counters.
- `src/components/home/Testimonials.jsx`: Feedback slider.
- `src/components/home/Blog.jsx`: News grid.
- `src/components/ui/Button.jsx`: Reusable styled buttons.
- `src/components/ui/SectionTitle.jsx`: Common heading style for sections.

## 5. Development Plan
1. Initialize Next.js project with Tailwind CSS.
2. Setup global styles and theme configuration (colors, fonts).
3. Implement shared layout components (Header, Footer).
4. Develop individual home page sections in sequence.
5. Add animations and slider functionality.
6. Verify responsiveness and cross-browser compatibility.
