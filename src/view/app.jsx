import React from "react";

//include images into your bundle
import "../styles/game.css";
import Game from "../js/component/game.jsx"
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
 
const App = () => {
	return (
		<Game />
	);
};

export default App;