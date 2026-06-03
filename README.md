# Văn Hóa Soi Đường

**Culture Lights the Way** - An Interactive Educational Website about Ho Chi Minh's Thought on Culture

## Project Overview

This is a multi-screen, responsive educational website built by a 4-student team, exploring Ho Chi Minh's thought on Vietnamese culture through an interactive mind-map navigation system.

## Design Philosophy

### Art Direction
- **Mood**: Modern minimalism fused with Vietnamese heritage
- **Aesthetic**: Digital museum / exhibition feeling with calm, premium presentation
- **Typography**: 
  - Display headings: Playfair Display (serif)
  - Body text: Be Vietnam Pro (sans-serif)
  - Quotes: Lora (italic serif)

### Color Palette
- **Background**: Warm ivory (#FAF6EF) and pure white (#FFFFFF)
- **Primary Accent**: Deep burgundy "đỏ đô" (#7B1E2B)
- **Secondary Accent**: Warm ochre gold "vàng đất" (#C99A3B)
- **Tertiary**: Terracotta (#B5562E), Deep teal (#2F5D54)
- **Text**: Ink (#2A211A), Soft text (#5A4A38)

### Decorative Motifs
- Đông Sơn bronze-drum concentric circles with radiating star
- Lotus flower (symbol of Vietnamese culture)
- Vietnamese lacquer (sơn mài) textures
- Fine paper grain

## Architecture

### Tech Stack
- **Framework**: React 18.3
- **Routing**: React Router 7.13
- **Styling**: Tailwind CSS 4.1
- **Animations**: Motion (Framer Motion successor)
- **Build Tool**: Vite 6.3

### Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── BronzeDrumIcon.tsx    # Vietnamese heritage symbol
│   │   ├── LotusIcon.tsx         # Lotus flower decoration
│   │   ├── Navigation.tsx        # Top navigation bar
│   │   ├── Footer.tsx            # Footer with quiz & team
│   │   ├── Layout.tsx            # Main layout wrapper
│   │   ├── MiniQuiz.tsx          # Interactive quiz component
│   │   └── TeamSection.tsx       # Team member showcase
│   ├── pages/
│   │   ├── Hero.tsx              # Landing page
│   │   ├── MindMap.tsx           # Interactive mind-map hub
│   │   ├── GocReLyLuan.tsx       # Branch 1: Theoretical Roots
│   │   ├── DiemHenGiaoThoa.tsx   # Branch 2: Cultural Intersection
│   │   ├── MatTranAnhSang.tsx    # Branch 3: Light Front
│   │   └── KhatVongVuonXa.tsx    # Branch 4: Future Aspirations
│   ├── routes.tsx                # React Router configuration
│   └── App.tsx                   # App entry point
└── styles/
    ├── fonts.css                 # Vietnamese font imports
    └── theme.css                 # Color system & typography
```

## Key Features

### 1. Interactive Mind-Map Navigation
The centerpiece is an interactive network diagram where users can explore four main branches of Ho Chi Minh's cultural thought:
- **Gốc Rễ Lý Luận** (Theoretical Roots) - Burgundy
- **Điểm Hẹn Giao Thoa** (Cultural Intersection) - Ochre
- **Mặt Trận Ánh Sáng** (Light Front) - Terracotta
- **Khát Vọng Vươn Xa** (Future Aspirations) - Teal

### 2. Branch Pages with Unique Layouts
Each branch has a distinct design language:
- **Timeline Style**: Vertical timeline with expandable sections
- **Diagram Style**: Nested rings and image sliders
- **Editorial/Flip-cards**: Propaganda-poster aesthetic with interactive cards
- **Dark/Digital**: Modern dark mode with podcast-style audio cards

### 3. Interactive Elements
- Expandable accordion sections
- Flip cards with front/back content
- Image carousel/slider
- Interactive quiz with confetti celebration
- Hover states and smooth transitions

### 4. Responsive Design
- Desktop optimized at 1440px
- Mobile optimized at 390px
- Mind-map transforms into vertical stack on mobile

## Vietnamese Content

All UI text is in Vietnamese, including:
- Main headline: "Văn hóa soi đường cho quốc dân đi"
- Branch names in Vietnamese
- Historical quotes from Ho Chi Minh (1943)
- Team section: "Nhóm thực hiện"
- Quiz: "Bạn có phải chuyên gia văn hóa?"

## Development

### Installation
```bash
pnpm install
```

### Development Server
The Vite dev server is pre-configured and running. Access the preview in the IDE.

### Important Notes
- This is NOT a standard Vite setup
- Do NOT run `vite build` or `npm run build`
- Do NOT create `index.html` - entrypoint is auto-generated
- Do NOT manually start the dev server

## Team

This project was created by a 4-student team, with each member responsible for one branch of the cultural thought exploration.

## Academic Context

**Course**: Tư tưởng Hồ Chí Minh (Ho Chi Minh Thought)
**Chapter**: Chương 6 - Phần Văn hóa (Chapter 6 - Culture Section)
**Institution**: Trường Đại học Bách Khoa Hà Nội (Hanoi University of Science and Technology)
**Year**: 2026

---

*"Văn hóa soi đường cho quốc dân đi"* - Ho Chi Minh
