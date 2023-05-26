const Header = () => {
    
  return (
    <div>
      <div className="hero h-96 w-full bg-cover" style={{
          backgroundImage: `url("https://i.ibb.co/kBwYsb4/banner1.png")`,
        }}>
      <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
          <p className="text-white text-sm font-semibold">
            WIDE OPTIONS OF CHOICE
          </p>
          <h1 className="text-white text-4xl my-2 font-bold">
            Delicious Receipes
          </h1>
          <p className="text-white text-lg md:w-2/4 mx-auto">
            Food is any substance consumed to provide nutritional support for
            the body. It can be in the form of solid, liquid, or gas and is
            often prepared or cooked before consumption.
          </p>

          <button className="btn btn-warning my-5">Get start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
