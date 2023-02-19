import MealItemForm from "../MealItemForm/MealItemForm";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
	const { meal } = props;
	const { name, description, price } = meal;
	const priceText = `$${price.toFixed(2)}`;
	return (
		<li className={styles.meal}>
			<div className="">
				<h3>{name}</h3>
				<div className={styles.description}>{description}</div>
				<div className={styles.price}>{priceText}</div>
			</div>
			<MealItemForm meal={meal} />
		</li>
	);
};

export default MealItem;
