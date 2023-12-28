import axios from "axios";

const api_key = import.meta.env.VITE_MOVIE_API_KEY;

const getTrendingVideos = axios.get("https://api.themoviedb.org/3/trending/all/day?api_key="+api_key);

const getMovieByGenreId = (id) => axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+api_key+'&with_genres='+id);

const getPopularMoviesPage = (page) => axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+api_key+'&page='+page+'&include_adult=false');

const getSearchResults = (searchTerm) => axios.get('https://api.themoviedb.org/3/search/movie?api_key='+api_key+'&query='+searchTerm+'&sort_by=popularity.desc&include_adult=false');

const getMoviesByDirector = (directorID) => axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+api_key+'&with_crew='+directorID+'&sort_by=popularity.desc&include_adult=false');

const getMovieDetails = (movieID) => axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${api_Key}&include_adult=false`);

const getCreditsDetails = (movieID) => axios.get('https://api.themoviedb.org/3/movie/'+movieID+'/credits?api_key='+api_Key);

const getSimilarMovies = (movieID) => axios.get('https://api.themoviedb.org/3/movie/'+movieID+'/similar?api_key='+api_Key+'&include_adult=false');

export default{
    getTrendingVideos,
    getMovieByGenreId,
    getPopularMoviesPage,
    getSearchResults,
    getMoviesByDirector,
    getMovieDetails,
    getCreditsDetails,
    getSimilarMovies
}