import React from "react";
import { Link } from "react-router-dom";
import "../../styles/destination.css";


export const Destination = () => {
	return (
		<div className="row ">
			<h1 className="text-center">OUR SERVICES</h1>

			<div className=" col-4 card ourServices mt-1 col-4 p-2">
				<img src="https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=740&dpr=1" className="card-img-top" alt="..." />
				<div className="card-body">
					<h4 className="text-center">HOTELS</h4>
					<div className="d-flex justify-content-center">
						<Link to={'/accommodations'}>
							<button>More</button>
						</Link>
					</div>
				</div>
			</div>

			<div className=" col-4 card ourServices mt-1 col-4 p-2">
				<img src="https://images.pexels.com/photos/158398/niagara-falls-waterfall-horseshoe-158398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
				<div className="card-body">
					<h4 className="text-center">TOURS</h4>
					<div className="d-flex justify-content-center">
						<Link to={'/tours'}>
							<button>More</button>
						</Link>
					</div>
				</div>
			</div>

			<div className=" col-4 card ourServices mt-1 col-4 p-2">
				<img src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
				<div className="card-body">
					<h4 className="text-center">VACATION PACKAGES</h4>
					<div className="d-flex justify-content-center">
						<Link to={'/packages/'}>
							<button>More</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);

};
