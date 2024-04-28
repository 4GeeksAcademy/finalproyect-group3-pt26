import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const AdminUser = () => {
    const { store, actions } = useContext(Context);

 

    return (
     <>
     <h1>hola User</h1>
     </>
    )
};