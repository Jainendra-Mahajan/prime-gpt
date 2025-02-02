import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieList from "./MovieList"

const GptSuggestions = () => {
    const dispatch = useDispatch();

    const { gptMovieNames, gptMovieList } = useSelector((store) => store.gptSearch);
    if (!gptMovieNames) return null;
    return (
        <div className='md:mt-56 text-white m-3 md:m-2 md:p-2 bg-slate-900/80 backdrop-blur-md rounded-lg shadow-lg'>
            {gptMovieNames.map((movie, index) =>
                <MovieList key={movie} title={movie} movies={gptMovieList[index]} />)}
        </div>
    )
}

export default GptSuggestions