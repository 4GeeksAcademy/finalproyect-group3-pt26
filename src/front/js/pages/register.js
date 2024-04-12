import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const Register = () => {
    return <div className='fatherLogin'>
        <div className='imageToLogin'>
            <img style={{ marginLeft: "50px" }} src='https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454' width={"250px"} height={"250px"} />
        </div>
        <div style={{ textAlign: "center" }}>
            <h1>Register</h1>

            <form>
                <div className="container">
                    <div className="row">
                        {/* <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label> */}
                        <div className="col-sm-10">
                            <input style={{ width: "315px", borderRadius: "22px" }} type="text" className="form-control form-control-lg colorStyle" id="colFormLabelLg" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        {/* <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Password</label> */}
                        <div className="col-sm-10">
                            <input style={{ width: "315px", borderRadius: "22px" }} type="email" className="form-control form-control-lg colorStyle" id="colFormLabelLg" placeholder="Password" />
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