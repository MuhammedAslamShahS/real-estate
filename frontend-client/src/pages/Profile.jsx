import { useEffect, useState } from "react";
import API from "../api/axios.js";
import { useAuth } from "../context/useAuth.jsx";
import Navbar from "../components/Navbar";

const Profile = () => {
  const { user } = useAuth();

  const [saved, setSaved] = useState([]);
  const [enquiries, setEnquiries] = useState([]);

  // 🔥 Fetch saved properties
  const fetchSaved = async () => {
    try {
      const res = await API.get("/users/saved-properties");
      setSaved(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 Fetch enquiries
  const fetchEnquiries = async () => {
    try {
      const res = await API.get("/enquiries/my");
      setEnquiries(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSaved();
    fetchEnquiries();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>

        {/* User Info */}
        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-2">User Info</h2>
          <p>Name: {user?.name}</p>
          <p>Email: {user?.email}</p>
          <p>Phone: {user?.phone}</p>
        </div>

        {/* Saved Properties */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Saved Properties
          </h2>

          {saved.length === 0 ? (
            <p>No saved properties</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-4">
              {saved.map((p) => (
                <div key={p._id} className="bg-white p-3 rounded shadow">
                  <img
                    src={`http://localhost:5000/uploads/${p.image}`}
                    alt=""
                    className="w-full h-40 object-cover rounded"
                  />
                  <h3 className="mt-2 font-semibold">{p.name}</h3>
                  <p>{p.location}</p>
                  <p className="text-blue-600">₹ {p.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 🔥 My Enquiries */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            My Enquiries
          </h2>

          {enquiries.length === 0 ? (
            <p>No enquiries yet</p>
          ) : (
            <div className="space-y-4">
              {enquiries.map((e) => (
                <div
                  key={e._id}
                  className="bg-white p-4 rounded shadow"
                >
                  <h3 className="font-semibold">
                    {e.property?.name}
                  </h3>

                  <p>{e.property?.location}</p>

                  <p className="text-gray-600 text-sm mt-1">
                    Message: {e.message}
                  </p>

                  <p className="mt-2 text-sm">
                    Status:{" "}
                    <span className="text-blue-600">
                      {e.status}
                    </span>
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(e.createdAt).toLocaleString()}
                  </p>
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