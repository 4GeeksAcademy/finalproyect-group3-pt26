import React from "react";
import { Link } from "react-router-dom";
import "../../styles/search.css";

import Gold from '../../img/gold.png'

export const Search = () => {
    return (

        <div>
            <h2 className="title">LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>

            <div name='book' className='search'>
                <div className="left">
                    <p>"Embark on an unforgettable journey to luxury and relaxation with our exclusive all-inclusive vacations for two. Indulge in world-class accommodations, gourmet dining experiences, and endless activities tailored to create cherished memories for you and your loved one. From stunning beachfront resorts to secluded hideaways, our destinations offer the perfect setting for romance and rejuvenation. Whether you're celebrating a special occasion or simply seeking a well-deserved escape, our luxury packages ensure that every moment is filled with elegance and bliss. Treat yourselves to the ultimate getaway and let us pamper you with the finest amenities and personalized service, ensuring that your dream vacation becomes a reality."</p>
                    <div className="search-col-2 d-flex justify-content-around">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>WORLD'S LEADING</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NO ONE INCLUDES MORE</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                                <button>View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
                        <p className="timer">12 HOURS LEFT!</p>
                        <Link to={'/travel'} style={{ color: '#fff', textDecoration: 'underline' }}>VIEW ALL CURRENT OFFERS</Link>
                    </div>
                    <form className="d-flex  flex-column">
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                                <option value="1">Grande Antigua</option>
                                <option value="1">Grenda</option>
                                <option value="1">Emerald Bay</option>
                                <option value="1">Bora Bora</option>
                                <option value="1">Key West</option>
                                <option value="1">Maldives</option>
                                <option value="1">Barbados</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" style={{ "width": "265px" }} />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" style={{ "width": "265px" }} />
                            </div>
                        </div>
                        <button>Rates & Availabilities</button>
                    </form>
                </div>
            </div>
        </div>

    )
}