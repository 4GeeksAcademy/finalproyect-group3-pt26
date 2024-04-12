import React, { Component } from "react";
import "../../styles/footer.css";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer>
			<div className='footer'>
				<div className="container">
					<div className="top">
						<h3>TRAVELO</h3>
						<div className="social">
							<FaFacebook className='icon' />
							<FaInstagram className='icon' />
							<FaTwitter className='icon' />
							<FaPinterest className='icon' />
							<FaYoutube className='icon' />
						</div>
					</div>
					<div className="bottom">
						<div className="left">
							<ul>
								<li>About</li>
								<li>Careers</li>
								<li>Advertising</li>
							</ul>
						</div>
						<div className="right">
							<ul>
								<li>Contact</li>
								<li>Terms</li>
								<li>Policy</li>
								{/* <li>Privacy</li> */}
							</ul>
						</div>
					</div>
				</div>


			</div>
		</footer>
	)
};