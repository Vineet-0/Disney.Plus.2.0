import { useState } from 'react'
import './App.css'
import Header from './Components/Header';
import Slider from './Components/Slider';
import OTT_House from './Components/OTT_House';
import GenreMovieList from './Components/GenreMovieList';

function App() {
  return (
    <div className="">
        <Header/>
        
        <Slider/>

        <OTT_House/>
        
        <GenreMovieList/>

        <div className='h-5 sm:h-10'> </div>
    </div>
  )
}

export default App
