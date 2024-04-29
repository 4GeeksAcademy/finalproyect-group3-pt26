import React from "react";
import { Link } from "react-router-dom";
import "../../styles/destination.css";


export const Destination = () => {
	return (
		<div className="container">
			<div className="row m-4">
				<h1 className="text-center">Our services</h1>

				<div className=" col-4 card ourServices mt-1 col-4 p-2">
					<img src="https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=740&dpr=1" className="card-img-top" alt="..." />
					<div className="card-body">
						<h4 className="text-center">Hotels reservations</h4>
						<div className="d-flex justify-content-center">
							<Link to={'/accommodations'} className="btn btn-primary" style={{ "borderRadius": "10px", "border": "none", "fontSize": "20px" }}>See options</Link>
						</div>
					</div>
				</div>

				<div className=" col-4 card ourServices mt-1 col-4 p-2">
					<img src="https://images.pexels.com/photos/158398/niagara-falls-waterfall-horseshoe-158398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
					<div className="card-body">
						<h4 className="text-center">Tours</h4>
						<div className="d-flex justify-content-center">
							<Link to={'/tours'} className="btn btn-primary" style={{ "borderRadius": "10px", "border": "none", "fontSize": "20px" }}>See options</Link>
						</div>
					</div>
				</div>

				<div className=" col-4 card ourServices mt-1 col-4 p-2">
					<img src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
					<div className="card-body">
						<h4 className="text-center">Vacation Packages</h4>
						<div className="d-flex justify-content-center">
							<Link to={'/packages/'} className="btn btn-primary" style={{ "borderRadius": "10px", "border": "none", "fontSize": "20px" }}>See options</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

};
