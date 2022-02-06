const Tile = ({ image, id, name, price, handleSetBasket }) => {
	const submitToBasket = (e) => {
		handleSetBasket(e, {
			name: name,
			price: price,
			id: id,
			image: image,
		});
	};

	return (
		<div className="tile">
			<img src={image} alt="" />
			<h4>{name}</h4>
			<p>Cost £{price}</p>
			<button>About Me</button>
			<button onClick={submitToBasket}>Add to Basket</button>
		</div>
	);
};

export default Tile;
