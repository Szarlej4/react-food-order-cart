import styles from "./Header.module.css";
import mealsHeroImage from "../../../assets/images/meals.jpg";

const Header = (props) => {
	return (
		<>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<button>Cart</button>
			</header>
			<div className={styles["main-image"]}>
				<img
					src={mealsHeroImage}
					alt="A table full of delicious food! "
				/>
			</div>
		</>
	);
};

export default Header;
