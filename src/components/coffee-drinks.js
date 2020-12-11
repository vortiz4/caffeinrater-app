import React, { useState } from "react";
import useAllCoffee from "../hooks/use-all-coffee";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import Coffee from "./coffee";
// import { accountsCollection } from "react";
import "./coffee-drinks.css";

function CoffeeDrinks(props) {
  const userId = props.user.uid;
  const [sort, setSort] = useState("rating");
  const [coffee, isLoading, errorMessage] = useAllCoffee(userId, sort);

  const onSortSubmit = (event) => {
    setSort(event.target.value);
  };

  return (
    <div className="coffee-container">
      <h1 className="main_title">☕CaffeinRater☕</h1>
      <form>
        <label>
          Sort by:
          <select className="select_css" onChange={onSortSubmit} value={sort}>
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
