import { useEffect, useState } from "react";

const initialFormState = {
  name: "",
  location: "",
  price: "",
  details: "",
};

const fields = [
  { label: "Property Name", name: "name" },
  { label: "Location", name: "location" },
  { label: "Price", name: "price" },
];

const PropertyForm = ({
  title,
  buttonText,
  initialData = initialFormState,
  onSubmit,
}) => {
  const [form, setForm] = useState(initialFormState);
  const [image, setImage] = useState(null);

  useEffect(() => {
    setForm(initialData || initialFormState);
  }, [initialData]);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      data.append(key, value);
    });

    if (image) data.append("image", image);

    onSubmit(data, () => {
      setForm(initialFormState);
      setImage(null);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>

        {fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block mb-2 font-medium">{field.label}</label>
            <input
              type="text"
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={`Enter ${field.label.toLowerCase()}`}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <div className="mb-4">
          <label className="block mb-2 font-medium">Details</label>
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            placeholder="Enter property details"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 h-28 resize-none"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Property Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-500 transition">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default PropertyForm;