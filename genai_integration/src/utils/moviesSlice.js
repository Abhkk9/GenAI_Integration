import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        discoverMovieList: null,
        upcomingMovieList: null,
        popularMovieList: null,
        nowPlayingMovieList: null,
        topRatedMovieList: null,
        
    },
    reducers: {
        addDiscoverMovieList: (state, action) => {
            state.discoverMovieList = action.payload;
        },
        addUpcomingMovieList: (state, action) => {
            state.upcomingMovieList = action.payload;
        },
        addPopularMovieList: (state, action) => {
            state.popularMovieList = action.payload;
        },
        addNowPlayingMovieList: (state, action) => {
            state.nowPlayingMovieList = action.payload;
        },
        addTopRatedMovieList: (state, action) => {
            state.topRatedMovieList = action.payload;
        },
    },
});

export const { addDiscoverMovieList, addNowPlayingMovieList, addUpcomingMovieList, addPopularMovieList,addTopRatedMovieList } = movieSlice.actions;

export default movieSlice.reducer;