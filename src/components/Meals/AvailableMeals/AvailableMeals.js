import { useState, useEffect } from "react";
import styles from "./AvailableMeals.module.css";
import MealItem from "../MealItem/MealItem";
import Card from "../../UI/Card/Card";

const AvailableMeals = () => {
	const [mealList, setMealList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMeals = async () => {
			setIsLoading(true);
			setError(null);
			try {
				const response = await fetch(
					"https://react-food-order-app-4ad88-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
				);

				if (!response.ok) {
					throw new Error("Something went wrong, please try again");
				}

				const data = await response.json();

				const loadedMeals = [];

				for (const meal in data) {
					loadedMeals.push({
						id: meal,
						name: data[meal].name,
						description: data[meal].description,
						price: data[meal].price,
					});
				}

				setMealList(loadedMeals);
			} catch (e) {
				setError(e.message);
			}
			setIsLoading(false);
		};
		fetchMeals();
	}, []);

	let content = (
		<p className={styles.info}>Found no meals, try again later</p>
	);

	if (mealList.length > 0) {
		content = (
			<ul>
				{mealList.map((meal) => (
					<MealItem
						key={meal.id}
						id={meal.id}
						name={meal.name}
						description={meal.description}
						price={meal.price}
					/>
				))}
			</ul>
		);
	}

	if (error) {
		content = <p className={styles.info}>{error}</p>;
	}

	if (isLoading) {
		content = <p className={styles.info}>Loading meals...</p>;
	}

	return <Card className={styles.meals}>{content}</Card>;
};

export default AvailableMeals;
