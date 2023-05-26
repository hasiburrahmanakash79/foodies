const About = () => {
  return (
    <div className="container my-10 p-10 mx-auto">
      <div>
        <div className="hero rounded-xl bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/BwXPyh8/Chef-illustration-vectors.png"
              className="md:w-96 rounded-lg md:my-10 shadow-2xl"
            />
            <div className="md:w-1/2 md:ps-20">
              <h1 className="text-5xl font-bold">About us</h1>
              <p className="py-6">
                We may have a different name today, but there’s one thing that
                will never change, and that’s what you can expect from us:{" "}
                <br /> So if you’re hungry for good food and great conversation
                with fellow cooks, we’re so happy you’re here! And there’s no
                better place to start than our community’s 75 Top-Rated Recipes
                of All Time, from five-star banana bread to our most-popular mac
                and cheese.
              </p>
              <div className="">
                <button className="btn btn-outline">Get start</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
