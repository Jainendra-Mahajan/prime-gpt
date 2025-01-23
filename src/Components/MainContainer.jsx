import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoInformation from './VideoInformation'

const MainContainer = () => {

    const movies = useSelector(store => store?.movies?.nowPlayingMovies)
    if (!movies) return;

    const { id, original_title, overview } = movies[0];
    return (
        <div>

            <VideoInformation id={id} title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer