import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';

export const SinglePackage = () => {

    const { store, actions } = useContext(Context);

    const { id } = useParams();
    const [singlePaq, setSinglePaq] = useState();

    const getSinglePaq = async () => {
        const resp = await fetch(process.env.BACKEND_URL + `/api/paquete/${id}`)
        const data = await resp.json()
        setSinglePaq(data);
    }

    useEffect(() => {
        getSinglePaq();
    }, [])

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
                                    <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-90 img-thumbnail h-100px" />
                                </div>
                                <div className="col-12 col-md-6 ">
                                    {singlePaq &&
                                        <div style={{ textAlign: 'center', padding: '40px' }}>
                                            <h1>{singlePaq.name}</h1>
                                            <p>{singlePaq.descripcion}</p>
                                            <p>{singlePaq.precio}$ per person</p>
                                        </div>
                                    }
                                </div>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Book
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}