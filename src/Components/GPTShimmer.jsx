import React from 'react'

const GPTShimmer = () => {

    return (
        <div className="mt-10 mx-2 md:ml-24 w-full overflow-x-auto whitespace-nowrap">
            <div className="flex gap-4">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="w-52 h-72 md:w-60 md:h-96 bg-gray-800 rounded-lg overflow-hidden relative animate-pulse shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-shimmer" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GPTShimmer