import axios from "axios";

const api_key = import.meta.env.VITE_MOVIE_API_KEY;

const movieBaseUrl = "https://api.themoviedb.org/3"

const movieByTrendingVideos = movieBaseUrl+"/trending/all/day?api_key="+api_key
const movieByGenreBaseURL = movieBaseUrl+'/discover/movie?api_key='+api_key+'&with_genres=';
const movieByPopularity = movieBaseUrl+'/movie/popular?api_key='+api_key+'&page=1&include_adult=false';

const getTrendingVideos = axios.get(movieByTrendingVideos);
const getMovieByGenreId = (id) => axios.get(movieByGenreBaseURL+id);
const getPopularMovies = axios.get(movieByPopularity);

console.log("Hi");
console.log(getPopularMovies.data);

export default{
    getTrendingVideos,
    getMovieByGenreId,
    getPopularMovies
}