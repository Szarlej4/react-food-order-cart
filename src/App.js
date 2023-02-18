import Header from "./components/Layout/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals/AvailableMeals";

function App() {
	return (
		<>
			<Header />
			<MealsSummary />
			<AvailableMeals />
		</>
	);
}

export default App;
