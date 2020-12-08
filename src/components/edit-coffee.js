import React from "react";
import useCoffee from "../hooks/use-coffee";
import useSaveCoffee from "../hooks/use-save-coffee";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import CoffeeForm from "./coffee-form";
import "./edit-coffee.css";

function EditCoffee(props) {
  const coffeeId = props.id;
  const userId = props.user.uid;

  const [coffeeData, isLoading, errorMessage] = useCoffee(userId, coffeeId);
  const [save, isSaving, formMessage] = useSaveCoffee();

  const onCoffeeSubmit = async (title, rating, shopName, review, tags) => {
    save({title, rating, shopName, review, tags}, userId, coffeeId);
  };

  return (
    <div className="edit-container">
      <h2>Edit Coffee</h2>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      {coffeeData && (
        <CoffeeForm
          initialState={coffeeData}
          onSubmit={onCoffeeSubmit}
          isSaving={isSaving}
          message={formMessage}
        />
      )}
    </div>
  );
}

export default EditCoffee;
