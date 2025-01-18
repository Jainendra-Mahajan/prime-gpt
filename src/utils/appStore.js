import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import moviesReducer from "../utils/moviesSlice"

const appStore = configureStore({
    reducer: {
        User: userReducer,
        movies: moviesReducer
    }
})

export default appStore;