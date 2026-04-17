import React from "react";
import { Link } from "react-router-dom";

const guides = [
  {
    id: 1,
    title: "Living and investing in Mexico",
    description: "Everything you need to know about living and investing in Mexico as a foreigner",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    link: "/guides/mexico",
  },
  {
    id: 2,
    title: "Living and investing in the Dominican Republic",
    description: "Everything you need to know about living and investing in the Dominican Republic as a foreigner",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    link: "/guides/dominican-republic",
  },
  {
    id: 3,
    title: "Living and investing in Italy",
    description: "Everything you need to know about living and investing in Italy as a foreigner",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    link: "/guides/italy",
  },
  {
    id: 4,
    title: "Living and investing in Portugal",
    description: "Everything you need to know about living and investing in Portugal as a foreigner",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    link: "/guides/portugal",
  },
];

const GuidesSection = () => {
    return (
        <section className="bg-[#f5f5f5] py-16">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2f2f35] leading-tight mb-5">
                        Not sure where to start? Check out our international real estate guides
                    </h2>

                    <p className="text-lg md:text-2xl text-[#2f2f35] leading-relaxed">
                        Looking to buy a home abroad? Our real estate guides offer expert advice to help you navigate the
                        process with confidence.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {guides.map((guide) => (
                        <Link key={guide.id} to={guide.link} className="group block">
                            <div className="w-[300px] h-[180px] overflow-hidden rounded-2xl mb-4">
                                <img
                                    src={guide.image}
                                    alt={guide.title}
                                    className="w-full h-[360px] object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-[#2f2f35] leading-snug mb-2">{guide.title}</h3>

                            <p className="text-[#4b5563] text-lg leading-relaxed">{guide.description}</p>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <Link
                        to="/guides"
                        className="bg-[#0156ac] hover:bg-[#004a95] text-white font-semibold text-xl px-8 py-4 rounded-xl transition"
                    >
                        Explore all guides
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GuidesSection;
