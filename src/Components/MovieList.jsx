import React from 'react'
import MoviePosterCard from './MoviePosterCard';

const MovieList = ({ title, movies }) => {
    return (
        <div className='mx-10'>
            <h1 className='py-5 text-2xl'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {movies.map(movie => <MoviePosterCard key={movie.id} posterId={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList