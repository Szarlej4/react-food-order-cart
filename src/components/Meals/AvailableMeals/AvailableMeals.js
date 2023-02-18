import styles from "./AvailableMeals.module.css";
import MealItem from "../MealItem/MealItem";
import Card from "../../UI/Card/Card";
import DUMMY_MEALS from "../DummyMeals/DummyMeals";

const AvailableMeals = () => {
	const mealList = DUMMY_MEALS.map((meal) => (
		<MealItem key={meal.id} meal={meal} />
	));
	return (
		<section className={styles.meals}>
			<Card>
				<ul>{mealList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
