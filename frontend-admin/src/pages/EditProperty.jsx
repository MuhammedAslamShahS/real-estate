import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    location: "",
    price: "",
    details: "",
  });

  const [image, setImage] = useState(null);

  // 🔹 fetch single property
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await API.get(`/properties/${id}`);
        const data = res.data.data;

        setForm({
          name: data.name,
          location: data.location,
          price: data.price,
          details: data.details,
        });
      } catch (error) {
        console.error("Error fetching property", error);
      }
    };

    fetchProperty();
  }, [id]);

  // 🔹 update property
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", form.name);
    data.append("location", form.location);
    data.append("price", form.price);
    data.append("details", form.details);

    if (image) {
      data.append("image", image);
    }

    try {
      await API.put(`/properties/${id}`, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      alert("Property updated successfully");
      navigate("/properties");
    } catch (error) {
      console.error(error);
      alert("Error updating property");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Edit Property
        </h2>

        <input
          type="text"
          value={form.name}
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full mb-3 p-3 border rounded"
        />

        <input
          type="text"
          value={form.location}
          placeholder="Location"
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
          className="w-full mb-3 p-3 border rounded"
        />

        <input
          type="text"
          value={form.price}
          placeholder="Price"
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
          className="w-full mb-3 p-3 border rounded"
        />

        <textarea
          value={form.details}
          placeholder="Details"
          onChange={(e) =>
            setForm({ ...form, details: e.target.value })
          }
          className="w-full mb-3 p-3 border rounded"
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Update Property
        </button>
      </form>
    </div>
  );
};

export default EditProperty;