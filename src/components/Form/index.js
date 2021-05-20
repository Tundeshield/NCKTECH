import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

export default function PaymentForm() {
	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cardName"
						label="Credit card number"
						fullWidth
						autoComplete="cc-name"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cardNumber"
						label="Expiration date"
						fullWidth
						autoComplete="cc-number"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="expDate"
						label="Security code"
						fullWidth
						autoComplete="cc-exp"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cvv"
						label="Postal code"
						helperText=""
						fullWidth
						autoComplete="cc-csc"
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={<Checkbox color="primary" name="saveCard" value="yes" />}
						label="Use this card for next time purchase"
					/>
				</Grid>
				<Button
					variant="contained"
					color="primary"
					style={{ width: "100%", padding: "18px", backgroundColor: "#3a69ff" }}
				>
					Add card
				</Button>
			</Grid>
		</React.Fragment>
	);
}
