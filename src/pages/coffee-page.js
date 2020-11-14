import React from "react";
import { Helmet } from "react-helmet";
import CoffeeDrinks from "../components/coffee-drinks";

function CoffeePage() {
  return (
    <main>
      <Helmet>
        <title>CaffeinRater</title>
      </Helmet>
      <CoffeeDrinks />
    </main>
  );
}

export default CoffeePage;
