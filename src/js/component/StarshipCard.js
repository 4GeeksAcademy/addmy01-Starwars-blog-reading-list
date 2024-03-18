import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const StarshipCard = ({ star }) => {
    const { actions } = useContext(Context);
    const [detail, setDetail] = useState();

    useEffect(() => {
        actions.getStars(star.uid)
            .then(detailStar => setDetail(detailStar));
    }, [actions, star.uid]);

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
                        {/* <Link to={"/Starships/" + star.uid} className="btn btn-primary">More Info</Link> */}
                    </div>


                    {/* <img src="https://tse2.mm.bing.net/th?id=OIP.sM7AT4K6QI5roQEi_zXGQwHaEK&pid=Api&P=0&h=220" className="card-img-top" alt="Starship" />
                    <div className="card-body">
                    
                        <h5 className="card-title">{star.name}</h5>
                        <p className="card-text">Model: {detail.properties.model}</p>
                        <p className="card-text">Manufacturer: {detail.properties.manufacturer}</p>
                        <p className="card-text">Starship Class: {detail.properties.starship_class}</p>
                        <Link to={"/Starships/" + star.uid} className="btn btn-primary">More Info</Link>
                    </div> */}
                </div>
        //     ) : null}
        // </React.Fragment>
    );
};
