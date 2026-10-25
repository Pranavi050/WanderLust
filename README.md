WanderLust — Stay & Explore
WanderLust is a full-stack web application inspired by Airbnb that allows users to explore property listings and discover places to stay.
Features
Browse available property listings.
View listing details.
User authentication using Passport.js.
Server-side rendering with EJS templates.
MongoDB database integration for storing application data.
Cloudinary integration for image handling.

Tech Stack
Frontend: HTML, CSS, JavaScript, EJS
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Authentication: Passport.js
Image Management: Cloudinary
Version Control: Git and GitHub

Getting Started
Prerequisites
Node.js and npm
MongoDB database
Cloudinary account, if using image upload features
Installation

Clone the repository:
git clone https://github.com/Pranavi050/WanderLust.git

Navigate to the project directory:
cd WanderLust

Install the dependencies:
npm install

Create a .env file in the project root and configure the environment variables required by the application. These may include your MongoDB connection string, session secret, and Cloudinary credentials.
Start the application:
node app.js

Open your browser and visit:
http://localhost:3000

Project Structure

WanderLust/
├── controllers/   # Request-handling logic
├── init/          # Database initialization scripts
├── models/        # Database models
├── public/        # Static assets
├── routes/        # Application routes
├── utils/         # Utility functions
├── views/         # EJS templates
├── app.js         # Application entry point
├── cloudConfig.js # Cloudinary configuration
├── middleware.js  # Custom middleware
├── package.json   # Project dependencies
└── .gitignore     # Git exclusion rules
