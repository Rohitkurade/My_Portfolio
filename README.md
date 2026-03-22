# IDE-Inspired MERN Portfolio 🚀

A high-end, single-page MERN stack developer portfolio with an IDE/Code-Editor aesthetic inspired by Tamal Sen's design philosophy.

## Features ✨

### Design & Visuals
- **Deep Midnight Black Background** (#050505) with subtle animated CSS grid overlay
- **IDE/Code-Editor Aesthetic** with syntax-highlighted code blocks in background
- **Atom One Dark / Dracula Color Palette** featuring purples, cyans, and greens
- **Glassmorphism Effect** on navbar and components
- **Smooth Animations** powered by Framer Motion

### Typography
- **Inter Font** for UI elements
- **Source Code Pro Font** for technical descriptions and tags

### Sections
1. **Hero Section** - Terminal-style typing animation cycling through roles
2. **Skills Cloud** - Categorized tech stack (Frontend, Backend, Database, DevOps)
3. **Project Gallery** - Masonry grid with project cards featuring:
   - System Architecture badges
   - Categorized tech tags (Frontend, Backend, Database)
   - Live Demo & Code repository links
4. **Career Timeline** - Vertical timeline showing career progression
5. **Contact Form** - JSON-style contact form with validation
6. **Footer** - Console-style footer with social links

## Tech Stack

### Frontend
- **React** - UI Library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Axios** - HTTP Client

### Backend
- **Node.js** - Runtime
- **Express** - Web Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **CORS** - Cross-Origin requests

## Project Structure

portfolio_mern/
├── client/                    # React Frontend
│   ├── src/
│   │   ├── components/       # React Components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Timeline.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── hooks/            # Custom Hooks
│   │   │   ├── useScrollActive.js
│   │   │   └── useTypewriter.js
│   │   ├── styles/           # CSS Files
│   │   ├── utils/            # Constants & Utilities
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── server/                    # Node.js Backend
    ├── config/               # Database Configuration
    ├── models/               # MongoDB Schemas
    │   ├── Project.js
    │   ├── Experience.js
    │   ├── Skill.js
    │   └── Contact.js
    ├── controllers/          # Route Controllers
    │   ├── projectController.js
    │   ├── experienceController.js
    │   ├── skillController.js
    │   └── contactController.js
    ├── routes/               # API Routes
    │   ├── projects.js
    │   ├── experiences.js
    │   ├── contact.js
    │   └── skills.js
    ├── server.js             # Main Server File
    ├── package.json
    └── .env.example
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. **Navigate to server directory:**
```bash
cd server
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create `.env` file:**
```bash
cp .env.example .env
```

4. **Configure environment variables:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
CLIENT_URL=http://localhost:5173
```

5. **Start MongoDB:**
```bash
# If using local MongoDB
mongod
```

6. **Run the server:**
```bash
npm run dev
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to client directory:**
```bash
cd client
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Experiences
- `GET /api/experiences` - Get all experiences
- `GET /api/experiences/:id` - Get experience by ID
- `POST /api/experiences` - Create experience
- `PUT /api/experiences/:id` - Update experience
- `DELETE /api/experiences/:id` - Delete experience

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/category/:category` - Get skills by category
- `POST /api/skills` - Create skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Contact
- `GET /api/contact` - Get all contact messages
- `POST /api/contact` - Submit contact form
- `DELETE /api/contact/:id` - Delete contact message

## Customization

### Add Your Own Content

1. **Update Skills** - Edit `/client/src/utils/constants.js`
2. **Update Projects** - Edit `/client/src/utils/constants.js` or fetch from API
3. **Update Experiences** - Edit `/client/src/utils/constants.js` or fetch from API
4. **Social Links** - Update Contact.jsx social section
5. **Colors** - Modify `/client/tailwind.config.js` theme colors

### Styling

Change the color scheme by modifying Tailwind theme in `tailwind.config.js`:
```js
colors: {
  'code-green': '#98C379',    // Change green
  'code-blue': '#61AFEF',     // Change blue
  'code-purple': '#C678DD',   // Change purple
  'code-cyan': '#56B6C2',     // Change cyan
}
```

## Building for Production

### Frontend Build
```bash
cd client
npm run build
```

Output goes to `client/dist/`

### Deploy to Vercel
```bash
cd client
npm install -g vercel
vercel
```

## Environment Variables

**Server (.env):**
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
NODE_ENV=production
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
CLIENT_URL=your_production_url
```

**Client (if needed):**
```env
VITE_API_URL=https://your-api-domain.com/api
```

## Features Coming Soon

- [ ] API Interaction Terminal Component
- [ ] Blog section with MDX support
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Admin dashboard for content management
- [ ] Email notifications for contact form

## Performance Optimizations

- Code splitting with React.lazy
- Image lazy loading
- CSS-in-JS optimization
- Debounced scroll handlers
- Memoized components with React.memo

## Accessibility

- Semantic HTML
- Keyboard navigation support
- ARIA labels where needed
- Color contrast compliant
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your portfolio!

## Author

Built by Rohit Kurade - Full-Stack Developer

## Support

For issues, questions, or suggestions, please create an issue on GitHub.

----

**Happy Coding! 🚀**
