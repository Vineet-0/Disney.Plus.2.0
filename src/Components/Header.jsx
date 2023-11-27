import React, { useState } from 'react'
import logo from '../assets/Images/MoviesNowLogo.png'
import { RiSlideshow2Fill } from "react-icons/ri";
import { HiOutlineUserCircle , HiDotsVertical  } from "react-icons/hi";
import { FaSearch , FaPlus , FaPlay , FaTv } from "react-icons/fa";
import HeaderItem from './HeaderItem';
function Header() {
    const [toggle,setToggle]=useState(false);
    const menu=[
        {
            name:'SEARCH',
            icon:FaSearch
        },
        {
            name:'WATCH LIST',
            icon:FaPlus
        },
        {
            name:'SHOWS',
            icon:RiSlideshow2Fill
        },
        {
            name:'MOVIES',
            icon:FaPlay
        },
        {
            name:'SERIES',
            icon:FaTv
        }
    ]
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
  return (
    <div className='md:fixed md:top-0 flex items-center justify-between px-8 py-5 w-screen md:bg-gradient-to-b md:from-[#121212] md:to-[transparent] z-10'>
        <div className='flex gap-8 items-center z-10'>
            <img
                src={logo}
                className='w-[150px] md:w-[200px] object-cover'
                onClick={scrollToTop} 
            />
            <div className='hidden lg:flex gap-8 pt-[10px]'>
            {menu.map((item)=>(
                <HeaderItem name={item.name} Icon={item.icon} />
            ))}
        </div>
        <div className='flex pt-[11px] lg:hidden gap-5 z-10'>
            {menu.map((item,index)=>index<1&&(
                <HeaderItem name={''} Icon={item.icon} />
            ))}
            <div className='lg:hidden z-50' onClick={()=>setToggle(!toggle)}>       
                <HeaderItem name={''} Icon={HiDotsVertical} />
                {toggle? <div className='absolute mt-3 bg-[#121212] rounded-md 
                        border-[1px] border-gray-700 px-5 pt-4 pb-2'>
                        {menu.map((item,index)=>index>0&&(
                            <HeaderItem name={item.name} Icon={item.icon} />
                        ))}
                        </div>:null}
                </div> 
            </div>
        </div>
        <div className='z-10'>
            <HiOutlineUserCircle className='w-[35px] h-[35px]'/> 
        </div>
        {/* <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className='w-[40px] rounded-full'/> */}
    </div>
  )
}

export default Header