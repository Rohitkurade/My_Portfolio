#!/bin/bash

# Portfolio MERN Setup Script
echo "🚀 Setting up MERN Portfolio..."

# Install server dependencies
echo "📦 Installing server dependencies..."
cd server
npm install
cd ..

# Install client dependencies
echo "📦 Installing client dependencies..."
cd client
npm install
cd ..

echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Configure server/.env with your MongoDB URI and other settings"
echo "2. Start MongoDB service"
echo "3. Run the backend: cd server && npm run dev"
echo "4. In another terminal, run frontend: cd client && npm run dev"
echo ""
echo "🎉 Your portfolio will be at http://localhost:5173"
