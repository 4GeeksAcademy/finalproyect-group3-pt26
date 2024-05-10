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
                            <img src={hot.imageURL} className="card-img-top" alt="..." style={{width:'100%', height:'50%', objectfit: 'cover'}}/>
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: '#3a6b67', fontSize: '2rem', fontWeight: '700' }}>{hot.name}</h5>
                                <p className="card-text" style={{ fontSize: '1rem', lineHeight: '1.2' }}>{hot.descripcion}</p>
                                <p className="card-text" style={{ fontSize: '1.5rem', fontWeight: '500', color: '#464f52', lineHeight: '1.2' }}>{hot.precio}$ per night</p>
                                <p className="card-text" style={{ fontSize: '1rem', lineHeight: '1.2' }}>Taxes included</p>
                                <Link to={`/accommodation/${hot.id}`}>
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
    );
};