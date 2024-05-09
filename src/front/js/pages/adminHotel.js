import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const AdminHotel = () => {
    const { store, actions } = useContext(Context);
    const [hotelData, setHotelData] = useState({
        name: '',
        descripcion: '',
        duracion: '',
        precio: '',
        imageURL: ''
    });

    const [file, setFile] = useState(null);
    const [serverResponse, setServerResponse] = useState('');

    const handleFiles = (img) => {
        setFile(img[0]);
    }

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('image', file);
        try {
            const resp = await fetch(process.env.BACKEND_URL + "/api/image", {
                method: 'POST',
                body: formData,
            });
            const data = await resp.json()
            setServerResponse(data.url)
            setHotelData({ ...hotelData, imageURL: data.url })
        } catch (error) {
            setServerResponse(error.message);
        }
    }

    const handleCreateHotel = async () => {
        try {
            const response = await fetch(process.env.BACKEND_URL + "/api/accommodations", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Asegúrate de incluir este encabezado
                },
                body: JSON.stringify({
                    ...hotelData,
                })
            });

            console.log("Respuesta completa:", response);

            if (response.ok) {
                console.log("Alojamiento creado");
                const newHotel = await response.json();
                actions.hoteles();

                setHotelData({
                    name: '',
                    descripcion: '',
                    duracion: '',
                    precio: '',
                    imageURL: ''
                });

            } else {
                throw new Error("Error al crear el alojamiento: " + response.statusText);
            }
        } catch (error) {
            console.error("Error de red al realizar la solicitud", error);
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center ">
                <div className="card border border-3 boxFather" style={{ width: '30rem' }} >
                    <img className="rounded-3 img-fluid" src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
                    <div className="card-name">
                        <input type="texto" className="form-control"
                            placeholder="Name" style={{ width: '100%', height: '30px', borderRadius: '10px' }}
                            value={hotelData.name}
                            onChange={(e) => setHotelData({ ...hotelData, name: e.target.value })}
                        />
                    </div>
                    <ul className="card-name">
                        <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="3"
                            placeholder="Description"
                            style={{ borderRadius: '10px' }}
                            value={hotelData.descripcion}
                            onChange={(e) => setHotelData({ ...hotelData, descripcion: e.target.value })}
                        ></textarea>
                        <li className="adminLi"> <input type="texto" className="form-control" placeholder="Duracion"
                            style={{ width: '100%', height: '30px', borderRadius: '10px' }}

                            value={hotelData.duracion}
                            onChange={(e) => setHotelData({ ...hotelData, duracion: e.target.value })} />
                        </li>
                        <li className="adminLi d-flex justify-content-center"><input type="texto" className="form-control"
                            placeholder="Precio" style={{ width: '230px', height: '30px', borderRadius: '10px' }}
                            value={hotelData.precio}
                            onChange={(e) => setHotelData({ ...hotelData, precio: e.target.value })}
                        />
                        </li>
                    </ul>

                    <div className="d-flex flex-column align-items-center">
                        <input type="file" onChange={e => handleFiles(e.target.files)} />
                        {file &&
                            <img src={URL.createObjectURL(file)} alt="img-preview" style={{ maxWidth: '30rem' }} />
                        }
                        {serverResponse}
                        <button onClick={() => handleSubmit()}>Upload</button>
                    </div>


                    <div className="card-body d-flex justify-content-center">
                        {/* <!-- Button trigger modal --> */}
                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleCreateHotel}>
                            Create Accommodation
                        </button>

                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel"> Hotel Creado Exitosamente</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" data-bs-dismiss="modal" >Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between" style={{ width: '30rem', margin: 'auto', paddingTop: '1rem', paddingBottom: '1rem' }}>
                <Link to={'/admin'}>
                    <button type="button">Go back</button>
                </Link>
                <Link to={'/accommodations'}>
                    <button type="button">Hotels view</button>
                </Link>
            </div>
        </>
    );
};