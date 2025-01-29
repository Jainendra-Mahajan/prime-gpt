import React from "react";

const Shimmer = () => {
    return (
        <div className="flex flex-col items-start space-y-8 p-6">
            {/* Video Container Shimmer */}
            <div className="md:ml-28 w-full max-w-6xl h-44 md:h-80 bg-gray-800 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-shimmer" />
            </div>

            {/* Category Title Shimmer */}
            <div className="md:ml-10 w-full md:w-64 max-w-4xl h-4 md:h-6 bg-gray-700 rounded-md animate-pulse"></div>

            {/* Scrollable Movie Cards */}
            <div className="md:ml-10 w-full overflow-x-auto whitespace-nowrap">
                <div className="flex gap-4">
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className="w-52 h-72 md:w-60 md:h-96 bg-gray-800 rounded-lg overflow-hidden relative animate-pulse shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-shimmer" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:ml-10 w-full overflow-x-auto whitespace-nowrap">
                <div className="flex gap-4">
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className="w-52 h-72 md:w-60 md:h-96 bg-gray-800 rounded-lg overflow-hidden relative animate-pulse shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-shimmer" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shimmer;
