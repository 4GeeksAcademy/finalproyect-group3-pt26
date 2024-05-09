import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Packages = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.paquetes();
    }, [actions]);

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Packages</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {store.paquetes.map((pkg, id) => (
                    <div className="col" key={id}>
                        <div className="card">
                            <img src={pkg.imageURL} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{pkg.name}</h5>
                                <p className="card-text">{pkg.descripcion}</p>
                                <Link to={`/package/${pkg.id}`}>
                                    <button className="btn btn-primary">VIEW DETAILS</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center" style={{ width: '30rem', margin: 'auto', paddingBottom: '1rem' }}>
                <Link to={'/'}>
                    <button>Go back</button>
                </Link>
            </div>
        </div>
    )
};