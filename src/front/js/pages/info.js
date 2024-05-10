import React from 'react';
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Info = () => {

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<div>
							<h1>Our company</h1>
							<p>Travelo es una agencia del rubro turístico creado en el año 2024. La compañía está conformada y dirigida por <Link to={'https://github.com/clisdermar/'}>Clisdermar Vivas</Link>, <Link to={'https://github.com/SebaFretes/'}>Sebastián Fretes</Link> y <Link to={'https://github.com/Anibal-JPG'}>Anibal Velasco</Link>.
							</p>
							<p>En este proyecto estuvimos trabajando con las siguientes tecnologías: React, Vanilla CSS, Bootstrap, Bootstrap-React, Python, Flask, SQL Alchemy, además estuvimos implementando dos APIS externas mediante Firebase y Flask Mail.</p>
						</div>
					</div>
					<div className="col">
						<div>
							<img style={{ maxWidth: '100%', height: 'auto' }} src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}