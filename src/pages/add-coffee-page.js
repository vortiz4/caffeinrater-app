import React from "react";
import { Helmet } from "react-helmet";
import AddCoffee from "../components/add-coffee";

function AddCoffeePage(props) {
	return (
		<main>
			<Helmet>
				<title>Add</title>
			</Helmet>
			<AddCoffee {...props} />
		</main>
	);
}

export default AddCoffeePage;
