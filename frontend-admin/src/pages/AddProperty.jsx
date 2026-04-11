import API from "../api/axios";
import PropertyForm from "../components/PropertyForm";

const AddProperty = () => {
  const handleAddProperty = async (data, resetForm) => {
    try {
      await API.post("/properties", data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      alert("Property added successfully");
      resetForm();
    } catch (err) {
      console.log(err);
      alert("Error adding property");
    }
  };

  return (
    <PropertyForm
      title="Add Property"
      buttonText="Add Property"
      onSubmit={handleAddProperty}
    />
  );
};

export default AddProperty;