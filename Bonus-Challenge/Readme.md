

# Full Stack Authentication App

This is a simple full-stack authentication app built with **React** for the frontend, **Express** for the backend, and **MongoDB** for the database. The app provides a user-friendly interface for users to sign up, log in, and manage their accounts.

## Features

- **User Registration**: Users can sign up with a unique nickname and email.
- **User Authentication**: Secure login and logout functionality.
- **Protected Routes**: Users are redirected to the login page if not authenticated.
- **Dashboard**: A user dashboard.

## Tech Stack

- **Frontend**: React, React Router
- **Backend**: Express, JWT, Zod
- **Database**: MongoDB
- **Styling**: CSS

## Project Structure

```bash
Full-Stack-Auth-App/
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── .env
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Dashboard.jsx
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   └── Signup.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── public/
    ├── package.json
    └── vite.config.js` 
```
## Getting Started

Follow the steps below to set up and run the application on your local machine.

### Prerequisites

Ensure you have the following software installed:

-   Node.js (v14 or later)
-   [MongoDB](https://www.mongodb.com/try/download/community) (local or cloud-based)
-   [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/full-stack-auth-app.git
cd full-stack-auth-app 
```
### 2. Set Up the Backend

1.  Navigate to the `backend` directory:
    
    ```bash
    cd backend
    ```
    
2.  Install the backend dependencies:
    ```bash    
    npm install
    ```
3.  Create a `.env` file in the `backend` directory and add your environment variables:
    
    ```bash
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ``` 
    
4.  Start the backend server:
    
    ```bash
    node server.js
    ``` 
    
    The backend server will run on [http://localhost:5000](http://localhost:5000).
    

### 3. Set Up the Frontend

1.  Navigate to the `frontend` directory:
    
    ```bash
    cd ../frontend
    ``` 
    
2.  Install the frontend dependencies:
    ```bash
    npm install
    ``` 
    
3.  Start the frontend development server:
    ```bash    
    npm run dev
    ```
    
    The frontend server will run on http://localhost:5173.
    

### 4. How to Use

-   Visit http://localhost:5173 in your browser.
-   You will see two buttons: **Login** and **Signup**.
-   Click on **Signup** to create a new account. Enter a unique nickname and email.
-   If the nickname or email already exists, an alert will be displayed.
-   After signing up, you will be redirected to the **Dashboard**.
-   Use the **Logout** button on the dashboard to log out.
-   If you log out or visit a protected route without being authenticated, you will be redirected to the **Login** page.

## Screenshots
![image](https://github.com/user-attachments/assets/c2830a37-d4b6-44f8-b72c-e80777357f34)
![image](https://github.com/user-attachments/assets/cbb80beb-47fc-4575-b245-201c21699ccc)
![image](https://github.com/user-attachments/assets/4396860b-85ed-4325-985d-52bdce4e1c5c)
![image](https://github.com/user-attachments/assets/8ab0dc90-0873-4010-846a-b30108cdad46)
![image](https://github.com/user-attachments/assets/d84d4a0f-1d85-4f1b-8612-7f80b2c51757)

## Troubleshooting

-   **CORS Issues**: If you encounter CORS errors, make sure the backend is configured to accept requests from `http://localhost:5173`.
-   **MongoDB Connection Errors**: Ensure that your MongoDB server is running, and the connection string in `.env` is correct.
-   **Environment Variables**: Ensure you have created a `.env` file with the correct variables in the `backend` directory.

## Dependencies

### Backend

-   **express**: Web framework for Node.js
-   **mongoose**: MongoDB object modeling tool
-   **jsonwebtoken**: JSON Web Token implementation for authentication
-   **dotenv**: Loads environment variables from a `.env` file
-   **zod**: Schema validation for user inputs

### Frontend

-   **react**: Frontend JavaScript library
-   **react-router-dom**: Routing library for React
-   **axios**: Promise-based HTTP client

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

-   React Documentation
-   [Express Documentation](https://expressjs.com/)
-   [MongoDB Documentation](https://docs.mongodb.com/)
-   [Vite Documentation](https://vitejs.dev/)

markdown

Copy code

 ``### Explanation of `README.md` Content

1. **Introduction**: Brief overview of the project, its features, and tech stack.
2. **Project Structure**: Visual representation of the file structure.
3. **Getting Started**: Step-by-step instructions to set up and run the application.
4. **Dependencies**: Lists the key dependencies used in the project.
5. **Troubleshooting**: Common issues and solutions.
6. **License and Acknowledgments**: License details and useful resources.

### Summary

This `README.md` provides comprehensive information about the project, making it easier for others to understand and set up the application. Feel free to adjust the content as needed, especially the GitHub repository link and any specific environment variables.`` 

4o
