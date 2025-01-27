import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, type, setType, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className='pt-8'>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row mb-4">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-10 py-2 border border-gray-300 rounded md:mr-2"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-6 py-2 border border-gray-300 rounded mt-2 md:mt-0"
      >
        <option className='text-black' value="">All Types</option>
        <option className='text-black' value="movie">Movies</option>
        <option className='text-black' value="series">Series</option>
        <option className='text-black' value="episode">Episodes</option>
      </select>
      <button type="submit" className="py-2 px-4 bg-blue-500 text-white active:bg-black active:text-blue-500
       rounded hover:scale-105 mt-2 md:mt-0 md:ml-2">
        Search
      </button>
    </form>
    </div>
  );
};

export default SearchBar;
