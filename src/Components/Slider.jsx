import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

import Carousel from '../Components/Carousel'
function Slider() {
    const [movieList,setMovieList]=useState([]);
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

    

    // <div>
    //     <HiChevronLeft
    //         className="hidden md:block text-white text-[30px] absolute
    //         mx-8 mt-[320px] cursor-pointer " 
    //         onClick={()=>sliderLeft(elementRef.current)}/>

    //     <HiChevronRight
    //         className='hidden md:block text-white text-[30px] absolute
    //         mx-8 mt-[320px] cursor-pointer right-0' 
    //         onClick={()=>sliderRight(elementRef.current)}/>

   
    //     <div className='flex overflow-x-auto w-full px-16 pb-4
    //     scrollbar-none scroll-smooth' ref={elementRef}> 
    //         {movieList.map((item)=>(
    //             <img src={IMAGE_BASE_URL+item.backdrop_path} 
    //             className='min-w-full  md:h-[640px] object-cover
    //             object-left-top mr-5 rounded-md hover:border-[4px]
    //             border-gray-400 transition-all duration-100 ease-in'/>
    //         ))}
    //     </div>
    // </div>
  )
}

export default Slider