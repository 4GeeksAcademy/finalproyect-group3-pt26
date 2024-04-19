import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";



import { Home } from "./pages/home";
import { Accommodations } from "./pages/accommodations";
import { Single } from "./pages/single";
import { Info } from "./pages/info";
import injectContext from "./store/appContext";
// import { Search } from "./pages/search";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Travel } from "./pages/travel";
import { SingleHotel } from "./pages/singleHotel";
import { Tours } from "./pages/tours";
import { SingleTour } from "./pages/singleTour";
import { Packages } from "./pages/packages";
import { SinglePackage } from "./pages/singlePackage";
import { Contact } from "./pages/contact";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div style={{ display: "grid", height: "100%", alignContent: "space-between" }}>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Info />} path="/info" />
                        <Route element={<Accommodations />} path="/accommodations" />
                        <Route element={<SingleHotel />} path="/accommodation/" /> {/* Falta agregar el parámetro del id al path */}
                        <Route element={<Tours />} path="/tours" />
                        <Route element={<SingleTour />} path="/tour/:id" />
                        <Route element={<Packages />} path="/packages" />
                        <Route element={<SinglePackage />} path="/package/:id" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<Register />} path="/register" />
                        <Route element={<Travel />} path="/travel" />
                        <Route element={<Contact />} path="/contact" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>

        </div>
    );
};

export default injectContext(Layout);
