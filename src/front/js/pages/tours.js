import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Tours = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.tours();
    }, [actions]);

    return (
        <div className="container">
            <h1>Tours</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {store.tours.map((tour, id) => (
                    <div className="col" key={id}>
                        <div className="card">
                            <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{tour.name}</h5>
                                <p className="card-text">{tour.descripcion}</p>
                                <p className="card-title">{tour.precio} $ per person</p>
                                <Link to={`/tour/${tour.id}`}>
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