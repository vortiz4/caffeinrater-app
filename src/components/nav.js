import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
	return (
		<nav className="nav">
			<Link className="nav__link" to="/">
				All Coffee Drinks
			</Link>{" "}
			|{" "}
			<Link className="nav__link" to="/add">
				Add Coffee
			</Link>
		</nav>
	);
}

export default Nav;
