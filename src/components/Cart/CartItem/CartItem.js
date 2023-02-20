import styles from "./CartItem.module.css";

const CartItem = (props) => {
	const { item, onRemove, onAdd } = props;
	const { id, name, price, amount } = item;
	return (
		<li className={styles["cart-item"]} key={id}>
			<div>
				<h2>{name}</h2>
				<div className={styles.summary}>
					<span className={styles.price}>{price}</span>
					<span className={styles.amount}>x {amount}</span>
				</div>
			</div>
			<div className={styles.actions}>
				<button onClick={onRemove.bind(null, item.id)}>-</button>
				<button onClick={onAdd.bind(null, item)}>+</button>
			</div>
		</li>
	);
};

export default CartItem;
