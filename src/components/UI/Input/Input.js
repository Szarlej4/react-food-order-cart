import styles from "./Input.module.css";

const Input = (props) => {
	const { label, inputProps } = props;
	const inputId = Math.random().toString(36);
	return (
		<div className={styles.input}>
			<label htmlFor={inputId}>{label}</label>
			<input id={inputId} {...inputProps} />
		</div>
	);
};

export default Input;
