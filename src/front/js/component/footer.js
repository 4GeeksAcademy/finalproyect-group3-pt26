import React, { Component } from "react";
import "../../styles/footer.css";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer">
		<div className="container">
			<div className="footer-info">
				<h2>Travello</h2>
				<p>Síguenos en nuestras redes sociales:</p>
				<div className="redes-sociales">
					<Link to={'/'} className="link"><i className="fab fa-facebook"></i></Link>
					<Link to={'/'} className="link"><i className="fab fa-instagram"></i></Link>
					<Link to={'/'} className="link"><i className="fab fa-twitter"></i></Link>
					<Link to={'/'} className="link"><i className="fab fa-linkedin"></i></Link>
				</div>
			</div>
			<div className="comentarios">
				<h3>Déjanos tu comentario</h3>
				<form>
					<textarea placeholder="Escribe tu comentario aquí"></textarea>
					<button type="submit">Enviar</button>
				</form>
			</div>
		</div>
	</footer>
);
