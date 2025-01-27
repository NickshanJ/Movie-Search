import React, { useEffect, useState } from 'react';
import { fetchRandomMovies } from './Api';
import { useNavigate } from 'react-router-dom';

const RandomMovies = () => {
  const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    const getRandomMovies = async () => {
      try {
        const data = await fetchRandomMovies();
        if (data.Response === 'True') {
          const randomMovies = data.Search.slice(0, 6);
          setMovies(randomMovies);
        } else {
          setMovies([]);
        }
      } catch (err) {
        console.error('Failed to fetch random movies:', err);
      }
    };

    getRandomMovies();
  }, []);

  return (
    <div className="random-movies pb-5">
      <h2 className="text-2xl font-bold pb-4 mx-3 my-2">Movies You May Like...</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 px-10 md:px-16 gap-4">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card cursor-pointer hover:scale-105 text-center bg-[#171717] gap-1 
          rounded-b-lg justify-between flex flex-col h-full"
            onClick={() => navigate(`/movie/${movie.imdbID}`, { state: { searchTerm: '', type: 'movie', currentPage: 1 } })}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p className='mb-2'>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomMovies;