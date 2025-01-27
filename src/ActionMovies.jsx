import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ActionMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const getRandomActionMovies = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=a3df810d&s=action&type=movie&page=${Math.floor(Math.random() * 10) + 1}`);
      const data = response.data;
      if (data.Response === 'True') {
        const randomMovies = data.Search.slice(0, 6);
        setMovies(randomMovies);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Failed to fetch random action movies:', error);
    }
  };

  useEffect(() => {
    getRandomActionMovies();
  }, []);

  return (
    <div className="action-movies pb-10">
      <h2 className='text-2xl font-bold mx-3 my-2 pb-4'>Action Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 px-10 md:px-16 gap-4">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card cursor-pointer hover:scale-105 text-center bg-[#171717] gap-1 
      rounded-b-lg justify-between mt-2 flex flex-col h-full"
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

export default ActionMovies;
