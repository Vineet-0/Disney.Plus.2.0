import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function MovieCard({movie}) {
  const handleRedirect = () => {
    if (movie.title) {
      const encodedTitle = encodeURIComponent(movie.title + " official trailer");
      const searchUrl = `https://www.google.com/search?q=${encodedTitle}`;
      window.open(searchUrl, "_blank");
    }
  };
  return (
    <>
      <img src={IMAGE_BASE_URL+movie.poster_path} 
        className='w-[150px] md:w-[200px] first-line:rounded-lg cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in'
        onClick={handleRedirect}
      />
    </>
  )
}

export default MovieCard