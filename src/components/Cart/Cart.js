import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

const Cart = () => {
	const ctx = useContext(CartContext);
	const cartItems = [
		{ id: "c1", name: "Sushi", amount: 2, price: 12.99 },
	].map((item) => <li key={item.id}>{item.name}</li>);

	return (
		<Modal>
			<ul className={styles["cart-items"]}>{cartItems}</ul>
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>$35.62</span>
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
