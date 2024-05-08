import React, { useState } from "react";
import "../../styles/home.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { Link } from "react-router-dom";

export const Contact = () => {

    const [form, setForm] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    };

    const emailFetch = async () => {
        try {
            const response = await fetch(process.env.BACKEND_URL + "/sendemail", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            if (response.ok) {
                alert('Message sent successfully');
                setForm({
                    nombre: '',
                    email: '',
                    mensaje: ''
                })
            }
            else {
                throw new Error('Error sending the message');
            }
        }
        catch (error) {
            console.log(error);
            alert('Error sending the message');
        }
    }


    return (
        <div className=" container">


            <div style={{ height: '20rem', width: '100%', background: 'url(https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center/cover no-repeat', backgroundSize: 'cover' }}> </div>

            <form style={{ margin: '-4rem auto 1rem auto', backgroundColor: '#464f52', width: '90%', padding: '2rem', justifyContent: 'center', alignItems: 'center', maxWidth: '50rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', boxSizing: 'border-box' }}>


                <h3 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Contacto</h3>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        rows="6"
                        name="mensaje"
                        value={form.mensaje}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
                    ></textarea>
                </div>

                <button onClick={emailFetch}>Enviar</button>
            </form>
        </div>
    )
}


//     <div className="container text-center">
//         <div className="row CONrow">
//             <div className="col-md-7 CONbox">
//                 <div className="row">
//                     <div className="col-md-6" style={{ padding: "5px" }}>
//                         <div className="row">
//                             <h2 className="col CONname">Clisdermar</h2>
//                             <div className="row  CONresp">
//                                 <div className="col-4 ConSpace"> <Link to="/"><FaFacebook className="CONicon" /></Link></div>
//                                 <div className="col-4 ConSpace"> <Link to="/"><FaInstagram className="CONicon" /></Link></div>
//                                 <div className="col-4 ConSpace"> <Link to="/"><FaLinkedin className="CONicon" /></Link></div>
//                                 <div className="col-4 ConSpace"> <Link to="/"><FaGithub className="CONicon" /> </Link> </div>
//                                 <div className="col d-flex justify-content-center"><h4 className="h4Resp" >Dev Fullstack</h4></div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-6 d-none d-md-block" style={{ padding: "5px" }}>
//                         <img className="CONimg img-fluid" src="https://ca.slack-edge.com/T0BFXMWMV-U066UAJES95-af7e07c113c8-512" alt="Clisdermar" style={{ maxWidth: "100%", maxHeight: "100%" }} />
//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-5 d-flex align-items-center"><div className="CONcontacto">Contacta con Un Asesor</div></div>
//         </div>
//         <div className="row CONrow d-flex align-items-center">
//             <div className="col-md-5">
//                 <div className="row justify-content-center">
//                     <div className="">
//                         <div className="form-container">
//                             <h4>Escribenos!</h4>
//                             <form>
//                                 <div className="form-group">
//                                     <label htmlFor="nombre"></label>
//                                     <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="email"></label>
//                                     <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="mensaje"></label>
//                                     <textarea className="form-control" id="mensaje" rows="4" placeholder="Ingrese su mensaje"></textarea>
//                                 </div>
//                                 <button style={{ marginTop: "10px" }} type="submit" className="btn">Enviar</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-7 CONbox" style={{ boxShadow: "12px 12px 1px rgba(70, 206, 235, 1.0)", height: "220px" }}>
//                 <div className="row">
//                     <div className="col-md-6" style={{ padding: "5px" }}>
//                         <div className="row">
//                             <h2 className="col CONname">Sebastian</h2>
//                             <div className="row  CONresp">
//                                 <div className="col-4 ConSpace"> <Link to="/"><FaFacebook className="CONicon" /></Link></div>
//                                 <div className="col-4 ConSpace"> <Link to="/"><FaInstagram className="CONicon" /></Link></div>
//                                 <div className="col-4 ConSpace"> <Link to="/"><FaLinkedin className="CONicon" /></Link></div>
//                                 <div className="col-4 ConSpace"> <Link to="/"><FaGithub className="CONicon" /> </Link> </div>
//                                 <div className="col d-flex justify-content-center"><h4 className="h4Resp" >Dev Fullstack</h4></div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-6 d-none d-md-block" style={{ padding: "5px" }}>
//                         <img className="CONimg img-fluid" src="https://ca.slack-edge.com/T0BFXMWMV-U06701S2X7Z-be6f4d35fd2e-512" alt="Sebastian" style={{ maxWidth: "100%", maxHeight: "100%" }} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="row CONrow" style={{ marginBottom: "78px" }}>
//             <div className="col-md-7 CONbox">
//                 <div className="row">
//                     <div className="col-md-6" style={{ padding: "5px" }}>
//                         <div className="row" style={{ margin: "6px" }}>
//                             <h2 className="col CONname">Anibal</h2>
//                         </div>
//                         <div className="row CONresp">
//                             <div className="col-4 ConSpace"> <Link to="https://www.facebook.com/anibal.velasco.1257/"><FaFacebook className="CONicon" /></Link></div>
//                             <div className="col-4 ConSpace"> <Link to="https://www.instagram.com/anibal_jpeg/"><FaInstagram className="CONicon" /></Link></div>
//                             <div className="col-4 ConSpace"> <Link to="https://www.linkedin.com/in/anibal-crespo-446564241/"><FaLinkedin className="CONicon" /></Link></div>
//                             <div className="col-4 ConSpace"> <Link to="https://github.com/Anibal-JPG"><FaGithub className="CONicon" /> </Link> </div>
//                             <div className="col d-flex justify-content-center"><h4 className="h4Resp" >Dev Fullstack</h4></div>
//                         </div>
//                     </div>
//                     <div className="col-md-6 d-none d-md-block" style={{ padding: "5px" }}>
//                         <img className="CONimg img-fluid" src="https://ca.slack-edge.com/T0BFXMWMV-U05R1KG2DJA-9d8c1dd43555-512" alt="Anibal" style={{ maxWidth: "100%", maxHeight: "100%" }} />
//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-5"></div>
//         </div>
//     </div>;