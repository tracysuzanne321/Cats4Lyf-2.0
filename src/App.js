import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GetData from './utils/Getdata';
import GetImage from './utils/GetImage';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AboutMe from './pages/AboutMe';

const App = () => {
	const [basketItems, setBasketItems] = useState([]);
	const [catImages, setCatImages] = useState([]);
	const [catData, setCatData] = useState([]);

	useEffect(() => {
		(async () => {
			const imgs = await GetImage();
			const data = GetData();
			setCatImages(imgs);
			setCatData(data);
		})();
	}, []);

	//add cat to basket
	const addToBasket = (item) => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setBasketItems([...basketItems, item]);
	};
	//remove cat from basket funtion using remaining cat id
	const removeItemFromBasket = (item) => {
		const remainingBasketItems = basketItems.filter(
			(cat) => cat.id !== item.id,
		);
		setBasketItems(remainingBasketItems);
	};
	return (
		<Router>
			<div className="app">
				<Navbar
					basketItems={basketItems}
					removeItemFromBasket={removeItemFromBasket}
				/>
				<Switch>
					<Route exact path="/">
						<Home
							catData={catData}
							catImages={catImages}
							addToBasket={addToBasket}
						/>
					</Route>

					<Route path="/AboutUs">
						<AboutUs />
					</Route>
					<Route path="/AboutMe">
						<AboutMe />
					</Route>
				</Switch>

				<Footer />
			</div>
		</Router>
	);
};

export default App;
