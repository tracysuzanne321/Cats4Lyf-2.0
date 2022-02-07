import { ShopCart } from './ShopCart';
import { Link } from 'react-router-dom';

const Navbar = ({ basketItems, removeItemFromBasket }) => {
	return (
		<div className="nav">
			<Link to="/">Cats4Lyf</Link>
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
