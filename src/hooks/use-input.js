import { useState } from "react";

const useInput = (validateFunc) => {
	const [isTouched, setIsTouched] = useState(false);
	const [value, setValue] = useState("");

	const isValid = validateFunc(value);
	const hasError = isTouched && !isValid;

	const changedValueHandler = (value) => {
		setValue(value);
	};

	const blurInputHandler = () => {
		setIsTouched(true);
	};

	const resetInputHandler = () => {
		setIsTouched(false);
		setValue("");
	};

	return {
		value,
		isValid,
		hasError,
		changedValueHandler,
		blurInputHandler,
		resetInputHandler,
	};
};

export default useInput;
