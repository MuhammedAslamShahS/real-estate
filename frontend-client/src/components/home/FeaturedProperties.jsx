import { useEffect, useState } from "react";
import API from "../../api/axios.js";
import { Link } from "react-router-dom";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchProperties = async () => {
      try {
        const res = await API.get("/properties");

        if (isMounted) {
          const latestUpdated = [...res.data.data].sort(
            (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
          );

          setProperties(latestUpdated.slice(0, 6));
        }
      } catch (err) {
        console.log(err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProperties();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Properties</h2>
        <Link to="/properties" className="text-blue-600">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading &&
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded shadow p-3">
              <div className="w-full h-40 rounded bg-gray-200 animate-pulse" />
              <div className="h-5 bg-gray-200 rounded mt-3 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded mt-2 w-3/4 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded mt-2 w-1/2 animate-pulse" />
            </div>
          ))}

        {properties.map((p) => (
          <div key={p._id} className="bg-white rounded shadow p-3">
            <img
              src={`http://localhost:5000/uploads/${p.image}`}
              alt={p.name}
              loading="lazy"
              className="w-full h-40 object-cover rounded bg-gray-200"
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
  );
};

export default FeaturedProperties;
