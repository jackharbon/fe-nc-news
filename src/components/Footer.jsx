import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer>
			<img src='./logo192.png' alt='logo' />
			<div className='footer-div'>
				{'Copyright © '}
				<Link href='https://northcoders.com/'>Northcoders</Link> {new Date().getFullYear()}
				{' | GitHub: '}
				<Link href='https://github.com/jackharbon/fe-nc-news'>Jack Harbon</Link>
				<p>NC Market | Demo Page for Norcoders Course Project</p>
			</div>
		</footer>
	);
}
