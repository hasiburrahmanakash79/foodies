import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefCard = ({ chef }) => {
  const { id, chef_name, image, cooking_experience, numberOf_recipes, likes } =
    chef;
  return (
    <div className="card card-compact bg-base-100 shadow-xl mb-5">
      <figure>
        <LazyLoad>
          <img src={image} alt="Shoes" className="" />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold">{chef_name}</h2>
        <p className="text-lg">
          Cooking Experience:{" "}
          <span className="font-bold">{cooking_experience}</span>
        </p>
        <p className="text-lg">
          Number of recipes:{" "}
          <span className="font-bold">{numberOf_recipes}</span>
        </p>
        <hr />
        <div className="card-actions justify-between">
          <p className="flex items-center gap-2">
            {" "}
            <FaHeart /> Likes: {likes}
          </p>
          <Link to={`/recipes/${id}`} className="badge badge-outline">
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
