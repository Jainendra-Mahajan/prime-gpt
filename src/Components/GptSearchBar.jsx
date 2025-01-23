import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
import openai from '../utils/openAI';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const search = useRef(null);

    const getTmdbMovies = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1", API_OPTIONS);

        const json = await data.json();
        return json.results;
    }

    const handleGptSearch = async () => {
        console.log(search.current.value);

        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +
            search.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        //API CALL to gpt search with this text
        const gptResults = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            store: true,
            messages: [{ role: 'user', content: gptQuery }],
        })

        const movieList = gptResults.choices[0].message.content.split(",");

        const moviePromiseArray = movieList.map(movie => getTmdbMovies(movie));
        const moviesSuggestionsArray = await Promise.all(moviePromiseArray);

        dispatch(addGptMovieResult(
            {
                MovieNames: movieList, MovieSuggestion: moviesSuggestionsArray
            }
        ))
        console.log(moviesSuggestionsArray);
    }

    const languageKey = useSelector(store => store.config.lang);
    return (
        <div className='pt-[10%] flex justify-center text-lg'>
            <form className='w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()} >

                <input type="text" placeholder={lang[languageKey].placeHolder}
                    className='m-2 py-4 px-2 col-span-9 bg-gray-500 rounded-md'
                    ref={search} />

                <button className='m-2 p-2 bg-blue-400 text-white col-span-3 rounded-md' onClick={handleGptSearch} >
                    {lang[languageKey].search}
                </button>

            </form>
        </div >
    )
}

export default GptSearchBar