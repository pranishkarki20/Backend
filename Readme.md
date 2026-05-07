# Backend API

Node.js backend built with Express and MongoDB for user management, post management, and product file uploads.

## Features

- User registration, login, and logout flows
- CRUD endpoints for posts
- MongoDB integration with Mongoose
- File uploads with Multer
- CORS configured for `http://localhost:5173`
- Environment-based configuration with `dotenv`

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- JSON Web Token
- Multer
- Nodemon

## Prerequisites

- Node.js
- MongoDB
- npm

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

3. Create a `.env` file in the project root:

```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/your-database-name
```

4. Make sure MongoDB is running.

## Running the Project

Start in development mode:

```bash
npm run dev
```

Start in production mode:

```bash
npm start
```

The server runs on the port defined in `.env`, or `8000` by default.

## API Base Paths

- Users: `/api/v1/users`
- Posts: `/api/v1/posts`
- Product uploads: `/api/v1/product`

## API Endpoints

### User Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/users/register` | Register a new user |
| POST | `/api/v1/users/login` | Log in a user |
| POST | `/api/v1/users/logout` | Log out a user |

### Post Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/posts/create` | Create a new post |
| GET | `/api/v1/posts/get` | Get all posts |
| PATCH | `/api/v1/posts/update/:id` | Update a post by ID |
| DELETE | `/api/v1/posts/delete/:id` | Delete a post by ID |

### Product Upload Route

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/product/upload` | Upload one or more files using `multipart/form-data` |

#### Upload Details

- Middleware: `upload.any()`
- Storage location: `uploads/`
- Saved filename format: `<timestamp>-<originalname>`
- Content type: `multipart/form-data`

#### Example Request

```bash
curl -X POST http://localhost:8000/api/v1/product/upload \
  -F "image=@C:/path/to/file.jpg"
```

#### Example Response

```json
{
  "message": "Uploaded successfully"
}
```

Note: the current route handler returns `file: req.file`, while `upload.any()` stores uploaded files on `req.files`.

## Project Structure

```text
src/
|-- config/
|   |-- app.js
|   |-- constants.js
|   `-- database.js
|-- controllers/
|   |-- post.contollers.js
|   `-- user.controller.js
|-- middleware/
|   `-- multer.js
|-- models/
|   |-- post.model.js
|   `-- user.model.js
|-- routes/
|   |-- post.route.js
|   |-- productupload.js
|   `-- user.route.js
`-- index.js
```

## Notes

- Uploaded files are written to the local `uploads/` directory.
- CORS currently allows requests from `http://localhost:5173`.

