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

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD_ITEM") {
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id,
		);
		const existingCartItem = state.items[existingCartItemIndex];
		let updatedItems;

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = [{ ...action.item }, ...state.items];
		}
		return {
			items: updatedItems,
			totalAmount:
				state.totalAmount + action.item.price * action.item.amount,
		};
	}
	if (action.type === "REMOVE_ITEM") {
		return {
			items: [...state.items],
			totalAmount: state.totalAmount - action.item.price,
		};
	}
	return defaultCartState;
};

export const CartContextProvider = (props) => {
	const [isVisible, setIsVisible] = useState(false);
	const [cart, dispatchCart] = useReducer(cartReducer, defaultCartState);

	const switchVisibility = () => {
		setIsVisible((isVisible) => !isVisible);
	};

	const handleOrder = () => {
		console.log("Ordering...");
	};

	const addItemToCardHandler = (item) => {
		dispatchCart({ type: "ADD_ITEM", item: item });
	};

	const removeItemFromCardHandler = (id) => {
		dispatchCart({ type: "REMOVE_ITEM", id: id });
	};

	const cartContext = {
		items: cart.items,
		totalAmount: cart.totalAmount,
		addItem: addItemToCardHandler,
		removeItem: removeItemFromCardHandler,
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
