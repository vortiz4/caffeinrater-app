import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "./index.css";
import { accountsCollection } from "./data/firebase";

ReactDOM.render(<App />, document.getElementById("root"));

console.log(process.env);

// async function getAllAccounts() {
//   try {
//     const snapshot = await accountsCollection.get();
//     snapshot.forEach((doc) => {
//       console.log(doc.id);
//       console.log(doc.data());
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function getAccountsCoffee() {
//   try {
//     const snapshot = await accountsCollection
//       .doc("FZYyd6s4c9PAVE5uj2GcnoOWYQr1")
//       .collection("coffee")
//       .get();
//     snapshot.forEach((doc) => {
//       console.log(doc.id);
//       console.log(doc.data());
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// getAccountsCoffee();
