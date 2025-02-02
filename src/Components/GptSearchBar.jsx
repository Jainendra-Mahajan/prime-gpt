import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
import openai from '../utils/openAI';
import { API_OPTIONS, SEARCH_SUGGESTION_API } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import GPTShimmer from './GPTShimmer';
import { cachedSuggestions } from '../utils/movieSuggestionSlice';

const GptSearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const dispatch = useDispatch();
    const search = useRef(null);
    const movieSuggestionsList = useSelector(store => store.suggestion);
    const [showSuggestion, setShowSuggestion] = useState(false)

    const getTmdbMovies = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1", API_OPTIONS);

        const json = await data.json();
        return json.results;
    }

    const handleSuggestionSearch = (movie) => {
        setShowSuggestion(false)
        search.current.value = movie;
        setSearchQuery(movie)
        handleGptSearch();
    }
    const handleGptSearch = async () => {
        setLoading(true);
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
        setLoading(false);
    }

    const languageKey = useSelector(store => store.config.lang);

    useEffect(() => {

        const timer = setTimeout(() => {

            if (movieSuggestionsList[searchQuery]) {
                setSuggestions(movieSuggestionsList[searchQuery]);
            }

            else {
                getSearchSuggestions();
            }
        }, 200)

        return () => {
            clearInterval(timer)
        }
    }, [searchQuery])

    const getSearchSuggestions = async () => {
        const data = await fetch(SEARCH_SUGGESTION_API + searchQuery);
        const json = await data.json();

        setSuggestions(json[1])
        //cached in the list to aviod API Calls
        dispatch(cachedSuggestions({
            [searchQuery]: json[1]
        }
        ))
    }
    return (
        <>
            <div>
                <div className='top-20 w-full fixed z-10 flex justify-center text-base '>
                    <form className='w-[90%] md:w-[50%] grid grid-cols-12' onSubmit={(e) => e.preventDefault()} >

                        <input type="text" data-testid="search-bar"
                            placeholder={lang[languageKey].placeHolder}
                            value={searchQuery}
                            onChange={(e) => {
                                setShowSuggestion(true)
                                setSearchQuery(e.target.value)
                            }
                            }
                            onFocus={() => setShowSuggestion(true)}
                            onBlur={() =>
                                setTimeout(() => {
                                    setShowSuggestion(false)
                                }, 100)
                            }


                            className='text-white text-xs m-1 py-2 px-1 md:m-2 md:text-base md:py-3 md:px-2 col-span-9 bg-gray-500 rounded-md'
                            ref={search} />

                        <button className='ml-5 m-1 p-2 md:m-2 md:p-1 md:text-base text-xs bg-blue-400 text-white col-span-3 rounded-md' onClick={handleGptSearch} >
                            {lang[languageKey].search}
                        </button>

                        {showSuggestion && <div className='z-10 bg-gray-500 w-[15.2rem] md:w-[32rem] ml-1 md:ml-3 text-white rounded-lg'>
                            <ul>
                                {suggestions.map(s =>
                                    <li key={s} className='cursor-default flex items-center py-2 md:py-1 md:pl-2 hover:bg-gray-400 rounded-lg text-sm md:text-base' onClick={() => handleSuggestionSearch(s)}>
                                        <svg className="mx-2 w-4 h-4 md:w-5 md:h-5 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                                        </svg>
                                        {s}
                                    </li>
                                )}


                            </ul>
                        </div>}

                    </form>

                </div>

            </div>
            <div className='mt-36 md:mt-56'>
                {loading ? <GPTShimmer /> : null}
            </div>
        </>
    )
}

export default GptSearchBar