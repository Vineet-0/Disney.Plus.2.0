import axios from "axios";

const api_key = import.meta.env.VITE_MOVIE_API_KEY;


const getTrendingVideos = axios.get("https://api.themoviedb.org/3/trending/all/day?api_key="+api_key);
const getMovieByGenreId = (id) => axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+api_key+'&with_genres='+id);
// const getPopularMovies = axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+api_key+'&page=1&include_adult=false');
const getPopularMoviesPage = (page) => axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+api_key+'&page='+page+'&include_adult=false');

const getSearchResults = (searchTerm) => axios.get('https://api.themoviedb.org/3/search/movie?api_key='+api_key+'&query='+searchTerm+'&sort_by=popularity.desc&include_adult=false');

export default{
    getTrendingVideos,
    getMovieByGenreId,
    // getPopularMovies,
    getPopularMoviesPage,
    getSearchResults
}