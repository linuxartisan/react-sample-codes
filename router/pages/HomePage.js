import React from 'react';

import { Link } from 'react-router-dom'

export default function HomePage() {
	return(
		<div className="container">
			<h1>Home Page</h1>
			<div className="navbar">
				<Link to="contact">Contact Us</Link>
				<Link to="Bruce Wayne">User Page</Link>
				<Link to="Thor">User Page</Link>
				<Link to="Tony Stark">User Page</Link>
				<Link to="Hulk">User Page</Link>
				<Link to="ABC">User Page</Link>
				<Link to="XYZ">User Page</Link>
				// Add any number of User Page links here
			</div>
		</div>
	)
}

