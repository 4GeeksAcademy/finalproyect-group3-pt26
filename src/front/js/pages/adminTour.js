import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, json } from "react-router-dom";

export const AdminTour = () => {
  const { store, actions } = useContext(Context);
  const [tourData, setTourData] = useState({
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
      setTourData({ ...tourData, imageURL: data.url })
    } catch (error) {
      setServerResponse(error.message);
    }
  }

  const handleCreateTour = async () => {
    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/tours", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Asegúrate de incluir este encabezado
        },
        body: JSON.stringify({
          ...tourData,
          // image: serverResponse  // Agregar la URL de la imagen al objeto tourData
        })
      });

      console.log("Respuesta completa:", response);

      if (response.ok) {
        console.log("Tour creado");
        const newTour = await response.json();
        actions.tours();

        setTourData({
          name: '',
          descripcion: '',
          duration: '',
          price: '',
          image: ''
        });

      } else {
        throw new Error("Error al crear el tour: " + response.statusText);
      }
    } catch (error) {
      console.error("Error de red al realizar la solicitud", error);
    }
  };

  return (
    <div className="d-flex justify-content-center ">
      <div className="card border border-3" style={{ width: '30rem' }} >
        <img className="rounded-0 img-fluid" src="https://lesroches.edu/wp-content/uploads/2023/03/tour-1.png" alt="..." />
        <div className="card-body">
          <input type="texto" className="form-control"
            placeholder="Name" style={{ width: '300px', height: '30px', borderRadius: '0' }}
            value={tourData.name}
            onChange={(e) => setTourData({ ...tourData, name: e.target.value })}
          />
        </div>
        <ul className="list-group list-group-flush">
          <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="3"
            placeholder="Description"
            style={{ borderRadius: '0' }}
            value={tourData.descripcion}
            onChange={(e) => setTourData({ ...tourData, descripcion: e.target.value })}
          ></textarea>
          <li> <input type="texto" className="form-control" placeholder="Duracion"
            style={{ width: '300px', height: '30px', borderRadius: '0' }}

            value={tourData.duracion}
            onChange={(e) => setTourData({ ...tourData, duracion: e.target.value })} />
          </li>
          <li><input type="texto" className="form-control"
            placeholder="Precio" style={{ width: '100px', height: '30px', borderRadius: '0' }}
            value={tourData.precio}
            onChange={(e) => setTourData({ ...tourData, precio: e.target.value })}
          />
          </li>
        </ul>

        <div>
          <input type="file" onChange={e => handleFiles(e.target.files)} />
          {file &&
            <img src={URL.createObjectURL(file)} alt="img-preview" style={{ maxWidth: '30rem' }} />
          }
          {serverResponse}
          <button onClick={() => handleSubmit()} className="btn btn-success">Upload</button>
        </div>


        <div className="card-body">
          {/* <!-- Button trigger modal --> */}
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleCreateTour}>
            Create Tour
          </button>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel"> Tour Creado Exitosamente</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" >Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};