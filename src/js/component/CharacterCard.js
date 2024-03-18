import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CharacterCard = ({ person }) => {
    const [isClicked, setIsClicked] = useState(false);
    const { actions, store } = useContext(Context);
    const [detail, setDetail] = useState();
    const favoriteButton = () => {
        setIsClicked(!isClicked);
        actions.addFavorite(detail.properties.name);
    }

    useEffect(() => {
        actions.getPerson(person.uid)
            .then(detailPerson => setDetail(detailPerson));
    }, [actions, person.uid]);

    return (
        <React.Fragment>
            {detail !== undefined ? (
                <div className="card" style={{ minWidth: "18rem" }}>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.wwxK07x0Umfnh0l-nrjxjgHaDg&pid=Api&P=0&h=220" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">Gender: {detail.properties.gender}</p>
                        <p className="card-text">Eye Color: {detail.properties.eye_color}</p>
                        <p className="card-text">Hair Color: {detail.properties.hair_color}</p>
                    </div>
                    <div className="card-footer">
                        <Link to={"/people/" + person.uid} className="btn btn-primary">More Info</Link>
                        <button
                            className={isClicked ? "fa-brands fa-jedi-order clicked" : "fa-brands fa-jedi-order glow"}
                            onClick={favoriteButton}
                        />
                    </div>
                </div>
                // </div>
            )
                : null}
        </React.Fragment>
    )
}
