import React, { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import { coffeeCollection } from "../data/firebase";
import Coffee from "./coffee";
import "./coffee-drinks.css";

function CoffeeDrinks() {
	const [coffee, setCoffee] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		setIsLoading(true);
		const onNext = (snapshot) => {
			setIsLoading(false);
			const docs = snapshot.docs;
			setCoffee(docs);
		};
		const onError = (error) => {
			setErrorMessage("There was a problem loading your coffee drinks please try again.");
			console.error(error);
		};
		const unsubscribe = coffeeCollection.onSnapshot(onNext, onError);
		return unsubscribe;
	}, []);

	return (
		<div className="coffee-container">
			<h1>Coffee Drinks</h1>
			{isLoading && (
				<LoadingSpinner
					size="50px"
					spinnerColor="white"
					backgroundColor="rgb(255, 255, 255, 0.2)"
				/>
			)}
			{errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
			<ul className="coffee-list">
				{coffee.map((coffeeDoc) => {
					const coffeeId = coffeeDoc.id;
					const coffeeData = coffeeDoc.data();
					return (
						<li key={coffeeId}>
							<Coffee id={coffeeId} data={coffeeData} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default CoffeeDrinks;
