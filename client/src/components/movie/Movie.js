// Import Dependencies and useContext Hook
import React, { useContext } from "react";

// Import Context
import MovieContext from "../../context/movie/movieContext";

/**
 * Presentational component that will display a search result
 * {movie} - movie item containing specific movie information
 * {size} - size of image to display, based on endpoint
 */
const Movie = ({ movie, size }) => {
    const movieContext = useContext(MovieContext);

    // Destructuring elements from movie prop
    const {
        poster_path: poster,
        id,
        original_language: lang,
        title,
        release_date: date,
    } = movie;

    /**
     * Use movieID from props to fetch movie details from API endpoint
     */
    const examineResult = async () => {
        movieContext.fetchMovie(id);
    };

    return (
        <li className="movie" id="movie" onClick={examineResult}>
            <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w${size}/${poster}`}
                alt={title}
            />
            <div className="movie-overlay" id="movie-overlay">
                <div className="title-blur">
                    <p>{title}</p>
                </div>
            </div>
        </li>
    );
};

export default Movie;
