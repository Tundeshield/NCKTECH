import React from "react";
import Header from "../../components/Header";
import Body from "../../components/Body";

const index = ({ subtotal, tax, promotion, total }) => {
	return (
		<div>
			<Header />
			<Body subtotal={subtotal} tax={tax} promotion={promotion} total={total} />
		</div>
	);
};

export default index;
