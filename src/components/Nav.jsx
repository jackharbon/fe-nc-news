import '../App.css';
import '../css/themes.css';
import React, { useState } from 'react';
import BurgerNav from './BurgerNav';
import TopMenu from './TopMenu';
import { useScreenSize } from '../hooks/useScreenSize';

export default function Nav() {
	const { isMobile } = useScreenSize();
	return (
		<nav>
			{isMobile ? <BurgerNav /> : <TopMenu />}
			<ToggleTheme />
		</nav>
	);
}

const ToggleTheme = () => {
	const [toggleButtonIcon, setToggleButtonIcon] = useState(`dark_mode`);
	const setTheme = (themeName) => {
		localStorage.setItem('theme', themeName);
		document.documentElement.className = themeName;
	};
	const toggleTheme = (buttonIcon) => {
		if (localStorage.getItem('theme') === 'theme-dark') {
			setTheme('theme-light');
			setToggleButtonIcon(`dark_mode`);
		} else {
			setTheme('theme-dark');
			setToggleButtonIcon(`light_mode`);
		}
	};
	(function () {
		if (localStorage.getItem('theme') === 'theme-dark') {
			setTheme('theme-dark');
		} else {
			setTheme('theme-light');
		}
	})();
	return (
		<>
			<span title='Switch theme' id='switch' className='material-symbols-outlined' onClick={() => toggleTheme()}>
				{toggleButtonIcon}
			</span>
		</>
	);
};
