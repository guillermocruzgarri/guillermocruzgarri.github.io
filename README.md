
# Guillermo Cruz - Professional Portfolio Website

This is the complete source code for Guillermo Eduardo Cruz Garri's professional portfolio website, showcasing expertise in Business Analysis and Financial Data Analysis.

## 🌐 Live Website

The site is currently deployed at: [https://guillermo-cruz-portf-y14frl.abacusai.app](https://guillermo-cruz-portf-y14frl.abacusai.app)

## 🚀 Tech Stack

- **Framework**: Next.js 14.2.28 (React 18.2.0)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: Zustand

## 📁 Project Structure

```
nextjs_space/
├── app/
│   ├── api/              # API routes
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── about.tsx         # About section
│   ├── blog.tsx          # Blog section
│   ├── contact.tsx       # Contact section
│   ├── experience.tsx    # Experience timeline
│   ├── footer.tsx        # Footer
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx          # Hero section
│   ├── portfolio.tsx     # Portfolio/Projects
│   ├── project-modal.tsx # Project details modal
│   ├── skills.tsx        # Skills section
│   └── theme-provider.tsx # Theme context
├── lib/
│   ├── cv-data.ts        # Professional data
│   └── utils.ts          # Utility functions
├── hooks/
│   └── use-toast.ts      # Toast notifications
├── public/               # Static assets
│   ├── BA-CV-Guillermo-Cruz.pdf
│   ├── FDA-CV-Guillermo-Cruz.pdf
│   └── guillermo-cruz-photo.jpg
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── postcss.config.js     # PostCSS configuration
├── components.json       # shadcn/ui configuration
└── package.json          # Dependencies
```

## 🎨 Features

### Sections

1. **Hero Section** - Introduction with professional photo and dual role focus
2. **About Section** - Detailed background, stats, and key highlights
3. **Skills Section** - Categorized technical and soft skills
4. **Experience Section** - Professional timeline with detailed achievements
5. **Portfolio Section** - Featured projects with impact metrics
6. **Blog Section** - Thought leadership articles (template)
7. **Contact Section** - Contact information and service offerings
8. **Footer** - Complete navigation and CV download links

### Key Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎭 Smooth animations and transitions with Framer Motion
- 📊 Professional data visualization
- 📄 Downloadable CV versions (Business Analyst & Financial Data Analyst)
- 🎯 Interactive project showcases
- 🌙 Theme support (light/dark mode ready)
- ⚡ Optimized performance with Next.js

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/guillermocruzgarri/guillermocruzgarri.github.io.git
cd guillermocruzgarri.github.io
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📝 Customization

### Update Personal Information

Edit `lib/cv-data.ts` to update:
- Personal information
- Professional experience
- Skills and certifications
- Projects and achievements
- Education details

### Modify Sections

Each section is a separate component in the `components/` folder:
- `hero.tsx` - Opening banner
- `about.tsx` - Biography and overview
- `skills.tsx` - Technical and soft skills
- `experience.tsx` - Work history
- `portfolio.tsx` - Projects showcase
- `blog.tsx` - Articles and insights
- `contact.tsx` - Contact information

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific styles: Inline Tailwind classes

## 📦 Dependencies

### Core

- `next` ^14.2.28
- `react` ^18.2.0
- `typescript` ^5.2.2

### UI & Styling

- `tailwindcss` ^3.3.3
- `@radix-ui/*` - UI primitives
- `framer-motion` ^10.18.0
- `lucide-react` ^0.446.0

### Forms & Validation

- `react-hook-form` ^7.53.0
- `zod` ^3.23.8

### See `package.json` for complete list

## 🚢 Deployment

### GitHub Pages

1. Update `next.config.js` for static export:
```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '',
}
```

2. Build the project:
```bash
npm run build
```

3. Deploy the `out` folder to GitHub Pages

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Compatible with:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any static hosting service

## 🔧 Environment Variables

No environment variables required for basic functionality.

For additional features (analytics, forms), create `.env.local`:

```env
# Optional
NEXT_PUBLIC_GOOGLE_ANALYTICS=your-ga-id
```

## 📄 License

© 2024 Guillermo Eduardo Cruz Garri. All rights reserved.

## 📧 Contact

- **Email**: gcgarri@gmail.com
- **Phone**: +(356) 7951 3971
- **LinkedIn**: [linkedin.com/in/guillermo-cruz-garri](https://www.linkedin.com/in/guillermo-cruz-garri/)
- **Location**: Malta - Zebbug

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

---

**Note**: This portfolio showcases 15+ years of professional experience in Business Analysis and Financial Data Analysis across education, mining, food, and construction sectors, with proven achievements in process optimization, cost reduction, and strategic business intelligence implementation.
