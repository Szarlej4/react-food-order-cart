import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import Card from "../Card/Card";
import { useContext } from "react";
import { CartContext } from "../../../CartContext/CartContext";

const Modal = (props) => {
	const ctx = useContext(CartContext);
	const { switchVisibility, isVisible } = ctx;

	const modal = (
		<>
			<div onClick={switchVisibility} className={styles.backdrop}></div>
			<Card className={styles.modal}>{props.children}</Card>
		</>
	);

	return createPortal(isVisible && modal, document.querySelector("#modal"));
};

export default Modal;
