import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './index.js';
import Nav from './components/Nav';
import Header from './components/Header';
import Aside from './components/Aside';
import { useScreenSize } from './hooks/useScreenSize';
import Home from './components/Home';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
	const location = useLocation();
	const { isMobile } = useScreenSize();
	return (
		<div className='App'>
			<Nav />
			{location.pathname === '/' ? <Header /> : null}
			<main>
				{isMobile ? null : <Aside />}
				<div className='content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/articles' element={<Articles />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
