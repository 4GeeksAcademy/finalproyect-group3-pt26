import React, { Component } from "react";
import "../../styles/footer.css";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from "react-router-dom";
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="row d-flex justify-content-between" style={{ margin: "29px" }}>
                <div className="col-4 col-4-footer">
                    <div className="row" >
                        <div className="col" >
                            <ul className="ulFooter">
                                <li className="listFooterFather" ><Link className="listFooter" to="/">AVISO LEGAL</Link></li>
                                <li className="listFooterFather" ><Link className="listFooter" to="/">POLÍTICA DE PRIVACIDAD</Link></li>
                                <li className="listFooterFather" ><Link className="listFooter" to="/">POLÍTICA DE COOKIES</Link></li>
                                <li className="listFooterFather" ><Link className="listFooter" to="/">DECLARACIÓN ACCESIBILIDAD</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" col-4 col-4-footer">
                    <div className="row " >
                        <div className="d-flex justify-content-center"> <img src="https://raw.githubusercontent.com/4GeeksAcademy/finalproyect-group3-pt26/main/src/front/img/travello%20white%20bg%20brand.PNG" width="165px" height="60px" style={{ "borderRadius": "10px", "margin": "10px" }} />  </div>
                        <div className="d-flex justify-content-center">
                            <Link to='https://es-la.facebook.com/login/device-based/regular/login/'> < FaFacebook className="iconFooter" /></Link>
                            <Link to='https://www.instagram.com/'> < FaInstagram className="iconFooter" /> </Link>
                            <Link to='https://www.pinterest.com/pinterest/'> < FaPinterest className="iconFooter" /> </Link>
                            <Link to='https://twitter.com/'> < FaTwitter className="iconFooter" /> </Link>
                            <Link to='https://www.youtube.com/'> < FaYoutube className="iconFooter" /> </Link>
                        </div>
                        <p className="pFooter">© 2024 Travelo. Designed and developed by <Link style={{ color: '#fff' }} to={'https://github.com/SebaFretes/'}>Sebastián Fretes</Link>, <Link style={{ color: '#fff' }} to={'https://github.com/clisdermar/'}>Clisdermar Vivas</Link> y <Link style={{ color: '#fff' }} to={'https://github.com/Anibal-JPG'}>Anibal Velasco</Link></p>
                    </div>
                </div>
                <div className="col-4 col-4-footer">
                    <div className="row" >
                        <ul className="d-flex flex-column ul2Footer">
                            <li className="listFooterFather" ><Link className="listFooter" to="/">HOME</Link></li>
                            <li className="listFooterFather" ><Link className="listFooter" to="/info">ABOUT US</Link></li>
                            <li className="listFooterFather" ><Link className="listFooter" to="/travel">TRAVEL</Link></li>
                            <li className="listFooterFather" ><Link className="listFooter" to="/contact">CONTACTS</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};