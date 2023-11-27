import React from 'react'
import logo from '../assets/Images/MoviesNowLogo.png'

function Footer() {
    return (
        <footer class="bg-white rounded-lg shadow dark:bg-[#131520] m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:pt-8 md:pb-5 lg:pb-6">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} class="h-10" alt="Flowbite Logo" />
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm md:text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://github.com/Vineet-0/MoviesNow" target="_blank" class="hover:underline me-4 md:me-6 font-bold text-white">About</a>
                        </li>
                        <li>
                            <a hhref="https://github.com/Vineet-0/MoviesNow" target="_blank" class="hover:underline me-4 md:me-6 font-bold text-white">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="https://github.com/Vineet-0/MoviesNow" target="_blank" class="hover:underline me-4 md:me-6 font-bold text-white">GitHub</a>
                        </li>
                        <li>
                            <a href="https://github.com/Vineet-0/MoviesNow" target="_blank" class="hover:underline font-bold text-white">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://moviesnow-byvineet.netlify.app" class="hover:underline">MOVIES NOW™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer