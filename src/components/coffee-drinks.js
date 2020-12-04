import React from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import useAllCoffee from "../hooks/use-all-coffee";
import Coffee from "./coffee";
import "./coffee-drinks.css";

function CoffeeDrinks() {
  const [coffee, isLoading, errorMessage] = useAllCoffee();

  return (
    <div className="coffee-container">
      <h1 className="main_title">☕CaffeinRater☕</h1>
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
