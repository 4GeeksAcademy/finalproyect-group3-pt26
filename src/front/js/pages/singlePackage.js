import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const SinglePackage = () => {

    const { store, actions } = useContext(Context);

    const { id } = useParams();
    const [singlePaq, setSinglePaq] = useState();

    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [reserva, setReserva] = useState(null);

    const getSinglePaq = async () => {
        const resp = await fetch(process.env.BACKEND_URL + `/api/paquete/${id}`)
        const data = await resp.json()
        setSinglePaq(data);
    }
    const handleCheckIn = (e) => {
        setCheckIn(e.target.value);
    }

    const handleCheckOut = (e) => {
        setCheckOut(e.target.value);
    }

    const bookPackage = async () => {
        const resp = await fetch(process.env.BACKEND_URL + `/api/reservations/paquete/${id}`, {
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
            console.log('Hotel reservation successfully made');
            setReserva(data);
            alert("Reserva Exitosa")
        } else {
            console.log('Error, please trying again or request assistance from a Travelo agent');
        }
    }


    useEffect(() => {
        getSinglePaq();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                        {singlePaq &&
                            <img src={singlePaq.imageURL} className="img-thumbnail" style={{ maxHeight: '300px', width: 'auto' }} alt={singlePaq.name} />
                        }
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                        {singlePaq &&
                            <div className='text-center p-4'>
                                <h1>{singlePaq.name}</h1>
                                <p>{singlePaq.descripcion}</p>
                                <p>{singlePaq.precio}$ per night</p>
                            </div>
                        }
                        {
                            store.token ? (
                                <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Check and Book
                                </button>
                            ) : (
                                <Link to="/login">
                                    <button>Check and Book</button>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center" style={{ width: '30rem', margin: 'auto', paddingBottom: '1rem' }}>
                <Link to={'/packages'}>
                    <button>Go back</button>
                </Link>
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
                            <button type="button" data-bs-dismiss="modal">Close</button>
                            <button type="button" data-bs-dismiss="modal" onClick={bookPackage}>Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}