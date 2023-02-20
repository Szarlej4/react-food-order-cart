import { createContext, useState, useReducer } from "react";

export const CartContext = createContext({
	items: [],
	totalAmount: 0,
	addItem: (item, amount) => {},
	removeItem: (id) => {},
	isVisible: null,
	switchVisibility: () => {},
	handleOrder: () => {},
});

const cartReducer = (state, action) => {};

export const CartContextProvider = (props) => {
	const [isVisible, setIsVisible] = useState(false);

	const switchVisibility = () => {
		setIsVisible((isVisible) => !isVisible);
	};

	const handleOrder = () => {
		console.log("Ordering...");
	};

	const addItem = (item, amount) => {};

	const removeItem = (id) => {};

	const cartContext = {
		items: [],
		totalAmount: 0,
		addItem: addItem,
		removeItem: removeItem,
		isVisible: isVisible,
		switchVisibility: switchVisibility,
		handleOrder: handleOrder,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};
