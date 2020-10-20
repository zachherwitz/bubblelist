import React, { useReducer, useContext } from "react";

import {
    CREATE_LIST,
    ADD_TO_LIST,
    ACTIVATE_LIST,
    REMOVE_FROM_LIST,
    SELECT_FINAL_MOVIE,
} from "../types";

import ListContext from "./listContext";
import ListReducer from "./listReducer";

import MovieContext from "../movie/movieContext";

/**
 * External state to keep track of the List item and its properties
 */
const ListState = props => {
    const movieContext = useContext(MovieContext);
    const initialState = {
        stage: null,
    };
    const [state, dispatch] = useReducer(ListReducer, initialState);

    // Hardcoded and determined based on testing
    const maxListLength = 6;

    /*
     * Create new list document and save it to state
     */
    const createList = async () => {
        let url = "https://protected-scrubland-08240.herokuapp.com/api/list";
        // POST request to new list endpoint
        let res = await (await fetch(url, { method: "POST" })).json();
        // dispatch the results to the reducer
        dispatch({
            type: CREATE_LIST,
            payload: res.data,
        });
    };

    /*
     * Pull two random movies from the list for comparison
     */
    const compare = (arr = state.initialList) => {
        let randomIndexOne = Math.floor(Math.random() * arr.length);
        let randomIndexTwo = Math.floor(Math.random() * arr.length);

        while (randomIndexTwo === randomIndexOne) {
            randomIndexTwo = Math.floor(Math.random() * arr.length);
        }
        movieContext.assignTwoMovies(arr[randomIndexOne], arr[randomIndexTwo]);
    };

    /*
        Add a movie to list based on the movieContext
    */
    const addToList = async () => {
        let movie = movieContext.state.single;
        let alreadyOnList = false;
        if (state.stage === null) {
            await createList();
        }
        movieContext.fetchSimilar(movie.id);
        if (state.initialList) {
            state.initialList.forEach(item => {
                if (movie.id === item.id) {
                    alreadyOnList = true;
                }
            });
        }
        if (!alreadyOnList) {
            dispatch({
                type: ADD_TO_LIST,
                payload: movie,
            });
        }
        movieContext.clearSingleMovie();

        // If list hits max size in its 'adding' stage, move to the next stage
        if (
            state.stage === "adding" &&
            state.initialList.length === maxListLength
        ) {
            dispatch({ type: ACTIVATE_LIST });
            compare();
        }
    };

    /*
     * Remove a specific movie from list
     * @param {number} id
     */
    const removeFromList = async id => {
        let newList = state.initialList.filter(movie => {
            if (Number(movie.id) !== Number(id)) {
                return movie;
            }
        });
        await dispatch({ type: REMOVE_FROM_LIST, payload: newList });
        if (newList.length > 1) {
            compare(newList);
        } else {
            dispatch({ type: SELECT_FINAL_MOVIE, payload: newList[0] });
        }
    };

    return (
        <ListContext.Provider
            value={{ state, createList, addToList, removeFromList }}
        >
            {props.children}
        </ListContext.Provider>
    );
};

export default ListState;
