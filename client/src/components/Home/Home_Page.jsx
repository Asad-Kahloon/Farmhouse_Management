const Home_Page = () => {
  return (
    <div className="mt-[8vh] md:mt-[15vh] flex flex-col md:flex-row items-center md:items-start p-4">
      {/* Image Container */}
      <div className="w-full flex justify-center md:w-1/1 p-4">
        <img
          src="https://images.pexels.com/photos/3209035/pexels-photo-3209035.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Example"
          className="w-1/2 rounded-lg shadow-lg"
        />
      </div>

      {/* Text Container */}
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Farm House Management System
        </h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit rem
          voluptatibus nam voluptatem dignissimos, cupiditate aliquam culpa
          quidem temporibus nobis dolorum vel fugiat eos! Dolores beatae ducimus
          quo cum nostrum?
        </p>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Home_Page;
