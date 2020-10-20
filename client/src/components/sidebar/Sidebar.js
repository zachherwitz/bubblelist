// Import dependencies, useContext Hook.
import React, { useContext } from "react";

// Import Components
import ListItem from "./ListItem";

// Import Context
import ListContext from "../../context/list/listContext";

/**
 * Component that will display the user's list as it grows during the 'adding' stage
 */
const Sidebar = () => {
    const listContext = useContext(ListContext);

    return (
        <div className="sidebar">
            <h2>YOUR LIST</h2>
            {listContext.state.stage === "adding" && (
                <p>
                    Pick {7 - listContext.state.initialList.length} more
                    {7 - listContext.state.initialList.length === 1
                        ? " movie"
                        : " movies"}
                    !
                </p>
            )}
            {listContext.state.initialList &&
                listContext.state.initialList.map((movie, index) => {
                    return <ListItem key={index} movie={movie} />;
                })}
        </div>
    );
};

export default Sidebar;
