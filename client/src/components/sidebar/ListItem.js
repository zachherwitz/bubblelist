// Import Dependencies.
import React from "react";

/**
 * Presentational component that will display a movie in the sidebar
 * {movie} - movie item containing specific movie information
 */
const ListItem = ({ movie }) => {
    return (
        <div className="list-item">
            <h1>{movie.title}</h1>
        </div>
    );
};

export default ListItem;
