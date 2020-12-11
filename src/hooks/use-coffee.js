import { useState, useEffect } from "react";
import { accountsCollection } from "../data/firebase";

function useCoffee(userId, coffeeId) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [coffeeData, setCoffeeData] = useState(null);

  useEffect(() => {
    async function getCoffee() {
      setIsLoading(true);

      try {
        const coffeeSnapshot = await accountsCollection
          .doc(userId)
          .collection("coffee")
          .doc(coffeeId)
          .get();

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
  }, [userId, coffeeId]);

  return [coffeeData, isLoading, errorMessage];
}

export default useCoffee;
