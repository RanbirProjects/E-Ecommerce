# MERN E-commerce Store

A full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User authentication
- Product catalog
- Shopping cart
- Responsive design
- Admin dashboard

## Project Structure

```
ecommerce-store/
├── client/          # React frontend
├── server/          # Node.js backend
└── README.md
```

## Setup Instructions

### Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file with the following variables:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Technologies Used

- Frontend: React.js, Redux, Material-UI
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Image Storage: Cloudinary # E-Ecommerce
