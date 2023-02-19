import styles from "./Input.module.css";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
	const { label, inputProps } = props;
	const inputId = Math.random().toString(36);
	return (
		<div className={styles.input}>
			<label htmlFor={inputId}>{label}</label>
			<input ref={ref} id={inputId} {...inputProps} />
		</div>
	);
});

export default Input;
