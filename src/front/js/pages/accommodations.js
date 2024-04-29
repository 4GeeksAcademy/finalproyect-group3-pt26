import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { storage } from '../firebase';

export const Accommodations = () => {
    const { store, actions } = useContext(Context);
    const [imageURL, setImageURL] = useState(null);

    useEffect(() => {
        actions.hoteles();
    }, [actions]);

    const getImageURL = async () => {
        try {
            const image = storage.refFromURL('gs://travelo-b9953.appspot.com/1.png')
            const url = await image.getDownloadURL();
            setImageURL(url);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getImageURL();
    }, [])

    return (
        <div className="container">
            <h1>Accommodations</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {store.accommodations && store.accommodations.map((hot, id) => (
                    <div className="col" key={id}>
                        <div className="card">
                            {imageURL ? (
                                <img src={imageURL} className="card-img-top" alt="..." />
                            ) : (
                                <p>Loading image..</p>
                            )}
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
    )
};