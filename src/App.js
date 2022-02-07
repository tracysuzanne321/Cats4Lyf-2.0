import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Tile from './components/Tile';
import Hero from './components/Hero';
import GetData from './utils/Getdata';
import GetImage from './utils/GetImage';
import { useState, useEffect } from 'react';

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
		<div className="app">
			<Navbar
				basketItems={basketItems}
				removeItemFromBasket={removeItemFromBasket}
			/>
			<div className="home">
				<Hero />
				<div className="gallery">
					{catData.length === 0 ? (
						<div className="loading"></div>
					) : (
						catImages.map((cat, i) => (
							<Tile
								name={catData[i]?.name}
								price={catData[i]?.price}
								image={cat.url}
								key={cat.id}
								id={cat.id}
								addToBasket={addToBasket}
							/>
						))
					)}
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default App;
