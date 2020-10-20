// Import Dependencies
import React from "react";

import Sidebar from "../sidebar/Sidebar";
import Header from "../UIElements/Header";
import MovieDetails from "../movie/MovieDetails";

/**
 * View for when the list is in the 'final' stage.
 */
const FinalDisplay = ({ movie }) => {
    // Destructuring elements of the final movie item
    const {
        backdrop_path: backdrop,
        budget,
        genres,
        homepage,
        id,
        overview,
        poster_path: poster,
        release_date: date,
        revenue,
        runtime,
        tagline,
        title,
        vote_average,
        vote_count,
    } = movie;

    return (
        <div className="final-display">
            <Header />
            <Sidebar />
            <MovieDetails movie={movie} />
        </div>
    );
};

export default FinalDisplay;
