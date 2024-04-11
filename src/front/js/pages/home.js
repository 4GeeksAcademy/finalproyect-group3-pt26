import React, { useContext, useState } from "react"; // Importa useContext y useState en la misma línea
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Video from "../../img/Viaje.mp4";
import { AiOutlineSearch } from 'react-icons/ai'
import { Destination } from "./accommodations";
// import { Search } from "./accommodations";
import { Link } from 'react-router-dom';



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="home">
				<video autoPlay loop muted id='video'>
					<source src={Video} type='video/mp4' />
				</video>
				<div className="overlay"></div>
				<div className="content">
					<h1>First Class Travel</h1>
					<h2>The world is yours, discover it with us</h2>
					<form className="form">
						<div>
							<input type="text" placeholder='Search Destinations' />
						</div>
						<div>
							<button><AiOutlineSearch className='icon' /></button>
						</div>
					</form>

				</div>
			</div>




			<div className="container">
				<div className="m-4">
					<h1 className="text-center">Our services</h1>
					<div className="d-flex" style={{ overflowX: "auto" }}>
						<div className="card mt-1 col-4 p-2">
							<img src="https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=740&dpr=1" className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="text-center">Hotels reservations</h4>
								<div className="d-flex justify-content-center">
									<Link to={'/accommodations'} className="btn btn-primary">See options</Link>
								</div>
							</div>
						</div>

						<div className="card mt-1 col-4 p-2">
							<img src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="text-center">Vacation Packages</h4>
								<div className="d-flex justify-content-center">
									<Link to={'/'} className="btn btn-primary">See options</Link>
								</div>
							</div>
						</div>

						<div className="card mt-1 col-4 p-2">
							<img src="https://images.pexels.com/photos/158398/niagara-falls-waterfall-horseshoe-158398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="text-center">Tours</h4>
								<div className="d-flex justify-content-center">
									<Link to={'/'} className="btn btn-primary">See options</Link>
								</div>
							</div>
						</div>
					</div>
				</div>



				{/* <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{ width: '60%', margin: '2rem auto' }}>
				<div><h1 className="text-center">Our services</h1></div>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
					</div>
					
					<div class="carousel-item">
						<img src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item">
						<img src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div> */}
			</div>
		</>
	);
};