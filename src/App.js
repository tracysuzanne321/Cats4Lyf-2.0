import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Home />
			<Footer />
		</div>
	);
};

export default App;
