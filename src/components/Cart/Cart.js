import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

const Cart = () => {
	const ctx = useContext(CartContext);
	let { items, totalAmount } = ctx.cart;
	totalAmount = totalAmount.toFixed(2);
	const cartItems = items.map((item) => (
		<li key={item.item.id}>
			<p>Name: {item.item.name}</p>
			<p>Price: {item.item.price}</p>
			<p>Desc: {item.item.description}</p>
			<p>Amount: {item.amount}</p>
		</li>
	));

	return (
		<Modal>
			<ul className={styles["cart-items"]}>{cartItems}</ul>
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>${totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<button
					onClick={ctx.switchVisibility}
					className={styles["button--alt"]}>
					Close
				</button>
				<button onClick={ctx.handleOrder} className={styles.button}>
					Order
				</button>
			</div>
		</Modal>
	);
};

export default Cart;
