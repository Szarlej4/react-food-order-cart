import MealItemForm from "../MealItemForm/MealItemForm";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
	const { id, name, description, price } = props;
	const priceText = `$${price.toFixed(2)}`;
	return (
		<li className={styles.meal}>
			<div className="">
				<h3>{name}</h3>
				<div className={styles.description}>{description}</div>
				<div className={styles.price}>{priceText}</div>
			</div>
			<MealItemForm
				id={id}
				name={name}
				description={description}
				price={price}
			/>
		</li>
	);
};

export default MealItem;
