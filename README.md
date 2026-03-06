# FET Semiconductors Pvt Ltd - Corporate Website

A production-ready enterprise corporate website built with Next.js 14, TypeScript, and Tailwind CSS, designed for a semiconductor/engineering services company.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Comprehensive metadata configuration for all pages
- **Performance**: Optimized for speed and Core Web Vitals
- **Animations**: Smooth scroll animations and hover effects
- **Enterprise UI**: Clean, professional design with navy and orange color scheme

## Pages

- **Home**: Hero section, services overview, stats, about preview, CTA
- **Services**: Comprehensive service offerings with detailed features
- **About**: Company mission, values, timeline, leadership team
- **Careers**: Culture, benefits, open positions
- **Contact**: Contact form and office information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── sections/              # Page sections
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   └── ...
└── public/                # Static assets

```

## Color Scheme

- **Primary Navy**: #00558c (navy-500)
- **Accent Orange**: #ff9100 (orange-500)
- **Backgrounds**: White and light gray (#f9fafb)

## Customization

### Update Company Information

Edit the following files:
- `app/layout.tsx` - Site metadata and title
- `components/Footer.tsx` - Footer content and links
- `sections/ContactInfo.tsx` - Contact details and office locations

### Modify Colors

Update `tailwind.config.ts` to change the color scheme.

### Add New Pages

Create new folders in the `app/` directory following Next.js App Router conventions.

## Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library (ready to use)

## License

This project is created for demonstration purposes.
