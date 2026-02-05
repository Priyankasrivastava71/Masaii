# Authorization-Based TODO API

This is a backend TODO application built using **Node.js, Express, Supabase, and JWT**.
It supports user authentication, protected routes, and user-specific todo management.



##  Features

- User Signup & Login
- Password hashing using bcrypt
- JWT-based authentication
- Protected TODO routes
- User-specific CRUD operations
- Supabase used as database (no Supabase Auth)



## Tech Stack

- Node.js
- Express.js
- Supabase (PostgreSQL)
- JWT (jsonwebtoken)
- bcrypt
- dotenv



## Project Structure
src/
 ├── config/
 │    └── supabase.js
 ├── middleware/
 │    └── auth.middleware.js
 ├── routes/
 │    ├── auth.routes.js
 │    └── todo.routes.js
 ├── controllers/
 ├── app.js
 └── server.js

## API Endpoints

- Auth Routes

- POST /auth/signup → Register user
- POST /auth/login → Login & get JWT

- Todo Routes (Protected)

- POST /todos → Create todo
- GET /todos → Get logged-in user's todos
- PUT /todos/:id → Update own todo
- DELETE /todos/:id → Delete own todo
 
