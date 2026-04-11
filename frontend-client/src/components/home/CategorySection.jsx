import { Link } from "react-router-dom";

const CategorySection = () => {
  const categories = ["villa", "apartment", "house", "land", "commercial"];

  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Browse by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/properties?category=${cat}`}
              className="bg-gray-100 p-6 text-center rounded hover:bg-blue-100"
            >
              <p className="font-semibold capitalize">{cat}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;