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
            <div className="info">
                <h1>{title}</h1>
                <h2>{tagline}</h2>
                <h3>Runtime: {runtime} min</h3>
                <h3>{overview}</h3>
                <ul>
                    {genres &&
                        genres.map((genre, index) => {
                            return <li key={index}>{genre.name}</li>;
                        })}
                </ul>
                {homepage && (
                    <a href={homepage} target="_blank">
                        <h4>Watch Now!</h4>
                    </a>
                )}
                <div className="vote">
                    <h4>Vote Avg. {vote_average}</h4>
                    <h4>Vote Count {vote_count}</h4>
                </div>
            </div>
            <img
                src={"https://image.tmdb.org/t/p/w342/" + poster}
                alt={title}
            />
            <button onClick={addMovie}>Add to List</button>
        </div>
    );
};

export default MovieDetails;
