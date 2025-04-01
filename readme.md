# User Management API
This project is a Node.js-based API for user management, providing basic CRUD operations and authentication.
## Features
- User authentication (login)- Get all users
- Get user by ID- Create new user
- Update existing user- Delete user
## Technologies Used
- Node.js
- Express.js- JSON Web Tokens (JWT) for authentication
- bcryptjs for password hashing- dotenv for environment variable management
## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file and add your JWT_SECRET4. Run the server: `npm run dev`
## API Endpoints
- POST /api/login - User login- GET /api/users - Get all users (protected)
- GET /api/users/:id - Get user by ID (protected)- POST /api/users - Create new user (protected)
- PUT /api/users/:id - Update user (protected)- DELETE /api/users/:id - Delete user (protected)
## Authentication

All protected routes require a valid JWT token in the Authorization header:
Authorization: Bearer <your_token_here>

## Error Handling
The API includes basic error handling and logging middleware.
## Future Improvements
- Implement database integration (e.g., MySQL with Sequelize)- Add user registration functionality
- Enhance input validation and error messages
- Implement password reset feature- Add unit and integration tests
## License

This project is licensed under the ISC License.







>




















