import React, { useContext } from "react";
import SplashDisplay from "./components/displays/SplashDisplay";
import AddingDisplay from "./components/displays/AddingDisplay";
import ComparisonDisplay from "./components/displays/ComparisonDisplay";
import FinalDisplay from "./components/displays/FinalDisplay";

import ListContext from "./context/list/listContext";

const App = () => {
    const listContext = useContext(ListContext);

    return (
        <div className="site-container">
            {listContext.state.stage === null && <SplashDisplay />}
            {listContext.state.stage === "adding" && <AddingDisplay />}
            {listContext.state.stage === "comparing" && <ComparisonDisplay />}
            {listContext.state.stage === "final" && (
                <FinalDisplay movie={listContext.state.result} />
            )}
        </div>
    );
};

export default App;
