import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const AdminUser = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllUsers()
    }, []);

    return (
        <div className="container">
            <h1 className="text-center">Users</h1>
            <div>
                {store.allUsers.length > 0 ? (
                    <>
                        <h4>Users:</h4>
                        <table className="table table-info table-striped">
                            <thead>
                                <tr>
                                    <th>Id User</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {store.allUsers.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                      
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