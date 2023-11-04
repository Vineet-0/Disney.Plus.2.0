import React, { useEffect, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { BiLinkExternal } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';

const Carousel = ({children: slides,titles,years,languages}) => {
    const [curr, setCurr] = useState(0);

    function prev(){
        setCurr((curr) => (
            // curr === 0 ? slides.length - 1 : curr - 1
            curr === 0 ? 19 : curr - 1
        ))
    }

    function next(){
        setCurr((curr) => (
            // curr === slides.length-1 ? 0 : curr+1
            curr === 19 ? 0 : curr+1
        ))
    } 

    useEffect(() => {
        const slideInterval = setInterval(next, 5000);
        return () => clearInterval(slideInterval)
    }, [])

    const handleRedirect = () => {
        if (titles[curr]) {
          const encodedTitle = encodeURIComponent(titles[curr] + " official trailer");
          const searchUrl = `https://www.google.com/search?q=${encodedTitle}`;
          window.open(searchUrl, '_blank');
        }
      };

  return (
    <div className="object-fill overflow-hidden scroll-smooth relative mb-4">
        <div className="absolute w-1/2 h-full bg-gradient-to-r from-black to-transparent z-10">

        </div>

        <div 
         className="flex transition-transform ease-out duration-500"
         style={{transform: `translateX(-${curr*100}%)`}}
         >{slides}
        </div>
        
        <div className="absolute bottom-[50px] right-[150px] flex items-center gap-4">
            <button 
                onClick={prev}
                className='bg-white bg-opacity-20 w-[50px] h-[50px] text-white cursor-pointer border-0 p-0'
             >
                <HiChevronLeft
                    className=" text-white text-[30px] font-bold mx-auto hover:scale-125 transition-all duration-150 ease-in"
                />
            </button>

            <button
                onClick={next}
                className='bg-white bg-opacity-20 w-[50px] h-[50px] text-white cursor-pointer border-0 p-0' 
            >
                <HiChevronRight
                    className=" text-white text-[30px] font-bold mx-auto hover:scale-125 transition-all duration-150 ease-in"
                />
            </button>

        </div> 


        <div className='absolute bottom-3 md:bottom-4 right-0 left-0 z-10'>
            <div className="flex items-center justify-center gap-1 sm:gap-2">
                {
                    slides.map((el, i) => (
                        <div
                         className={`
                          transition-all w-2 md:w-4 h-1 md:h-1.5 bg-white rounded-sm
                          ${curr === i ? "w-5 md:w-8" : "opacity-50"}
                         `}
                        />
                    ))
                }
            </div>
        </div>

        <div className='absolute left-12 bottom-[100px] z-10'>
            <div className='flex flex-row mb-4'>
                {titles[curr] !== undefined && (
                <div className="">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl">{titles[curr]}</h2>
                </div>
                )}
            </div>
            <div className='flex flex-row items-center mb-4'>
                {years[curr] !== undefined && (
                    <>
                        <div className="">
                            <h2 className="text-xl">{years[curr]}</h2>
                        </div>
                        <div className=" transition-all w-1.5 h-1.5 mx-3 bg-white rounded-full">
                        </div>
                    </>
                )}

                {languages[curr] !== undefined && (
                <div className="">
                    <h2 className="text-xl">
                        {   languages[curr] === 'en' ? 'English'
                                :
                            languages[curr] === 'ja' ? 'Japanise'
                                :
                            languages[curr] === 'fr' ? 'French'
                                :
                            languages[curr] === 'hi' ? 'Hindi'
                                :
                            languages[curr]}
                    </h2>
                </div>
                )}
            </div>
            <div className='flex gap-4'>
                <button
                    className='border-0 w-[100px] text-xl px-4 py-2 font-bold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600'
                    onClick={handleRedirect}
                >
                    <div className='flex flex-row items-center gap-2'>
                        <BsFillPlayFill/>
                        Play
                    </div>
                </button>
                <button
                    className='border-0 w-[100px] text-xl px-4 py-2 font-bold rounded-lg bg-white bg-opacity-30'
                    // onClick={handleRedirect}
                >
                    <div className='flex flex-row items-center gap-2'>
                        <AiOutlineInfoCircle />
                        Info
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Carousel
