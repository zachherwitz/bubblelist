// Import Dependencies, useEffect, useContext, and useState Hooks
import React, { useEffect, useContext, useState } from "react";

// Import Components
import Movie from "./Movie";

// Import Context
import MovieContext from "../../context/movie/movieContext";
import ListContext from "../../context/list/listContext";

/**
 * Component that will display query results based on the list's stage
 * Splash: Display popular films, with the middle two using larger images than the rest
 * Adding: First display search results if they exist, next display similar movies,
 * and if there are neither, display popular movies
 * Comparing: Display the user's list as it shrinks
 */
const MoviesContainer = () => {
    const movieContext = useContext(MovieContext);
    const listContext = useContext(ListContext);
    const [containerState, setContainerState] = useState("");

    /**
     * Switch the component's local state to reflect the list's state.
     * This changes the css className as well.
     * Updates every time the list's stage changes [listContext.state.stage]
     */
    useEffect(() => {
        if (listContext.state.stage === null) {
            movieContext.fetchPopular();
            setContainerState("splash");
        } else if (listContext.state.stage === "adding") {
            setContainerState("adding");
        } else if (listContext.state.stage === "comparing") {
            setContainerState("comparing");
        }
    }, [listContext.state.stage]);

    return (
        <ul className={`movies-container ${containerState}`}>
            {containerState === "splash" &&
                movieContext.state.popular
                    .map((movie, index) => {
                        return index === 2 || index === 3 ? (
                            <Movie key={index} size="185" movie={movie} />
                        ) : (
                            <Movie key={index} size="154" movie={movie} />
                        );
                    })
                    .slice(0, 6)}
            {containerState === "adding" && movieContext.state.displayed
                ? movieContext.state.displayed.map((movie, index) => {
                      return <Movie key={index} size="185" movie={movie} />;
                  })
                : containerState === "adding" &&
                  movieContext.state.similar.map((movie, index) => {
                      return <Movie key={index} size="185" movie={movie} />;
                  })}
            {containerState === "adding" &&
                !movieContext.state.similar[0] &&
                movieContext.state.popular.map((movie, index) => {
                    return <Movie key={index} size="185" movie={movie} />;
                })}
            {containerState === "comparing" &&
                listContext.state.initialList.map((movie, index) => {
                    return <Movie key={index} size="154" movie={movie} />;
                })}
        </ul>
    );
};

export default MoviesContainer;
