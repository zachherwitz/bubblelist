// Import Dependencies and useContext Hook
import React, { useContext } from "react";

// Import Components
import MoviesContainer from "../movie/MoviesContainer";
import Sidebar from "../sidebar/Sidebar";
import Header from "../UIElements/Header";
import MovieCompareDetails from "../movie/MovieCompareDetails";

// Import Context
import MovieContext from "../../context/movie/movieContext";
import ListContext from "../../context/list/listContext";

/**
 * View for when the list is in the 'comparison' stage.
 */
const ComparisonDisplay = () => {
    const movieContext = useContext(MovieContext);
    const listContext = useContext(ListContext);

    return (
        <div className="comparison-display">
            <Header />
            <div className="comparison-container">
                <MovieCompareDetails movie={movieContext.state.comparison.a} />
                <MovieCompareDetails movie={movieContext.state.comparison.b} />
            </div>
            <Sidebar />
        </div>
    );
};

export default ComparisonDisplay;
