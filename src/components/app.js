import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CoffeePage from "../pages/coffee-page";
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
			</Switch>
		</BrowserRouter>
	);
}

export default App;

// loadSampleData();
