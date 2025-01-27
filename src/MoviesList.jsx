import React from 'react';
import MovieCard from './MovieCard';

const MoviesList = ({ movies, onMovieClick }) => {
  if (!movies || movies.length === 0) {
    return <p>Step into a world of movies – begin your search!</p>;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 px-5 md:px-20 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onClick={() => onMovieClick(movie)} />
      ))}
    </div>
  );
};

export default MoviesList;