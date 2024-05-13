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
                                <li className="listFooterFather" ><Link className="listFooter" to="/">LEGAL NOTICE</Link></li>
                                <li className="listFooterFather" ><Link className="listFooter" to="/">PRIVACY POLICY</Link></li>
                                <li className="listFooterFather" ><Link className="listFooter" to="/">COOKIE POLICY</Link></li>
                                <li className="listFooterFather" ><Link className="listFooter" to="/">ACCESSIBILITY STATEMENT</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" col-4 col-4-footer">
                    <div className="row " >
                        <div className="d-flex justify-content-center"> <img src="https://raw.githubusercontent.com/4GeeksAcademy/finalproyect-group3-pt26/main/src/front/img/travello%20white%20bg%20brand.PNG" width="165px" height="60px" style={{ "borderRadius": "10px", marginTop: '1rem' }} />  </div>
                        <div className="d-flex justify-content-center">
                            <Link to='https://es-la.facebook.com/login/device-based/regular/login/' target="_blank"> < FaFacebook className="iconFooter" /></Link>
                            <Link to='https://www.instagram.com/' target="_blank"> < FaInstagram className="iconFooter" /> </Link>
                            <Link to='https://www.pinterest.com/pinterest/' target="_blank"> < FaPinterest className="iconFooter" /> </Link>
                            <Link to='https://twitter.com/' target="_blank"> < FaTwitter className="iconFooter" /> </Link>
                            <Link to='https://www.youtube.com/' target="_blank"> < FaYoutube className="iconFooter" /> </Link>
                        </div>
                        <p style={{ color: '#fff', textAlign: 'center', lineHeight: '1.2' }}>© 2024 Travelo. All rights reserved. Designed and developed by <Link style={{ color: '#2e887c' }} to={'https://github.com/SebaFretes/'} target="_blank">Sebastián Fretes</Link>, <Link style={{ color: '#2e887c' }} to={'https://github.com/clisdermar/'} target="_blank">Clisdermar Vivas</Link> y <Link style={{ color: '#2e887c' }} to={'https://github.com/Anibal-JPG'} target="_blank">Anibal Velasco</Link></p>
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