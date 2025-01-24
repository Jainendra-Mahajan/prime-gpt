import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"

const GptSuggestions = () => {

    const { gptMovieNames, gptMovieList } = useSelector((store) => store.gptSearch);
    // console.log(movieNames + " Names" + movieList);

    if (!gptMovieNames) return null;
    return (
        <div className=' text-white md:m-2 md:p-2'>
            {gptMovieNames.map((movie, index) =>
                <MovieList key={movie} title={movie} movies={gptMovieList[index]} />)}
        </div>
    )
}

export default GptSuggestions