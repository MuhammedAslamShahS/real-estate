import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Dream Property
        </h1>

        <p className="text-lg text-gray-200 mb-6">
          Buy, Rent or Lease properties easily with us
        </p>

        <Link
          to="/properties"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
        >
          Browse Properties
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;