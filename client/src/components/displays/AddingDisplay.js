// Import Dependencies and useContext Hook
import React, { useContext } from "react";

// Import Components
import MoviesContainer from "../movie/MoviesContainer";
import MovieDetails from "../movie/MovieDetails";
import Search from "../search/Search";
import Sidebar from "../sidebar/Sidebar";

// Import Context
import MovieContext from "../../context/movie/movieContext";

/**
 * View for when the list is in the 'adding' stage.
 */
const AddingDisplay = () => {
    const movieContext = useContext(MovieContext);

    /**
     * Clears out the .single property of movieContext, causing the movie detail
     * modal to disappear on click
     */
    const clearDetails = () => {
        movieContext.clearSingleMovie();
    };

    return (
        <div className="adding-display" onClick={clearDetails}>
            <Search />
            <Sidebar />
            <MoviesContainer />
            {movieContext.state.single && (
                <MovieDetails movie={movieContext.state.single} />
            )}
        </div>
    );
};

export default AddingDisplay;
