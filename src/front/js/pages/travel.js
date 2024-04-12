import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import travel from "../../img/traveleando.jpg";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { Testimoniales } from "./testimoniales";

export const Travel = () => {

    return (
        <>
            <div className="container TRcontainer">
                <h1 className="row">¿Cual sera tu siguiente destino?</h1>
                <img className="row TRimagen " src={travel} alt="" width={"350px"} height={"350px"} />
            </div>
            {/* AQUI ESTAN LAS CARDS DE LOS PAISES */}
            <div className="container" style={{ marginTop: "40px" }}>
                <h2 style={{ textAlign: "center" }}>Latinoamerica</h2>
                <div className="row" >
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/f5/cd/10/f5cd10e82b98c4c7fc3077694e1d554a.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/b5/2d/a3/b52da3f80edd43333f0825598eab1471.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/c9/b4/99/c9b499d8b61dd63e1ecf0f7105e6e398.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/03/65/65/0365657f0900ab58d26916788ba85104.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/0b/a8/ad/0ba8ad5811f14f432278b984aafe9071.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/a9/16/e1/a916e1097c9cd3c9002a465224a0fa5d.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: "40px" }}>
                <h2 style={{ textAlign: "center" }}>Europa</h2>
                <div className="row" >
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/34/fe/dd/34feddf8a34db6f4ed6cbfaac066bab7.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/7b/9d/9e/7b9d9e58837b51372ef05f3151332b3f.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/61/f7/fb/61f7fbc0057e769f6be8fe8dc72361e7.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/44/4a/b5/444ab57836312b637c5f5a7c0acf8bcd.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/4e/3f/44/4e3f44b65433c5a9bbab0368887c6e51.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/2f/3d/1d/2f3d1dac5d8dfe34e9a34c3abaa79210.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* AQUI ESTAN LAS CARDS DE LOS PAISES */}

            <div >
                <Testimoniales />
            </div>
        </>
    )
}