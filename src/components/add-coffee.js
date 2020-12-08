import React from "react";
import useSaveCoffee from "../hooks/use-save-coffee";
import CoffeeForm from "./coffee-form";
import { firebase } from "../data/firebase";
import "./add-coffee.css";

function AddCoffee(props) {
  const userId = props.user.uid;
  const [save, isSaving, formMessage] = useSaveCoffee();

  const onCoffeeSumbit = async (title, rating, shopName, review, tags) => {
    save({
      title,
      rating,
      shopName,
      review,
      tags,
      datePurchased: firebase.firestore.Timestamp.now(),
    }, userId);
  };

  return (
    <div className="add-container">
      <h1>Add Drink</h1>
      <CoffeeForm onSubmit={onCoffeeSumbit} isSaving={isSaving} message={formMessage} />
    </div>
  );
}

export default AddCoffee;
