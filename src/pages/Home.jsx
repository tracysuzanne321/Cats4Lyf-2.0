import Hero from '../components/Hero';
import Tile from '../components/Tile';
import { useState, useEffect } from 'react';
import GetImage from '../utils/GetImage';
import GetData from '../utils/Getdata';

const Home = () => {
	//State Hooks for images and data
	const [catImages, setCatImages] = useState([]);
	const [catData, setCatData] = useState([]);
	const [basket, setBasket] = useState([]);

	useEffect(() => {
		(async () => {
			const imgs = await GetImage();
			const data = GetData();
			setCatImages(imgs);
			setCatData(data);
		})();
	}, []);

	const handleSetBasket = (e, obj) => {
		const val = e.target.dataset.value;

		if (val === 'add') {
			setBasket([...basket, obj]);
		} else {
			//delete
		}
	};

	return (
		<div className="home">
			<Hero />
			<div className="gallery">
				{catData.length === 0 ? (
					<div className="loading">Loading...</div>
				) : (
					catImages.map((cat, i) => (
						<Tile
							name={catData[i]?.name}
							price={catData[i]?.price}
							image={cat.url}
							key={cat.id}
							id={cat.id}
							basket={basket}
							handleSetBasket={handleSetBasket}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Home;
