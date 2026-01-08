import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = import.meta.env.VITE_TMDB_API_KEY; 

// Trending Movies (All + Week)
const getTrendingVideos = () => {
  return axios.get(
    `${movieBaseUrl}/trending/all/week?api_key=${api_key}`
  );
};

// Movies by Genre ID
const getMoviesByGenreId = (genreId) => {
  return axios.get(
    `${movieBaseUrl}/discover/movie?api_key=${api_key}&with_genres=${genreId}`
  );
};

export default {
  getTrendingVideos,
  getMoviesByGenreId,
};
