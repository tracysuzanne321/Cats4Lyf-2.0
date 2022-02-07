import Hero from '../components/Hero';
import Tile from '../components/Tile';

const Home = ({ catData, catImages, addToBasket }) => {
	return (
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
	);
};

export default Home;
