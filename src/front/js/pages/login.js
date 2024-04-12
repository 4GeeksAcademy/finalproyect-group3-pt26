import React, { useState } from 'react';
import '../../styles/login.css'
import { Link } from 'react-router-dom';


export const Login = () => {

    const [user, setUser] = useState();


    return <div className='fatherLogin'>
        <div style={{ textAlign: "center" }}>
            <h1>LOG IN</h1>

            {/* <form>
                <div className="container">
                    <div className="row d-block">
                        <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg text-center">Email</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control form-control-lg colorStyle" id="colFormLabelLg" placeholder="Your email" />
                        </div>
                    </div>
                    <div className="row d-block">
                        <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg text-center">Password</label>
                        <div className="col-sm-8">
                            <input type="email" className="form-control form-control-lg colorStyle" id="colFormLabelLg" placeholder="Your password" />
                        </div>
                    </div>
                </div>

            </form> */}


            <form>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" style={{ width: '100%' }} />
                </div>
                <Link to={'/'} >
                    <button style={{ margin: "10px", background: "lightslategray" }} className="btn transition">LOG IN</button>
                </Link>
            </form>



        </div>
    </div>
}