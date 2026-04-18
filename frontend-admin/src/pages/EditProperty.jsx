import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";
import PropertyForm from "../components/PropertyForm";

const EditProperty = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const res = await API.get(`/properties/${id}`);
                const data = res.data.data;

                setProperty({
                    name: data.name || "",
                    location: data.location || "",
                    price: data.price || "",
                    details: data.details || "",
                    category: data.category || "",
                    type: data.type || "",
                });
            } catch (error) {
                console.error("Error fetching property", error);
            }
        };

        fetchProperty();
    }, [id]);

    const handleUpdateProperty = async (data) => {
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

    if (!property) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <PropertyForm
            title="Edit Property"
            buttonText="Update Property"
            initialData={property}
            onSubmit={handleUpdateProperty}
        />
    );
};

export default EditProperty;
