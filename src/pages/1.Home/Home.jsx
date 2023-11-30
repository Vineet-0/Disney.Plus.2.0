import React from 'react'

import Slider from '../../components/Slider/Slider.jsx'
import OTT_House from '../../components/OTT_House/OTT_House.jsx'
import GenreMovieList from '../../components/GenreMovieList/GenreMovieList.jsx'

const Home = () => {
  return (
        <div>
            <Slider />

            <OTT_House />

            <GenreMovieList />
        </div>
    )
}

export default Home