import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="container navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="../img/starwarLogo.png" /></span>
			</Link>
			<div className="ml-auto">
				<div class="btn-group">
					<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorite {store.favorite.length}
					</button>
					<ul class="dropdown-menu dropdown-menu-end">
						{store.favorite.map((fav, idx) => 
						<li>
							<a class="dropdown-item" href="#">{fav}</a>
							<span onClick={() => actions.removeFavorite(idx)}>
								<fa-solid fa-trash-can/>
							</span>
						</li>)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
