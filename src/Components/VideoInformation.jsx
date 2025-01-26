import React from 'react'
import { MOVIE_TITLE_LOGO_API } from '../utils/constants'
import useGetMovieLogo from '../hooks/useGetMovieLogo';
import { useDispatch, useSelector } from 'react-redux';
import { updateTrailerIndex } from '../utils/moviesSlice';
import { useNavigate } from 'react-router-dom';

const VideoInformation = ({ id, overview }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const movieLogo = useGetMovieLogo(id);
    const trailerIndex = useSelector(store => store?.movies?.trailerIndex)
    const movies = useSelector(store => store?.movies?.nowPlayingMovies)

    const handleLeftIndex = () => {
        trailerIndex > 0 && dispatch(updateTrailerIndex(trailerIndex - 1))
    }

    const handleRightIndex = () => {
        trailerIndex < movies.length - 1 && dispatch(updateTrailerIndex(trailerIndex + 1))
    }

    const handlePlayClick = () => {
        navigate("/play/" + id)
    }

    return (
        <div className='flex justify-between'>
            <div className='absolute left-4 top-[25%]'>
                <button className=' m-5 p-2 bg-white rounded-full' onClick={handleLeftIndex}>
                    <svg className="w-6 h-6 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                    </svg>

                </button>
            </div>
            <div className='md:ml-[8rem] absolute text-white bg-gradient-to-r from-black h-full'>
                <img src={MOVIE_TITLE_LOGO_API + movieLogo} className='w-36 md:w-72 md:m-5 md:mb-1 p-5 mt-2 md:mt-[1rem] bg-gradient-to-r from-transparent via-sky-600 to-transparent' />
                <p className='hidden md:inline-block w-[50%] md:w-[40%] ml-6 mt-1 pl-5 pt-0 text-xs md:text-base'>{overview.slice(0, 100) + "..."}</p>

                <div className='mt-2 flex ml-4 md:ml-5 md:p-5 justify-start'>
                    <button className='text-white rounded-full p-2 mr-2 text-xs md:text-xl items-center bg-customDark hover:bg-white hover:text-black' onClick={handlePlayClick} >
                        <svg className="w-6 h-6 md:w-10 md:h-10 text-gray-800 dark:text-white hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clipRule="evenodd" />
                        </svg>
                    </button>

                    <button className='text-white rounded-full p-2 mr-2 text-sm md:text-xl items-center bg-customDark hover:bg-white hover:text-black' >


                        <svg className="w-6 h-6 md:w-10 md:h-10 text-gray-800 dark:text-white hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </button>

                </div>
            </div >
            <div className='absolute right-4 top-[25%]'>
                <button className='m-5 p-2 bg-white rounded-full' onClick={handleRightIndex}>
                    <svg className="w-6 h-6 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                    </svg>

                </button>
            </div>
        </div>
    )
}
export default VideoInformation