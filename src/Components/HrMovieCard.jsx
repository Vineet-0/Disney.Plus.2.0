import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function HrMovieCard({movie}) {
  const handleRedirect = () => {
    if (movie.title) {
      const encodedTitle = encodeURIComponent(movie.title + " official trailer");
      const searchUrl = `https://www.google.com/search?q=${encodedTitle}`;
      window.open(searchUrl, "_blank");
    }
  };
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in'>
      <img src={IMAGE_BASE_URL+movie.backdrop_path} 
        className='w-[200px] md:w-[260px] rounded-lg cursor-pointer'
        onClick={handleRedirect}
      />
      <h2 className='w-[200px] md:w-[260px] text-white mt-2'>
        {movie.title}
      </h2>
    </section>
  )
}

export default HrMovieCard