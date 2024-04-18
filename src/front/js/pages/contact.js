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
                                    <div className="col-4"> <FaFacebook className="CONicon" /> </div>
                                    <div className="col-4"> <FaInstagram className="CONicon" /> </div>
                                    <div className="col-4"> <FaLinkedin className="CONicon" /> </div>
                                    <div className="col-4"> <FaGithub className="CONicon" /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6" style={{ "padding": "5px" }}><img className="CONimg" src="https://ca.slack-edge.com/T0BFXMWMV-U066UAJES95-af7e07c113c8-512" alt="Clisdermar" /></div>
                    </div>
                </div>
                <div className="col-5"></div>
            </div>


            <div className="row CONrow">
                <div className="col-6"></div>
                <div className="col-6 CONbox" style={{ "boxShadow": "12px 12px 1px rgba(70, 206, 235, 1.0)" }}>
                    <div className="row">
                        <div className="col-6" style={{ "padding": "5px" }}>
                            <div className="row">
                                <h2 className="col CONname">Sebastian</h2>
                                <div className="row">
                                    <div className="col-4"> <FaFacebook className="CONicon" /> </div>
                                    <div className="col-4"> <FaInstagram className="CONicon" /> </div>
                                    <div className="col-4"> <FaLinkedin className="CONicon" /> </div>
                                    <div className="col-4"> <FaGithub className="CONicon" /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6" style={{ "padding": "5px" }}><img className="CONimg" src="https://ca.slack-edge.com/T0BFXMWMV-U06701S2X7Z-be6f4d35fd2e-512" alt="Sebastian" /></div>
                    </div>
                </div>
            </div>


            <div className="row CONrow">
                <div className="col-6 CONbox">
                    <div className="row">
                        <div className="col-6" style={{ "padding": "5px" }}>
                            <div className="row">
                                <h2 className="col CONname">Anibal</h2>
                            </div>
                            <div className="row">
                                <div className="col-4"> <FaFacebook className="CONicon" /> </div>
                                <div className="col-4"> <FaInstagram className="CONicon" /> </div>
                                <div className="col-4"> <FaLinkedin className="CONicon" /> </div>
                                <div className="col-4"> <FaGithub className="CONicon" /> </div>
                            </div>
                        </div>
                        <div className="col-6" style={{ "padding": "5px" }}><img className="CONimg" src="" alt="Anibal" /></div>
                    </div>
                </div>
                <div className="col-6"></div>
            </div>
        </div>
    </>)
}
