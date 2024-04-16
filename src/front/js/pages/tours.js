import React from 'react';
import { Link } from "react-router-dom";

export const Tours = () => {
    return (
        <>
            <div className="container">
                <h1>Tours</h1>

                <div className="card-group" style={{ marginBottom: '2rem' }}>
                    <div className="card p-3">
                        <img src="https://images.pexels.com/photos/11042598/pexels-photo-11042598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tour Title</h5>
                            <div className="d-flex">
                                <ion-icon name="location-outline"></ion-icon>
                                <p>Cancún, México</p>
                            </div>
                            <p className="card-text">This hotel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia error aspernatur minus.</p>
                            <Link to="/tour/">
                                <button className="btn btn-primary">VIEW DETAILS</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card p-3">
                        <img src="https://images.pexels.com/photos/18696505/pexels-photo-18696505/free-photo-of-punto-de-referencia-italia-viaje-viajar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tour Title</h5>
                            <div className="d-flex">
                                <ion-icon name="location-outline"></ion-icon>
                                <p>Tulum, México</p>
                            </div>
                            <p className="card-text">This hotel Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, quo architecto.</p>
                            <Link to="/tour/">
                                <button className="btn btn-primary">VIEW DETAILS</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card p-3">
                        <img src="https://images.pexels.com/photos/3956124/pexels-photo-3956124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tour Title</h5>
                            <div className="d-flex">
                                <ion-icon name="location-outline"></ion-icon>
                                <p>Playa del Carmen, México</p>
                            </div>
                            <p className="card-text">This hotel Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus mollitia dicta consequatur dolorum non.</p>
                            <Link to="/tour/">
                                <button className="btn btn-primary">VIEW DETAILS</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card-group" style={{ marginBottom: '2rem' }}>
                    <div className="card p-3">
                        <img src="https://images.pexels.com/photos/3989820/pexels-photo-3989820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tour Title</h5>
                            <div className="d-flex">
                                <ion-icon name="location-outline"></ion-icon>
                                <p>Cancún, México</p>
                            </div>
                            <p className="card-text">This hotel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia error aspernatur minus.</p>
                            <Link to="/tour/">
                                <button className="btn btn-primary">VIEW DETAILS</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card p-3">
                        <img src="https://images.pexels.com/photos/230794/pexels-photo-230794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tour Title</h5>
                            <div className="d-flex">
                                <ion-icon name="location-outline"></ion-icon>
                                <p>Tulum, México</p>
                            </div>
                            <p className="card-text">This hotel Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, quo architecto.</p>
                            <Link to="/tour/">
                                <button className="btn btn-primary">VIEW DETAILS</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card p-3">
                        <img src="https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tour Title</h5>
                            <div className="d-flex">
                                <ion-icon name="location-outline"></ion-icon>
                                <p>Playa del Carmen, México</p>
                            </div>
                            <p className="card-text">This hotel Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus mollitia dicta consequatur dolorum non.</p>
                            <Link to="/tour/">
                                <button className="btn btn-primary">VIEW DETAILS</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}