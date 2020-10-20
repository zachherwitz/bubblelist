import {
    CREATE_LIST,
    ADD_TO_LIST,
    ACTIVATE_LIST,
    REMOVE_FROM_LIST,
    SELECT_FINAL_MOVIE,
} from "../types";

export default (state, action) => {
    switch (action.type) {
        /**
         * Set a new List item to the current state
         */
        case CREATE_LIST:
            return action.payload;

        /**
         * Set the list to a new list without a specific movie
         */
        case REMOVE_FROM_LIST:
            return { ...state, initialList: action.payload };

        /**
         * Change list stage to 'comparing'
         */
        case ACTIVATE_LIST:
            return { ...state, stage: "comparing" };

        /**
         * If the current stage is 'adding', add the movie to the list
         * If the current stage is not 'adding', create a new array and set
         * its initial [0] value to the specific moviemovie
         */
        case ADD_TO_LIST:
            if (state.stage === "adding") {
                return {
                    ...state,
                    initialList: [...state.initialList, action.payload],
                };
            } else {
                return {
                    ...state,
                    initialList: [action.payload],
                };
            }

        /**
         * Set the list's stage to 'final' and set the list's 'result'
         * property as the last remaining movie
         */
        case SELECT_FINAL_MOVIE:
            return {
                ...state,
                stage: "final",
                result: action.payload,
            };

        default:
            return state;
    }
};
