import { useState, useEffect } from "react";
import { accountsCollection } from "../data/firebase";

function useAllCoffee(userId, sortField) {
  const [coffee, setCoffee] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setCoffee(docs);
    };

    const onError = (error) => {
      setIsLoading(false);
      setErrorMessage("There was a problem saving your coffee drink please try again.");
      console.error(error);
    };

    const unsubscribe = accountsCollection
      .doc(userId)
      .collection("coffee")
      .orderBy(sortField, "desc")
      .onSnapshot(onNext, onError);

    return unsubscribe;
  }, [userId, sortField]);

  return [coffee, isLoading, errorMessage];
}

export default useAllCoffee;
