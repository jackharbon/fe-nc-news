import { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import TopMenu from './TopMenu';
import Topics from './Topics';

const BurgerNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((currOpen) => !currOpen);
	};

	return (
		<div className={isOpen ? 'burger-menu-open' : 'burger-menu-closed'}>
			<HamburgerMenu
				isOpen={isOpen}
				menuClicked={handleClick}
				width={30}
				height={20}
				strokeWidth={4}
				rotate={0}
				color='var(--font-color)'
				borderRadius={10}
				animationDuration={0.5}
				padding='2rem'
			/>
			{isOpen ? (
				<>
					<div className='burger-top-menu-div'>
						<TopMenu />
					</div>
					<div className='burger-topic-menu-div'>
						<Topics />
					</div>
				</>
			) : null}
		</div>
	);
};

export default BurgerNav;
