import axios from "axios";

const api_key = import.meta.env.VITE_MOVIE_API_KEY;
console.log("api_key");
console.kog(api_key);

const movieBaseUrl="https://api.themoviedb.org/3"

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key='+api_key;

const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenreId=(id)=> axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}