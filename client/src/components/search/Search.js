// Import Dependencies, useContext, and useState Hooks.
import React, { useState, useContext } from "react";

// Import Context
import MovieContext from "../../context/movie/movieContext";
import ListContext from "../../context/list/listContext";

/**
 * Functional component that updates and sends its local state as a query to the endpoint
 */
const Search = () => {
    const [query, setQuery] = useState("");
    const movieContext = useContext(MovieContext);
    const listContext = useContext(ListContext);

    /**
     * @param (event)
     * Updates local state based on user input/change.
     */
    const handleInput = e => {
        setQuery(e.target.value);
    };

    /**
     * @param (event)
     * Passes the local state to the movieContext to search for results via API endpoint.
     * If no list exists, create a new list.
     */
    const handleSearch = e => {
        e.preventDefault();
        movieContext.fetchMovies(query);
        if (!listContext.state.initialList) {
            listContext.createList();
        }
        setQuery("");
    };

    return (
        <form className="search-form" onSubmit={handleSearch}>
            <input
                type="text"
                className="search-bar"
                placeholder="I feel like watching..."
                value={query}
                onChange={handleInput}
            />
        </form>
    );
};

export default Search;
