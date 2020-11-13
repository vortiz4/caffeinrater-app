import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCoffeePage from "../pages/add-coffee-page";
import EditCoffeePage from "../pages/edit-coffee-page";
import CoffeePage from "../pages/coffee-page";
import NotFoundPage from "../pages/not-found-page";
import Nav from "./nav";

/**
 * The app is responsible for routing and loading the appropriate page within the application.
 */
function App() {
	return (
		<BrowserRouter>
			<Nav />

			<Switch>
				<Route path="/" exact>
					<CoffeePage />
				</Route>

				<Route path="/add">
					<AddCoffeePage />
				</Route>

				<Route path="/edit/:id">
					<EditCoffeePage />
				</Route>

				<Route path="*">
					<NotFoundPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;

// loadSampleData();
