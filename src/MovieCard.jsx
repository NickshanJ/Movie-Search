import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, onClick  }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div onClick={onClick} className="cursor-pointer hover:scale-105 text-center bg-[#171717] gap-1 
      rounded-b-lg justify-between mt-2 flex flex-col h-full">
        <img src={movie.Poster} alt={movie.Title} />
        <div className='mt-auto mb-1'>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
        </div>
    </Link>
  );
};

export default MovieCard;
