import React from 'react';
import "../../styles/home.css";

export const Info = () => {

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<div>
							<h1>Our company</h1>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, deleniti velit labore, veniam corrupti ex aut illo autem aliquam maiores ducimus quibusdam cumque, quis possimus voluptatibus enim voluptatem sunt? Adipisci at nesciunt quasi. Amet quas molestias quam! Deleniti nihil cumque sit dolor. Provident neque laboriosam dignissimos ratione sit vitae tempora, ipsam veritatis fugiat deserunt, maxime repudiandae, nemo inventore reprehenderit error. Ullam, nisi mollitia harum quam quia obcaecati numquam soluta quos maxime sed repellat ratione commodi architecto magni assumenda, officiis repudiandae!</p>
						</div>
					</div>
					<div className="col">
						<div>
							<img style={{ maxWidth: '100%', height: 'auto' }} src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}