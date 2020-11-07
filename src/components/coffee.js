import React, { useState } from "react";
import { Delete } from "@material-ui/icons";
// import { useHistory } from "react-router-dom";
import ErrorMessage from "./error-message";
import { coffeeCollection } from "../data/firebase";
import "./coffee.css";

function Coffee(props) {
	const { id, data } = props;
	const { title, review, rating, shopName, tags } = data;

	const ratingString = "☕".repeat(rating);

	const [isDeleting, setIsDeleting] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const deleteCoffee = async () => {
		setIsDeleting(true);
		setErrorMessage("");
		try {
			const docRef = coffeeCollection.doc(id);
			await docRef.delete();
		} catch (error) {
			console.error(error);
			setErrorMessage("Something went wrong while deleting. Please try again.");
			setIsDeleting(false);
		}
	};

	return (
		<div className="coffee">
			<div className="coffee__contents">
				<div className="coffee__title">{title}</div>
				<div className="coffee__rating">{ratingString}</div>
				<div className="coffee__review">From: {shopName}</div>
				<div className="coffee__review">
					{/* Date: {datePurchased ? datePurchased : "Date not entered"} */}
				</div>
				<div className="coffee__review">{review ? review : "No Review Saved"}</div>
				<div className="coffee__review">Tags: {tags ? tags : "No tags Saved"}</div>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
			</div>
			<div>
				<button className="movie__button" disabled={isDeleting} onClick={deleteCoffee}>
					<Delete />
				</button>
			</div>
		</div>
	);
}

export default Coffee;
