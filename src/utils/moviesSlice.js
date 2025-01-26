import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        trailerIndex: 1,
        nowPlayingMovies: null,
        movieTrailer: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        recommendedMovies: null
    },
    reducers: {
        updateTrailerIndex: (state, action) => {
            state.trailerIndex = action.payload;
        },

        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },

        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload
        },

        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },

        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },

        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addRecommendedMovies: (state, action) => {
            state.recommendedMovies = action.payload
        }
    }
})

export const { updateTrailerIndex, addNowPlayingMovies, addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addRecommendedMovies } = moviesSlice.actions
export default moviesSlice.reducer;