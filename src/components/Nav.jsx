import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<nav>
			<div className='nav_menu'>
				<Link to='/'>Home</Link>
				<Link to='/articles'>Articles</Link>
			</div>
		</nav>
	);
}
