import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-6">
        
        {/* Left */}
        <div>
          <h2 className="text-xl font-bold">Real Estate</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Find your dream property easily with us.
          </p>
        </div>

        {/* Right Links */}
        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>

          <Link to="/properties" className="hover:text-blue-400">
            Properties
          </Link>

          <Link to="/categories" className="hover:text-blue-400">
            Categories
          </Link>

          <Link to="/about" className="hover:text-blue-400">
            About
          </Link>

          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm pb-4">
        © {new Date().getFullYear()} Real Estate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;