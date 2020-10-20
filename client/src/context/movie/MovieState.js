import React, { useReducer } from "react";

import {
    FETCH_POPULAR,
    FETCH_SIMILAR,
    FETCH_MOVIE,
    FETCH_MOVIES,
    ASSIGN_TWO_MOVIES,
    CLEAR_SINGLE_MOVIE,
    CLEAR_DISPLAYED_MOVIES,
} from "../types";

import MovieContext from "./movieContext";
import MovieReducer from "./movieReducer";

/**
 * External state to keep track of results from hitting API endpoints
 */
const MovieState = props => {
    const initialState = {
        single: null,
        similar: [],
        popular: [],
        comparison: {
            a: null,
            b: null,
        },
    };
    const [state, dispatch] = useReducer(MovieReducer, initialState);

    /*
     * Fetch popular movies to populate the splash screen
     */
    const fetchPopular = async () => {
        // random number to pull movies for the splash page
        let pageNum = Math.ceil(Math.random() * 50);
        let url =
            "https://protected-scrubland-08240.herokuapp.com/api/search/popular/" +
            pageNum;
        // fetch result details
        let res = await (await fetch(url)).json();
        // dispatch the results to the reducer
        dispatch({
            type: FETCH_POPULAR,
            payload: res.data.results.splice(0, 20),
        });
    };

    /*
     * Fetch similar movies to the movie just added
     */
    const fetchSimilar = async id => {
        let url =
            "https://protected-scrubland-08240.herokuapp.com/api/search/similar/" +
            id;
        let res = await (await fetch(url)).json();
        // dispatch the results to the reducer
        dispatch({
            type: FETCH_SIMILAR,
            payload: res.data.results.splice(0, 20),
        });
    };

    /*
     * Fetch specific movies to display based on (query)
     * @param {number} id - the clicked movie's id
     */
    const fetchMovie = async id => {
        let url =
            "https://protected-scrubland-08240.herokuapp.com/api/search/id/" +
            id;
        // fetch result details
        let res = await (await fetch(url)).json();
        // dispatch the results to the reducer
        dispatch({
            type: FETCH_MOVIE,
            payload: res.data,
        });
    };

    /*
     * Fetch list of movies to display based on (query)
     * @param {string} query - the user's input query
     */
    const fetchMovies = async query => {
        let url =
            "https://protected-scrubland-08240.herokuapp.com/api/search/title/" +
            query;
        // fetch initial results of search
        let res = await (await fetch(url)).json();
        // // dispatch the results to the reducer
        if (res.data.results.length < 6) {
            res.data.results = [...res.data.results, ...state.popular];
        }
        dispatch({
            type: FETCH_MOVIES,
            payload: res.data.results
                .filter(result => result.poster_path)
                .splice(0, 20),
        });
    };

    /*
     * Clear specific movie info from state
     */
    const clearSingleMovie = () => {
        dispatch({ type: CLEAR_SINGLE_MOVIE });
    };

    /*
     * Clear specific movie info from state
     */
    const clearDisplayedMovies = () => {
        dispatch({ type: CLEAR_DISPLAYED_MOVIES });
    };

    /*
     * Set two movies to a and b for comparison
     * @param {object} movie from list
     * @param {object} movie from list
     */
    const assignTwoMovies = (a, b) => {
        dispatch({ type: ASSIGN_TWO_MOVIES, payload: { a, b } });
    };

    return (
        <MovieContext.Provider
            value={{
                state,
                fetchPopular,
                fetchSimilar,
                fetchMovies,
                fetchMovie,
                clearSingleMovie,
                clearDisplayedMovies,
                assignTwoMovies,
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieState;
