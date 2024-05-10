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
                <h1 className="row">Choose your destination and dates, and we will prepare the trip of your dreams for you</h1>
                <img className="row TRimagen " src={travel} alt="" width={"350px"} height={"350px"} />
            </div>
            {/* AQUI ESTAN LAS CARDS DE LOS PAISES */}
            <div className="container" style={{ marginTop: "40px", "display": "contents" }}>
                <h2 style={{ textAlign: "center" }}>LATIN AMERICA</h2>
                <div className="row TRrow d-flex justify-content-center " >
                    <div className="col-4 TRcard ">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/f5/cd/10/f5cd10e82b98c4c7fc3077694e1d554a.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title" style={{ color: '#3a6b67', fontSize: '2rem', fontWeight: '700' }}>MEXICO</h5>
                                <p className="card-text text-center">Land of colorful landscapes, rich culture, and delicious gastronomy. Live unique experiences in every corner!</p>
                                <Link to={'/contact'}>
                                    <button>Contact</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 TRcard">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/b5/2d/a3/b52da3f80edd43333f0825598eab1471.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title" style={{ color: '#3a6b67', fontSize: '2rem', fontWeight: '700' }}>PUERTO RICO</h5>
                                <p className="card-text text-center">An enchanting Caribbean island with paradise beaches, vibrant history, and a unique culture. Adventure and relaxation await you!</p>
                                <Link to={'/contact'}>
                                    <button>Contact</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 TRcard">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/c9/b4/99/c9b499d8b61dd63e1ecf0f7105e6e398.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title" style={{ color: '#3a6b67', fontSize: '2rem', fontWeight: '700' }}>ARGENTINA</h5>
                                <p className="card-text text-center">Land of stunning landscapes, vibrant culture, and delicious cuisine. From the Andes to the pampas, an unforgettable experience awaits you!</p>
                                <Link to={'/contact'}>
                                    <button>Contact</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row TRrow d-flex justify-content-center" >
                    <div className="col-4 TRcard">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/03/65/65/0365657f0900ab58d26916788ba85104.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title" style={{ color: '#3a6b67', fontSize: '2rem', fontWeight: '700' }}>BRAZIL</h5>
                                <p className="card-text text-center">Dreamy beaches, lush jungles, vibrant culture, and unique diversity. Experience the passion and joy of this fascinating country!</p>
                                <Link to={'/contact'}>
                                    <button>Contact</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 TRcard">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/0b/a8/ad/0ba8ad5811f14f432278b984aafe9071.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title" style={{ color: '#3a6b67', fontSize: '2rem', fontWeight: '700' }}>COLOMBIA</h5>
                                <p className="card-text text-center">Land of captivating landscapes, amazing biodiversity, and warm people. Discover its rich culture and venture into its mountains, beaches, and jungles.</p>
                                <Link to={'/contact'}>
                                    <button>Contact</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 TRcard">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/a9/16/e1/a916e1097c9cd3c9002a465224a0fa5d.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title" style={{ color: '#3a6b67', fontSize: '2rem', fontWeight: '700' }}>VENEZUELA</h5>
                                <p className="card-text text-center">Stunning landscapes, from Caribbean beaches to tropical jungles. Immerse yourself in its diverse culture and enjoy its rich history and gastronomy.</p>
                                <Link to={'/contact'}>
                                    <button>Contact</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: "40px", "display": "contents" }}>
                <h2 style={{ textAlign: "center" }}>EUROPE</h2>
                <div className="row TRrow d-flex justify-content-center" >
                    <div className="col-4 TRcard">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/34/fe/dd/34feddf8a34db6f4ed6cbfaac066bab7.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title" style={{ color: '#3a6b67', fontSize: '2rem', fontWeight: '700' }}>FRANCE</h5>
                                <p className="card-text text-center">Cultural icons like the Eiffel Tower and the Louvre, charm in its Parisian streets, refined gastronomy, and inspiring landscapes. Experience elegance and history in every corner.
                                </p>
                                <Link to={'/contact'}>
                                    <button>Contact</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 TRcard">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/7b/9d/9e/7b9d9e58837b51372ef05f3151332b3f.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title" style={{ color: '#3a6b67', fontSize: '2rem', fontWeight: '700' }}>ITALY</h5>
                                <p className="card-text text-center">The cradle of art, history, and gastronomy. From Roman ruins to picturesque coasts, Italy offers an unforgettable experience filled with passion and beauty.</p>
                                <Link to={'/contact'}>
                                    <button>Contact</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 TRcard">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/61/f7/fb/61f7fbc0057e769f6be8fe8dc72361e7.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title" style={{ color: '#3a6b67', fontSize: '2rem', fontWeight: '700' }}>PORTUGAL</h5>
                                <p className="card-text text-center">Charming historic cities, spectacular coastlines, and an authentic culture. Enjoy delicious cuisine and Portuguese hospitality in a country full of beauty and tradition.</p>
                                <Link to={'/contact'}>
                                    <button>Contact</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row TRrow d-flex justify-content-center" >
                    <div className="col-4 TRcard">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/44/4a/b5/444ab57836312b637c5f5a7c0acf8bcd.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title" style={{ color: '#3a6b67', fontSize: '2rem', fontWeight: '700' }}>GERMANY</h5>
                                <p className="card-text text-center">A destination of history, culture, and natural beauty. From medieval castles to modern cities, the diversity of landscapes and traditions will captivate you.</p>
                                <Link to={'/contact'}>
                                    <button>Contact</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 TRcard">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/4e/3f/44/4e3f44b65433c5a9bbab0368887c6e51.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title" style={{ color: '#3a6b67', fontSize: '2rem', fontWeight: '700' }}>SPAIN</h5>
                                <p className="card-text text-center">Land of passion and diversity. From sunny beaches to historic cities, you'll be surprised by its culture, cuisine, and festivals.</p>
                                <Link to={'/contact'}>
                                    <button>Contact</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 TRcard">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i.pinimg.com/564x/2f/3d/1d/2f3d1dac5d8dfe34e9a34c3abaa79210.jpg" className="card-img-top" alt="..." width={"450px"} height={"350px"} />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title" style={{ color: '#3a6b67', fontSize: '2rem', fontWeight: '700' }}>SWEDEN</h5>
                                <p className="card-text text-center">Stunning nature, innovative design, and welcoming culture. From the Northern Lights to vibrant cities, it offers a unique experience in every season.</p>
                                <Link to={'/contact'}>
                                    <button>Contact</button>
                                </Link>
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