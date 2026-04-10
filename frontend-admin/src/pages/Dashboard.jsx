import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="w-[220px] bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        <nav className="flex flex-col gap-3">
          <Link
            to="/add-property"
            className="bg-gray-800 p-2 rounded hover:bg-gray-700"
          >
            ➕ Add Property
          </Link>

          <Link
            to="/properties"
            className="bg-gray-800 p-2 rounded hover:bg-gray-700"
          >
            📋 View Properties
          </Link>
        </nav>

        {/* Logout */}
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
          className="mt-10 bg-red-600 w-full p-2 rounded hover:bg-red-500"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">
          Dashboard
        </h1>

        <p className="text-gray-600">
          Welcome Admin 👋
        </p>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Link
            to="/add-property"
            className="bg-blue-600 text-white p-5 rounded shadow hover:bg-blue-500"
          >
            Add New Property
          </Link>

          <Link
            to="/properties"
            className="bg-green-600 text-white p-5 rounded shadow hover:bg-green-500"
          >
            Manage Properties
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;