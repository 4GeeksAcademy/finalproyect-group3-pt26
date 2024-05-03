import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext'
import { useParams } from 'react-router-dom';
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
            {
                !store.token &&
                <h4 className='text-center'>You have to log in first to access this page</h4>
            }
            {
                store.token &&
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="col-12 col-md-6 ">
                                    {tour &&
                                        <img src={tour.imageURL} className="w-90 img-thumbnail h-100px" />
                                    }
                                </div>
                                <div className="col-12 col-md-6 ">
                                    {tour &&
                                        <div style={{ textAlign: 'center', padding: '40px' }}>
                                            <h1>{tour.name}</h1>
                                            <p>{tour.descripcion}</p>
                                            <p>{tour.precio}$</p>
                                        </div>
                                    }
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            Check and Book
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="staticBackdropLabel">Reserva</h5>
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
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={bookTour}>Book</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            <div className="d-flex justify-content-center" style={{ width: '30rem', margin: 'auto', paddingBottom: '1rem' }}>
                <Link to={'/tours'}>
                    <button type="button" className="btn btn-secondary">Go back</button>
                </Link>
            </div>
        </>
    )
}