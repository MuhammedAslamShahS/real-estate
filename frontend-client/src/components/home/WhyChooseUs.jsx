import React from "react";

const features = [
  {
    id: 1,
    title: "Verified Properties",
    desc: "All listings are carefully verified to ensure authenticity and transparency.",
    image: "/images/h1-1.jpg",
  },
  {
    id: 2,
    title: "Expert Guidance",
    desc: "Our experienced agents help you at every step of your property journey.",
    image: "/images/h2-1.jpg",
  },
  {
    id: 3,
    title: "Global Reach",
    desc: "Access properties across multiple countries with ease and confidence.",
    image: "/images/h3-1.jpg",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-600">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Big Card */}
          <div className="lg:col-span-2 relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden group">
            <img
              src={features[0].image}
              alt={features[0].title}
              loading="lazy"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105 bg-gray-200"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl md:text-4xl font-bold mb-2">
                {features[0].title}
              </h3>
              <p className="max-w-md text-sm md:text-base">
                {features[0].desc}
              </p>
            </div>
          </div>

          {/* Right Small Cards */}
          <div className="flex flex-col gap-6">
            {features.slice(1).map((item) => (
              <div
                key={item.id}
                className="relative h-[220px] md:h-[238px] rounded-3xl overflow-hidden group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105 bg-gray-200"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;