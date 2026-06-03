# Văn Hóa Soi Đường - Design System

## Color Palette

### Primary Colors
```css
--ivory: #FAF6EF          /* Warm paper background */
--white: #FFFFFF          /* Pure white for cards */
--burgundy: #7B1E2B       /* Primary accent - "đỏ đô" */
--ochre: #C99A3B          /* Secondary accent - "vàng đất" */
```

### Branch Colors
```css
--terracotta: #B5562E     /* Branch 3 - Mặt Trận Ánh Sáng */
--teal: #2F5D54           /* Branch 4 - Khát Vọng Vươn Xa */
```

### Text Colors
```css
--ink: #2A211A            /* Primary text */
--soft-text: #5A4A38      /* Secondary text */
```

### Special
```css
--burgundy-15: rgba(123, 30, 43, 0.15)  /* Hairline borders */
--dark-bg: #1A1714        /* Dark mode background */
```

## Typography

### Font Families
```css
--font-display: 'Playfair Display', serif    /* Headings */
--font-body: 'Be Vietnam Pro', sans-serif    /* Body text */
--font-quote: 'Lora', serif                  /* Quotes */
```

### Usage Guidelines
- **Display Headings**: Use Playfair Display for hero titles, section headers
- **Body Text**: Use Be Vietnam Pro for all UI, navigation, paragraphs
- **Quotes**: Use Lora in italic for historical quotes and testimonials

### Type Scale
- Hero: 4xl-7xl (responsive)
- Section Headers: 2xl-5xl
- Subsections: xl-2xl
- Body: base (16px)
- Small: sm-xs

## Spacing

### 8px Grid System
All spacing follows an 8px base unit:
- xs: 8px (2 in Tailwind)
- sm: 16px (4)
- md: 24px (6)
- lg: 32px (8)
- xl: 48px (12)
- 2xl: 64px (16)

## Components

### Buttons

#### Pill Button
```tsx
<PillButton to="/path" variant="primary">
  Label Text
</PillButton>
```
- Primary: Burgundy bg, white text, hover to ochre
- Secondary: Ochre bg, ink text, hover to burgundy

### Cards

#### Branch Card
```tsx
<div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-burgundy">
  ...
</div>
```

#### Quote Block
```tsx
<div className="bg-burgundy/5 border-l-4 border-burgundy rounded-r-2xl p-8">
  <p className="font-quote italic text-lg">...</p>
</div>
```

### Icons

#### Bronze Drum
```tsx
<BronzeDrumIcon className="w-12 h-12 text-burgundy" />
```
Represents: Đông Sơn heritage, traditional Vietnamese culture

#### Lotus
```tsx
<LotusIcon className="w-16 h-16 text-burgundy" />
```
Represents: Purity, Vietnamese spiritual culture

## Motion & Animation

### Principles
- **Fade up**: Initial page content (opacity + y-translate)
- **Scale on hover**: Interactive elements (1 → 1.05-1.1)
- **Smooth transitions**: 0.3s ease for colors, 0.4s for transforms
- **Stagger**: Delay sequential items by 0.1s

### Examples
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

## Layout Patterns

### Section Structure
```tsx
<div className="min-h-screen bg-ivory py-16 px-6">
  <div className="max-w-4xl mx-auto">
    <div className="w-16 h-1 bg-burgundy mb-6" /> {/* Accent line */}
    <h1 className="font-display text-4xl md:text-5xl text-burgundy mb-6">
      Title
    </h1>
    <p className="text-lg text-soft-text leading-relaxed">
      Lead paragraph
    </p>
  </div>
</div>
```

### Responsive Breakpoints
- Mobile: 390px base
- Tablet: md (768px)
- Desktop: lg (1024px)
- Wide: xl (1280px)
- Max content: 1440px

## Decorative Elements

### Background Patterns
- Bronze drum circles: `opacity-3` to `opacity-5`
- Dot grid: `radial-gradient(circle, white 1px, transparent 1px)` at 30px intervals
- Paper grain: Subtle texture overlay

### Border Styles
- Hairline: `border-burgundy-15` (2px)
- Accent: `border-l-4 border-[color]`
- Card: `border-2 border-[color]/20`

## Accessibility

### Contrast Ratios
- Burgundy on ivory: AA+ for large text
- Ink on ivory: AAA
- White on burgundy: AAA
- Ochre on ivory: AA for large text

### Interactive States
- Focus: Ring with burgundy color
- Hover: Scale + shadow increase
- Active: Slight scale decrease (0.98)

## Content Guidelines

### Language
- All UI text MUST be in Vietnamese
- Use authentic Vietnamese diacritics
- Maintain formal, educational tone

### Vietnamese Strings
```javascript
{
  hero: "Văn hóa soi đường cho quốc dân đi",
  cta: "Khám phá Bản đồ Di sản",
  branches: [
    "Gốc Rễ Lý Luận",
    "Điểm Hẉn Giao Thoa",
    "Mặt Trận Ánh Sáng",
    "Khát Vọng Vươn Xa"
  ],
  team: "Nhóm thực hiện",
  quiz: "Bạn có phải chuyên gia văn hóa?"
}
```

## Branch-Specific Design

### Branch 1: Gốc Rễ Lý Luận (Burgundy)
- Timeline layout
- Expandable accordion sections
- Historical quote blocks

### Branch 2: Điểm Hẹn Giao Thoa (Ochre)
- Nested ring diagrams
- Image carousel
- Compare blocks

### Branch 3: Mặt Trận Ánh Sáng (Terracotta)
- Propaganda poster aesthetic
- Flip cards (3D rotate)
- Bold typography

### Branch 4: Khát Vọng Vươn Xa (Teal)
- Dark mode (#1A1714 bg)
- Gradient accents
- Modern tech aesthetic
- Audio/podcast cards
