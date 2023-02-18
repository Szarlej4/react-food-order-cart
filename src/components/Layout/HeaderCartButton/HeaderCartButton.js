import styles from "./HeaderCartButton.module.css";
import CartIcon from "../CartIcon/CartIcon";

const HeaderCartButton = (props) => {
	return (
		<button className={styles.button}>
			<span className={styles.icon}>
				<CartIcon></CartIcon>
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>3</span>
		</button>
	);
};

export default HeaderCartButton;
