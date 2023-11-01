import React, { useEffect, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const Carousel = ({children: slides}) => {
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

  return (
    <div className="object-fill overflow-hidden scroll-smooth relative mt-2 mb-4 mx-[20px] lg:mx-16 rounded-md">
        <div 
         className="flex transition-transform ease-out duration-500"
         style={{transform: `translateX(-${curr*100}%)`}}
         >{slides}
        </div>
        
        <div className="absolute inset-0 flex items-center justify-between p-1 md:p-2 lg:p-4">
            <button onClick={prev} className='bg-transparent text-white cursor-pointer border-0'>
                <HiChevronLeft
                    className=" text-white text-[30px] md:text-[50px]"
                />
            </button>

            <button onClick={next} className='bg-transparent text-white cursor-pointer border-0'>
                <HiChevronRight
                    className=" text-white text-[30px] md:text-[50px]"
                />
            </button>

        </div> 

        <div className='absolute bottom-0 right-0 left-0 w-full shadow-3xl'>
            <div className='flex items-center justify-center bg-black h-8 md:h-10 opacity-20'>

            </div>
        </div>

        <div className='absolute bottom-3 md:bottom-4 right-0 left-0 z-10'>
            <div className="flex items-center justify-center gap-1 sm:gap-2">
                {
                    slides.map((el, i) => (
                        <div
                         className={`
                          transition-all w-2 md:w-4 h-1 md:h-2 bg-white rounded-full
                          ${curr === i ? "w-5 md:w-8" : "opacity-50"}
                         `}
                        />
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default Carousel
