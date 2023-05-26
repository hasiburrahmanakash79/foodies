const Delivery = () => {
  return (
    <div>
      <div className="hero mt-14 rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/kDjg0Tb/Best-Food-Delivery-Apps-2022-07-12-002853-qeli.png"
            className= " md:w-96 rounded-lg md:my-10 shadow-2xl"
          />
          <div className="md:w-1/2 md:ps-20">
            <h1 className="text-2xl md:text-5xl font-bold">
              Make a food delivery app and website for your business
            </h1>
            <p className="py-6">
              Automate order management, delivery dispatch, and marketing campaigns to scale up your online food business.
            </p>
            <div>
            <button className="btn btn-outline">Get start</button>
            </div>
            <p className="py-5">14 Day Free Trial, No Credit Card Required.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
