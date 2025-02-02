import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useTrailerVideo from '../hooks/useTrailerVideo';
import Header from './Header';
import useRecommendedMovies from '../hooks/useRecommendedMovies';
import MovieList from './MovieList';
import Shimmer from './Shimmer'
import ErrorPage from './Error';

const Trailer = () => {
    const params = useParams();

    useTrailerVideo(params.id);
    useRecommendedMovies(params.id);

    const movieTrailer = useSelector((store) => store?.movies?.movieTrailer);
    const recommendedMovies = useSelector((store) => store?.movies?.recommendedMovies);

    if (!movieTrailer) return <ErrorPage />

    return (
        <div className="text-white bg-slate-950 min-h-screen">
            <Header />
            <div className="relative">
                <h1 className='mb-1 bg-slate-950 px-5 md:px-10 absolute text-xs md:text-2xl left-0 right-0 mx-auto w-full'>{movieTrailer.name}</h1>
                <iframe
                    className="w-screen md:w-full aspect-video h-[25vh] md:h-[80vh] shadow-lg bg-gradient-to-r from-white "
                    src={"https://www.youtube.com/embed/" + movieTrailer?.key + "?&autoplay=1&controls=0"}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="px-2 md:px-20 mb-10">
                {recommendedMovies && <MovieList title={"Recommended Movies"} movies={recommendedMovies} />}
            </div>
        </div>
    );
};

export default Trailer;
