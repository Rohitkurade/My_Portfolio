# MERN Portfolio - Quick Start Guide

## 🚀 Installation (2 minutes)

### 1. Install Dependencies

```bash
# Option A: Using npm
npm run install-all

# Option B: Manual installation
cd server && npm install
cd ../client && npm install
```

### 2. Configure Backend

Create `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### 3. Start MongoDB

```bash
# Using local MongoDB
mongod

# OR using MongoDB Atlas (update MONGODB_URI in .env)
```

### 4. Run Development Servers

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
# Server runs on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
# Frontend runs on http://localhost:5173
```

## 📝 Customization

### Add Your Information

Edit `/client/src/utils/constants.js`:
- Update SKILLS
- Update PROJECTS
- Update EXPERIENCES

### Change Theme Colors

Edit `/client/tailwind.config.js`:
```js
colors: {
  'code-green': '#98C379',
  'code-blue': '#61AFEF',
  'code-purple': '#C678DD',
  'code-cyan': '#56B6C2',
}
```

### Update Social Links

Edit `/client/src/components/Contact.jsx` - Find the social links section

### Change Fonts

The portfolio uses:
- **Inter** - Headings & UI
- **Source Code Pro** - Code & Technical text

Fonts are loaded from Google Fonts in `/client/src/styles/index.css`

## 🌐 Deployment

### Frontend (Vercel, Netlify)

```bash
cd client
npm run build
# Deploy the 'dist' folder
```

### Backend (Heroku, Railway, Render)

```bash
cd server
git push <remote> main
```

Update `CLIENT_URL` environment variable on your hosting platform.

## 📚 API Reference

All endpoints start with `/api`

### Projects
- `GET /projects` - All projects
- `POST /projects` - Create project

### Experiences
- `GET /experiences` - All experiences
- `POST /experiences` - Create experience

### Skills
- `GET /skills` - All skills
- `POST /skills` - Create skill

### Contact
- `POST /contact` - Submit contact form

See [Server README](./server/README.md) for full documentation.

## 🎨 Component Structure

```
App
├── Navbar          (Navigation with scroll detection)
├── Hero            (Typewriter animation)
├── Skills          (Tech stack cloud)
├── Projects        (Masonry gallery)
├── Timeline        (Career progression)
├── Contact         (JSON-style form)
└── Footer          (Console-style footer)
```

## 🔧 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running (`mongod`)
- Check `MONGODB_URI` in `.env`
- Use MongoDB Atlas URI if using cloud

### Port Already in Use
- Change `PORT` in `.env` (default: 5000)
- Or kill the process using the port

### API Not Responding
- Ensure backend is running on `:5000`
- Check CORS configuration in `server.js`
- Verify proxy settings in `client/vite.config.js`

## 📖 Project Structure

```
portfolio_mern/
├── client/          # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── styles/
│   │   ├── utils/
│   │   └── App.jsx
│   └── package.json
├── server/          # Express Backend
│   ├── config/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   └── package.json
└── README.md
```

## 🚀 Next Steps

1. ✅ Update portfolio content
2. ✅ Customize colors and fonts
3. ✅ Add your project images
4. ✅ Configure contact email (optional)
5. ✅ Deploy to production

## 💡 Tips

- Use high-quality project images for best results
- Keep descriptions concise and impactful
- Update projects and experiences regularly
- Test on mobile devices before deploying
- Use real social media links in Contact section

## 📞 Support

For issues or questions:
1. Check the README files in `client/` and `server/`
2. Review the component source code
3. Check browser console for errors
4. Verify environment variables are set correctly

---

**Happy building! 🎉**
