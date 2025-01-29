import React, { useState } from 'react';
import { MOVIE_POSTER_500_PX_API } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const MoviePosterCard = ({ posterId, id, title, overview }) => {
    const [showCard, setShowCard] = useState(false);
    if (!posterId) return null;

    const navigate = useNavigate();

    const handleMovieClick = () => {
        navigate('/play/' + id);
    };

    const handleCardHover = () => {
        setShowCard(true);
    };

    const handleCardLeave = () => {
        setShowCard(false);
    };

    return (
        <div
            className="relative cursor-pointer"
            onClick={handleMovieClick}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
        >
            <img
                src={MOVIE_POSTER_500_PX_API + posterId}
                alt="Movie Poster"
                className="h-64 md:h-72 rounded-lg transition-transform duration-300 transform group-hover:scale-105"
            />
            <div
                className={`h-full absolute top-0 pl-1 pr-2 bg-black bg-opacity-80 text-white rounded-lg flex flex-col transition-opacity duration-300
                ${showCard ? 'opacity-100' : 'opacity-0 pointer-events-none'} overflow-y-hidden`}
            >
                <h1 className="flex items-start text-center text-base mb-2 font-semibold mt-2">
                    <svg
                        className="w-6 h-6 md:w-6 md:h-6 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {title}
                </h1>

                <button className="mx-0 md:mx-2 py-2 md:py-2 mb-2 md:m-2 md:text-base bg-white text-black text-lg rounded-lg md:w-3/4 hover:bg-gray-200 transition-colors duration-200 flex justify-center">
                    <svg
                        className="md:w-6 md:h-6 dark:text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Play
                </button>
                <p className="text-xs md:text-sm md:mx-1 mt-2">{overview.slice(0, 150) + '...'}</p>
            </div>
        </div>
    );
};

export default MoviePosterCard;