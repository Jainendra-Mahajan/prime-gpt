import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);

    return movies?.nowPlayingMovies && (
        <div className='text-white bg-slate-950 relative z-40 mb-10'>
            {<MovieList title={"Trending In India"} movies={movies?.nowPlayingMovies} />}
            {movies?.popularMovies && <MovieList title={"Popular"} movies={movies?.popularMovies} />}
            {movies?.topRatedMovies && <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />}
            {movies?.upcomingMovies && <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />}

        </div>
    )
}

export default SecondaryContainer