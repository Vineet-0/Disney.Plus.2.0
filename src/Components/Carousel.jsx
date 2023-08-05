import React, { useEffect, useState } from 'react'
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const Carousel = ({children: slides}) => {
    const [curr, setCurr] = useState(0);

    function prev(){
        setCurr((curr) => (
            curr === 0 ? slides.length - 1 : curr - 1
        ))
    }

    function next(){
        setCurr((curr) => (
            curr === slides.length-1 ? 0 : curr+1
        ))
    } 

    useEffect(() => {
        const slideInterval = setInterval(next, 5000);
        return () => clearInterval(slideInterval)
    }, [])

  return (
    <div className="overflow-hidden scroll-smooth relative m-8 mx-8 md:mx-16">
        <div 
         className="flex transition-transform ease-out duration-500"
         style={{transform: `translateX(-${curr*100}%)`}}
         >{slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
            <button onClick={prev} className='hidden md:block bg-transparent
             text-white cursor-pointer'>
                <HiChevronLeft
                    className=" text-white text-[50px]"
                />
                {/* <AiOutlineLeft size={20}/> */}
            </button>

            <button onClick={next} className='hidden md:block bg-transparent
            hover:b-[0px] text-white cursor-pointer'>
                <HiChevronRight
                    className=" text-white text-[50px]"
                />
                {/* <AiOutlineRight size={20}/> */}
            </button>

        </div> 

        <div className='hidden md:block absolute bottom-4 right-0 left-0'>
            <div className="flex items-center justify-center gap-3">
                {
                    slides.map((el, i) => (
                        <div
                         className={`
                          transition-all w-2 h-2 bg-white rounded-full
                          ${curr === i ? "p-2" : "opacity-50"}
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
