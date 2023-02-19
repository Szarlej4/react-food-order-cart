import Header from "./components/Layout/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals/AvailableMeals";
import { CartContextProvider } from "./CartContext/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
	return (
		<CartContextProvider>
			<Header />
			<MealsSummary />
			<AvailableMeals />
			<Cart />
		</CartContextProvider>
	);
}

export default App;
