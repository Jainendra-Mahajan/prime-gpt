import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSearch",
    initialState: {
        showGptSearch: false,
        gptMovieNames: null,
        gptMovieList: null,
    },
    reducers: {
        gptSearchAction: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },

        addGptMovieResult: (state, action) => {
            const { MovieNames, MovieSuggestion } = action.payload;
            state.gptMovieNames = MovieNames;
            state.gptMovieList = MovieSuggestion
        }
    }
})

export const { gptSearchAction, addGptMovieResult } = gptSlice.actions
export default gptSlice.reducer