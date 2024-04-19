import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Accommodations = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.hoteles();
    }, [actions]);

    return (
        <div className="container">
            <h1>Accommodations</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {store.accommodations && store.accommodations.map((hot, index) => (
                    <div className="col" key={index}>
                        <div className="card">
                            <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{hot.name}</h5>
                                <p className="card-text">{hot.descripcion}</p>
                                <h3 className="card-title">{hot.duracion}</h3>
                                <h4 className="card-title">{hot.precio}</h4>
                                <Link to={`/accommodation/${hot.id}`}>
                                    <button className="btn btn-primary">VIEW DETAILS</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};