import { createContext, useState, useReducer } from "react";

export const CartContext = createContext({
	cart: {},
	changeItemAmount: (item, amount) => {},
	isVisible: null,
	switchVisibility: () => {},
	handleOrder: () => {},
});

const cartReducer = (state, action) => {
	if (action.type === "ADD_ITEM") {
		return {
			items: [
				{ item: action.item, amount: action.amount },
				...state.items,
			],
			totalAmount: state.totalAmount + action.item.price * action.amount,
		};
	} else if (action.type === "REMOVE_ITEM") {
		return {
			items: state.items.filter((meal) => meal.item.id !== action.itemId),
			totalAmount: state.totalAmount - action.item.price * action.amount,
		};
	} else if (action.type === "CHANGE_ITEM") {
		const meal = state.items.find((meal) => meal.id === action.item.id);
		if (action.amount > 0) {
			meal.amount = meal.amount + action.amount;
			state.totalAmount = state.totalAmount + meal.price * action.amount;
		} else {
			meal.amount = meal.amount - action.amount;
			state.totalAmount = state.totalAmount - meal.price * action.amount;
		}
	}
	return { items: [], totalAmount: 0 };
};

export const CartContextProvider = (props) => {
	const [isVisible, setIsVisible] = useState(false);
	const [cart, dispatchCart] = useReducer(cartReducer, {
		items: [],
		totalAmount: 0,
	});

	const changeItemAmount = (item, amount) => {
		if (amount > 0) {
			addItem(item, amount);
		} else {
			if (
				cart.items.find((meal) => meal.item === item).amount - amount <=
				0
			) {
				dispatchCart({ type: "REMOVE_ITEM", itemId: item.id });
			} else {
				dispatchCart({
					type: "CHANGE_ITEM",
					item: item,
					amount: amount,
				});
			}
		}
	};

	const addItem = (item, amount) => {
		if (cart.items.findIndex((meal) => meal.item === item) === -1) {
			dispatchCart({ type: "ADD_ITEM", item: item, amount: amount });
		} else {
			dispatchCart({ type: "CHANGE_ITEM", item: item, amount: amount });
		}
	};

	const switchVisibility = () => {
		setIsVisible((isVisible) => !isVisible);
	};

	const handleOrder = () => {
		console.log("Ordering...");
	};

	return (
		<CartContext.Provider
			value={{
				cart: cart,
				changeItemAmount: changeItemAmount,
				isVisible: isVisible,
				switchVisibility: switchVisibility,
				handleOrder: handleOrder,
			}}>
			{props.children}
		</CartContext.Provider>
	);
};
