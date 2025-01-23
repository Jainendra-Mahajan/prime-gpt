import React from 'react';
import { GPT_BACKGROUND } from '../utils/constants';
import GptSearchBar from './GptSearchBar';
import GptSuggestions from './GptSuggestions';

const GptSeach = () => {
    return (
        <div className="relative w-full h-screen">
            <div
                className="fixed inset-0 -z-10 bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${GPT_BACKGROUND})`,
                }}
            ></div>
            <GptSearchBar />
            <GptSuggestions />
        </div>
    );
};

export default GptSeach;
