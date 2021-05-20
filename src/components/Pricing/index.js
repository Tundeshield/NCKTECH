import React from "react";
import "./index.css";

const index = ({ title, price }) => {
	return (
		<div className="pricing">
			<h3>{title}</h3>
			<h3>₦{price}</h3>
		</div>
	);
};

export default index;
