import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice ({
    name : "movies",
    initialState :{
        movieList:null
    },
    reducers :{
        addMoviesList : (state , action) =>{
            state.movieList =action.payload;
        },
    },
});

export const { addMoviesList} =movieSlice.actions

export default movieSlice.reducer;