import React, { useState } from "react";
import "../../styles/home.css";

export const Contact = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')


    const handleNameChange = (event) => {
        setNombre(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleMensajeChange = (event) => {
        setMensaje(event.target.value);
    }


    const emailFetch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(process.env.BACKEND_URL + "/sendemail", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombre: nombre,
                    email: email,
                    mensaje: mensaje
                })
            })
            console.log("Respuesta completa:", response);
            if (response.ok) {
                alert('Message sent successfully');
                setNombre('');
                setEmail('');
                setMensaje('');
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
        <div className="container">


            <div style={{ height: '20rem', width: '100%', background: 'url(https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center/cover no-repeat', backgroundSize: 'cover' }}> </div>

            <form onSubmit={emailFetch} style={{ margin: '-4rem auto 1rem auto', backgroundColor: '#464f52', width: '90%', padding: '2rem', justifyContent: 'center', alignItems: 'center', maxWidth: '50rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', boxSizing: 'border-box' }}>


                <h3 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Contacto</h3>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="nombre">Name</label>
                    <input
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={handleNameChange}
                        style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="mensaje">Message</label>
                    <textarea
                        rows="6"
                        name="mensaje"
                        value={mensaje}
                        onChange={handleMensajeChange}
                        style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
                    ></textarea>
                </div>
                <button type="submit" >Send</button>
            </form>
        </div>
    )
}