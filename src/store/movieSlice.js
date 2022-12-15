import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        allMovieData: [],
        movieData: [],
        singleMovieData: [],
        filterData:[]
    },
    reducers: {
        getAllmovie(state, action) {
            state.allMovieData = action.payload;
            
        },
        getMovie(state, action) {
        
            state.movieData = action.payload
        },
        getSingleMovie(state, action) {
            state.singleMovieData = action.payload

        }
    }
})

export const { getMovie, getSingleMovie, getAllmovie } = movieSlice.actions;

export default movieSlice.reducer;


export function fetchAllMovie() {
    return async function (dispatch) {
        try {
            const data = await axios.get(`http://localhost:3001/trending`)
            dispatch(getAllmovie(data.data))

        }
        catch (error) {
            console.log(error)
        }
    }
}

export function fetchMovie(page) {
    return async function (dispatch) {
        try {
            const data = await axios.get(`http://localhost:3001/trending?_page=${page}&_limit=${8}`)
            dispatch(getMovie(data.data))

        }
        catch (error) {
            console.log(error)
        }
    }
}

export function fetchSingleMovie(id) {
    return async function (dispatch) {
        try {
            const data = await axios.get(`http://localhost:3001/trending/${id}`)
            dispatch(getSingleMovie(data.data))
        }
        catch (error) {
            console.log(error)
        }

    }
}















