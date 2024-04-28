import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const AdminTour = () => {
    const { store, actions } = useContext(Context);

 

    return (
     <>
     <h1>hola Tour</h1>
     </>
    )
};