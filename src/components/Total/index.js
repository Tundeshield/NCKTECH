import React from "react";
import "./index.css";
import Button from "@material-ui/core/Button";

const index = ({ total }) => {
	return (
		<div className="total">
			<div className="total__left">
				<Button
					variant="contained"
					color="primary"
					style={{ padding: "18px", backgroundColor: "#3a69ff" }}
				>
					Complete payment
				</Button>
			</div>
			<div className="total__right">
				<h2>₦{total}</h2>
			</div>
		</div>
	);
};

export default index;
