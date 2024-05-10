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
                                <h5 className="card-title" style={{ color: '#3a6b67', fontSize: '2rem', fontWeight: '700' }}>{pkg.name}</h5>
                                <p className="card-text" style={{ fontSize: '1.4rem', lineHeight: '1.2' }}>{pkg.destino} days</p>
                                <p className="card-text" style={{ fontSize: '1rem', lineHeight: '1.2' }}>{pkg.descripcion}</p>
                                <p className="card-text" style={{ fontSize: '1.5rem', fontWeight: '500', color: '#464f52', lineHeight: '1.2' }}>{pkg.precio} $</p>
                                <p className="card-text" style={{ fontSize: '1rem', lineHeight: '1.2' }}>Taxes included</p>
                                <Link to={`/package/${pkg.id}`}>
                                    <button>VIEW DETAILS</button>
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