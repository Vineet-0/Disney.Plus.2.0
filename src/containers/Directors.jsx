import React,{ useState, useEffect } from 'react'
import Carousel from '../components/MovieCards/Carousel'

import GlobalApi from '../Services/GlobalApi';

const Directors = ({ directorIds, directors }) => {
    const [data,setData] = useState([]);
    const [moreFrom, setMoreFrom] = useState(null);

    //Fetch movies of all directors
    const fetchDirectorMovies = async () => {
        const moviesFetched = await Promise.all(
            directorIds?.map(async (id) => {
                const directorMovies = GlobalApi.getMoviesByDirector(directorID).then(resp=>{
                    setData(resp.data.results);
                })
                return { directorId: id, movies: directorMovies };
            })
        );
        setMoreFrom(moviesFetched);
    };
    //Render data on change in director ids
    useEffect(() => {
        fetchDirectorMovies();
    }, [directorIds]);

    return (
        <div>
            {moreFrom?.map((director) => (
                <Carousel
                key={director?.directorId}
                heading={`More from ${directors[director?.directorId]}`}
                data={director?.movies}
                />
            ))}
        </div>
    )
}

export default Directors