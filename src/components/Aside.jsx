import '../App.css';
import React from 'react';
import Topics from './Topics';

export default function Aside() {
	return (
		<aside>
			<div className='aside_topics_menu'>
				<Topics />
			</div>
		</aside>
	);
}
