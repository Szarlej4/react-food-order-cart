import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";
import { useContext, useRef } from "react";
import { CartContext } from "../../../CartContext/CartContext";

const input = {
	defaultValue: "1",
	type: "number",
	min: "1",
	max: "10",
	step: "1",
};

const MealItemForm = (props) => {
	const ref = useRef(null);
	const ctx = useContext(CartContext);
	const { meal } = props;

	const addedMealHandler = (e) => {
		e.preventDefault();
		const amount = +ref.current.value;
		ctx.changeItemAmount(meal, amount);
	};

	return (
		<form action="" onSubmit={addedMealHandler} className={styles.form}>
			<Input ref={ref} label="Amount" inputProps={input} />
			<button>+ Add</button>
		</form>
	);
};

export default MealItemForm;
