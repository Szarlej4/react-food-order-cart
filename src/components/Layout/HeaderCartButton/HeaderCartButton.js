import styles from "./HeaderCartButton.module.css";
import CartIcon from "../CartIcon/CartIcon";
import { useContext } from "react";
import { CartContext } from "../../../CartContext/CartContext";

const HeaderCartButton = () => {
	const ctx = useContext(CartContext);
	const { items } = ctx;
	return (
		<button onClick={ctx.switchVisibility} className={styles.button}>
			<span className={styles.icon}>
				<CartIcon></CartIcon>
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{items.length}</span>
		</button>
	);
};

export default HeaderCartButton;
