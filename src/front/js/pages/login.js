import React, { useState } from 'react';
import '../../styles/login.css'
import { Link } from 'react-router-dom';


export const Login = () => {

    const [user, setUser] = useState();


    return <div className='fatherLogin'>
        <div style={{ textAlign: "center" }}>
            <h1>Login</h1>

            <form>
                <div className="container">
                    <div className="row d-block">
                        <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-lg colorStyle" style={{ width: "1235px" }} id="colFormLabelLg" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row d-block">
                        <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Password</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control form-control-lg colorStyle" style={{ width: "1235px" }} id="colFormLabelLg" placeholder="Password" />
                        </div>
                    </div>
                </div>

            </form>
            <Link to={'/'} >
                <button style={{ margin: "10px", background: "lightslategray" }} className="btn transition">Back home</button>
            </Link>
        </div>
    </div>
}