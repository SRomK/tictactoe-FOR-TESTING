//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/game.css";

//import your own components
import App from "../view/app.jsx";

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));



const calculateWinner = (squares) => {
    const winnerLines = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 4, 8],[0, 3, 6],[1, 4, 7],[2, 4, 6],[2, 5, 8]];
}