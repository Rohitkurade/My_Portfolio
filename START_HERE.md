# 🎨 IDE-Inspired MERN Portfolio

> A production-ready, full-stack MERN portfolio with terminal aesthetic, glassmorphism UI, and smooth Framer Motion animations.

<div align="center">

![MERN](https://img.shields.io/badge/MERN-Stack-00D084?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-13AA52?style=for-the-badge&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**[Quick Start](#-quick-start) • [Features](#-features) • [Docs](#-documentation) • [Deploy](#-deployment)**

</div>

---

## ✨ Features

### 🎬 Frontend Excellence
- **7 React Components** with Framer Motion animations
- **Glassmorphism UI** with backdrop blur effects
- **Terminal-Style Hero** with typewriter animation
- **Responsive Design** - Mobile, tablet, desktop
- **Smooth Scroll Navigation** with active section detection
- **Dark Theme** with syntax-highlight color palette
- **Custom Hooks** for scroll detection and typing effects

### 🔧 Backend Robustness
- **Express REST API** with 4 resource endpoints
- **MongoDB + Mongoose** for data persistence
- **CRUD Operations** for projects, experiences, skills, contacts
- **CORS Protection** and error handling
- **Environment Configuration** for multiple environments

### 🎨 Design System
- **Deep Midnight Black** (#050505) background
- **Atom One Dark/Dracula** inspired colors
- **Inter Font** for UI elements
- **Source Code Pro** for technical text
- **Animated CSS Grid** overlay
- **Code Block Styling** throughout

---

## 📚 What's Included

```
✅ 7 React Components
   ├── Navbar (Glassmorphic navigation)
   ├── Hero (Typewriter animation)
   ├── Skills (Categorized tech cloud)
   ├── Projects (Masonry gallery)
   ├── Timeline (Career progression)
   ├── Contact (JSON-style form)
   └── Footer (Console-style)

✅ 4 Custom React Hooks
   ├── useScrollActive
   ├── useTypewriter
   └── ... expandable

✅ REST API (4 Endpoints)
   ├── /api/projects
   ├── /api/experiences
   ├── /api/skills
   └── /api/contact

✅ 4 MongoDB Models
   ├── Project
   ├── Experience
   ├── Skill
   └── Contact

✅ Complete Documentation
   ├── Main README.md
   ├── SETUP_GUIDE.md
   ├── QUICKSTART.md
   ├── DOCUMENTATION.md
   └── PROJECT_SUMMARY.md

✅ 40+ Files & Folders
   ├── Client (React + Vite)
   ├── Server (Express + Node.js)
   ├── Config Files
   └── Documentation
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)
- npm or yarn

### Installation (5 minutes)

```bash
# 1️⃣ Clone and navigate
cd portfolio_mern

# 2️⃣ Install all dependencies
npm run install-all

# 3️⃣ Setup MongoDB
mongod

# 4️⃣ Create server/.env
cp server/.env.example server/.env

# 5️⃣ Start servers (two terminals)
# Terminal 1:
cd server && npm run dev

# Terminal 2:
cd client && npm run dev

# 6️⃣ Open browser
# http://localhost:5173 🎉
```

---

## 🎯 Customization

### Update Your Information
Edit `client/src/utils/constants.js`:
```javascript
export const SKILLS = { /* Your skills */ };
export const PROJECTS = { /* Your projects */ };
export const EXPERIENCES = { /* Your experiences */ };
```

### Customize Colors
Edit `client/tailwind.config.js`:
```javascript
colors: {
  'code-green': '#98C379',
  'code-blue': '#61AFEF',
  'code-purple': '#C678DD',
  'code-cyan': '#56B6C2',
}
```

### Update Social Links
Edit `client/src/components/Contact.jsx`:
```javascript
{ icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
```

---

## 📡 API Reference

### Get All Projects
```bash
GET /api/projects
```

### Create New Project
```bash
POST /api/projects
Body: { title, description, technologies, featured, ... }
```

### Get All Experiences
```bash
GET /api/experiences
```

### Submit Contact Form
```bash
POST /api/contact
Body: { name, email, subject, message }
```

[Full API Documentation →](./server/README.md)

---

## 🗂️ Project Structure

```
portfolio_mern/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/    # 7 React Components
│   │   ├── hooks/         # Custom Hooks
│   │   ├── styles/        # Global CSS
│   │   ├── utils/         # Constants
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── server/                 # Express Backend
│   ├── config/            # Database Config
│   ├── models/            # MongoDB Schemas
│   ├── controllers/       # API Logic
│   ├── routes/            # API Routes
│   ├── server.js
│   └── package.json
│
└── Documentation/
    ├── README.md
    ├── SETUP_GUIDE.md
    ├── QUICKSTART.md
    ├── DOCUMENTATION.md
    └── PROJECT_SUMMARY.md
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Axios** - HTTP Client

### Backend
- **Node.js** - Runtime
- **Express** - Web Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **CORS** - Cross-Origin Support

---

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Tablet optimization
- ✅ Desktop full features
- ✅ Touch-friendly buttons
- ✅ Smooth scaling

---

## 🎨 Design Features

| Feature | Details |
|---------|---------|
| **Theme** | Dark (Atom One Dark inspired) |
| **Background** | Deep black (#050505) with animated grid |
| **Typography** | Inter (UI) + Source Code Pro (Code) |
| **Colors** | Purple, Cyan, Green, Orange, Blue |
| **Effects** | Glassmorphism, Blur, Animations |
| **Animations** | Framer Motion, CSS transitions |

---

## 🚀 Deployment

### Deploy Frontend (Vercel)
```bash
cd client
npm run build
vercel
```

### Deploy Backend (Railway/Render)
1. Push to GitHub
2. Connect repository
3. Set environment variables
4. Deploy!

[Deployment Guide →](./SETUP_GUIDE.md#deployment-)

---

## 📖 Documentation

- **[README.md](./README.md)** - Main project documentation
- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Complete setup instructions
- **[QUICKSTART.md](./QUICKSTART.md)** - Quick reference guide
- **[DOCUMENTATION.md](./DOCUMENTATION.md)** - Comprehensive guide
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Project overview
- **[Client README](./client/README.md)** - Frontend documentation
- **[Server README](./server/README.md)** - Backend documentation

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```
MongoDB service not running
Solution: mongod or use MongoDB Atlas
```

### Port Already in Use
```
EADDRINUSE: Port 5000 taken
Solution: Change PORT in .env or kill process
```

### CORS Errors
```
CORS policy blocked request
Solution: Check CLIENT_URL in server/.env
```

[More Troubleshooting →](./SETUP_GUIDE.md#troubleshooting-)

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://docs.mongodb.com/)

---

## 📊 Component Overview

### Navbar
- Fixed header with glassmorphism
- Active section highlighting
- Smooth scroll navigation

### Hero
- Terminal-style greeting
- Typewriter animation
- CTA buttons

### Skills
- Categorized tech stack
- 4 categories (Frontend, Backend, Database, DevOps)
- Proficiency levels

### Projects
- Masonry grid layout
- Tech badges
- External links

### Timeline
- Vertical career timeline
- Date ranges
- Current position indicator

### Contact
- JSON-style form
- Form validation
- Social links

### Footer
- Console-style footer
- GitHub links
- Credits

---

## ⚡ Performance

- ✅ Optimized animations (GPU accelerated)
- ✅ Lazy loaded images
- ✅ Code splitting with Vite
- ✅ CSS purging for production
- ✅ Debounced scroll handlers

---

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ Keyboard navigation
- ✅ Color contrast compliant
- ✅ ARIA labels
- ✅ Screen reader friendly

---

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ |
| Firefox | Latest | ✅ |
| Safari | Latest | ✅ |
| Edge | Latest | ✅ |
| Mobile | All | ✅ |

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

---

## 📄 License

MIT License - Use freely for personal and commercial projects

---

## 🎉 Getting Started Now!

```bash
# Clone the repository
cd portfolio_mern

# Install dependencies
npm run install-all

# Start development
cd server && npm run dev  # Terminal 1
cd client && npm run dev  # Terminal 2

# Open http://localhost:5173
```

---

## 📞 Support

- Check the [documentation files](./DOCUMENTATION.md)
- Review [setup guide](./SETUP_GUIDE.md)
- Read [component comments](./client/src/components)
- Check browser console for errors

---

<div align="center">

### Made with ❤️ for Developers

**[⬆ Back to Top](#-ide-inspired-mern-portfolio)**

---

### Show Your Support

If this project helped you, please give it a ⭐

---

**Ready to launch your portfolio? Let's go! 🚀**

</div>
