import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios.js";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/useAuth.jsx";

const PropertyDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [property, setProperty] = useState(null);

  const fetchProperty = async () => {
    try {
      const res = await API.get(`/properties/${id}`);
      setProperty(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSave = async () => {
    try {
      await API.post(`/users/save/${property._id}`);
      alert("Property saved successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Error saving property");
      console.log(err);
    }
  };

  const handleEnquiry = async () => {
    try {
      await API.post("/enquiries", {
        propertyId: property._id,
        message: "Interested in this property",
      });

      alert("Enquiry sent successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Error sending enquiry");
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, [id]);

  if (!property) {
    return (
      <div>
        <Navbar />
        <div className="max-w-5xl mx-auto p-6">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src={`http://localhost:5000/uploads/${property.image}`}
            alt={property.name}
            className="w-full h-80 object-cover"
          />

          <div className="p-6">
            <h1 className="text-3xl font-bold">{property.name}</h1>

            <p className="text-gray-600 mt-2">{property.location}</p>

            <p className="text-blue-600 text-2xl font-semibold mt-3">
              ₹ {property.price}
            </p>

            <div className="flex gap-3 mt-4">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                Category: {property.category}
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                Type: {property.type}
              </span>
            </div>

            <p className="mt-6 text-gray-700 leading-7">{property.details}</p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-500 text-white px-5 py-2 rounded-lg"
              >
                Save Property
              </button>

              <button
                onClick={handleEnquiry}
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg"
              >
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;