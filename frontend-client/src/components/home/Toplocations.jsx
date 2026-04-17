import React from "react";
import { Link } from "react-router-dom";

const locations = [
    {
        id: 1,
        name: "Punta Cana",
        image: "/images/punta-cana.jpg",
        link: "/properties?location=punta-cana",
    },
    {
        id: 2,
        name: "Puerto Plata",
        image: "images/Santo-Domingo.jpg",
        link: "/properties?location=puerto-plata",
    },
    {
        id: 3,
        name: "Santo Domingo",
        image: "/images/puertoplata.jpg",
        link: "/properties?location=santo-domingo",
    },
];

const Toplocations = () => {
    return (
        <section className="bg-[#f5f5f5] py-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2f2f35] mb-10">
                    Properties for sale in the Dominican Republic
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Big Card */}
                    <Link
                        to={locations[0].link}
                        className="lg:col-span-2 relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden group"
                    >
                        <img
                            src={locations[0].image}
                            alt={locations[0].name}
                            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                        <h3 className="absolute bottom-6 left-6 text-white text-2xl md:text-4xl font-bold">
                            {locations[0].name}
                        </h3>
                    </Link>

                    {/* Right Small Cards */}
                    <div className="flex flex-col gap-6">
                        {locations.slice(1).map((item) => (
                            <Link
                                key={item.id}
                                to={item.link}
                                className="relative h-[220px] md:h-[238px] rounded-3xl overflow-hidden group"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20"></div>
                                <h3 className="absolute bottom-6 left-6 text-white text-2xl md:text-3xl font-bold">
                                    {item.name}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Toplocations;
