import { useState } from 'react'
import './App.css'
import Header from './Components/Header';
import Slider from './Components/Slider';
import OTT_House from './Components/OTT_House';
import GenreMovieList from './Components/GenreMovieList';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="">
        <Header/>
        
        <Slider/>

        <OTT_House/>
        
        <GenreMovieList/>

        <Footer/>
    </div>
  )
}

export default App