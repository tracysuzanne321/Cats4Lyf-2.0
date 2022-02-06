const Tile = ({ image, name, price, addToBasket, id }) => {
	return (
		<div className="tile">
			<img src={image} alt="" />
			<h4>{name}</h4>
			<p>Cost £{price}</p>
			<button>About Me</button>
			<button
				onClick={() => {
					addToBasket({ id, name, price, image });
				}}>
				Add to Basket
			</button>
		</div>
	);
};

export default Tile;
