import ChefProfile from "../../ChefCategory/ChefProfile/ChefProfile";
import FoodItem from "../../ExtraTwoSection/FoodItem/FoodItem";
import Header from "../../Header/Header";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <ChefProfile></ChefProfile>
            <FoodItem></FoodItem>
        </div>
    );
};

export default Home;