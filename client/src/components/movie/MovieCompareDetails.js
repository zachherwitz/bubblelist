// Import Dependencies and useContext Hook
import React, { useContext } from "react";

// Import Context
import ListContext from "../../context/list/listContext";
import MovieContext from "../../context/movie/movieContext";

/**
 * Component that will display one of two movies on a user's list
 * {movie} - movie item containing specific movie information
 */
const MovieCompareDetails = ({ movie }) => {
    const listContext = useContext(ListContext);
    const movieContext = useContext(MovieContext);

    // Destructuring elements from movie context's state
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

    /**
     * @params (event)
     * Pass movie's id to list context in order to remove it from the list
     */
    const removeFromList = e => {
        listContext.removeFromList(e.target.id);
    };

    return (
        <div className="movie-compare-details">
            <div>
                <img
                    src={"https://image.tmdb.org/t/p/w342/" + poster}
                    alt={title}
                />
            </div>
            <button className="remove-btn" id={id} onClick={removeFromList}>
                REMOVE FROM LIST
            </button>
        </div>
    );
};

export default MovieCompareDetails;
