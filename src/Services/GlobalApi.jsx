import axios from "axios";

const api_key = import.meta.env.VITE_MOVIE_API_KEY;

const movieBaseUrl = "https://api.themoviedb.org/3"

const movieByTrendingVideos = movieBaseUrl+"/trending/all/day?api_key="+api_key
const movieByGenreBaseURL = movieBaseUrl+'/discover/movie?api_key='+api_key+'&with_genres=';

const getTrendingVideos=axios.get(movieByTrendingVideos);
const getMovieByGenreId=(id)=> axios.get(movieByGenreBaseURL+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}