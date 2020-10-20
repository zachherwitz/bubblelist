// Import Dependencies and useContext Hook
import React, { useContext } from "react";

// Import Components
import MoviesContainer from "../movie/MoviesContainer";
import MovieDetails from "../movie/MovieDetails";
import Search from "../search/Search";
import Header from "../UIElements/Header";
import Footer from "../UIElements/Footer";

// Import Context
import MovieContext from "../../context/movie/movieContext";

/**
 * View for when the list is in the initial empty stage.
 */
const SplashDisplay = () => {
    const movieContext = useContext(MovieContext);

    /**
     * Clears out the .single property of movieContext, causing the movie detail
     * modal to disappear on click
     */
    const clearDetails = () => {
        movieContext.clearSingleMovie();
    };

    return (
        <div className="splash-display" onClick={clearDetails}>
            <Header />
            <MoviesContainer />
            <Search />
            <div className="more-info">
                <h2>click one a movie poster to begin a list</h2>
                <h3>or search for a specific film to get started!</h3>
            </div>
            <Footer />
            {movieContext.state.single && (
                <MovieDetails movie={movieContext.state.single} />
            )}
        </div>
    );
};

export default SplashDisplay;
