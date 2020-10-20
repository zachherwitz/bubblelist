import {
    ASSIGN_TWO_MOVIES,
    CLEAR_DISPLAYED_MOVIES,
    CLEAR_SINGLE_MOVIE,
    FETCH_MOVIE,
    FETCH_MOVIES,
    FETCH_POPULAR,
    FETCH_SIMILAR,
} from "../types";

export default (state, action) => {
    switch (action.type) {
        /**
         * Populate state's 'popular' array with results
         */
        case FETCH_POPULAR:
            return {
                ...state,
                popular: action.payload,
            };

        /**
         * If there are similar results, populate state's 'similar' array with results
         * Otherwise, populate state's 'similar' array with its 'popular' array
         */
        case FETCH_SIMILAR:
            if (!action.payload) {
                return {
                    ...state,
                    similar: state.popular,
                };
            } else {
                return {
                    ...state,
                    similar: action.payload,
                };
            }

        /**
         * Populate state's 'displayed' array with results of query title search
         */
        case FETCH_MOVIES:
            return {
                ...state,
                displayed: action.payload,
            };

        /**
         * Populate state's 'sigle' property with result of specific movie id lookup
         */
        case FETCH_MOVIE:
            return {
                ...state,
                single: action.payload,
            };

        /**
         * Populate state's 'comparison' property with two random movies from the user's list
         */
        case ASSIGN_TWO_MOVIES:
            return {
                ...state,
                comparison: action.payload,
            };

        /**
         * Clear state's 'single' property, removing the movieDetails modal
         */
        case CLEAR_SINGLE_MOVIE:
            return {
                ...state,
                single: null,
            };

        /**
         * Clear entire state's 'displayed' array, removing all search results
         */
        case CLEAR_DISPLAYED_MOVIES:
            return {
                ...state,
                displayed: null,
            };

        default:
            return state;
    }
};
