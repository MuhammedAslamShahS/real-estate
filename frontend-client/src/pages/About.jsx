import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>

        <p className="text-gray-700 leading-7 mb-4">
          Welcome to our Real Estate platform. We help you find the best
          properties for sale, rent, and lease with ease.
        </p>

        <p className="text-gray-700 leading-7 mb-4">
          Our mission is to provide a simple, transparent, and efficient
          way to connect buyers and property owners.
        </p>

        <p className="text-gray-700 leading-7">
          Whether you are looking for a villa, apartment, or commercial
          space — we’ve got you covered.
        </p>
      </div>
    </div>
  );
};

export default About;