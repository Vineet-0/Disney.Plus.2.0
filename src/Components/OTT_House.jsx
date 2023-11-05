import React from 'react'
import primeVideo from './../assets/Images/primeVideo.webp'
import netflix from './../assets/Images/netflix.jpg'
import disney from './../assets/Images/disneyPlusHotstar.avif'
import sonyLiv from './../assets/Images/sonyLiv.jpg'
import zee5 from './../assets/Images/zee5.avif'
import jioCinema from './../assets/Images/jioCinema.avif'
 
import starwarV from './../assets/Videos/star-wars.mp4'
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGeographicV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'


function OTT_House() {
    const OTT_List=[
        {
            id:1,
            image:primeVideo,
            video:disneyV
        },
        {
            id:2,
            image:netflix,
            video:pixarV
        },
        {
            id:3,
            image:disney,
            video:marvelV
        },
        {
            id:4,
            image:sonyLiv,
            video:starwarV
        },
        {
            id:5,
            image:zee5,
            video:nationalGeographicV
        },
        {
            id:6,
            image:jioCinema,
            video:nationalGeographicV
        },

    ]
    // const productionHouseList=[
    //     {
    //         id:1,
    //         image:disney,
    //         video:disneyV
    //     },
    //     {
    //         id:2,
    //         image:pixar,
    //         video:pixarV
    //     },
    //     {
    //         id:3,
    //         image:marvel,
    //         video:marvelV
    //     },
    //     {
    //         id:4,
    //         image:starwar,
    //         video:starwarV
    //     },
    //     {
    //         id:5,
    //         image:nationalG,
    //         video:nationalGeographicV
    //     },

    // ]
  return (
    <div className='p-2 xl:mt-[-150px] px-5 lg:px-16'>
        <h2 className='text-[20px] mb-[10px] sm:text-[25px] text-white font-bold pl-4 sm:pl-5 z-10'>
            OTT's
        </h2> 
        <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 md:gap-5'>
            {OTT_List.map((item)=>(
                <div className='hover:scale-110 transition-all duration-300
                ease-in-out cursor-pointer relative shadow-xl xl:shadow-none
                shadow-gray-800
                '>
                    <img src={item.image} className='object-fill w-full h-full rounded-lg z-[1] opacity-100' /> 
                </div>
            ))}
        </div>
    </div>
  )
}

export default OTT_House