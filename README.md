# To-Do List Backend

## Overview
This is backend for this To-Do List application. Built with using **Node.js**, **Express.js**, and **MongoDB**, it provides APIs to create, read, update, delete, and manage task statuses.

## Technologies
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv (for environment variables)

## Setup Instructions

1. **Clone the repositary**

git clone <your_repo_link>
cd todo-backend

2. **Install dependencies**
npm install

3. **Configure environment variables**
cp .env

4. **Start the server**
npm run dev


Server runs at http://localhost:5000.


# API Endpoints

Method	Endpoint	            Description

GET	    /api/tasks	            Get all tasks
POST	/api/tasks	            Create a new task
PUT 	/api/tasks/:id	        Update task details
DELETE	/api/tasks/:id	        Delete a task
PATCH	/api/tasks/:id/status	Update task status


# Challenges

Handling async operations properly with try/catch.
Ensuring validation for required fields like task title.
Maintaining modular code for controllers, routes, and models.