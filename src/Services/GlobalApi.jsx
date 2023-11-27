import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='ad703c5aeb682745ff964da05005cf2b'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key='+api_key;

//https://api.themoviedb.org/3/trending/all/day?api_key=ad703c5aeb682745ff964da05005cf2b
const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenreId=(id)=> axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}