import React from "react";
import "./index.css";
import Avatar from "@material-ui/core/Avatar";
import image from "../../utulities/images/avatar.JPG";

const index = () => {
	return (
		<div className="header">
			<div className="header__left"></div>
			<div className="header__right">
				<ul>
					<li>Trips</li>
					<li>Recently Viewed</li>
					<li>Bookings</li>
				</ul>
				<div className="header__avatar">
					<Avatar src={image} />
				</div>
			</div>
		</div>
	);
};

export default index;
