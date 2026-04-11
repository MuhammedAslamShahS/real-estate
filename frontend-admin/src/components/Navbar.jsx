import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove auth
    navigate("/"); // redirect to login
  };

  return (
    <div className="w-full h-[12vh] bg-amber-300 flex items-center justify-between px-8">
      
      {/* Logo / Title */}
      <h1 className="text-xl font-bold">Admin Panel</h1>

      {/* Nav Links */}
      <div className="flex items-center gap-6">

        <Link
          to="/dashboard"
          className="font-medium hover:text-gray-700"
        >
          Dashboard
        </Link>

        <Link
          to="/properties"
          className="font-medium hover:text-gray-700"
        >
          Properties
        </Link>

        {/* Quick Add Button */}
        <Link
          to="/add-property"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          + Add Property
        </Link>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default Navbar;