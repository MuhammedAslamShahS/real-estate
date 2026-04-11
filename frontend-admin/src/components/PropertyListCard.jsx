import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";

const PropertyListCard = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoadingId, setDeleteLoadingId] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get("/properties");
        setProperties(data.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this property?")) return;

    try {
      setDeleteLoadingId(id);
      await API.delete(`/properties/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setProperties((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error(error);
    } finally {
      setDeleteLoadingId(null);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!properties.length) return <div className="min-h-screen flex items-center justify-center">No properties found.</div>;

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((p) => (
          <div key={p._id} className="bg-white rounded-xl overflow-hidden">
            {p.image ? (
              <img
                src={`http://localhost:5000/uploads/${p.image}`}
                alt={p.name}
                className="w-full h-56 object-cover"
              />
            ) : (
              <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}

            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{p.name}</h3>

              <div className="flex justify-between mt-4">
                <Link
                  to={`/edit-property/${p._id}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(p._id)}
                  disabled={deleteLoadingId === p._id}
                  className="px-4 py-2 bg-red-600 text-white rounded-md disabled:opacity-50"
                >
                  {deleteLoadingId === p._id ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListCard;