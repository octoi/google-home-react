import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import AboutPage from './pages/AboutPage';
import StorePage from './pages/StorePage';
import ImagePage from './pages/ImagePage';
import GmailPage from './pages/GmailPage';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path='/' exact component={HomePage} />
				<Route path='/about' component={AboutPage} />
				<Route path='/store' exact component={StorePage} />
				<Route path='/images' exact component={ImagePage} />
				<Route path='/gmail' exact component={GmailPage} />
			</Switch>
		</div>
	);
}

export default App;
