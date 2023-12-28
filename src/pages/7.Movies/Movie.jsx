import React, { useEffect, useState } from 'react'
import { useParams  } from 'react-router-dom';

import GlobalApi from '../../Services/GlobalApi';
import axios from 'axios';
const api_key = import.meta.env.VITE_MOVIE_API_KEY;

import Details from '../../components/MovieCards/Details'
import Carousel from '../../components/MovieCards/Carousel'
import Directors from '../../containers/Directors'

const Movie = () => {
    const [movie, setMovie] = useState();
    const [credits, setCredits] = useState();
    const [similarMovies, setSimilarMovies] = useState();
    const [directors, setDirectors] = useState({});
    const { movieID } = useParams();

    // Fetch movie data and cast
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${api_key}&include_adult=false`).then(resp=>{
            setMovie(resp.data);
        })

        axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${api_key}`).then(resp=>{
            setCredits(resp.data);
        })

        // axios.get(`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=${api_Key}&include_adult=false`).then(resp=>{
        //     console.log(resp);
        //     setSimilarMovies(resp.data.results);
        // })

    }, [movieID]);

    // Create an object with director ids as keys and director names as values
    useEffect(() => {
        if (credits?.crew) {
          const directorMap = {};
          credits.crew.map((crewMember) => {
            if (crewMember.job === 'Director') {
              directorMap[crewMember.id] = crewMember.name;
            }
          });
          setDirectors(directorMap);
        }
      }, [credits]);
    
    // Extract director ids and director names from directors object
    const directorList = Object.entries(directors).map(([key, value]) => value);
    const directorIds = Object.entries(directors).map(([key, value]) => key);

    return (
        <div className='mt-16'>
            {/* Movie Details */}
            <Details movie={movie} directorList={directorList} />
            {/* Movie Cast */}
            <Carousel heading={"Cast"} data={credits?.cast} movieIDCast={movieID} />
            {/* Similar Movies */}
            <Carousel heading={"Similar Movies"} data={similarMovies} />
            {/* More Movies from the Directors */}
            <Directors directorIds={directorIds} directors={directors} />
        </div>
    )
}

export default Movie