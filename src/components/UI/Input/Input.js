import styles from "./Input.module.css";

const Input = (props) => {
	const { labelText, inputProps } = props;
	console.log(inputProps);
	const inputId = Math.random().toString(36);
	return (
		<div className={styles.input}>
			<label htmlFor={inputId}>{labelText}</label>
			<input id={inputId} {...inputProps} />
		</div>
	);
};

export default Input;
