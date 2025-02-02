# Prime-GPT

An innovative video streaming platform to watch your favorite movie trailers with a GPT-powered recommendation system.

Project Link - https://prime-gpt-89dc3.web.app

Note - Enable Cors proxy plugin before accessing this webpage

# Table of Contents
- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)

# Description
Prime-GPT is a dynamic video streaming platform where users can watch their favorite movie trailers, discover new movies, and get personalized recommendations powered by Chat GPT. It features a user-friendly interface built with React and Vite, a fast and responsive design using Tailwind CSS, and several unique functionalities such as a multilingual search system and AI-driven movie recommendations.

# Features
- **Landing Page**: A stylish landing page with an engaging background and a "Login" option.
- **Authentication**: Users can sign up or log in. A "Test Credentials" button is provided for a quick login without account creation.
- **Browse Page**: A video streaming page featuring auto-playing trailers with movie titles. Categories like "Popular" and "Trending in India" are displayed using a carousel.
- **Movie Info**: On hover, the movie card shows additional details such as the title and more info.
- **Recommendation System**: Based on the movie trailers, GPT-powered movie recommendations are provided.
- **State Management**: Redux is used to manage the state effectively, with different slices for user data and movie data.
- **GPT Search**: A powerful search bar that allows users to search for movies based on mood or genre, e.g., "top horror funny bollywood movies." Integrated with Chat GPT API.
- **Debounced Search**: Efficient API calls are made using debouncing to improve search performance.
- **Tailwind CSS**: Designed for a responsive, modern, and visually appealing UI.
- **Shimmer UI**: Shimmer cards to show dummy cards loading on the screen for better UX.
- **Multilingual Support**: The search page supports multiple languages including English, Hindi, and Marathi.
- **API Integration**: Movie data is fetched from TMDB to provide up-to-date movie information.
- **Responsiveness**: The platform is fully responsive for both desktop and mobile devices.

# Tech Stack
- **Frontend**: React, Vite, Tailwind CSS
- **State Management**: Redux
- **Backend**: Firebase Authentication
- **API Integration**: TMDB API, Chat GPT API
- **Testing**: RTL (React Testing Library), Vitest

# Installation
To get started with Prime-GPT, follow the instructions below:

1. Clone the repository:
   git clone https://github.com/Jainendra-Mahajan/prime-gpt.git

2. Install dependencies: Navigate to the project folder and run:
   cd prime-gpt
   npm install

3. Setup Firebase Authentication:
   Create a Firebase project and set up authentication (Email/Password).
   Add the Firebase credentials in your project’s .env file.

4. Run the development server:
   npm run dev
   Your app should now be live at http://localhost:5173.

# Usage
1. Visit the landing page click on sign in to join prime
2. Use the "Login" option to either log in with existing credentials or sign up.
3. Use the Login with Test Credentials button to auto fill email and password with test credentials
4. Browse movie trailers and explore categories using the carousel.
5. Use the search bar to search for movies based on mood or genre.
6. Play movie trailers and view recommendations below.

# Testing
Prime-GPT includes basic tests for components:

- Integration Tests: Verifies if movie data loads properly after user login.
- Testing Library: Used for component testing, with Vitest for running tests.

# Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make changes and commit (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request to merge changes.
