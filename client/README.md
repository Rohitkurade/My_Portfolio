# Client - Portfolio Frontend 🎨

React + Vite + Tailwind CSS frontend for the MERN Portfolio application.

## Overview

A stunning, animated IDE-inspired portfolio website built with modern React practices and smooth animations.

## Features

- ✨ **Smooth Animations** with Framer Motion
- 🎨 **Custom Tailwind CSS** with IDE aesthetic
- 📱 **Fully Responsive** design
- ⌨️ **Typewriter Hero** animation
- 🖱️ **Scroll-triggered animations**
- 🎯 **Smooth scroll navigation**
- 💻 **Code-editor inspired UI**

## Prerequisites

- Node.js v16+
- npm or yarn

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

The dev server proxies `/api` requests to `http://localhost:5000` (backend server).

## Building for Production

```bash
npm run build
```

Output goes to `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar (glassmorphism)
│   │   ├── Hero.jsx          # Hero section with typing animation
│   │   ├── Skills.jsx        # Skills cloud display
│   │   ├── Projects.jsx      # Project gallery (masonry)
│   │   ├── Timeline.jsx      # Career timeline
│   │   ├── Contact.jsx       # Contact form (JSON-style)
│   │   └── Footer.jsx        # Footer
│   ├── hooks/
│   │   ├── useScrollActive.js    # Active section detection
│   │   └── useTypewriter.js      # Typewriter animation
│   ├── styles/
│   │   └── index.css        # Global styles
│   ├── utils/
│   │   └── constants.js     # Data constants & API URL
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json
```

## Key Components

### Navbar
- Fixed header with glassmorphism
- Active section highlighting
- Smooth navigation

### Hero
- Terminal-style greeting
- Typewriter animation cycling through roles
- CTA buttons with animations

### Skills
- Categorized tech stack
- Interactive cards
- Hover animations

### Projects
- Masonry grid layout
- System architecture badges
- Categorized tech tags
- External links

### Timeline
- Vertical career timeline
- Alternating layout
- Current position indicator
- Technology tags

### Contact
- JSON-style form
- Input validation
- Status feedback
- Social links

## Customization

### Update Content

Edit `src/utils/constants.js`:

```js
export const SKILLS = {
  Frontend: [
    { name: 'React', icon: '⚛️', proficiency: 'Expert' },
    // Add more...
  ],
  // ...
};

export const PROJECTS = [
  {
    title: 'Your Project',
    description: '...',
    // ...
  },
];
```

### Change Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      'code-green': '#98C379',    // Your green
      'code-blue': '#61AFEF',     // Your blue
      'code-purple': '#C678DD',   // Your purple
      'code-cyan': '#56B6C2',     // Your cyan
    },
  },
}
```

### Modify Animations

Framer Motion variants are in each component. Example in `Hero.jsx`:

```js
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};
```

## API Integration

The frontend connects to the backend API at `http://localhost:5000/api`.

### Fetch Projects Example

In `Projects.jsx`:

```js
useEffect(() => {
  fetch('/api/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
    .catch(err => console.error(err));
}, []);
```

## Environment Variables

Create a `.env.local` file if needed:

```env
VITE_API_URL=http://localhost:5000/api
```

Access in code:

```js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
```

## Performance Tips

- Components are optimized with React.memo where needed
- Framer Motion animations use GPU acceleration
- Scroll event handlers are debounced
- Images use lazy loading
- CSS is purged for production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast
- Focus indicators visible

## Dependencies

- **react** - UI library
- **react-dom** - React DOM rendering
- **framer-motion** - Animation library
- **axios** - HTTP client (optional)
- **react-router-dom** - Routing (optional)

## Dev Dependencies

- **vite** - Build tool
- **@vitejs/plugin-react** - React plugin
- **tailwindcss** - Utility CSS
- **postcss** - CSS processor
- **autoprefixer** - CSS vendor prefixes

## Responsive Design

Breakpoints used:
- `sm: 640px`
- `md: 768px`
- `lg: 1024px`
- `xl: 1280px`
- `2xl: 1536px`

Components are fully responsive using Tailwind's responsive prefixes.

## Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Deploy to GitHub Pages
Update `vite.config.js`:
```js
export default defineConfig({
  base: '/portfolio/',
  // ...
})
```

## License

MIT

---

**Frontend for MERN Portfolio Application**
