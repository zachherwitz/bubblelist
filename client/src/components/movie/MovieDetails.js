// Import Dependencies and useContext Hook
import React, { useContext } from "react";

// Import Context
import ListContext from "../../context/list/listContext";
import MovieContext from "../../context/movie/movieContext";

/**
 * Component that will display a specific movie's details
 * {movie} - movie item containing specific movie information
 */
const MovieDetails = ({ movie }) => {
    const listContext = useContext(ListContext);
    const movieContext = useContext(MovieContext);

    // Destructuring elements from movie prop
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
     * Add currently examined movie to the list
     * Clear currently examined movie and remove modal
     */
    const addMovie = () => {
        listContext.addToList();
        movieContext.clearDisplayedMovies();
    };

    return (
        <div className="movie-details">
            <h1>
                {title.toUpperCase()} <span>({runtime}min)</span>
            </h1>
            <div className="info-container">
                <img
                    src={"https://image.tmdb.org/t/p/w342/" + poster}
                    alt={title}
                />
                <div className="info">
                    <h2>{tagline}</h2>
                    <p>{overview}</p>
                    <ul className="genre-container">
                        {genres &&
                            genres.map((genre, index) => {
                                return (
                                    <li className="genre" key={index}>
                                        {genre.name}
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
            {listContext.state.result ? (
                <button className="add-btn">
                    YOU CHOSE {title.toUpperCase()}!
                </button>
            ) : (
                <button className="add-btn" onClick={addMovie}>
                    ADD MOVIE TO LIST
                </button>
            )}
        </div>
    );
};

export default MovieDetails;
