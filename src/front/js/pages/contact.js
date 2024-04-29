import React from "react";
import "../../styles/home.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { Link } from "react-router-dom";
export const Contact = () => {
    return (<>
        <div className="container text-center">
            <div className="row CONrow">
                <div className="col-md-7 CONbox">
                    <div className="row">
                        <div className="col-md-6" style={{ padding: "5px" }}>
                            <div className="row">
                                <h2 className="col CONname">Clisdermar</h2>
                                <div className="row  CONresp">
                                    <div className="col-4 ConSpace"> <Link to="/"><FaFacebook className="CONicon" /></Link></div>
                                    <div className="col-4 ConSpace"> <Link to="/"><FaInstagram className="CONicon" /></Link></div>
                                    <div className="col-4 ConSpace"> <Link to="/"><FaLinkedin className="CONicon" /></Link></div>
                                    <div className="col-4 ConSpace"> <Link to="/"><FaGithub className="CONicon" /> </Link> </div>
                                    <div className="col d-flex justify-content-center"><h4 className="h4Resp" >Dev Fullstack</h4></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-block" style={{ padding: "5px" }}>
                            <img className="CONimg img-fluid" src="https://ca.slack-edge.com/T0BFXMWMV-U066UAJES95-af7e07c113c8-512" alt="Clisdermar" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                        </div>
                    </div>
                </div>
                <div className="col-md-5 d-flex align-items-center"><div className="CONcontacto">Contacta con Un Asesor</div></div>
            </div>
            <div className="row CONrow d-flex align-items-center">
                <div className="col-md-5">
                    <div className="row justify-content-center">
                        <div className="">
                            <div className="form-container">
                                <h4>Escribenos!</h4>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="nombre"></label>
                                        <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email"></label>
                                        <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mensaje"></label>
                                        <textarea className="form-control" id="mensaje" rows="4" placeholder="Ingrese su mensaje"></textarea>
                                    </div>
                                    <button style={{ marginTop: "10px" }} type="submit" className="btn">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 CONbox" style={{ boxShadow: "12px 12px 1px rgba(70, 206, 235, 1.0)", height: "220px" }}>
                    <div className="row">
                        <div className="col-md-6" style={{ padding: "5px" }}>
                            <div className="row">
                                <h2 className="col CONname">Sebastian</h2>
                                <div className="row  CONresp">
                                    <div className="col-4 ConSpace"> <Link to="/"><FaFacebook className="CONicon" /></Link></div>
                                    <div className="col-4 ConSpace"> <Link to="/"><FaInstagram className="CONicon" /></Link></div>
                                    <div className="col-4 ConSpace"> <Link to="/"><FaLinkedin className="CONicon" /></Link></div>
                                    <div className="col-4 ConSpace"> <Link to="/"><FaGithub className="CONicon" /> </Link> </div>
                                    <div className="col d-flex justify-content-center"><h4 className="h4Resp" >Dev Fullstack</h4></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-block" style={{ padding: "5px" }}>
                            <img className="CONimg img-fluid" src="https://ca.slack-edge.com/T0BFXMWMV-U06701S2X7Z-be6f4d35fd2e-512" alt="Sebastian" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row CONrow" style={{ marginBottom: "78px" }}>
                <div className="col-md-7 CONbox">
                    <div className="row">
                        <div className="col-md-6" style={{ padding: "5px" }}>
                            <div className="row" style={{ margin: "6px" }}>
                                <h2 className="col CONname">Anibal</h2>
                            </div>
                            <div className="row CONresp">
                                <div className="col-4 ConSpace"> <Link to="https://www.facebook.com/anibal.velasco.1257/"><FaFacebook className="CONicon" /></Link></div>
                                <div className="col-4 ConSpace"> <Link to="https://www.instagram.com/anibal_jpeg/"><FaInstagram className="CONicon" /></Link></div>
                                <div className="col-4 ConSpace"> <Link to="https://www.linkedin.com/in/anibal-crespo-446564241/"><FaLinkedin className="CONicon" /></Link></div>
                                <div className="col-4 ConSpace"> <Link to="https://github.com/Anibal-JPG"><FaGithub className="CONicon" /> </Link> </div>
                                <div className="col d-flex justify-content-center"><h4 className="h4Resp" >Dev Fullstack</h4></div>
                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-block" style={{ padding: "5px" }}>
                            <img className="CONimg img-fluid" src="https://ca.slack-edge.com/T0BFXMWMV-U05R1KG2DJA-9d8c1dd43555-512" alt="Anibal" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                        </div>
                    </div>
                </div>
                <div className="col-md-5"></div>
            </div>
        </div>;
    </>)
}