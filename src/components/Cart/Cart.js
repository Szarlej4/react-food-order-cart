import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";
import CheckoutForm from "../Checkout/CheckoutForm/CheckoutForm";
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext/CartContext";

const Cart = () => {
	const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);
	const ctx = useContext(CartContext);
	let { items, totalAmount, addItem, removeItem } = ctx;
	totalAmount = `$${totalAmount.toFixed(2)}`;
	const hasItems = items.length > 0;

	const addItemHandler = (item) => {
		addItem({ ...item, amount: 1 });
	};

	const removeItemHandler = (item) => {
		removeItem(item);
	};

	const cartItems = items.map((item) => (
		<CartItem
			key={item.id}
			onAdd={addItemHandler}
			onRemove={removeItemHandler}
			item={item}
		/>
	));

	const goBackHandler = () => {
		setIsCheckoutVisible(false);
	};

	const openCheckout = () => {
		setIsCheckoutVisible(true);
	};

	return (
		<Modal>
			{isCheckoutVisible ? (
				<CheckoutForm
					order={{ items: items, totalAmount: totalAmount }}
					onCheckoutClosed={goBackHandler}
				/>
			) : (
				<>
					<ul className={styles["cart-items"]}>{cartItems}</ul>
					<div className={styles.total}>
						<span>Total Amount</span>
						<span>{totalAmount}</span>
					</div>
					<div className={styles.actions}>
						<button
							onClick={ctx.switchVisibility}
							className={styles["button--alt"]}>
							Close
						</button>
						{hasItems && (
							<button
								onClick={openCheckout}
								className={styles.button}>
								Order
							</button>
						)}
					</div>
				</>
			)}
		</Modal>
	);
};

export default Cart;
