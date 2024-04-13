import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import "../../styles/navbar.css"; // Asegúrate de importar tus estilos CSS aquí si es necesario
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
// import Logo from "../../img/travello brand 3.";


export const Navbar = () => {
    const [nav, setNav] = useState(false); // Define y utiliza el estado de nav si es necesario

    const handleNav = () => setNav(!nav) //funciona como un switch para apagar y encender la nav



    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <Link to='/'><img src="https://raw.githubusercontent.com/4GeeksAcademy/finalproyect-group3-pt26/main/src/front/img/travello%20white%20bg%20brand.PNG" style={{ width: "150px", height: "55px", opacity: "0.75 " }} /></Link>
            </div>
            <ul className="nav-menu">
                <li><Link to='/' smooth={true} duration={500}>Home</Link></li>
                <li><Link to='/info' smooth={true} duration={500}>Destinations</Link></li>
                {/* <li><Link to='/carousel' smooth={true} duration={500}>Our Services</Link></li> */}
                <li><Link to='/travel' smooth={true} duration={500}>Travel</Link></li>
                <li><Link to='/views' smooth={true} duration={500}>Book</Link></li>

            </ul>
            <div className="nav-icons">
                <Link to={'/login'}>
                    {/* <BsPerson className='icon' /> */}
                    <button style={{ marginRight: "12px" }} smooth={true} duration={500}>Login</button>
                </Link>

                <Link to={'/register'}>
                    <button smooth={true} duration={500}>Register</button>
                </Link>
            </div>

            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='ícon' />) : (<AiOutlineClose style={{ color: '#000' }} className="icon" />)}

            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">

                    <li><Link to='/home' smooth={true} duration={500}>Home</Link></li>
                    <li><Link to='/destinations' smooth={true} duration={500}>Destinations</Link></li>
                    <li><Link to='/carousel' smooth={true} duration={500}>Travel</Link></li>
                    <li><Link to='/login' smooth={true} duration={500}>Book</Link></li>


                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>

                </div>
            </div>
        </div>

    )
};