import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Find Your Dream Property",
    subtitle: "Buy, Rent or Lease properties easily with us",
    image: "/images/hero1.jpg",
  },
  {
    title: "Best Deals in Your City",
    subtitle: "Affordable homes with premium features",
    image: "/images/hero2.jpg",
  },
  {
    title: "Trusted Real Estate Platform",
    subtitle: "Safe and secure property transactions",
    image: "/images/hero3.jpg",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const currentSlide = slides[index];

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // auto change
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[90vh] text-white relative overflow-hidden flex items-center justify-center bg-gray-900">
      <img
        src={currentSlide.image}
        alt=""
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {currentSlide.title}
        </h1>

        <p className="text-lg text-gray-200 mb-6">
          {currentSlide.subtitle}
        </p>

        <Link
          to="/properties"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
        >
          Browse Properties
        </Link>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
