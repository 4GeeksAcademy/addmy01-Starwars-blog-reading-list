import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleStarship = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<React.Fragment>
            {detail !== undefined ? (
				
                <div className="card-body">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.wwxK07x0Umfnh0l-nrjxjgHaDg&pid=Api&P=0&h=220" className="card-img-top" alt="..." />
					<h1>ellelelelel {params.uid}</h1>
					<h5 className="card-title">{person.name}</h5>
					<p className="card-text">Gender: {detail.properties.gender}</p>
					<p className="card-text">Eye Color: {detail.properties.eye_color}</p>
					<p className="card-text">Hair Color: {detail.properties.hair_color}</p>
					<Link to={"/"} className="btn btn-primary">Go Back</Link>
                </div>
            ) 
            : null}
        </React.Fragment>
	);
}