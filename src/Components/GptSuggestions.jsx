import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieList from "./MovieList"
import MovieListShimmer from './MovieListShimmer';

const GptSuggestions = () => {
    const dispatch = useDispatch();

    const { gptMovieNames, gptMovieList } = useSelector((store) => store.gptSearch);
    if (!gptMovieNames) return null;
    return (
        <div className=' text-white md:m-2 md:p-2 bg-gradient-to-r'>
            {gptMovieNames.map((movie, index) =>
                <MovieList key={movie} title={movie} movies={gptMovieList[index]} />)}
        </div>
    )
}

export default GptSuggestions