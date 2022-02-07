import { ShopCart } from './ShopCart';

const Navbar = ({ basketItems, removeItemFromBasket }) => {
	return (
		<div className="nav">
			<h1>Cats4Lyf</h1>
			<div className="nav-cart">
				<ShopCart
					basketItems={basketItems}
					removeItemFromBasket={removeItemFromBasket}
				/>
				{basketItems.length === 0 ? '' : <span>{basketItems.length}</span>}
			</div>
		</div>
	);
};

export default Navbar;
