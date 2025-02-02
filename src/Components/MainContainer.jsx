import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoInformation from './VideoInformation'
import Shimmer from './Shimmer'

const MainContainer = () => {

    const movies = useSelector(store => store?.movies?.nowPlayingMovies)
    const trailerIndex = useSelector(store => store?.movies?.trailerIndex)
    if (!movies) return <Shimmer />


    const { id, original_title, overview } = movies[trailerIndex];
    return (

        <div className='text-white'>
            <div className='mt-16'>
                <VideoInformation id={id} title={original_title} overview={overview} />
                <VideoBackground movieId={id} />
            </div>
        </div>
    )
}

export default MainContainer