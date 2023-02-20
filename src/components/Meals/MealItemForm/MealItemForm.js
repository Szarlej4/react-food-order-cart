import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";
import { useContext, useRef, useState } from "react";
import { CartContext } from "../../../CartContext/CartContext";

const input = {
	defaultValue: "1",
	type: "number",
	min: "1",
	max: "5",
	step: "1",
};

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const ref = useRef(null);
	const ctx = useContext(CartContext);
	const { meal } = props;

	const addedMealHandler = (e) => {
		e.preventDefault();
		const inputValue = ref.current.value;
		const enteredAmount = +inputValue;
		if (
			inputValue.trim().length === 0 ||
			enteredAmount < 1 ||
			enteredAmount > 10
		) {
			setAmountIsValid(false);
			return;
		}
		setAmountIsValid(true);
		ctx.addItem({
			id: meal.id,
			name: meal.name,
			description: meal.description,
			price: meal.price,
			amount: enteredAmount,
		});
	};

	return (
		<form action="" onSubmit={addedMealHandler} className={styles.form}>
			<Input ref={ref} label="Amount" inputProps={input} />
			<button>+ Add</button>
			{!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
		</form>
	);
};

export default MealItemForm;
