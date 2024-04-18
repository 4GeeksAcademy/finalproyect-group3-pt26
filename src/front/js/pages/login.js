import React, { useState, useContext } from 'react';
import '../../styles/login.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";

export const Login = () => {

    const [user, setUser] = useState({})

    const navigate = useNavigate()

    const { store, actions } = useContext(Context)

    const sendCredentials = async () => {
        const isLogedds = await actions.Login(user);
        if (isLogedds) {
            navigate('/')
        }
    }

    return <div className='fatherLogin'>
        <div className='imageToLogin'>
            <img style={{ marginLeft: "30px" }} src='https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454' width={"100px"} height={"100px"} />
        </div>
        <div style={{ textAlign: "center" }}>
            <h1>LOGIN</h1>
            {/* {msg && <div className="alert alert-danger">{msg}</div>} */}
            <form>
                <div className="container">
                    <div className="row">
                        {/* <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label> */}
                        <div className="col-sm-10">
                            <input
                                style={{ width: "315px", borderRadius: "22px" }} className="form-control form-control-lg colorStyle" placeholder="Email"
                                type="email"
                                value={user.email || ""}
                                onChange={(evt) => setUser({ ...user, email: evt.target.value })}

                            />
                        </div>
                    </div>
                    <div className="row">
                        {/* <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Password</label> */}
                        <div className="col-sm-10">
                            <input
                                style={{ width: "315px", borderRadius: "22px" }} className="form-control form-control-lg colorStyle" placeholder="Password"
                                type="password"
                                value={user.password || ""}
                                onChange={(evt) => setUser({ ...user, password: evt.target.value })}

                            />
                        </div>
                    </div>
                </div>
            </form>

            <button onClick={() => sendCredentials()} className='loginBoton'>login</button>

        </div>
    </div>

}