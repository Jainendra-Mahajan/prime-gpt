import React from 'react'
import { MOVIE_POSTER_500_PX_API } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

const MoviePosterCard = ({ posterId, id }) => {
    if (!posterId) return null;
    const navigate = useNavigate();
    const handleMovieClick = () => {
        navigate("/play/" + id)
    }

    return (
        <div className='pr-5 md:pr-5 md:w-52 w-36' onClick={handleMovieClick}>
            <img src={MOVIE_POSTER_500_PX_API + posterId} alt="Movie Poster" className='rounded-lg' />
        </div>
    )
}

export default MoviePosterCard