import React, { useEffect, useState } from 'react';
import { fetchMovies } from './Api';
import { useNavigate } from 'react-router-dom';

const Series = () => {
  const [series, setSeries] = useState([]);
  const navigate = useNavigate();

  const getRandomSeries = async () => {
    try {
      const data = await fetchMovies('series', 'series', Math.floor(Math.random() * 10) + 1);
      if (data.Response === 'True') {
        const randomSeries = data.Search.filter((item) => item.Type === 'series').slice(0, 6);
        setSeries(randomSeries);
      } else {
        setSeries([]);
      }
    } catch (error) {
      console.error('Failed to fetch random series:', error);
    }
  };

  useEffect(() => {
    getRandomSeries();
  }, []);

  return (
    <div className="series-movies pb-10">
      <h2 className='text-2xl font-bold mx-3 my-2 pb-4'>Series</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 px-20 gap-4">
        {series.map((item) => (
          <div
            key={item.imdbID}
            className="movie-card cursor-pointer hover:scale-105 text-center bg-[#171717] gap-1 
            rounded-b-lg justify-between flex flex-col h-full"
            onClick={() => navigate(`/movie/${item.imdbID}`, { state: { searchTerm: '', type: 'series', currentPage: 1 } })}>
            <img src={item.Poster} alt={item.Title} />
            <h3>{item.Title}</h3>
            <p className='mb-2'>{item.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Series;