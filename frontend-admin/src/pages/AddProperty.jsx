import { useState } from "react";
import API from "../api/axios";

const AddProperty = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    price: "",
    details: "",
  });

  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", form.name);
    data.append("location", form.location);
    data.append("price", form.price);
    data.append("details", form.details);
    data.append("image", image);

    try {
      await API.post("/properties", data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      alert("Property added successfully");

      setForm({
        name: "",
        location: "",
        price: "",
        details: "",
      });
      setImage(null);
    } catch (err) {
      alert("Error adding property");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add Property
        </h2>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Property Name</label>
          <input
            type="text"
            placeholder="Enter property name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Location</label>
          <input
            type="text"
            placeholder="Enter location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Price</label>
          <input
            type="text"
            placeholder="Enter price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Details</label>
          <textarea
            placeholder="Enter property details"
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 h-28 resize-none"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Property Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-500 transition"
        >
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;