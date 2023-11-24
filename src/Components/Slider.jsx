import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

const LOADING_IMAGE_URL = "https://via.placeholder.com/150"; // Replace with your loading skeleton image URL
const MIN_LOADING_TIME_MS = 5000;

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

import Carousel from '../Components/Carousel'
function Slider() {
    const [loading, setLoading] = useState(true);
    const [movieList,setMovieList]=useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, MIN_LOADING_TIME_MS);
    
        return () => clearTimeout(timer);
      }, []); // Run the effect only once when the component mounts

    const elementRef=useRef();
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results)
            setMovieList(resp.data.results)
            
        })
    }

    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
    }

  return (
    <div className="w-full max-h-[900px] flex flex-center">
        <Carousel
            titles={movieList.map((item) => item.title || item.name)}
            years={movieList.map((item) => item.release_date && item.release_date.slice(0, 4) || item.first_air_date && item.first_air_date.slice(0, 4))}
            languages={movieList.map((item) => item.original_language)}
        >
        {
            movieList.map((item)=>(
                <img src={IMAGE_BASE_URL+item.backdrop_path} 
                    className='min-w-full object-cover object-left-top'
                    alt={item.title}
                />
            ))
        }
        </Carousel>
    </div>
  )
}

export default Slider