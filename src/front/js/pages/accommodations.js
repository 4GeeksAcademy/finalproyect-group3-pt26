import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { storage } from '../firebase';

export const Accommodations = () => {
    const { store, actions } = useContext(Context);
    const [imageURL, setImageURL] = useState({}); // cambié estado inicial de null a {} para almacenar URLs por alojamiento

    useEffect(() => {
        actions.hoteles();
    }, [actions]);

    return (
        <div className="container">
            <h1>Accommodations</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {store.accommodations && store.accommodations.map((hot, id) => (
                    <div className="col" key={id}>
                        <div className="card">
                        <img src={hot.imageURL} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{hot.name}</h5>
                                <p className="card-text">{hot.descripcion}</p>
                                <p className="card-title">{hot.precio}$ per night</p>
                                <Link to={`/accommodation/${hot.id}`}>
                                    <button className="btn btn-primary">VIEW DETAILS</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};