import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./coffee-form.css";

function CoffeeForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;

  if (initialState.title === undefined) initialState.title = "";
  if (initialState.shopName === undefined) initialState.shopName = "";
  if (initialState.rating === undefined) initialState.rating = 3;
  if (initialState.review === undefined) initialState.review = "";
  if (initialState.tags === undefined) initialState.tags = [];

  const [title, setTitle] = useState(initialState.title);
  const [shopName, setShopName] = useState(initialState.shopName);
  const [rating, setRating] = useState(initialState.rating);
  const [review, setReview] = useState(initialState.review);
  const [tags, setTags] = useState(initialState.tags.join(", "));
  const [errorMessage, setErrorMessage] = useState("");

  // const onAddNote = (event) => {
  // 	event.preventDefault();
  // 	if (title === "") {
  // 		setErrorMsgTitle("Please Enter a Title");
  // 		return;
  // 	}
  // 	if (entry === "") {
  // 		setErrorMsgEntry("Please Enter a Note");
  // 		return;
  // 	}
  // 	setItems([...items, { title: title, note: entry }]);
  // 	setTitle("");
  // 	setEntry("");
  // };

  // const onTitleChange = (event) => {
  // 	setTitle(event.target.value);
  // 	if (title !== "") {
  // 		setErrorMsgTitle("");
  // 	}
  // };

  // const onEntryChange = (event) => {
  // 	setEntry(event.target.value);
  // 	if (title !== "") {
  // 		setErrorMsgEntry("");
  // 	}
  // };

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onRatingChange = (event) => {
    setRating(event.target.value);
  };
  const onShopNameChange = (event) => {
    setShopName(event.target.value);
  };

  const onReviewChange = (event) => {
    setReview(event.target.value);
  };

  const onTagsChange = (event) => {
    setTags(event.target.value);
  };

  const onCoffeeSumbit = async (event) => {
    event.preventDefault();

    const parts = tags.split(",");
    const partsTrimmed = parts.map((string) => string.trim());
    const filteredParts = partsTrimmed.filter((string) => {
      if (string === "") {
        return false;
      } else {
        return true;
      }
    });

    onSubmit(title, rating, shopName, review, filteredParts);
  };

  return (
    <form className="coffee-form" onSubmit={onCoffeeSumbit}>
      <h2 className="coffee-form__title">Coffee Drink Info</h2>
      {message && <p className="coffee-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="coffee-form__controls" disabled={isSaving}>
        <label className="coffee-form__label">Coffee Drink: </label>
        <input
          className="coffee-form__input"
          type="text"
          value={title}
          placeholder="Please enter coffee drink here"
          onChange={onTitleChange}
        />
        <label className="coffee-form__label">Purchased at: </label>
        <input
          className="coffee-form__input"
          type="text"
          value={shopName}
          placeholder="Please enter the coffee shop here"
          onChange={onShopNameChange}
        />
        <label className="coffee-form__label">Rating:</label>
        <input
          min="1"
          max="5"
          className="coffee-form__input"
          type="number"
          value={rating}
          onChange={onRatingChange}
        />
        <label className="coffee-form__label">Review: </label>
        <input
          className="coffee-form__input"
          type="text"
          value={review}
          placeholder="Please enter your review here"
          onChange={onReviewChange}
        />
        <label className="coffee-form__label">Tags*: </label>
        <input
          className="coffee-form__input"
          type="text"
          placeholder="Tags are optional"
          value={tags}
          onChange={onTagsChange}
        />
        <p className="tag__note">*Please separate each tag with a comma</p>
        <input
          className="coffee-form__submit"
          type="submit"
          value={isSaving ? "Saving..." : "Save"}
        />
      </fieldset>
    </form>
  );
}

export default CoffeeForm;
