import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSeach from './GptSeach';
import { useSelector } from 'react-redux';

const Browse = () => {

    const gptValue = useSelector(store => store.gptSearch.showGptSearch)

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div>
            <Header />
            {gptValue ? <GptSeach /> : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
        </div >
    )
}

export default Browse