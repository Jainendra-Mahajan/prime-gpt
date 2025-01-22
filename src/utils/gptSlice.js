import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSearch",
    initialState: {
        showGptSearch: false
    },
    reducers: {
        gptSearchAction: (state) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
})

export const { gptSearchAction } = gptSlice.actions
export default gptSlice.reducer