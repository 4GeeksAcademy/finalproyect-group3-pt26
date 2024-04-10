import React, { useState } from 'react';


export const Login = () => {

    const [user, setUser] = useState();


    return (
        <>
            <>
            <div className='text-center'>
                <h1>Login Form</h1>
                <div className="w-75 mx-auto">
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            type="email" className="form-control"
                            // value={user.email}
                            // onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password" className="form-control"
                            // value={user.password || ''}
                            // onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    <button 
                    // onClick={() => sendCredentials()} className="btn btn-primary"
                    >Submit</button>
                </div>
            </div>
        </>
        </> 
    )
}