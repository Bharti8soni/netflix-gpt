import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
   name: "movies",
   initialState :{
    nowPlayingMovies:null,
    trailerVideo:null,
    popularMovies:null,
    topRated:null,
    upcoming:null,
    },
   
   reducers:{
    addNowPlayingMovies : (state,action) =>{
        state.nowPlayingMovies =action.payload;
       // console.log(action)
    },
    addTrailerVideo : (state,action) =>{
        state.trailerVideo =action.payload;
    },
    addPopularMovies : (state,action) =>{
        state.popularMovies =action.payload;
       // console.log(action)
    },
    addTopRated : (state,action) =>{
        state.topRated =action.payload;
       // console.log(action)
    },
    addUpcoming : (state,action) =>{
        state.upcoming =action.payload;
        //console.log(action)
    },
    
   }
});
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies, addTopRated, addUpcoming} = moviesSlice.actions;
export default moviesSlice.reducer;