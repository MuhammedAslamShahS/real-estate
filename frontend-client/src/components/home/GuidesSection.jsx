import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How to book a property visit?",
    answer:
      "You can book a visit by clicking on the property and selecting 'Schedule Visit' or by contacting our agent directly.",
  },
  {
    question: "Do you provide loan assistance?",
    answer:
      "Yes, we help connect you with trusted banks and financial partners for home loan support.",
  },
  {
    question: "What documents are required?",
    answer:
      "Basic documents include ID proof, address proof, income proof, and bank statements. Our team will guide you step by step.",
  },
  {
    question: "What is the difference between rent and lease?",
    answer:
      "Rent is usually short-term (monthly), while lease is a long-term agreement with fixed terms and conditions.",
  },
  {
    question: "What is the commission structure?",
    answer:
      "Our commission depends on the property type and deal value. We maintain complete transparency with no hidden charges.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-600 mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-lg md:text-xl text-[#4b5563] max-w-2xl">
            Got questions? We’ve got answers. Here are some common queries to help you get started.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-[#2f2f35] mb-2">
                {item.question}
              </h3>

              <p className="text-[#4b5563] leading-7">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Link to="/contact">
            <Button className="bg-[#0156ac] hover:bg-[#004a95] text-white font-semibold text-lg px-8 py-3 rounded-xl">
              Contact Us
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;