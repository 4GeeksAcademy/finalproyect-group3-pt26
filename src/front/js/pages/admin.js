import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const Admin = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllUsers();
    }, [])

    return (
        <>
            {
                !store.token &&
                <h4 className='text-center'>You can not access to this view, it is for admin only</h4>
            }
            {store.token && (
                <div className="container text-center">
                    <h1>Registered Users</h1>
                    {store.allUsers.length > 0 ? (
                        store.allUsers.map((user) => (

                            <div key={user.id} className="row">
                                <div className="col-sm-12">
                                    <div className="card mx-auto" style={{ maxWidth: '400px' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{user.username}</h5>
                                            <p className="card-text">{user.email}</p>
                                            <Link to={'/'} className="btn btn-secondary">Check reservations</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading users data...</p>
                    )}
                </div>
            )}
        </>
    )
}