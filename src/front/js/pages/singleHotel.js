import React from "react";

export const SingleHotel = () => {
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
                        <button className="btn btn-secondary">Want to reserve? Check your dates and continue</button>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <img src="https://images.pexels.com/photos/2771935/pexels-photo-2771935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="card-img-top" alt="..."
                            style={{ maxWidth: '80%', height: 'auto' }} />
                    </div>
                </div>
            </div>
        </>
    )
}