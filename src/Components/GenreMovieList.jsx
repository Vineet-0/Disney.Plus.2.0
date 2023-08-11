import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
        {GenresList.genere.map((item,index)=>index<=10&&(
            <div className='py-4 px-5 lg:px-16'>
                <h2 className='text-[20px] sm:text-[25px] text-white 
                font-bold pl-4 sm:pl-5'>{item.name}</h2> 
                <MovieList genreId={item.id} index_={index} />   
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList