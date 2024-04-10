import React, { useContext, useState } from "react"; // Importa useContext y useState en la misma línea
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Video from "../../img/maldivesVideo.mp4";
import { AiOutlineSearch } from 'react-icons/ai'


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home">
			<video autoPlay loop muted id='video'>
				<source src={Video} type='video/mp4' />
			</video>
			<div className="overlay"></div>
			<div className="content">
			     <h1>First Class Travel</h1>
                <h2>Top 1% Locations Worldwide</h2>
				<form className="form">
					<div>
						<input type="text" placeholder='Search Destinations' />
					</div>
					<div>
						<button><AiOutlineSearch className='icon' /></button>
					</div>
				</form>

			</div>
			// seccion abajo de el video
			<div className="window-container container d-flex">
				<div className="window"></div>
				<div className="window"></div>
				<div className="window"></div>
			</div>
			<div style={{ height: "100px" }} ></div>
		</div>
	);
}