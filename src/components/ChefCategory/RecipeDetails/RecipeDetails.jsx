import { useState } from "react";
import { FaGenderless, FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeDetails = () => {
  const chefRecipeDetails = useLoaderData();
  const { image, chef_name, cooking_experience, likes, numberOf_recipes } =
    chefRecipeDetails;
    const [isDisable, setDisable] = useState([]);

  const handleLike = (id) => {
    const selected = [...isDisable, id];
        setDisable(selected);
    toast("Love this recipe");
  };

  return (
    <div className="border container mx-auto p-3 m-5 rounded-lg">
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <img className="rounded-full w-14 h-14" src={image} alt="" />
            <div>
              <h6 className="font-bold text-xl">{chef_name}</h6>
              <p className="text-green-700">{cooking_experience}</p>
            </div>
          </div>
          <div>
            <p>Like: {likes}</p>
            <p>Number of recipes: {numberOf_recipes}</p>
          </div>
        </div>
        <hr className="my-3" />

        <h1 className="text-center text-2xl md:text-4xl  font-bold my-7">
          Top-5 recipes of{" "}
          <span className="text-yellow-600 underline">{chef_name}</span>{" "}
        </h1>
      </div>

      {/* recipe name and ingredient */}

      <div className="bg-base-100">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-3">
          {chefRecipeDetails?.recipes?.map((recipe, i) => (
            <div key={i} className="p-3 rounded-lg border shadow-md">
              <h2 className="card-title text-rose-600">
                {" "}
                {recipe.recipe_name}
              </h2>
              <ul>
                {recipe?.ingredients?.map((ingredient, index) => (
                  <li key={index} className="ps-3 flex items-center gap-2">
                    {" "}
                    <FaGenderless></FaGenderless> {ingredient}
                  </li>
                ))}
              </ul>
              <div className="card-actions justify-end items-end">
                <button disabled={isDisable.find(d => d === i)}
                  onClick={() => handleLike(i)}
                  className="text-2xl hover:text-red-700"
                >
                  <FaHeart></FaHeart> <ToastContainer position="top-center" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
