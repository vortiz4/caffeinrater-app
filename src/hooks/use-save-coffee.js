import { useState } from "react";
import { accountsCollection } from "../data/firebase";

function useSaveCoffee() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const save = async (coffeeData, userId, coffeeId) => {
    setIsSaving(true);
    setFormMessage("");

    try {
      if (coffeeId === undefined) {
        await accountsCollection.doc(userId).collection("coffee").add(coffeeData);
      } else {
        await accountsCollection.doc(userId).collection("coffee").doc(coffeeId).update(coffeeData);
      }
      setFormMessage("Saved successfully!");
    } catch (error) {
      setFormMessage("Something went wrong editing this drink. Please try again.");
      console.error(error);
    }

    setIsSaving(false);
  };

  return [save, isSaving, formMessage];
}

export default useSaveCoffee;
