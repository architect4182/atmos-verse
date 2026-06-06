# AtmosVerse Design System

## Overview

AtmosVerse is a premium cinematic discovery platform built with a sophisticated design language inspired by Apple TV+, VisionOS, and MUBI. The platform emphasizes glassmorphism, depth, spaciousness, and emotional connection.

## Design Principles

### 1. **Glassmorphism**
- Subtle transparency with `rgba(255, 255, 255, 0.06)` backgrounds
- 20px backdrop blur for frosted glass effect
- Delicate borders at `rgba(255, 255, 255, 0.08)`
- Soft ambient shadows for depth

### 2. **Premium Hierarchy**
- Large typography (5xl to 8xl for headings)
- Spacious layouts with generous padding:
  - Desktop: 48px (3rem)
  - Tablet: 32px (2rem)
  - Mobile: 24px (1.5rem)

### 3. **Motion Design**
- Smooth transitions using cubic-bezier easing `[0.22, 1, 0.36, 1]`
- Hover states lift 4-8px with subtle scale (1.02-1.03)
- Page transitions fade and slide vertically
- Duration: 300-600ms for most interactions

### 4. **Color System**

#### Background Layers
- `#030712` - Primary background (deepest)
- `#071024` - Secondary background
- `#0F172A` - Surface level

#### Glass Effects
- Surface: `rgba(255, 255, 255, 0.06)`
- Border: `rgba(255, 255, 255, 0.08)`
- Hover: `rgba(255, 255, 255, 0.12)`

#### Text
- Primary: `#FFFFFF`
- Secondary: `rgba(255, 255, 255, 0.70)`
- Muted: `rgba(255, 255, 255, 0.45)`

#### Accent
- Primary: `#3B82F6` (Blue)
- With glow: `rgba(59, 130, 246, 0.3)`

## Component Patterns

### Navigation Bar
- Floating glass navbar with blur
- Active tab indicator with layout animation
- Rounded corners (1rem)
- Fixed positioning with top padding

### Hero Section
- Full viewport height (90vh minimum)
- Cinematic backdrop with gradient overlays
- Large typography with tracking adjustments
- CTA buttons with hover states and shadows

### Content Cards

#### Trending Cards
- Large background rank numbers with stroke outline
- Poster overlay on hover
- Aspect ratio 2:3
- Rounded corners (1rem)

#### Universe Cards
- Large format (400px height)
- Background image with gradient overlays
- Glass badge for metadata
- Arrow indicator on hover

#### Mood Cards
- Gradient color overlays (unique per mood)
- 280px height
- Rounded corners (1rem)
- Title at bottom with glass badge

### Typography Scale
- Display: 5xl-8xl (48-96px)
- Headings: 2xl-4xl (24-36px)
- Body: base-xl (16-20px)
- Small: sm (14px)

### Spacing Scale
- Section gaps: 64-96px (16-24 in Tailwind units)
- Card gaps: 24px (6 in Tailwind)
- Content padding: 24-40px (6-10 in Tailwind)

## Animation Patterns

### Scroll Reveals
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
```

### Hover Effects
```tsx
whileHover={{ y: -4, scale: 1.02 }}
transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
```

### Staggered Children
```tsx
transition={{ delay: index * 0.1 }}
```

## Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Implementation Notes

1. **Always use Motion** for animations (from `motion/react`)
2. **Maintain consistent blur** at 20px for glass effects
3. **Use backdrop-filter** inline style for cross-browser support
4. **Implement scrollbar-hide** utility for horizontal scrolls
5. **Apply antialiasing** for crisp text rendering

## File Structure
```
/src/app
  /components
    /home
      - HeroSection.tsx
      - TrendingTop10.tsx
      - CinematicUniverses.tsx
      - MoodDiscovery.tsx
      - GenreDiscovery.tsx
    - Navigation.tsx
    - Layout.tsx
  /pages
    - Home.tsx
    - Explore.tsx
    - Movies.tsx
    - etc.
```

## Custom CSS Utilities

```css
.scrollbar-hide { /* Hides scrollbar */ }
.glass-surface { /* Pre-made glass effect */ }
.text-gradient { /* Blue-purple gradient text */ }
```

## Best Practices

1. **Never use hard borders** - Always use subtle rgba borders
2. **Avoid dashboard aesthetics** - This is editorial, not functional
3. **Embrace whitespace** - Let content breathe
4. **Use real images** - Never placeholder graphics
5. **Maintain depth** - Layer gradients and shadows thoughtfully
6. **Keep motion subtle** - Premium feels refined, not flashy
