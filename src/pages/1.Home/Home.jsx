import React from 'react'

import Slider from '../../components/Slider/Slider'
import OTT_House from '../../components/OTT_House/OTT_House'
import GenreMovieList from '../../components/GenreMovieList/GenreMovieList'

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