import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const AdminHotel = () => {
    const { store, actions } = useContext(Context);

 

    return (
     <>
     <h1>hola Hotel</h1>
     </>
    )
};