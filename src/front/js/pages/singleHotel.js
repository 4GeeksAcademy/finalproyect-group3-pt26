import React, { useState } from "react";

export const SingleHotel = () => {

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false)
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Hotel Title</h1>
                        <h4>Description</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur placeat rem enim suscipit, magnam ducimus vero error? Doloremque voluptatibus harum a accusamus consequuntur officiis minima mollitia inventore minus ex? Similique, veniam autem? Commodi magnam impedit nulla suscipit eius iusto tempore.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime molestiae dolores perferendis voluptas nobis. Alias libero dicta nisi.</p>
                        <h4 style={{ fontWeight: 'bold', color: '#2e887c' }}>Double room price per night 49$</h4>
                        <button onClick={openModal} className="btn btn-secondary">Want to reserve? Check your dates and continue</button>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <img src="https://images.pexels.com/photos/2771935/pexels-photo-2771935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="card-img-top" alt="..."
                            style={{ maxWidth: '80%', height: 'auto' }} />
                    </div>
                </div>

                {
                    modal &&
                    <div className="modal" tabindex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>Dates</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={closeModal} className="btn btn-secondary" data-bs-dismiss="modal">Book</button>
                                    <button type="button" className="btn btn-primary">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}