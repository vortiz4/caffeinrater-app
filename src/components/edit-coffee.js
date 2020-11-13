import React, { useState, useEffect } from "react";
import { coffeeCollection } from "../data/firebase";
import "./edit-coffee.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import CoffeeForm from "./coffee-form";

function EditCoffee(props) {
  const { id } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [coffeeData, setCoffeeData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    // Retrival and error
    async function getCoffee() {
      setIsLoading(true);
      try {
        const coffeeSnapshot = await coffeeCollection.doc(id).get();

        if (!coffeeSnapshot.exists) {
          throw new Error("No such drink exists!");
        }

        const data = coffeeSnapshot.data();
        setCoffeeData(data);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again.");
        console.error(error);
      }
      setIsLoading(false);
    }

    getCoffee();
  }, [id]);

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
