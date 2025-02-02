import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import moviesReducer from "../utils/moviesSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"
import searchReducer from "./movieSuggestionSlice"

const appStore = configureStore({
    reducer: {
        User: userReducer,
        movies: moviesReducer,
        gptSearch: gptReducer,
        config: configReducer,
        suggestion: searchReducer
    }
})

export default appStore;