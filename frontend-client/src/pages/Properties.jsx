/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import API from "../api/axios.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [searchParams] = useSearchParams();

  const [filter, setFilter] = useState({
    category: searchParams.get("category") || "",
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

  useEffect(() => {
    setFilter((prev) => ({
      ...prev,
      category: searchParams.get("category") || "",
    }));
  }, [searchParams]);

  const filtered = properties.filter((p) => {
    return (
      (filter.category ? p.category === filter.category : true) &&
      (filter.type ? p.type === filter.type : true)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto pt-24">
        <h1 className="text-2xl font-bold mb-4">Properties</h1>

        <div className="flex gap-4 mb-6">
          <select
            value={filter.category}
            onChange={(e) =>
              setFilter({ ...filter, category: e.target.value })
            }
            className="border p-2 rounded"
          >
            <option value="">All Categories</option>
            <option value="villa">Villa</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="land">Land</option>
            <option value="commercial">Commercial</option>
          </select>

          <select
            value={filter.type}
            onChange={(e) =>
              setFilter({ ...filter, type: e.target.value })
            }
            className="border p-2 rounded"
          >
            <option value="">All Types</option>
            <option value="sale">Sale</option>
            <option value="rent">Rent</option>
            <option value="lease">Lease</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <div key={p._id} className="bg-white rounded shadow p-3">
              <img
                src={`http://localhost:5000/uploads/${p.image}`}
                alt={p.name}
                className="w-full h-40 object-cover rounded"
              />

              <h3 className="font-semibold mt-2">{p.name}</h3>
              <p>{p.location}</p>
              <p className="text-blue-600">₹ {p.price}</p>

              <div className="flex gap-2 mt-2 text-sm">
                <span className="bg-gray-200 px-2 py-1 rounded">
                  {p.category}
                </span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {p.type}
                </span>
              </div>

              <Link
                to={`/property/${p._id}`}
                className="text-blue-500 mt-3 inline-block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Properties;