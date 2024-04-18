import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
import "../../styles/navbar.css"; // Asegúrate de importar tus estilos CSS aquí si es necesario
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const { store, actions } = useContext(Context)

    const navigate = useNavigate()

    const [nav, setNav] = useState(false); // Define y utiliza el estado de nav si es necesario

    const handleNav = () => setNav(!nav) //funciona como un switch para apagar y encender la nav

    const [menuOpen, setMenuOpen] = useState(false) // servirapara controlar la visibilidad del estado abierto o cerrado


    const handleMenuToogle = () => {   /*aqui esto me cambiara el estado entre true o false*/

        setMenuOpen(!menuOpen)

    }
    const handleLogout = async () => {   /*esto manejara la funcion o actions que defini en mi flux*/
        const open = await actions.handleLogout(navigate)
        if (open) {
            navigate('/');
        }
    }

    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <Link to='/'><img src="https://raw.githubusercontent.com/4GeeksAcademy/finalproyect-group3-pt26/main/src/front/img/travello%20white%20bg%20brand.PNG" style={{ width: "150px", height: "55px", opacity: "0.75 " }} /></Link>
            </div>
            <ul className="nav-menu">
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/info' style={{ width: "130px" }}>About Us</Link></li>

                <li><Link to='/travel'>Travel</Link></li>
                <li><Link to='/contact'>Contact</Link></li>

            </ul>
            <div className="nav-icons">
                {store.token && (
                    <div className="dropdown">
                        <span className="username-span" onClick={handleMenuToogle}>
                            {store.user && store.user.username}
                        </span>
                        <BsPerson className="svg-icon" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" />
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><Link className="dropdown" href="#" onClick={handleLogout}>Logout</Link></li>
                        </ul>
                    </div>
                )}
                {!store.token && (
                    <div>
                        <Link to={'/login'}>
                            <button style={{ marginRight: "12px" }}>Login</button>
                        </Link>
                        <Link to={'/register'}>
                            <button>Register</button>
                        </Link>
                    </div>
                )}
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='ícon' />) : (<AiOutlineClose style={{ color: '#000' }} className="icon" />)}

            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">

                    <li><Link to='/home' >Home</Link></li>
                    <li><Link to='/destinations'>Destinations</Link></li>
                    <li><Link to='/carousel'>Travel</Link></li>
                    <li><Link to='/login'>Book</Link></li>
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