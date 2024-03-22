import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePerson = props => {
	const params = useParams();
	const { actions } = useContext(Context);
	const [detail, setDetail] = useState();

	useEffect(() => {
		actions.getPerson(params.uid)
			.then(detailPerson => setDetail(detailPerson));
	}, [params.uid]);
	console.log(detail)
	return (
		detail && <div className="container">
			<div className="row">
				<div className="col-6">
					<img className="img-fluid" src="https://dummyimage.com/600x400/adadad/ffffff.jpg" />
				</div>
				<div className="col-6">
					<h1>{detail.properties.name}</h1>
					<p>{detail.description}</p>
				</div>
			</div>
			<hr className="border border-danger" />
			<div className="d-flex justify-content-between align-items-center">
					<p><b>Birth year:</b>{detail.properties.birth_year}</p>
					<p><b>Eye Color:</b>{detail.eye_color}</p>
					<p><b>Gender:</b>{detail.gender}</p>
					<p><b>Hair Color:</b>{detail.hair_color}</p>
					<p><b>weight:</b>{detail.mass}</p>
					<p><b>Skin Color:</b>{detail.skin_color}</p>

				</div>
			<div className="row"></div>
		</div> || <div className="spinner-border text-success mx-auto" role="status">
			<span className="visually-hidden">Loading...</span>
		</div>
	);
}