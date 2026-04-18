import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth.jsx";


const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          Real Estate
        </Link>

        <nav className="flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
          

          {!user ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <>
              <Link to="/profile">{user.name}</Link>

              <button
                onClick={logout}
                className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;