import { useState, useEffect } from "react";
import { coffeeCollection } from "../data/firebase";

function useAllCoffee() {
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
    const unsubscribe = coffeeCollection.onSnapshot(onNext, onError);

    return unsubscribe;
  }, []);

  return [coffee, isLoading, errorMessage];
}

export default useAllCoffee;
