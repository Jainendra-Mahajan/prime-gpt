import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"

const appStore = configureStore({
    reducer: {
        User: userReducer,
    }
})

export default appStore;