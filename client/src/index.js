import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MovieState from "./context/movie/MovieState";
import ListState from "./context/list/ListState";

ReactDOM.render(
    <MovieState>
        <ListState>
            <App />
        </ListState>
    </MovieState>,
    document.getElementById("root")
);
