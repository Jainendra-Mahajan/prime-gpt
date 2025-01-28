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
            className="w-36 md:w-52 relative cursor-pointer"
            onClick={handleMovieClick}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
        >
            <img
                src={MOVIE_POSTER_500_PX_API + posterId}
                alt="Movie Poster"
                className="h-72 rounded-lg transition-transform duration-300 transform group-hover:scale-105"
            />
            <div
                className={`h-full absolute top-0 px-5 bg-black bg-opacity-80 text-white rounded-lg flex flex-col transition-opacity duration-300
                ${showCard ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <h1 className="flex justify-center items-center text-center text-xs md:text-base mb-2 font-semibold mt-2">
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

                <button className="mx-2 py-1 md:py-2 mb-2 md:m-2 text-xs md:text-base bg-white text-black rounded-lg w-3/4 hover:bg-gray-200 transition-colors duration-200 flex justify-center items-center">
                    <svg
                        className="w-6 h-6 md:w-6 md:h-6 dark:text-black"
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
                    Play
                </button>
                <p className="text-xs md:text-sm mx-1 mt-1">{overview.slice(0, 150) + '...'}</p>
            </div>
        </div>
    );
};

export default MoviePosterCard;