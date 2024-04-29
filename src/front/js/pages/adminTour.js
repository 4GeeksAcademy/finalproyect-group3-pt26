import React, { useContext, useEffect,useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const AdminTour = () => {
  const { store, actions } = useContext(Context);
  const [tourData, setTourData] = useState({
    name: '',
    descripcion:'',
    duration: '',
    price: ''
  });

  const handleCreateTour = () => {
    fetch(process.env.BACKEND_URL + `api/tours`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tourData)
    })
    .then(response => {
      if (response.ok) {
        // La solicitud fue exitosa, puedes hacer algo aquí, como mostrar un mensaje de éxito
      } else {
        // La solicitud falló, maneja el error aquí
      }
    })
    .catch(error => {
      // Maneja los errores de red aquí
    });
  };


  return (
    <div className="d-flex justify-content-center ">
      <div className="card border border-3" style={{ width: '30rem' }} >
        <img class="rounded-0 img-fluid" src="https://lesroches.edu/wp-content/uploads/2023/03/tour-1.png" alt="..." />
        <div className="card-body">
          <input type="texto" className="form-control" id="exampleFormControlInput1" placeholder="Name" style={{ width: '300px', height: '30px',borderRadius: '0'}} />
        </div>
        <ul className="list-group list-group-flush">
          <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="3" style={{borderRadius: '0'}}></textarea>
          <li> <input type="texto" className="form-control" id="exampleFormControlInput1" placeholder="Duracion" style={{ width: '300px', height: '30px',borderRadius: '0'}}/></li>
          <li><input type="texto" className="form-control" id="exampleFormControlInput1" placeholder="Precio" style={{ width: '100px', height: '30px',borderRadius: '0'}}/></li>
        </ul>
        <div className="card-body">
          {/* <!-- Button trigger modal --> */}
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Create Tour
          </button>

          {/* <!-- Modal --> */}
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};