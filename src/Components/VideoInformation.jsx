import React from 'react'
import { API_OPTIONS, MOVIE_TITLE_LOGO_API } from '../utils/constants'
import useGetMovieLogo from '../hooks/useGetMovieLogo';

const VideoInformation = ({ id, overview }) => {

    const movieLogo = useGetMovieLogo(id);

    return (
        <div className='ml-[9rem] absolute text-white bg-gradient-to-r from-black h-[59vh]'>
            <img src={MOVIE_TITLE_LOGO_API + movieLogo} className='w-72 m-5 p-5 mt-[3rem]' />
            <p className='w-[40%] ml-6 mt-1 pl-5 pt-0 text-xl'>{overview.slice(0, 100) + "..."}</p>

            <div className='flex ml-5 p-5'>
                <button className='text-white rounded-lg mr-5 p-1 w-36 text-2xl bg-customDark flex justify-center hover:bg-white hover:text-black' >
                    Play Trailer
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                        className=" text-white m-auto lucide lucide-play color-white ps-1 h-3 w-3 md:h-8 md:w-8 hover:text-black hover:bg-white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </button>

                <button >
                    <div className="flex items-center justify-center w-14 h-14 bg-customDark rounded-full border-2 border-customDark">
                        <div className="relative w-10 h-10">
                            <div className="absolute top-0 left-1/2 w-[0.20rem] h-full bg-white transform -translate-x-1/2"></div>
                            <div className="absolute top-1/2 left-0 h-[0.20rem] w-full bg-white transform -translate-y-1/2"></div>
                        </div>
                    </div>
                </button>

            </div>
        </div >
    )
}

export default VideoInformation