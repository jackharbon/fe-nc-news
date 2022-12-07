import '../css/themes.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function TopMenu() {
	return (
		<ul className='top-menu-ul'>
			<li>
				<Link to='/'>Home</Link>
				<Link to='/articles'>Articles</Link>
			</li>
		</ul>
	);
}
