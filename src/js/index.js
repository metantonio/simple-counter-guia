//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Counter from "./component/counter.jsx";

//Variables that going to pass to components as props
let digitOne = 0;
let digitTwo = 0;

//render your react application
setInterval(() => {
	digitTwo++;
	if (digitTwo > 9) {
		digitTwo = 0;
		digitOne++;
	}
	ReactDOM.render(
		<Counter digitOne={digitOne} digitTwo={digitTwo} />,
		document.querySelector("#app")
	);
}, 1000);
