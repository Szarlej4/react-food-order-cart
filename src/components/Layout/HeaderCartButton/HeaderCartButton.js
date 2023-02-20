import styles from "./HeaderCartButton.module.css";
import CartIcon from "../CartIcon/CartIcon";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../CartContext/CartContext";

const HeaderCartButton = () => {
	const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);
	const ctx = useContext(CartContext);
	const { items } = ctx;

	useEffect(() => {
		if (items.length === 0) return;

		const id = setTimeout(() => {
			setIsBtnHighlighted(false);
		}, 300);

		setIsBtnHighlighted(true);

		return () => {
			clearTimeout(id);
		};
	}, [items]);

	const btnClasses = `${styles.button} ${
		isBtnHighlighted ? styles.bump : ""
	}`;

	const itemsAmount = items.reduce((acc, item) => {
		return acc + item.amount;
	}, 0);

	return (
		<button onClick={ctx.switchVisibility} className={btnClasses}>
			<span className={styles.icon}>
				<CartIcon></CartIcon>
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{itemsAmount}</span>
		</button>
	);
};

export default HeaderCartButton;
