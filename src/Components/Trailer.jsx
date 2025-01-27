import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useTrailerVideo from '../hooks/useTrailerVideo';
import Header from './Header';
import useRecommendedMovies from '../hooks/useRecommendedMovies';
import MovieList from './MovieList';

const Trailer = () => {
    const params = useParams();

    useTrailerVideo(params.id);
    useRecommendedMovies(params.id);

    const movieTrailer = useSelector((store) => store?.movies?.movieTrailer);
    const recommendedMovies = useSelector((store) => store?.movies?.recommendedMovies);

    return (
        <div className="text-white bg-slate-950 min-h-screen">
            <Header />
            <div className="relative">
                <iframe
                    className="w-full aspect-video h-[25vh] md:h-[80vh] shadow-lg bg-gradient-to-r from-white "
                    src={"https://www.youtube.com/embed/" + movieTrailer?.key + "?&autoplay=1&controls=0"}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="px-10 md:px-20 mb-10">
                {recommendedMovies && <MovieList title={"Recommended for You"} movies={recommendedMovies} />}
            </div>
        </div>
    );
};

export default Trailer;
