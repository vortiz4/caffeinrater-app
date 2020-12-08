import React from "react";
import { Helmet } from "react-helmet";
import CoffeeDrinks from "../components/coffee-drinks";

function CoffeePage(props) {
  return (
    <main>
      <Helmet>
        <title>CaffeinRater</title>
      </Helmet>
      <CoffeeDrinks {...props} />
    </main>
  );
}

export default CoffeePage;
