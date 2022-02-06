import { ShopCart } from './ShopCart';

const Navbar = () => {
	return (
		<div className="nav">
			<h1>Cats4Lyf</h1>
			<div className="nav-cart">
				<ShopCart />
			</div>
		</div>
	);
};

export default Navbar;
