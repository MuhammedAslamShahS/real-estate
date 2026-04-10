import { useEffect, useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/properties/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      const res = await API.get("/properties");
      setProperties(res.data.data);
    } catch (error) {
      console.error("Delete error", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/properties");
        setProperties(res.data.data);
      } catch (error) {
        console.error("Error fetching properties", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {properties.map((p) => (
        <div key={p._id}>
          {p.image && (
            <img
              src={`http://localhost:5000/uploads/${p.image}`}
              width="100"
              alt={p.name}
            />
          )}

          <h3>{p.name}</h3>

          <Link to={`/edit-property/${p._id}`}>Edit</Link>
          <button onClick={() => handleDelete(p._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;