import { useEffect, useState } from "react";
import FoodCard from "../FoodCard/FoodCard";
import Delivery from "../Delivery/Delivery";

const FoodItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://foodies-server-phi.vercel.app/foodItem")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-10">
      <h1 className="text-4xl font-bold mb-5 hover:underline">Healthy Foods</h1>
      <div className="md:grid grid-cols-4 gap-4">
      {
        items.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
      }
      </div>
      <Delivery></Delivery>
    </div>
  );
};

export default FoodItem;
