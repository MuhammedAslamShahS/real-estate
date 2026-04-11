import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const categories = [
  {
    name: "Villa",
    value: "villa",
    description: "Luxury and premium villa properties",
  },
  {
    name: "Apartment",
    value: "apartment",
    description: "Modern apartments in prime locations",
  },
  {
    name: "House",
    value: "house",
    description: "Comfortable family houses",
  },
  {
    name: "Land",
    value: "land",
    description: "Residential and commercial land options",
  },
  {
    name: "Commercial",
    value: "commercial",
    description: "Offices, shops, and commercial spaces",
  },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">Categories</h1>
        <p className="text-gray-600 mb-8">
          Browse properties based on category
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.value}
              to={`/properties?category=${category.value}`}
              className="bg-white rounded-xl shadow hover:shadow-none p-6 "
            >
              <h2 className="text-xl font-semibold mb-2">
                {category.name}
              </h2>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;