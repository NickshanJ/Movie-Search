import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import MoviesList from './MoviesList';
import ActionMovies from './ActionMovies';
import RandomMovies from './RandomMovies';
import Series from './Series'; // Import the updated Series component
import { fetchMovies } from './Api';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [type, setType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('searchState');
    });

    if (!location.state || Object.keys(location.state).length === 0) {
      localStorage.removeItem('searchState');
    }

    const storedSearch = localStorage.getItem('searchState');
    if (storedSearch) {
      const { searchTerm, type, currentPage } = JSON.parse(storedSearch);
      setSearchTerm(searchTerm);
      setType(type);
      setCurrentPage(currentPage);
      handleSearch(searchTerm, type, currentPage);
    } else if (location.state && location.state.searchTerm) {
      const { searchTerm, type, currentPage } = location.state;
      setSearchTerm(searchTerm);
      setType(type);
      setCurrentPage(currentPage);
      handleSearch(searchTerm, type, currentPage);
    } else {
      setSearchTerm('');
      setType('');
      setCurrentPage(1);
      setMovies([]);
    }

    return () => {
      window.removeEventListener('beforeunload', () => {
        localStorage.removeItem('searchState');
      });
    };
  }, [location]);

  const handleSearch = async (term = searchTerm, movieType = type, page = 1) => {
    try {
      const data = await fetchMovies(term, movieType, page);
      if (data.Response === 'True') {
        setIsSearchActive(true);
        if (page === 1) setMovies(data.Search);
        else setMovies((prevMovies) => [...prevMovies, ...data.Search]);
        setError(null);
        localStorage.setItem('searchState', JSON.stringify({ searchTerm: term, type: movieType, currentPage: page }));
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch {
      setError('Failed to fetch movies. Please try again later.');
    }
  };

  const handleShowMore = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    handleSearch(searchTerm, type, newPage);
  };

  return (
    <div className="search-page bg-black grid place-items-center text-white">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        type={type}
        setType={setType}
        onSearch={() => {
          setCurrentPage(1);
          handleSearch();
        }}
      />
      {error && <div className="error">{error}</div>}

      {!isSearchActive && (
        <div className='flex flex-col gap-4 mt-8'>
          <RandomMovies />
          <ActionMovies />
          <Series />
        </div>
      )}

      {isSearchActive && (
        <MoviesList
          movies={movies}
          onMovieClick={(movie) =>
            navigate(`/movie/${movie.imdbID}`, { state: { searchTerm, movies, type, currentPage } })
          }
        />
      )}

      {movies.length > 0 && (
        <div className="flex justify-center my-4">
          <button
            onClick={handleShowMore}
            className="active:bg-black hover:scale-105 active:text-white transition-transform p-2 mx-2 
            text-black bg-gray-200 mt-2 rounded">
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
