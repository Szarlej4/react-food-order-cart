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

	const cancelCheckoutHandler = () => {
		setIsCheckoutVisible(false);
	};

	const openCheckout = () => {
		setIsCheckoutVisible(true);
	};

	const cartItems = (
		<ul className={styles["cart-items"]}>
			{items.map((item) => (
				<CartItem
					key={item.id}
					onAdd={addItemHandler}
					onRemove={removeItemHandler}
					item={item}
				/>
			))}
		</ul>
	);

	const modalActions = (
		<div className={styles.actions}>
			<button
				onClick={ctx.switchVisibility}
				className={styles["button--alt"]}>
				Close
			</button>
			{hasItems && (
				<button onClick={openCheckout} className={styles.button}>
					Order
				</button>
			)}
		</div>
	);

	return (
		<Modal>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckoutVisible ? (
				<CheckoutForm
					order={{ items: items, totalAmount: totalAmount }}
					onCancel={cancelCheckoutHandler}
				/>
			) : (
				modalActions
			)}
		</Modal>
	);
};

export default Cart;
