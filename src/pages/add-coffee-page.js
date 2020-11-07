import React from "react";
import { Helmet } from "react-helmet";
import AddCoffee from "../components/add-coffee";

function AddCoffeePage() {
	return (
		<main>
			<Helmet>
				<title>Add</title>
			</Helmet>
			<AddCoffee />
		</main>
	);
}

export default AddCoffeePage;
