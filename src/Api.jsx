const API_KEY = 'a3df810d';
import axios from 'axios';

export const fetchMovies = async (searchTerm, type, page) => {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
    searchTerm
  )}&type=${type}&page=${page}`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchRandomMovies = async () => {
  const randomSearchTerms = ['marvel', 'action', 'tamil', 'comedy', 'thriller', 'horror', 'drama', 'fantasy', 'adventure'];
  const randomTerm = randomSearchTerms[Math.floor(Math.random() * randomSearchTerms.length)];
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${randomTerm}`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`;
  const response = await axios.get(url);
  return response.data;
};

