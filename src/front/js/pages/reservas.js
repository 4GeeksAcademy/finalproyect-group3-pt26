import React, { useState, useContext, useEffect } from 'react';
import '../../styles/Reservas.css'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import video from "../../img/reservas.mp4"

export const Reservas = () => {
    const { store, actions } = useContext(Context);

    const { id } = useParams();

    useEffect(() => {
        actions.ReservasUser(id)
    }, []);

    return (
        <>
            {
                !store.token &&
                <h4 className='text-center'>You must be logged in to access this view</h4>
            }
            {
                store.token &&
                <>
                    <div className="container-fluid bg-image d-flex flex-wrap align-items-center">
                        <video autoPlay loop muted id='videoReserva'>
                            <source src={video} type='video/mp4' />
                        </video>
                        <div className="row">
                            <div className="col">
                                <h1 className='text' style={{ "color": "white" }}>{`Encuentra las mejores y más exclusivas opciones con nosotros!`}</h1>
                            </div>
                        </div>
                        <div className='row' style={{ "width": "100%" }}>
                            <div className='col-3' ></div>
                            <div className='col-6 d-flex flex-column align-items-center'>
                                <h2>¿Quieres hacer mas reservas?</h2>
                                <div>
                                    <Link to={'/accommodations'} ><button className='buttonClas' >Hoteles</button></Link>
                                    <Link to={'/tours'} ><button className='buttonClas' >Tours</button></Link>
                                    <Link to={'/packages/'} ><button className='buttonClas' >Paquetes</button></Link>
                                </div>
                            </div>
                            <div className='col-3' ></div>
                        </div>
                    </div>

                    <div className='row' >
                        <div className='col d-flex justify-content-center'><span style={{ "fontSize": "60px", "borderBottom": "7px solid #48cae4" }} >Tus Reservas</span></div>
                    </div>

                    <div className="container text-center">
                        {store.reservasUser.map((reserva) => (
                            <div key={reserva.id} className="row fatherCardReserva">
                                <div className="col-5 cardReserva">
                                    <div className="row">
                                        <div className='col'><h3>Reserva</h3></div>
                                        <div className='col'>Fecha de inicio: {reserva.fecha_inicio}</div>
                                        <div className='col'>Fecha final: {reserva.fecha_final}</div>
                                        <div className='col'>Tour: {reserva.id_tour}</div>
                                        <div className='col'>Paquete: {reserva.id_paquete}</div>
                                        <div className='col'>Hotel: {reserva.id_hotel}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="container text-center">
                        <div className="row fatherCardReserva">
                            <div className="col-5 cardReserva">
                                <div className="row">
                                    <div className='col'><h3>Hoteles</h3></div>
                                </div>
                            </div>

                            <div className="col-7">
                                <div className='d-flex flex-column align-items-center animation' >
                                    <Link to="/travel"><button type="button" className="btnReservas">Mas Ofertas</button ></Link>
                                    <img className='imgReservas' src='https://www.elheraldo.co/sites/default/files/styles/414x310/public/articulo/2019/06/06/shutterstock_249702325.jpg?itok=MC8IxKLB' />
                                </div>
                            </div>
                        </div>

                        <div className="row fatherCardReserva">
                            <div className="col-7 d-flex align-items-center justify-content-around">
                                <div>
                                    <img className='x' src='https://media.youtooproject.com/files/viajar-da-vida-a-la-vida-frase[1].jpg' />
                                </div>
                                <div>
                                    <h3 className='atreveteAVivir'>Atrevete a vivir!</h3>
                                </div>
                            </div>
                            <div className="col-5 cardReserva">
                                <div className="row">
                                    <div className='col'><h3>Tours</h3></div>
                                </div>
                            </div>
                        </div>

                        <div className="row fatherCardReserva">
                            <div className="col-5 cardReserva">
                                <div className="row">
                                    <div className='col'><h3>Paquetes</h3></div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className='d-flex flex-column align-items-center animation' >
                                    <Link to="/travel"><button type="button" className="btnReservas">Tenemos los mejores hoteles</button ></Link>
                                    <img className='imgReservas' src='https://alejandria-resort.hoteles-santander.com/data/Images/OriginalPhoto/8184/818467/818467346/image-bucaramanga-hotel-alejandria-resort-10.JPEG' />
                                </div>
                            </div>
                        </div> */}
                    {/* </div > */}
                </>
            }
        </>
    )

};