import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./error-message";
import { coffeeCollection } from "../data/firebase";
import "./coffee.css";

function Coffee(props) {
  const { id, data } = props;
  const { title, review, rating, shopName, tags, datePurchased } = data;

  const ratingString = "☕".repeat(rating);

  const history = useHistory();
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

  const date = datePurchased.toDate();
  const dateString = date.toLocaleDateString();

  return (
    <div className="coffee">
      <div className="coffee__contents">
        <div className="coffee__title">{title}</div>
        <div className="coffee__rating">{ratingString}</div>
        <div className="coffee__copy">From: {shopName}</div>
        <div className="coffee__copy">Date: {dateString}</div>
        <div className="coffee__copy">Review: {review ? review : "No Review Saved"}</div>
        <div className="coffee__copy">Tags: {tags ? tags.join(", ") : "No tags Saved"}</div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="coffee__button" disabled={isDeleting} onClick={deleteCoffee}>
          <Delete />
        </button>
        <button className="coffee__button" onClick={() => history.push(`/edit/${id}`)}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Coffee;
