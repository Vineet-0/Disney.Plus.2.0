import React, { useState } from 'react'
import logo from '../../assets/Images/MoviesNowLogo.png'
import { RiSlideshow2Fill } from "react-icons/ri";
import { HiOutlineUserCircle , HiDotsVertical  } from "react-icons/hi";
import { FaSearch , FaPlus , FaPlay , FaTv } from "react-icons/fa";
import NavbarItem from './NavbarItem';
function Header() {
    const [toggle,setToggle]=useState(false);
    const navigation=[
        {
            name:'SEARCH',
            icon:FaSearch,
            href: 'search',
        },
        {
            name:'WATCH LIST',
            icon:FaPlus,
            href: 'watchlist',
        },
        {
            name:'SHOWS',
            icon:RiSlideshow2Fill,
            href: 'shows',
        },
        {
            name:'MOVIES',
            icon:FaPlay,
            href: 'movies',
        },
        {
            name:'SERIES',
            icon:FaTv,
            href: 'series',
        }
    ]
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
  return (
    <div className='sm:fixed sm:top-0 flex items-center justify-between px-8 py-5 w-full sm:bg-gradient-to-b sm:from-[#131520] sm:to-[transparent] z-10'>
        <div className='flex gap-8 items-center z-10'>
            <a
            key="1234"
            href='/'
            >
                <img
                    src={logo}
                    className='w-[150px] md:w-[200px] object-cover'
                    onClick={scrollToTop} 
                />
            </a>
            
            <div className='hidden lg:flex gap-8 pt-[10px]'>
            {navigation.map((item)=>(
                <a
                key={item.name}
                href={item.href}
                >
                    <NavbarItem name={item.name} Icon={item.icon} />
                </a>
            ))}
        </div>
        <div className='flex pt-[11px] lg:hidden gap-5 z-10'>
            {navigation.map((item,index)=>index<1&&(
                <a
                key={item.name}
                href={item.href}
                >
                    <NavbarItem name='' Icon={item.icon} />
                </a>
            ))}
            <div className='lg:hidden z-50' onClick={()=>setToggle(!toggle)}>       
                <NavbarItem name={''} Icon={HiDotsVertical} />
                {toggle? <div className='absolute mt-3 bg-[#121212] rounded-md 
                        border-[1px] border-gray-700 px-5 pt-4 pb-2'>
                        {navigation.map((item,index)=>index>0&&(
                            <a
                            key={item.name}
                            href={item.href}
                            >
                                <NavbarItem name={item.name} Icon={item.icon} />
                            </a>
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