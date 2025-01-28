# Movie Search Application

This project is a simple ReactJS application that allows users to search for movies, series, and episodes using the OMDB API. It also displays random movies, action movies, and series on the homepage.

## Features

- Search for movies, series, and episodes
- Display random movies, action movies, and series
- View detailed information about a selected movie
- Pagination for search results
- Responsive design

## Tech

- **ReactJS**: For building the user interface.
- **HTML/CSS**: For the structure and styling of the app.
- **Tailwind CSS**: For styling the components.
- **JavaScript**: For functionality.

## Installation

1. Clone the repository:

git clone https://github.com/your-username/movie-search.git
cd movie-search

2. Install the dependencies:

npm install

3. Start the development server:

npm run dev

This Application will be available at: [http://localhost:3000](http://localhost:3000)

## Project Structure

### App.jsx

`App.jsx` is the central component of your application, responsible for managing the state and rendering the main elements of the UI.

- **State Management**: It uses state variables to manage the search results and the visibility of the movie details.
- **Functions**: It includes functions to fetch movies from the OMDB API, update the search results, and toggle the visibility of the movie details.
- **Router and Navigation**: It sets up routing and navigation. The navigation bar allows users to search for movies, series, and episodes. Depending on the state, it conditionally renders the `SearchPage` or `MovieDetails` components.

### SearchPage.jsx

`SearchPage.jsx` is responsible for fetching movie data and displaying the search results.

- **Fetching Movies**: It fetches movie data from the OMDB API using a `useEffect` hook.
- **Displaying Movies**: It maps over the fetched movie data and displays each movie in a styled card, including an image, title, and an "View Details" button.

### MovieDetails.jsx

`MovieDetails.jsx` manages and displays the details of a selected movie.

- **Displaying Movie Details**: It displays the movie details including the title, year, genre, director, actors, plot, and poster.

### ActionMovies.jsx

`ActionMovies.jsx` fetches and displays a list of action movies.

- **Fetching Action Movies**: It fetches action movie data from the OMDB API using a `useEffect` hook.
- **Displaying Action Movies**: It maps over the fetched action movie data and displays each movie in a styled card.

### RandomMovies.jsx

`RandomMovies.jsx` fetches and displays a list of random movies.

- **Fetching Random Movies**: It fetches random movie data from the OMDB API using a `useEffect` hook.
- **Displaying Random Movies**: It maps over the fetched random movie data and displays each movie in a styled card.

### Series.jsx

`Series.jsx` fetches and displays a list of series.

- **Fetching Series**: It fetches series data from the OMDB API using a `useEffect` hook.
- **Displaying Series**: It maps over the fetched series data and displays each series in a styled card.

### MovieCard.jsx

`MovieCard.jsx` is a reusable component that displays a movie's information in a card format.

- **Props**: It accepts props such as `title`, `year`, `poster`, and `onClick` to display the movie's information and handle click events.

### SearchBar.jsx

`SearchBar.jsx` is a component that provides a search input for users to search for movies, series, and episodes.

- **Handling Input**: It handles user input and triggers the search function passed as a prop.

### Pagination.jsx

`Pagination.jsx` is a component that provides pagination for the search results.

- **Handling Pagination**: It handles the pagination logic and triggers the page change function passed as a prop.

### Api.jsx

`Api.jsx` contains functions to interact with the OMDB API.

- **Fetching Data**: It includes functions to fetch movie data, action movies, random movies, and series from the OMDB API.

## APIs

The movie data is fetched from the OMDB API. This API provides information about various movies including titles, years, genres, directors, actors, plots, and posters.


## Usage

1. Use the search bar to search for movies, series, and episodes.
2. Click the "View Details" button to view detailed information about a selected movie.

## Acknowledgements

- OMDB API for providing the movie data.


