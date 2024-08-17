# My Portfolio

Welcome to my Portfolio Project! This project showcases my skills, experience, and educational background as a web developer. The portfolio includes various sections such as my projects, resume, and contact information. It is built using modern web technologies and integrates with a backend API to fetch data from a MongoDB database.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Backend API](#backend-api)

## Overview

This PortfolioPoject is designed to provide a comprehensive view of my work as a web developer. It includes detailed sections on my professional experience, educational background, and projects I have worked on. The goal of this project is to create a dynamic and interactive portfolio that can be easily updated with new information.

The portfolio is built using React on the frontend and Node.js with Express on the backend. The backend API serves data from a MongoDB database, allowing for easy management and retrieval of content.

## Features

- **Home Page**: A welcoming page that introduces visitors to my portfolio.
- **Resume Section**: Displays my work experience and education, with data fetched from a MongoDB database.
- **Projects Section**: Showcases the projects I have worked on, including descriptions and images.
- **Contact Form**: Allows visitors to get in touch with me directly through the portfolio.

## Technologies Used

### Frontend

- **React**: For building the user interface and handling client-side logic.
- **CSS**: For styling the components and ensuring a responsive design.
- **HTML**: For structuring the content of the portfolio.

### Backend

- **Node.js**: For running the server and handling requests.
- **Express**: For creating API endpoints and managing routes.
- **MongoDB**: For storing and retrieving data related to my experience, education, and projects.
- **Mongoose**: For interacting with the MongoDB database and defining schemas.

## Project Structure

The project is divided into two main parts: the frontend (React) and the backend (Node.js + Express).

### Frontend (React)

- **/src**: Contains all the React components and styles.
  - **components**: Reusable UI components like `Header`, `Footer`, `Resume`, and `ProjectList`.
  - **pages**: Specific pages like `Home`, `Resume`, and `Projects`.
  - **App.js**: The main application file that integrates all components.
  - **Resume.js**: Handles the display of my resume, fetching data from the backend API.

### Backend (Node.js + Express)

- **/routes**: Defines the API routes for fetching data.
  - **/api/education.js**: Route for fetching education data.
  - **/api/experience.js**: Route for fetching work experience data.
- **/models**: Mongoose schemas for the MongoDB collections.
  - **Education.js**: Schema for storing educational background.
  - **Experience.js**: Schema for storing work experience.
- **server.js**: The main server file that initializes the Express app and sets up routes.
