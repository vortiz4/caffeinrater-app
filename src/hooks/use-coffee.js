import { useState, useEffect } from "react";
import { coffeeCollection } from "../data/firebase";

function useCoffee(id) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [coffeeData, setCoffeeData] = useState(null);

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

  return [coffeeData, isLoading, errorMessage];
}

export default useCoffee;
