import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSeach from './GptSearch';
import { useSelector } from 'react-redux';
import Footer from './Footer';

const Browse = () => {

    const gptValue = useSelector(store => store.gptSearch.showGptSearch)

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            <Footer />

        </div >
    )
}

export default Browse