import React, { useState } from "react";
import { coffeeCollection } from "../data/firebase";
import useCoffee from "../hooks/use-coffee";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import CoffeeForm from "./coffee-form";
import "./edit-coffee.css";

function EditCoffee(props) {
  const { id } = props;

  const [coffeeData, isLoading, errorMessage] = useCoffee(id);

  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const onCoffeeSubmit = async (title, rating, shopName, review, tags) => {
    setIsSaving(true);
    setFormMessage("");

    try {
      await coffeeCollection.doc(id).update({
        title,
        rating,
        shopName,
        review,
        tags,
      });
      setFormMessage("Saved successfully!");
    } catch (error) {
      setFormMessage("Something went wrong editing this drink. Please try again.");
      console.error(error);
    }

    setIsSaving(false);
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
