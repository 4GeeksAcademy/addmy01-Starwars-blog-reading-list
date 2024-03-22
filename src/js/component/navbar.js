import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import img from '../../img/starwarLogo.png'

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="container navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src={img} className="navImage" alt="Star Wars Logo" />
				</span>
			</Link>
			<div className="ml-auto">

				<div className="btn-group">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorite {store.favorite.length}
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorite.map((fav, idx) => (
							<li key={idx}>
								<div className="d-flex justify-content-between">
									<span className="dropdown-item">{fav}</span>
									<span>
										<i className="fas fa-trash-alt ml-2" onClick={() => actions.removeFavorite(idx)}></i>
									</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
