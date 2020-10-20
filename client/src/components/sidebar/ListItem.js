// Import Dependencies.
import React from "react";

/**
 * Presentational component that will display a movie in the sidebar
 * {movie} - movie item containing specific movie information
 */
const ListItem = ({ movie }) => {
    return (
        <div className="list-item">
            <img
                className="sidebar-poster"
                src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                alt={movie.poster}
            />
        </div>
    );
};

export default ListItem;
