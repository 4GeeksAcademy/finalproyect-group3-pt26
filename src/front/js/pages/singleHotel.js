import React, { useContext,useState,useEffect  } from 'react';
import { Context } from '../store/appContext';
import { useParams } from "react-router-dom";

export const SingleHotel = () => {

    const { store, actions } = useContext(Context);

    const { id } = useParams()

    const [singleHotel, setSingleHotel] = useState(null)

    const fetchSingleHotel = async () => {
        const response = await fetch(`/api/accommodation/${id}`)
        const data = await response.json()
        setSingleHotel(data)

    }


    useEffect(() => {
        fetchSingleHotel()
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
                                        <img src={`https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} className="w-90 img-thumbnail h-100px"  />
                                    </div>
                                    <div className="col-12 col-md-6 ">
                                        {singleHotel &&
                                    
                                            <div style={{ textAlign: 'center', padding: '40px' }}>
                                                <h1>{singleHotel.name}</h1>
                                                <p>{singleHotel.descripcion}</p>
                                            </div>
                                        }
                                    </div>

                                <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Want to reserve? Check your dates and continue
                                </button>


                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                                        <input type="date" />
                                                    </div>
                                                    <div className="input-wrap">
                                                        <label>Check-Out</label>
                                                        <input type="date" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Book</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
};