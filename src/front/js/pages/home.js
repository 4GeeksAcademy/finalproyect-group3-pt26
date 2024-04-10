import React, { useContext, useState } from "react"; // Importa useContext y useState en la misma línea
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Video from "../../img/maldivesVideo.mp4";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home">
			<video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
			<div className="overlay"></div>
		</div>
	);
}