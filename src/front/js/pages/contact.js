import React from "react";
import "../../styles/home.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { Link } from "react-router-dom";







export const Contact = () => {


    return (<>
        <div className="container text-center">

            <div className="row CONrow">
                <div className="col-7 CONbox">
                    <div className="row">
                        <div className="col-6" style={{ "padding": "5px" }}>
                            <div className="row">
                                <h2 className="col CONname">Clisdermar</h2>
                                <div className="row">
                                    <div className="col-4 ConSpace"> <Link to="/"><FaFacebook className="CONicon" /></Link></div>
                                    <div className="col-4 ConSpace"> <Link to=""><FaInstagram className="CONicon" /></Link></div>
                                    <div className="col-4 ConSpace"> <Link to=""><FaLinkedin className="CONicon" /></Link></div>
                                    <div className="col-4 ConSpace"> <Link to=""><FaGithub className="CONicon" /> </Link> </div>
                                    <div className="col d-flex justify-content-center"><h4>Dev Fullstack</h4></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6" style={{ "padding": "5px" }}><img className="CONimg" src="https://ca.slack-edge.com/T0BFXMWMV-U066UAJES95-af7e07c113c8-512" alt="Clisdermar" /></div>
                    </div>
                </div>
                <div className="col-5"></div>
            </div>


            <div className="row CONrow">
                <div className="col-5"></div>
                <div className="col-7 CONbox" style={{ "boxShadow": "12px 12px 1px rgba(70, 206, 235, 1.0)" }}>
                    <div className="row">
                        <div className="col-6" style={{ "padding": "5px" }}>
                            <div className="row">
                                <h2 className="col CONname">Sebastian</h2>
                                <div className="row">
                                    <div className="col-4 ConSpace"> <Link to="/"><FaFacebook className="CONicon" /></Link></div>
                                    <div className="col-4 ConSpace"> <Link to=""><FaInstagram className="CONicon" /></Link></div>
                                    <div className="col-4 ConSpace"> <Link to=""><FaLinkedin className="CONicon" /></Link></div>
                                    <div className="col-4 ConSpace"> <Link to=""><FaGithub className="CONicon" /> </Link> </div>
                                    <div className="col d-flex justify-content-center"><h4>Dev Fullstack</h4></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6" style={{ "padding": "5px" }}><img className="CONimg" src="https://ca.slack-edge.com/T0BFXMWMV-U06701S2X7Z-be6f4d35fd2e-512" alt="Sebastian" /></div>
                    </div>
                </div>
            </div>


            <div className="row CONrow">
                <div className="col-7 CONbox">
                    <div className="row">
                        <div className="col-6" style={{ "padding": "5px" }}>
                            <div className="row">
                                <h2 className="col CONname">Anibal</h2>
                            </div>
                            <div className="row">
                                <div className="col-4 ConSpace"> <Link to="/"><FaFacebook className="CONicon" /></Link></div>
                                <div className="col-4 ConSpace"> <Link to=""><FaInstagram className="CONicon" /></Link></div>
                                <div className="col-4 ConSpace"> <Link to=""><FaLinkedin className="CONicon" /></Link></div>
                                <div className="col-4 ConSpace"> <Link to=""><FaGithub className="CONicon" /> </Link> </div>
                                <div className="col d-flex justify-content-center"><h4>Dev Fullstack</h4></div>
                            </div>
                        </div>
                        <div className="col-6" style={{ "padding": "5px" }}><img className="CONimg" src="" alt="Anibal" /></div>
                    </div>
                </div>
                <div className="col-5"></div>
            </div>
        </div>
    </>)
}
