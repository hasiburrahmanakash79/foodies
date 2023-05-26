
const FoodCard = ({ item }) => {
  const { name, image, description, rating } = item;
  return (
    <div>
      <div className="card w-full lg:h-72 bg-base-50 shadow-xl mb-3 image-full">
        <figure>
          <img
            src={image}
            alt="food"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <h1>Rating: {rating}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
