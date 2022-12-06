import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.js';
import Nav from './components/Nav';
import Home from './components/Home';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/articles' element={<Articles />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
