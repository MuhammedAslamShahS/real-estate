import { useEffect, useState } from "react";
import API from "../api/axios.js";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState({
    category: "",
    type: "",
  });

  const fetchProperties = async () => {
    try {
      const res = await API.get("/properties");
      setProperties(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // 🔥 Filter logic
  const filtered = properties.filter((p) => {
    return (
      (filter.category ? p.category === filter.category : true) &&
      (filter.type ? p.type === filter.type : true)
    );
  });

  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Properties</h1>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <select
            onChange={(e) =>
              setFilter({ ...filter, category: e.target.value })
            }
            className="border p-2"
          >
            <option value="">All Categories</option>
            <option value="villa">Villa</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="land">Land</option>
            <option value="commercial">Commercial</option>
          </select>

          <select
            onChange={(e) =>
              setFilter({ ...filter, type: e.target.value })
            }
            className="border p-2"
          >
            <option value="">All Types</option>
            <option value="sale">Sale</option>
            <option value="rent">Rent</option>
            <option value="lease">Lease</option>
          </select>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <div key={p._id} className="border rounded p-3">
              <img
                src={`http://localhost:5000/uploads/${p.image}`}
                alt=""
                className="w-full h-40 object-cover"
              />

              <h3 className="font-semibold mt-2">{p.name}</h3>
              <p>{p.location}</p>
              <p className="text-blue-600">₹ {p.price}</p>

              <Link
                to={`/property/${p._id}`}
                className="text-blue-500 mt-2 inline-block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;