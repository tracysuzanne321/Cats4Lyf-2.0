import { RiShoppingBasketFill } from 'react-icons/ri';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';

export const ShopCart = () => {
	const [open, setOpen] = useState(false);
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
