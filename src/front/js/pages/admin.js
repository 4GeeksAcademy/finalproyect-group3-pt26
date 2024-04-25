import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const Admin = () => {

    const { store, actions } = useContext(Context);
    const { loading, setLoading } = useState(true);

    useEffect(() => {
        actions.getAllUsers()
            .then(() => setLoading(!loading))
            .catch((err) => console.error(err))
    }, []);

    const adminUser = store.token && store.user && store.user.username === 'Admin';

    return (
        <>
            {
                !adminUser ? (
                    <h4 className='text-center'>You cannot access this view. It is for admins only.</h4>
                ) : (
                    <div className="container">
                        <h1 className="text-center">Registered Users</h1>
                        {loading ? (
                            <p>Loading users data...</p>
                        ) : (
                            <div>
                                {store.allUsers.map(user => (
                                    <div key={user.id} className="user-container">
                                        <h4>Username: {user.username}</h4>
                                        <p>Email: {user.email}</p>
                                        {user.todas_reservas && user.todas_reservas.length > 0 ? (
                                            <>
                                                <h4>Reservations:</h4>
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Hotel</th>
                                                            <th>Fecha de Inicio</th>
                                                            <th>Fecha de Fin</th>
                                                            <th>Tour</th>
                                                            <th>Package</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {user.todas_reservas.map(reserva => (
                                                            <tr key={reserva.id}>
                                                                <td>{reserva.id_hotel ? (<p>{reserva.id_hotel}</p>) : (<p>None</p>)}</td>
                                                                <td>{reserva.fecha_inicio}</td>
                                                                <td>{reserva.fecha_final}</td>
                                                                <td>{reserva.id_tour ? (<p>{reserva.id_tour}</p>) : (<p>None</p>)}</td>
                                                                <td>{reserva.id_paquete ? (<p>{reserva.id_paquete}</p>) : (<p>None</p>)}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </>
                                        ) : (
                                            <p>No reservations found.</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )
            }
        </>
    )
}