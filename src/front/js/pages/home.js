import React, { useContext, useState } from "react"; // Importa useContext y useState en la misma línea
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Video from "../../img/Viaje.mp4";
import { AiOutlineSearch } from 'react-icons/ai'
import { Destination } from "./destination";
import { Search } from "./search";



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

			<div className="carrusel">
				<Destination />
			</div>
			<div className="">
				<Search />
			</div>

		</>
	);
};