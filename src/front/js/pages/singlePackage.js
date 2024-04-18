import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const SinglePackage = () => {

    const { store, actions } = useContext(Context);

    return (
        <>
            {
                !store.token &&
                <h4 className='text-center'>You have to log in first to access this page</h4>
            }
            {
                store.token &&
                <h3 className='text-center'>Sorry about the delay, we're still working on this page</h3>
            }
        </>
    )
}