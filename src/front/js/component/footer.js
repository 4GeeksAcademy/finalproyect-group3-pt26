import React, { Component } from "react";
import "../../styles/footer.css";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from "react-router-dom";
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="row d-flex justify-content-between">
                <div className="col-4 col-4-footer">
                    <div className="row" >
                        <div className="col" >
                            <ul>
                                <li className="listFooterFather" ><Link className="listFooter" to="/">Aviso Legal</Link></li>
                                <li className="listFooterFather" ><Link className="listFooter" to="/">Política de Privacidad</Link></li>
                                <li className="listFooterFather" ><Link className="listFooter" to="/">Política de Cookies</Link></li>
                                <li className="listFooterFather" ><Link className="listFooter" to="/">Política de Calidad</Link></li>
                                <li className="listFooterFather" ><Link className="listFooter" to="/">Declaración Accesibilidad</Link></li>
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
                        <p className="pFooter">© 2024 Travelo. Todos los derechos reservados.</p>
                    </div>
                </div>
                <div className="col-4 col-4-footer">
                    <div className="row" >
                        <ul className="d-flex flex-column">
                            <li className="listFooterFather" ><Link className="listFooter" to="/">Home</Link></li>
                            <li className="listFooterFather" ><Link className="listFooter" to="/">About us</Link></li>
                            <li className="listFooterFather" ><Link className="listFooter" to="/">Travel</Link></li>
                            <li className="listFooterFather" ><Link className="listFooter" to="/">Contacts</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};