import { RiShoppingBasketFill } from 'react-icons/ri';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';

export const ShopCart = ({ basketItems, removeItemFromBasket, image }) => {
	const [open, setOpen] = useState(false);

	const basketTotal = basketItems.reduce((accumulator, currentItem) => {
		accumulator += parseFloat(currentItem.price);
		return accumulator;
	}, 0);

	return (
		<>
			<div
				onClick={() => {
					setOpen(false);
				}}
				className={`overlay ${open ? 'overlay--open' : ''}`}></div>
			<div class={`modal ${open ? 'modal--open' : ''}`}>
				<button
					onClick={() => {
						setOpen(false);
					}}
					className="close-button">
					<AiOutlineCloseCircle />
				</button>
				<h2>Shopping Basket</h2>

				{basketItems.map((item) => (
					<div className="container">
						<img src={item.image} alt="" />

						<h2>{item.name}</h2>
						<p>£{item.price}</p>
						<button className="remove">
							<AiOutlineCloseCircle
								onClick={() => {
									removeItemFromBasket(item);
								}}
							/>
						</button>
					</div>
				))}

				<h4 className="total"> Total Cost: £{basketTotal.toFixed(2)}</h4>
			</div>

			<button
				onClick={() => {
					setOpen(true);
				}}
				className="shop-button">
				<ul>
					<li>
						<RiShoppingBasketFill />
					</li>
				</ul>
			</button>
		</>
	);
};

export default ShopCart;
