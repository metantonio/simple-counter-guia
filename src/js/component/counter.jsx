import React from "react";
import PropTypes from "prop-types";

const Counter = (props) => {
	return (
		<div className="container counter">
			<div className="container boxes">
				<div className="clock">
					<i class="far fa-clock"></i>
				</div>
				<div className="digit one">{props.digitOne}</div>
				<div className="digit two">{props.digitTwo}</div>
			</div>
		</div>
	);
};

Counter.propTypes = {
	digitOne: PropTypes.string,
	digitTwo: PropTypes.string,
};

export default Counter;
