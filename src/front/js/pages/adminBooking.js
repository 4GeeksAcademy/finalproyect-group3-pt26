import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const AdminBooking = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllReservations();
    }, []);

    return (
        <div className="container">
            <h1 className="text-center">Booking</h1>
            <div>
                {store.allReservations.length > 0 ? (
                    <>
                        <h4>Reservations:</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id Reserva</th>
                                    <th>User</th>
                                    <th>Fecha de Inicio</th>
                                    <th>Fecha de Fin</th>
                                    <th>Tour</th>
                                    <th>Package</th>
                                    <th>Hotel</th>
                                </tr>
                            </thead>
                            <tbody>
                                {store.allReservations.map(reserva => (
                                    <tr key={reserva.id}>
                                        <td>{reserva.id}</td>
                                        <td>{reserva.id_user}</td>
                                        <td>{reserva.fecha_inicio}</td>
                                        <td>{reserva.fecha_final}</td>
                                        <td>{reserva.id_tour ? (<p>{reserva.id_tour}</p>) : ""}</td>
                                        <td>{reserva.id_paquete ? (<p>{reserva.id_paquete}</p>) : ""}</td>
                                        <td>{reserva.id_hotel ? (<p>{reserva.id_hotel}</p>) : ""}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                ) : (
                    <p>No reservations found.</p>
                )}
            </div>
        </div>
    );
};