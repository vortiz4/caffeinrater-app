import React, { useState } from "react";
import useAllCoffee from "../hooks/use-all-coffee";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import Coffee from "./coffee";
// import { accountsCollection } from "react";
import "./coffee-drinks.css";

function CoffeeDrinks(props) {
  const userId = props.user.uid;
  const [coffee, isLoading, errorMessage] = useAllCoffee(userId, "datePurchased");
  const [sort, setSort] = useState();

  const onSortChange = () => {
    console.log("sort");
    // sort({ value: "datePurchased" });
  };

  const onSortSubmit = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="coffee-container">
      <h1 className="main_title">☕CaffeinRater☕</h1>
      <form onSubmit={onSortSubmit}>
        <label>
          Sort by:
          <select onChange={onSortChange}>
            <option value="datePurchased">Recent</option>
            <option value="rating">Highest Rating</option>
          </select>
        </label>
      </form>
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
              <Coffee id={coffeeId} data={coffeeData} userId={userId} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CoffeeDrinks;
