import { Link } from "react-router-dom";

const CategorySection = () => {
  const categories = [
    { name: "villa", image: "/images/hero1.jpg" },
    { name: "apartment", image: "/images/apartment.jpg" },
    { name: "house", image: "/images/hero3.jpg" },
    { name: "land", image: "/images/land.jpg" },
    { name: "commercial", image: "/images/commercial.jpg" },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Browse by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((item) => (
            <Link
              key={item.name}
              to={`/properties?category=${item.name}`}
              className="relative h-[250px] rounded overflow-hidden group"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-100 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white font-semibold capitalize text-lg">
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;