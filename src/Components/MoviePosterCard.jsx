import React from 'react'
import { MOVIE_POSTER_500_PX_API } from '../utils/constants'

const MoviePosterCard = ({ posterId }) => {
    if (!posterId) return null;
    return (
        <div className='w-36 pr-5 md:pr-5 md:w-52'>
            <img src={MOVIE_POSTER_500_PX_API + posterId} alt="Movie Poster" />
        </div>
    )
}

export default MoviePosterCard