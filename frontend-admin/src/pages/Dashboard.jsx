import { NavLink, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Add Property", path: "/add-property", icon: "➕", color: "bg-blue-600 hover:bg-blue-500", desc: "Quickly add new listings" },
  { name: "View Properties", path: "/properties", icon: "📋", color: "bg-green-600 hover:bg-green-500", desc: "View, edit or delete properties" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const sidebarLinkClass = ({ isActive }) =>
    `p-2 rounded flex items-center gap-2 ${
      isActive ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"
    }`;

  return (
    <div className="flex min-h-screen">
      <aside className="w-[240px] bg-gray-900 text-white p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

          <nav className="flex flex-col gap-3">
            {navItems.map(({ name, path, icon }) => (
              <NavLink key={path} to={path} className={sidebarLinkClass}>
                <span>{icon}</span>
                <span>{name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 w-full p-2 rounded hover:bg-red-500"
        >
          Logout
        </button>
      </aside>

      <main className="flex-1 p-8 bg-gray-100">
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-6">Welcome Admin 👋</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {navItems.map(({ name, path, color, desc }) => (
            <NavLink
              key={path}
              to={path}
              className={`${color} text-white p-6 rounded-xl shadow transition`}
            >
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm mt-2 opacity-80">{desc}</p>
            </NavLink>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;