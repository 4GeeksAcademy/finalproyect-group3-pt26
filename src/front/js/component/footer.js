import React, { Component } from "react";
import "../../styles/footer.css";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="row">
				<div className="col-4 col-4-footer">
					<div className="row" >
						<div className="col" >
							<ul>
								<li><Link className="listFooter" to="/">Aviso Legal</Link></li>
								<li><Link className="listFooter" to="/">Política de Privacidad</Link></li>
								<li><Link className="listFooter" to="/">Política de Cookies</Link></li>
								<li><Link className="listFooter" to="/">Política de Calidad</Link></li>
								<li><Link className="listFooter" to="/">Declaración Accesibilidad</Link></li>
							</ul>
						</div>
					</div>
				</div>
				<div className=" col-4 col-4-footer">
					<div className="row " >
						<div className="d-flex justify-content-center"> <img src="https://raw.githubusercontent.com/4GeeksAcademy/finalproyect-group3-pt26/main/src/front/img/travello%20white%20bg%20brand.PNG" width="200px" height="70px" style={{ "borderRadius": "10px", "margin": "10px" }} />  </div>
						<div className="d-flex justify-content-center">
							<div> < FaFacebook className="iconFooter" /></div>
							<div> < FaInstagram className="iconFooter" /> </div>
							<div> < FaPinterest className="iconFooter" /> </div>
							<div> < FaTwitter className="iconFooter" /> </div>
							<div> < FaYoutube className="iconFooter" /> </div>
						</div>
					</div>
				</div>
				<div className="col-4 col-4-footer">
					<div className="row" >
						<ul className="d-flex flex-column">
							<li><Link className="listFooter" to="/">Home</Link></li>
							<li><Link className="listFooter" to="/">About us</Link></li>
							<li><Link className="listFooter" to="/">Travel</Link></li>
							<li><Link className="listFooter" to="/">Contacts</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
};

