import React, { useState, useEffect } from "react";
import "./App.css";
import PaymentPage from "../Pages/PaymentPage";
function App() {
	const [subtotal, setSubtotal] = useState(2497.0);
	const [tax, setTax] = useState(119.64);
	const [promotion, setPromotion] = useState(-60);
	const [total, setTotal] = useState(subtotal + tax + promotion);

	return (
		<div className="App">
			<PaymentPage
				subtotal={subtotal}
				tax={tax}
				promotion={promotion}
				total={total}
			/>
		</div>
	);
}

export default App;
