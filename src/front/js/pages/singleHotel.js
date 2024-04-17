import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const SingleHotel = () => {

    const { store, actions } = useContext(Context);

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
                                <h1>Hotel Title</h1>
                                <h4>Description</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur placeat rem enim suscipit, magnam ducimus vero error? Doloremque voluptatibus harum a accusamus consequuntur officiis minima mollitia inventore minus ex? Similique, veniam autem? Commodi magnam impedit nulla suscipit eius iusto tempore.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime molestiae dolores perferendis voluptas nobis. Alias libero dicta nisi.</p>
                                <h4 style={{ fontWeight: 'bold', color: '#2e887c' }}>Double room price per night 49$</h4>

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
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Book</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <img src="https://images.pexels.com/photos/2771935/pexels-photo-2771935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="card-img-top" alt="..."
                                    style={{ maxWidth: '80%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
};