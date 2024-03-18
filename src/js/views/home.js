import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/CharacterCard";
import { StarshipCard } from "../component/StarshipCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<div className="container mt-5">
			<h2 className="title">Characters</h2>
			<div className="d-flex m-1 flex-nowrap overflow-scroll">
				{store.people.map((person) => (
					<CharacterCard key={person.uid} person={person} />
				))}
			</div>			
			<h2 className="title">Starships</h2>
			<div className="d-flex m-1 flex-nowrap overflow-scroll">
				{store.starships.map((starship) => (
					<StarshipCard key={starship.uid} star={starship} />
				))}
			</div>
		</div> || <div className="spinner-border text-success mx-auto" role="status">
			<span className="visually-hidden">Loading...</span>
		</div>
		
	);
};
