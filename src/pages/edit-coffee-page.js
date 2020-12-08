import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import EditCoffee from "../components/edit-coffee";

function EditCoffeePage(props) {
	const { id } = useParams();

	return (
		<main>
			<Helmet>
				<title>Edit</title>
			</Helmet>
			<EditCoffee id={id} {...props} />
		</main>
	);
}

export default EditCoffeePage;
