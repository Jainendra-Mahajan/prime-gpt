import React from 'react'
import useTrailerVideo from '../hooks/useTrailerVideo'
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {

    const movieTrailer = useSelector((store) => store?.movies?.movieTrailer)
    useTrailerVideo(movieId);
    return (
        <div className='bg-[#03152c] pt-10 overflow-hidden flex justify-center items-center h-[59vh]'>
            <iframe className="w-full aspect-video max-w-6xl bg-gradient-to-r from-black"
                src={"https://www.youtube.com/embed/" + movieTrailer?.key + "?&autoplay=1&mute=1&controls=0"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

        </div>
    )
}

export default VideoBackground