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
	}, [actions, params.uid]);
	console.log(detail)
	return (
		params.uid && detail && <div className="container">
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
			
			<div className="row"></div>
		</div> || <div className="spinner-border text-success mx-auto" role="status">
			<span className="visually-hidden">Loading...</span>
		</div>
	);
}