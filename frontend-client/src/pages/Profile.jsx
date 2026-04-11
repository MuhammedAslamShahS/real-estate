import { useEffect, useState } from "react";
import API from "../api/axios.js";
import { useAuth } from "../context/useAuth.jsx";
import Navbar from "../components/Navbar";

const Profile = () => {
  const { user } = useAuth();
  const [saved, setSaved] = useState([]);

  const fetchSaved = async () => {
    try {
      const res = await API.get("/users/saved-properties");
      setSaved(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSaved();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>

        {/* User Info */}
        <div className="bg-white p-4 shadow rounded mb-6">
          <h2 className="text-xl font-semibold">User Info</h2>
          <p>Name: {user?.name}</p>
          <p>Email: {user?.email}</p>
          <p>Phone: {user?.phone}</p>
        </div>

        {/* Saved Properties */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Saved Properties
          </h2>

          {saved.length === 0 ? (
            <p>No saved properties</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {saved.map((p) => (
                <div key={p._id} className="border p-3 rounded">
                  <img
                    src={`http://localhost:5000/uploads/${p.image}`}
                    alt=""
                    className="w-full h-40 object-cover"
                  />
                  <h3>{p.name}</h3>
                  <p>{p.location}</p>
                  <p>₹ {p.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;