import React, { useRef } from 'react';
import MoviePosterCard from './MoviePosterCard';

const MovieList = ({ title, movies }) => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };


    return (
        <div className="relative mx-5 md:mx-10">
            <h1 className="py-5 text-lg md:text-2xl text-white">{title}</h1>

            <button
                onClick={scrollLeft}
                className="hidden md:inline-block absolute left-5 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-20 hover:bg-gray-700"
            >
                &#8249;
            </button>

            <button
                onClick={scrollRight}
                className="hidden md:inline-block absolute right-5 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-20 hover:bg-gray-700"
            >
                &#8250;
            </button>

            <div
                ref={carouselRef}
                className="flex overflow-x-scroll space-x-5 scrollbar-hide"
            >
                {movies.map((movie) => (
                    <div key={movie.id} className="flex-shrink-0 cursor-pointer ">
                        <MoviePosterCard posterId={movie?.poster_path} id={movie?.id} title={movie?.title} overview={movie.overview} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
