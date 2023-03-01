import styles from "./CheckoutForm.module.css";
import { useState } from "react";
import useInput from "../../../hooks/use-input";

const CheckoutForm = (props) => {
	const { order, onSubmitted } = props;
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [hasError, setHasError] = useState(false);

	const {
		value: nameValue,
		isValid: nameIsValid,
		hasError: nameHasError,
		changedValueHandler: nameValueChanged,
		blurInputHandler: nameInputBlurred,
		resetInputHandler: nameInputReset,
	} = useInput((value) => value.trim().length > 3);
	const {
		value: streetValue,
		isValid: streetIsValid,
		hasError: streetHasError,
		changedValueHandler: streetValueChanged,
		blurInputHandler: streetInputBlurred,
		resetInputHandler: streetInputReset,
	} = useInput((value) => value.trim().length > 3);
	const {
		value: postalValue,
		isValid: postalIsValid,
		hasError: postalHasError,
		changedValueHandler: postalValueChanged,
		blurInputHandler: postalInputBlurred,
		resetInputHandler: postalInputReset,
	} = useInput((value) => value.trim().length > 4);
	const {
		value: cityValue,
		isValid: cityIsValid,
		hasError: cityHasError,
		changedValueHandler: cityValueChanged,
		blurInputHandler: cityInputBlurred,
		resetInputHandler: cityInputReset,
	} = useInput((value) => value.trim().length > 3);

	const confirmHandler = async (e) => {
		e.preventDefault();
		setHasError(false);

		if (!nameIsValid || !streetIsValid || !postalIsValid || !cityIsValid) {
			nameInputBlurred();
			streetInputBlurred();
			postalInputBlurred();
			cityInputBlurred();
			return;
		}

		setIsSubmitting(true);

		try {
			// const response = await fetch(
			// 	"https://react-food-order-app-4ad88-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
			// 	{
			// 		method: "POST",
			// 		body: JSON.stringify({
			// 			name: nameValue,
			// 			street: streetValue,
			// 			postal: postalValue,
			// 			city: cityValue,
			// 			order: order,
			// 		}),
			// 	},
			// );

			// if (!response.ok) {
			// 	throw new Error();
			// }

			onSubmitted();
		} catch (e) {
			setHasError(true);
		}

		setIsSubmitting(false);
		resetInputs();
	};

	const resetInputs = () => {
		nameInputReset();
		streetInputReset();
		postalInputReset();
		cityInputReset();
	};

	const nameValueChangedHandler = (e) => {
		nameValueChanged(e.target.value);
	};

	const streetValueChangedHandler = (e) => {
		streetValueChanged(e.target.value);
	};

	const postalValueChangedHandler = (e) => {
		postalValueChanged(e.target.value);
	};

	const cityValueChangedHandler = (e) => {
		cityValueChanged(e.target.value);
	};

	const nameClasses = nameHasError
		? `${styles.control} ${styles.invalid}`
		: styles.control;
	const streetClasses = streetHasError
		? `${styles.control} ${styles.invalid}`
		: styles.control;
	const postalClasses = postalHasError
		? `${styles.control} ${styles.invalid}`
		: styles.control;
	const cityClasses = cityHasError
		? `${styles.control} ${styles.invalid}`
		: styles.control;

	const checkoutForm = (
		<form className={styles.form}>
			<p className={styles.formText}>Add address information</p>
			<div className={nameClasses}>
				<label htmlFor="name">Your name</label>
				<input
					onChange={nameValueChangedHandler}
					onBlur={nameInputBlurred}
					value={nameValue}
					type="text"
					id="name"
				/>
				{nameHasError && (
					<p className={styles.errorText}>
						Invalid name (less than 4 characters)
					</p>
				)}
			</div>
			<div className={streetClasses}>
				<label htmlFor="street">Street</label>
				<input
					onChange={streetValueChangedHandler}
					onBlur={streetInputBlurred}
					value={streetValue}
					type="text"
					id="street"
				/>
				{streetHasError && (
					<p className={styles.errorText}>
						Invalid street (less than 4 characters)
					</p>
				)}
			</div>
			<div className={postalClasses}>
				<label htmlFor="postal">Postal code</label>
				<input
					onChange={postalValueChangedHandler}
					onBlur={postalInputBlurred}
					value={postalValue}
					type="text"
					id="postal"
				/>
				{postalHasError && (
					<p className={styles.errorText}>
						Invalid postal (less than 5 characters)
					</p>
				)}
			</div>
			<div className={cityClasses}>
				<label htmlFor="city">City</label>
				<input
					onChange={cityValueChangedHandler}
					onBlur={cityInputBlurred}
					value={cityValue}
					type="text"
					id="city"
				/>
				{cityHasError && (
					<p className={styles.errorText}>
						Invalid city (less than 4 characters)
					</p>
				)}
			</div>
			<div className={styles.actions}>
				<button
					className={styles["button--alt"]}
					onClick={props.onCancel}>
					Cancel
				</button>
				<button className={styles.button} onClick={confirmHandler}>
					Order
				</button>
			</div>
		</form>
	);

	let message = "Loading...";

	if (hasError) {
		message = "Something went wrong, try again later";
	}

	const isSubmittingContent = (
		<>
			<p className={styles.textInfo}>{message}</p>
			<div className={styles.actions}>
				<button className={styles.button} onClick={props.onCancel}>
					Close
				</button>
			</div>
		</>
	);

	const hasErrorContent = (
		<>
			<p className={styles.textInfo}>{message}</p>
			<div className={styles.actions}>
				<button className={styles.button} onClick={props.onCancel}>
					Close
				</button>
			</div>
		</>
	);

	return isSubmitting
		? isSubmittingContent
		: hasError
		? hasErrorContent
		: checkoutForm;
};

export default CheckoutForm;
