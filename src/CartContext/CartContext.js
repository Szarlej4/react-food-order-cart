import { createContext, useState } from "react";

export const CartContext = createContext({
	isVisible: null,
	switchVisibility: () => {},
	handleOrder: () => {},
});

export const CartContextProvider = (props) => {
	const [isVisible, setIsVisible] = useState(false);

	const switchVisibility = () => {
		setIsVisible((isVisible) => !isVisible);
	};

	const handleOrder = () => {
		console.log("Ordering...");
	};

	return (
		<CartContext.Provider
			value={{
				isVisible: isVisible,
				switchVisibility: switchVisibility,
				handleOrder: handleOrder,
			}}>
			{props.children}
		</CartContext.Provider>
	);
};
