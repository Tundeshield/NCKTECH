import React from "react";
import "./index.css";
import Card from "../../utulities/images/creditcard.JPG";
import Visa from "../../utulities/images/visa.jpg";
import Paypal from "../../utulities/images/paypal.png";
import Discover from "../../utulities/images/discover.png";
import PaymentForm from "../Form";
import Pricing from "../Pricing";
import Total from "../Total";

const Body = ({ subtotal, tax, promotion, total }) => {
	return (
		<div className="body">
			<hr width="90%" color="whiteSmoke" />
			<div className="body__body">
				<div className="body__left">
					<h2>Payment Information</h2>
					<p>Choose your method of payment</p>
					<img src={Card} alt="" />
				</div>
				<div className="body__right">
					<div className="body__rightTop">
						<div className="body__topRight"></div>

						<div className="body__rightTopLeft">
							<img src={Visa} alt="" />
							<img src={Discover} alt="" />
						</div>
						<div className="body__rightTopRight">
							<img src={Paypal} alt="" />
						</div>
					</div>
					<div className="payment__form">
						<PaymentForm />
					</div>
				</div>
			</div>
			<hr width="90%" color="whiteSmoke" />
			<div className="body__bottom">
				<Pricing title="Subtotal" price={subtotal} />
				<Pricing title="Estimated TAX" price={tax} />
				<Pricing title="Promotional Code: Z4KXLM9A" price={promotion} />
			</div>
			<hr width="90%" color="whiteSmoke" />
			<div className="body__total">
				<Total total={total} />
			</div>
		</div>
	);
};

export default Body;
