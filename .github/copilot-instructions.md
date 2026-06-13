# Advanced React Portfolio - Development Guide

This is an advanced React portfolio project built with modern technologies and best practices.

## Project Setup

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (lightning-fast bundler)
- **Styling**: Tailwind CSS + PostCSS
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Routing**: React Router v6
- **Package Manager**: npm

## Key Features

- Modern component-based architecture
- Type-safe development with TypeScript
- Smooth animations and transitions
- Responsive design with Tailwind CSS
- Custom hooks for reusable logic
- Zustand stores for state management
- Path aliases for clean imports (@components, @pages, etc.)

## Quick Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (port 3000)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality
npm run type-check   # TypeScript type checking
```

## File Structure

- `src/components/` - Reusable UI components (Navigation, Footer, Button, Card, Section)
- `src/pages/` - Page components (Home, About, Projects, Contact)
- `src/hooks/` - Custom React hooks
- `src/store/` - Zustand state management stores
- `src/types/` - TypeScript type definitions
- `src/utils/` - Utility functions
- `src/constants/` - Application constants

## Configuration Files

- `vite.config.ts` - Vite build configuration with React plugin
- `tsconfig.json` - TypeScript configuration with path aliases
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS with Tailwind and Autoprefixer
- `.eslintrc.cjs` - ESLint rules for code quality
- `.gitignore` - Git ignore patterns

## Customization Tips

### Change Portfolio Details
1. Update `src/constants/index.ts` with your info
2. Edit `src/pages/Home.tsx` for hero section
3. Update `src/pages/About.tsx` with your bio and skills
4. Add your projects to `src/pages/Projects.tsx`
5. Update contact info in `src/pages/Contact.tsx`

### Add New Pages
1. Create new file in `src/pages/`
2. Add route in `src/App.tsx` using React Router
3. Update navigation in `src/components/Navigation.tsx`

### Customize Styling
- Modify colors in `tailwind.config.js`
- Update animations in the same config
- Override styles in `src/index.css`

## Performance Optimizations

- Vite code splitting and tree-shaking
- Lazy component loading with React Router
- Optimized Tailwind CSS output
- Minified production builds
- Image optimization (using emoji/SVG)

## Development Best Practices

- Use TypeScript for type safety
- Keep components small and reusable
- Use custom hooks for logic separation
- Store global state in Zustand
- Follow component naming conventions
- Add proper TypeScript types to all functions

## Deployment

Ready to deploy to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

Build command: `npm run build`
Output directory: `dist/`

## Next Steps

1. Install dependencies: `npm install`
2. Start development: `npm run dev`
3. Customize with your information
4. Test responsiveness across devices
5. Build and deploy

Happy coding! 🚀
