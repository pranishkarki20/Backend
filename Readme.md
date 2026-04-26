# Backend API

A Node.js backend application providing RESTful APIs for user management and post operations. This project serves as a foundation for building full-stack applications with authentication and content management features.

## Features

- **User Authentication**: Register, login, and logout functionality with secure password hashing
- **Post Management**: Create, read, update, and delete posts
- **Database Integration**: MongoDB with Mongoose ODM
- **CORS Support**: Configured for frontend integration (localhost:5173)
- **Environment Configuration**: Secure environment variable management

## Tech Stack

- **Runtime**: Node.js with ES modules
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: bcrypt for password hashing
- **Security**: CORS, dotenv for environment variables
- **Development**: Nodemon for hot reloading

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or cloud service like MongoDB Atlas)
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=8000
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   ```
   Replace `your-database-name` with your actual MongoDB database name.

4. Start MongoDB service (if running locally).

## Usage

### Development Mode
```bash
npm run dev
```
This starts the server with nodemon for automatic restarts on file changes.

### Production Mode
```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 8000).

## API Endpoints

### User Routes (`/api/v1/users`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Authenticate user login |
| POST | `/logout` | Logout user |

### Post Routes (`/api/v1/posts`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/create` | Create a new post |
| GET | `/get` | Retrieve all posts |
| PATCH | `/update/:id` | Update a specific post by ID |
| DELETE | `/delete/:id` | Delete a specific post by ID |

## Project Structure

```
src/
├── config/
│   ├── app.js          # Express app configuration
│   ├── database.js     # MongoDB connection
│   └── constants.js    # Application constants
├── controllers/
│   ├── user.controller.js    # User-related logic
│   └── post.controllers.js   # Post-related logic
├── models/
│   ├── user.model.js   # User data model
│   └── post.model.js   # Post data model
├── routes/
│   ├── user.route.js   # User API routes
│   └── post.route.js   # Post API routes
└── index.js            # Application entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built as part of a backend development journey
- Inspired by modern Node.js best practices