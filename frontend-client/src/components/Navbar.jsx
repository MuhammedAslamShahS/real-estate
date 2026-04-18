import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth.jsx";

const Navbar = ({ className = "" }) => {
  const { user, logout } = useAuth();

  return (
    <header className={`w-full bg-white fixed top-0 left-0 z-50${className}`}>
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          Real Estate
        </Link>

        <nav className="flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>

          {!user ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <>
              <Link to="/profile"> <p className="w-[40px] h-[40px] cursor-pointer rounded-full bg-blue-500 flex justify-center items-center text-white " >{user?.name?.charAt(0).toUpperCase()}</p></Link>


            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;