import React from 'react'
import useTrailerVideo from '../hooks/useTrailerVideo'
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {

    const movieTrailer = useSelector((store) => store?.movies?.movieTrailer)
    useTrailerVideo(movieId);
    return (
        <div className='bg-slate-950 overflow-hidden flex justify-center items-center h-[20vh] md:h-[40vh]'>
            <iframe className="w-full aspect-video max-w-6xl bg-gradient-to-r from-white"
                src={"https://www.youtube.com/embed/" + movieTrailer?.key + "?&autoplay=1&mute=1&controls=0"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            </iframe>


        </div>
    )
}

export default VideoBackground