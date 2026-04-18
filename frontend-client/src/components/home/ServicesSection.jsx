import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="bg-[#f3f3f3] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#e2e7eb] rounded-3xl min-h-[420px] overflow-hidden px-8 md:px-16 py-12 flex items-center">
          
          {/* Left Content */}
          <div className="w-full md:w-[58%] z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2f2f35] leading-tight mb-6">
              Our Real Estate Services
            </h2>

            <p className="text-[#2f2f35] text-lg leading-8 max-w-2xl mb-8">
              We offer end-to-end real estate solutions tailored to your needs. 
              Whether you're buying, selling, renting, or investing, our expert 
              team ensures a smooth and transparent experience at every step.
            </p>

            {/* Services List */}
            <ul className="mb-8 space-y-2 text-[#2f2f35] font-medium">
              <li> Property Buying Assistance</li>
              <li> Property Selling Support</li>
              <li> Rental & Leasing Services</li>
              <li> Investment Consultation</li>
              <li> Legal & Documentation Help</li>
            </ul>

            <Link to="/services">
              <Button className="bg-[#0156ac] hover:bg-[#004a95] text-white font-semibold text-lg px-8 py-3 rounded-xl">
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[38%] h-[78%]">
            <div className="bg-white rounded-2xl h-full">
              <img
                src="/images/h4-1.jpg"
                alt="Services"
                loading="lazy"
                className="w-full h-full object-cover rounded-xl bg-gray-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;