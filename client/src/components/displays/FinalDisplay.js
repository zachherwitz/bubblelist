// Import Dependencies
import React from "react";

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
            <div className="info">
                <h1>{title}</h1>
                <h3>{tagline}</h3>
                <h5>{runtime}</h5>
                <h3>{overview}</h3>
            </div>
            <img
                src={"https://image.tmdb.org/t/p/w342/" + poster}
                alt={title}
            />
        </div>
    );
};

export default FinalDisplay;
