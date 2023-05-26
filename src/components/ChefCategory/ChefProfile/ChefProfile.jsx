import { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";

const ChefProfile = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://foodies-server-phi.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div className="container px-10 mx-auto my-20">
        <h1 className="text-center text-3xl md:text-5xl mb-10 font-bold">Our Chefs</h1>
        <div className=" md:grid lg:grid-cols-3 grid-cols-1 md:gap-14">
          {chefs.map((chef) => (
            <ChefCard key={chef.id} chef={chef}></ChefCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefProfile;
