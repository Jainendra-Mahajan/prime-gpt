import { createSlice } from "@reduxjs/toolkit";

const movieSuggestionSlice = createSlice({
    name: "suggestion",
    initialState: {},
    //[1] --> [1, 2 ,3]
    //[2] --> [2,3,4]
    reducers:
    {
        cachedSuggestions: (state, action) => {
            state = Object.assign(state, action.payload)
        }
    }

})

export const { cachedSuggestions } = movieSuggestionSlice.actions
export default movieSuggestionSlice.reducer