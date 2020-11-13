import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import EditCoffee from "../components/edit-coffee";

function EditCoffeePage() {
	const { id } = useParams();

	return (
		<main>
			<Helmet>
				<title>Edit</title>
			</Helmet>
			<EditCoffee id={id} />
		</main>
	);
}

export default EditCoffeePage;
