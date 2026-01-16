# Server - Portfolio Backend API 🚀

Express.js + MongoDB backend for the MERN Portfolio application.

## Overview

RESTful API for managing portfolio content including projects, experiences, skills, and contact messages.

## Features

- ✅ RESTful API endpoints
- ✅ MongoDB with Mongoose ODM
- ✅ CORS support
- ✅ Input validation
- ✅ Error handling
- ✅ Environment configuration

## Prerequisites

- Node.js v16+
- MongoDB (local or Atlas)
- npm or yarn

## Installation

```bash
npm install
```

## Environment Setup

Create a `.env` file in the server root:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
CLIENT_URL=http://localhost:5173
```

## Running the Server

**Development:**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

Server runs on `http://localhost:5000`

## API Endpoints

### Projects
```
GET    /api/projects              - Get all projects
GET    /api/projects/featured     - Get featured projects
GET    /api/projects/:id          - Get project by ID
POST   /api/projects              - Create new project
PUT    /api/projects/:id          - Update project
DELETE /api/projects/:id          - Delete project
```

### Experiences
```
GET    /api/experiences           - Get all experiences
GET    /api/experiences/:id       - Get experience by ID
POST   /api/experiences           - Create new experience
PUT    /api/experiences/:id       - Update experience
DELETE /api/experiences/:id       - Delete experience
```

### Skills
```
GET    /api/skills                - Get all skills
GET    /api/skills/category/:cat  - Get skills by category
POST   /api/skills                - Create new skill
PUT    /api/skills/:id            - Update skill
DELETE /api/skills/:id            - Delete skill
```

### Contact
```
GET    /api/contact               - Get all messages
POST   /api/contact               - Submit contact form
DELETE /api/contact/:id           - Delete message
```

## Database Models

### Project
```js
{
  title: String (required),
  description: String (required),
  shortDescription: String,
  image: String,
  technologies: [String],
  frontend: [String],
  backend: [String],
  database: [String],
  devops: [String],
  liveDemo: String,
  frontendCode: String,
  backendCode: String,
  featured: Boolean (default: false),
  systemArchitecture: String,
  order: Number (default: 0),
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### Experience
```js
{
  position: String (required),
  company: String (required),
  location: String,
  startDate: Date (required),
  endDate: Date,
  currentlyWorking: Boolean (default: false),
  description: String,
  technologies: [String],
  website: String,
  order: Number (default: 0),
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### Skill
```js
{
  category: String (required) ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools'],
  name: String (required),
  icon: String,
  proficiency: String ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
  order: Number (default: 0),
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### Contact
```js
{
  name: String (required),
  email: String (required),
  subject: String (required),
  message: String (required),
  read: Boolean (default: false),
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

## Example Requests

### Create a Project
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "E-Commerce Platform",
    "description": "Full-stack e-commerce platform",
    "technologies": ["React", "Node.js", "MongoDB"],
    "featured": true
  }'
```

### Submit Contact Form
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "Let's work together!"
  }'
```

## Project Structure

```
server/
├── config/
│   └── db.js              # MongoDB connection
├── models/
│   ├── Project.js         # Project schema
│   ├── Experience.js      # Experience schema
│   ├── Skill.js           # Skill schema
│   └── Contact.js         # Contact schema
├── controllers/
│   ├── projectController.js
│   ├── experienceController.js
│   ├── skillController.js
│   └── contactController.js
├── routes/
│   ├── projects.js        # Project routes
│   ├── experiences.js     # Experience routes
│   ├── skills.js          # Skill routes
│   └── contact.js         # Contact routes
├── server.js              # Main server file
├── package.json
└── .env                   # Environment variables
```

## Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **cors** - Cross-Origin Resource Sharing
- **dotenv** - Environment variables
- **nodemailer** - Email sending
- **express-validator** - Input validation

## Development Dependencies

- **nodemon** - Auto-reload during development

## Error Handling

The API returns consistent error responses:

```json
{
  "message": "Error description"
}
```

HTTP Status Codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `500` - Server Error

## CORS Configuration

CORS is configured to accept requests from:
- `http://localhost:5173` (development)
- Your production domain

Modify in `server.js` if needed.

## Future Enhancements

- [ ] Authentication & Authorization
- [ ] Admin dashboard API
- [ ] Blog/Articles API
- [ ] Image upload to S3/Cloudinary
- [ ] Email notifications
- [ ] Rate limiting
- [ ] API documentation with Swagger

## License

MIT

---

**Backend for MERN Portfolio Application**
