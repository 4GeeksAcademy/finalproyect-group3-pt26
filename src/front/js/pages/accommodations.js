import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Accommodations = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.hoteles();
    }, [actions]);

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Accommodations</h1>
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
            <div className="d-flex justify-content-center" style={{ width: '30rem', margin: 'auto', paddingBottom: '1rem' }}>
                <Link to={'/'}>
                    <button type="button" className="btn btn-secondary">Go back</button>
                </Link>
            </div>
        </div>
    );
};