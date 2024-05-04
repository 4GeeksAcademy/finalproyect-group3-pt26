import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import "../../styles/admin.css";

export const Admin = () => {

    const { store, actions } = useContext(Context);
   

    const adminUser = store.token && store.user && store.user.username === 'Admin';
    return (
        <>
            {
                !adminUser ? (
                    <h4 className='text-center'>You cannot access this view. It is for admins only.</h4>
                ) : (
                    <div>
                        <h3 style={{ marginLeft: "13rem" }}>Dashboard</h3>
                        <div className="d-flex flex-row justify-content-center mt-3">
                            <Link to="/user" className="card text-white bg-primary mb-3" style={{ maxWidth: "13rem", marginRight: "1rem" }}>
                                <div className="card-header">User</div>
                                <img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top" alt="Imagen del usuario" />
                            </Link>
                            <Link to="/booking" className="card text-white bg-secondary mb-3 " style={{ maxWidth: "13rem", marginRight: "1rem" }}>
                                <div className="card-header">Booking</div>
                                <img src="https://static.vecteezy.com/system/resources/previews/032/430/083/non_2x/booking-icon-vector.jpg" className="card-img-top" alt="Imagen del booking" />
                            </Link>
                            <Link to="/add-tours" className="card text-white bg-success mb-3" style={{ maxWidth: "13rem", marginRight: "1rem" }}>
                                <div className="card-header">Add Tours</div>
                                <img src="https://e7.pngegg.com/pngimages/916/856/png-clipart-travel-package-tour-computer-icons-vacation-traveler-angle-text.png" className="card-img-top" alt="Imagen de Tour" />
                            </Link>
                            <Link to="/add-hotel" className="card text-white bg-danger mb-3 mr-1rem" style={{ maxWidth: "13rem", marginRight: "1rem" }}>
                                <div className="card-header">Add Hotel</div>
                                <img src="https://previews.123rf.com/images/vectorstockvadim/vectorstockvadim2007/vectorstockvadim200706677/150970301-blanco-icono-de-reserva-de-hotel-en-l%C3%ADnea-aislado-con-sombra-larga-concepto-de-dise%C3%B1o-de-reserva-en.jpg" className="card-img-top" alt="Imagen del Hotel" />
                            </Link>
                            <Link to="/add-packages" className="card text-white bg-info mb-3 mr-1rem" style={{ maxWidth: "13rem", marginRight: "1rem" }}>
                                <div className="card-header">Add Packages</div>
                                <img src="https://cdn-icons-png.freepik.com/512/7051/7051465.png" className="card-img-top" alt="Imagen de Packages" />
                            </Link>
                           
                        </div>
                    </div>
                )
            }
        </>
    );
}