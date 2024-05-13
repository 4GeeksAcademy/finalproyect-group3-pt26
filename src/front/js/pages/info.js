import React from 'react';
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Info = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col d-flex justify-content-center align-items-center">
						<div>
							<h1 style={{ textAlign: 'center' }}>Our team</h1>
							<p style={{ lineHeight: '1.2' }}>
								Travelo is a tourism agency founded in 2024, led by <Link style={{ color: '#3a6b67' }} to={'https://github.com/clisdermar/'}>Clisdermar Vivas</Link>, <Link style={{ color: '#3a6b67' }} to={'https://github.com/SebaFretes/'}>Sebastián Fretes</Link> and <Link style={{ color: '#3a6b67' }} to={'https://github.com/Anibal-JPG'}>Anibal Velasco</Link>.
							</p>
							<p>In this project, we have worked with various technologies, including React for the frontend, Vanilla CSS and Bootstrap for styling, as well as Bootstrap-React for components. For the backend, we have used Python with Flask and SQL Alchemy for the database. Additionally, we have integrated two external APIs through Firebase and Flask Mail for additional functionalities.</p>
						</div>
					</div>
					<div className="col d-flex justify-content-center align-items-center">
						<div>
							<img
								style={{ maxWidth: '100%', maxHeight: '25rem', width: 'auto', display: 'block', margin: 'auto' }}
								src="https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt="Travel"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}