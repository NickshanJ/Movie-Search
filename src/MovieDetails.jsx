import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "./Api";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { searchTerm, movies, type, currentPage } = location.state || {};

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(id);
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch {
        setError("Failed to fetch movie details. Please try again later.");
      }
    };
    getMovieDetails();
  }, [id]);

  const handleBack = () => {
    navigate("/", { state: { searchTerm, type, currentPage } });
  };

  if (error) return <p>{error}</p>;
  if (!movie) return <p className="flex items-center justify-center h-screen text-center font-bold animate-bounce">Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row p-10 md:p-20 h-full overflow-auto">
      <button
        onClick={handleBack}
        className="bg-blue-500 p-2 ml-64 active:bg-black active:text-blue-500 text-white rounded mb-4 md:hidden">
        Back
      </button>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "default_poster_url"}
        alt={movie.Title}
        className="w-full md:w-1/3"
      />
      <div className="md:p-6">
        <div className="justify-between flex items-center mb-4">
          <h2 className="text-2xl font-bold">{movie.Title}</h2>
          <button
            onClick={handleBack}
            className="py-2 px-5 font-bold bg-blue-500 active:bg-black active:text-blue-500 text-white rounded mb-4 hidden md:block"
          >
            Back
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Ratings:</strong></p>
          <ul>
            {movie.Ratings && movie.Ratings.map((rating) => (
              <li key={rating.Source}>
                {rating.Source}: {rating.Value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
