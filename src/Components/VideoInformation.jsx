import React from 'react'
import { MOVIE_TITLE_LOGO_API } from '../utils/constants'
import useGetMovieLogo from '../hooks/useGetMovieLogo';

const VideoInformation = ({ id, overview }) => {

    const movieLogo = useGetMovieLogo(id);

    return (
        <div className='md:ml-[8rem] absolute text-white bg-gradient-to-r from-black h-full'>
            <img src={MOVIE_TITLE_LOGO_API + movieLogo} className='w-36 md:w-72 md:m-5 p-5 mt-2 md:mt-[6rem]' />
            <p className='hidden md:inline-block w-[50%] md:w-[40%] ml-6 mt-1 pl-5 pt-0 text-xs md:text-xl'>{overview.slice(0, 100) + "..."}</p>

            <div className='flex ml-4 md:ml-5 md:p-5 justify-start'>
                <button className='text-white rounded-full p-2 mr-2 text-xs md:text-xl items-center bg-customDark hover:bg-white hover:text-black' >
                    <svg className="w-6 h-6 md:w-10 md:h-10 text-gray-800 dark:text-white hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clip-rule="evenodd" />
                    </svg>

                </button>

                <button className='text-white rounded-full p-2 mr-2 text-sm md:text-xl items-center bg-customDark hover:bg-white hover:text-black' >


                    <svg className="w-6 h-6 md:w-10 md:h-10 text-gray-800 dark:text-white hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </button>

                {/* <button >
                    <div className="flex items-center justify-center w-14 h-14 bg-customDark rounded-full border-2 border-customDark">
                        <div className="relative w-10 h-10">
                            <div className="absolute top-0 left-1/2 w-[0.20rem] h-full bg-white transform -translate-x-1/2"></div>
                            <div className="absolute top-1/2 left-0 h-[0.20rem] w-full bg-white transform -translate-y-1/2"></div>
                        </div>
                    </div>
                </button> */}

            </div>
        </div >
    )
}

export default VideoInformation