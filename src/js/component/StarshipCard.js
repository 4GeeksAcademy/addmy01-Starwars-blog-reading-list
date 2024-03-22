import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const StarshipCard = ({ star }) => {
	const [isClicked, setIsClicked] = useState(false);
	const { actions } = useContext(Context);
	const [detail, setDetail] = useState();
	const favoriteButton = () => {
		setIsClicked(!isClicked);
		actions.addFavorite(detail.properties.name);
	}
	useEffect(() => {
		actions.getStars(star.uid)
			.then(detailStar => setDetail(detailStar));
	}, [star.uid]);

	return (
		// <React.Fragment>
		//     {detail !== undefined ? (
		<div className="card" style={{ minWidth: "18rem" }}>

			<img src="https://tse2.mm.bing.net/th?id=OIP.sM7AT4K6QI5roQEi_zXGQwHaEK&pid=Api&P=0&h=220" className="card-img-top" alt="Starship" />
			<div className="card-body">

				<h5 className="card-title">name</h5>
				<p className="card-text">Model: </p>
				<p className="card-text">Manufacturer:</p>
				<p className="card-text">Starship Class: </p>
			</div>
			<div className="card-footer d-flex justify-content-between align-items-center">
				<Link to={"/starship/" + star.uid} className="btn btn-primary">More Info</Link>
				<span
					className={isClicked ? "fa-regular fa-heart glow" : "fa-regular fa-heart clicked"}
					onClick={favoriteButton}
				/>
			</div>


		</div>
	);
};
