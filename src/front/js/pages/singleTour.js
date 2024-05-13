import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext'
import { useParams } from 'react-router-dom';
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const SingleTour = () => {
    const { store, actions } = useContext(Context);

    const { id } = useParams();

    const [tour, setTour] = useState(null);

    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [reserva, setReserva] = useState(null);

    const getSingleTour = async () => {
        const resp = await fetch(process.env.BACKEND_URL + `/api/tour/${id}`)
        const data = await resp.json()
        setTour(data);
    }

    useEffect(() => {
        getSingleTour()
    }, [])

    const handleCheckIn = (e) => {
        setCheckIn(e.target.value);
    }

    const handleCheckOut = (e) => {
        setCheckOut(e.target.value);
    }

    const bookTour = async () => {
        const resp = await fetch(process.env.BACKEND_URL + `/api/reservations/tour/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${store.token}`
            },
            body: JSON.stringify({
                fecha_inicio: checkIn,
                fecha_final: checkOut,
            })
        });
        const data = await resp.json()

        if (resp.ok) {
            console.log('Hotel reservation successfully made:', data);
            setReserva(data);
            alert("Reserva Exitosa")
        } else {
            console.log('Error, please trying again or request assistance from a Travelo agent');
        }
    }

    return (
        <>
            <div className="container card">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                        {tour &&
                            <img src={tour.imageURL} className="img-thumbnail" style={{ maxHeight: '300px', width: 'auto' }} alt={tour.name} />
                        }
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                        {tour &&
                            <div className='text-center p-4'>
                                <h1 style={{ color: '#3a6b67', fontSize: '2rem', fontWeight: '700' }}>{tour.name}</h1>
                                <p style={{ fontSize: '1rem', lineHeight: '1.2' }}>{tour.descripcion}</p>
                                <p style={{ fontSize: '1.5rem', fontWeight: '500', color: '#464f52', lineHeight: '1.2' }}>{tour.precio}$ </p>
                                <p className="card-text" style={{ fontSize: '1rem', lineHeight: '1.2' }}>Taxes included</p>
                            </div>
                        }
                        {store.token ? (
                            <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Check and Book
                            </button>
                        ) : (
                            <Link to="/login">
                                <button>Check and Book</button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center" style={{ width: '30rem', margin: 'auto', paddingBottom: '1rem' }}>
                <Link to={'/tours'}>
                    <button style={{ marginTop: '1rem' }}>Go back</button>
                </Link>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Reservation</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="date">
                                <div className="input-wrap">
                                    <label>Check-In</label>
                                    <input type="date" onChange={handleCheckIn} />
                                </div>
                                <div className="input-wrap">
                                    <label>Check-Out</label>
                                    <input type="date" onChange={handleCheckOut} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal">Close</button>
                            <button type="button" data-bs-dismiss="modal" onClick={bookTour}>Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}