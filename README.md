# 🧠 Smart Brain API

![Node.js](https://img.shields.io/badge/Node.js-24-green?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-Framework-black?logo=express)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)


The backend API for the SmartBrain Face Detection web app.Built with Node.js and Express.js.
This server handles API routes, user entries, and face detection logic through integration with the Clarifai API.


## Tech Stack

- **Node.js** (runtime environment)
- **Express.js** (web framework)
- **CORS** (for front-end connection)
- **Clarifai API** (face detection model)
- **Dotenv** (environment configuration)
- **JavaScript (ES6+)**

## Version History

| Version | Description |
|----------|--------------|
| **v1.0** | Initial backend setup with Express and Clarifai API |
| **Next** | Connect to a database (PostgreSQL planned) |

---

## What I Learned

- Building an **Express.js** backend from scratch
- Handling API requests and integrating **Clarifai** for face detection
- Structuring **RESTful** endpoints with clean route organization
- Configuring **CORS** for communication between backend and frontend
- Managing environment variables securely with **.env**
- Preparing the backend for database and authentication integration


## Setup

```bash
# Clone the repository from GitHub
git clone https://github.com/PedroTeixeira2308/Smart-brain-api.git

# Move into the project directory
cd Smart-brain-api

# Install dependencies
npm install

# Create a .env file in the root of the project
# Add your Clarifai Personal Access Token and desired port
CLARIFAI_PAT=your_clarifai_personal_access_token

# Start the server
# Option 1: Run manually
node server.js

# Option 2 — Use Node’s built-in watcher (Node v18+)
# --------------------------------------------------
# Modern alternative to Nodemon — automatically restarts on file changes
node --watch server.js

# Option 3 — Use Nodemon for automatic restarts during development
# ---------------------------------------------------------------
# If you don’t have nodemon installed yet, install it globally:
#   npm install -g nodemon
#
# Or install locally (dev dependency):
#   npm install --save-dev nodemon
#
# Then add this to your package.json scripts section:
#   "scripts": {
#     "start": "nodemon server.js"
#   }
#
# Now you can simply start the server with:
npm start

# Nodemon will automatically restart the server whenever you save changes

```

## Project Structure
```markdown
Smart-brain-api/
┣ .env.example
┣ .gitignore
┣ package.json
┣ package-lock.json
┣ README.md
┗ server.js
```

## Features

- RESTful API with clean structure

- Face detection endpoint integrated with Clarifai

- User entry count update logic

- JSON request handling via Express

- Environment variable support with **.env**

- CORS configuration for secure front-end access


## API Routes

| Method | Endpoint | Description |
|---------|-----------|--------------|
| **GET** | `/` | Root test endpoint |
| **POST** | `/signin` | Handles user sign-in (mock) |
| **POST** | `/register` | Handles user registration (mock) |
| **PUT** | `/image` | Updates user entry count |
| **POST** | `/api/clarifai/face-detect` | Calls Clarifai API for face detection |


## Author

Pedro Teixeira — Full-Stack Developer
[GitHub](https://github.com/PedroTeixeira2308) | [LinkedIn](https://www.linkedin.com/in/pedro-teixeira-967615347
)


## License

[MIT](https://choosealicense.com/licenses/mit/)