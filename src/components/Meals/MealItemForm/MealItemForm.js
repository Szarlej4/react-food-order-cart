import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";

const addedMealHandler = (e) => {
	e.preventDefault();
};

const input = {
	defaultValue: "1",
	type: "number",
	min: "1",
	max: "10",
	step: "1",
	labelText: "Amount",
};

const MealItemForm = () => {
	return (
		<form action="" onSubmit={addedMealHandler} className={styles.form}>
			<Input labelText="Amount" inputProps={input} />
			<button>+ Add</button>
		</form>
	);
};

export default MealItemForm;
