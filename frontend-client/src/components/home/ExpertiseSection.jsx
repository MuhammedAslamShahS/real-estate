import React from "react";

const ExpertiseSection = () => {
  return (
    <section className="bg-[#f3f3f3] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#d6e7f9] rounded-3xl min-h-[420px] overflow-hidden px-8 md:px-16 py-12 flex items-center">
          
          {/* Left Content */}
          <div className="w-full md:w-[58%] z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2f2f35] leading-tight mb-6">
              Built on decades of expertise
            </h2>

            <p className="text-[#2f2f35] text-lg leading-10 max-w-2xl mb-8">
              Based in Switzerland, we've built the most comprehensive property
              database in the market, with over 3 million listings in more than
              50 countries.
              <br />
              Whether you're buying your first home, investing, or planning a
              relocation, our global listings and smart search filters make it
              easy to find exactly what you’re looking for, wherever you are.
            </p>

            <button className="bg-[#0156ac] hover:bg-[#004a95] text-white font-semibold text-xl px-8 py-4 rounded-xl transition">
              Get to know us
            </button>
          </div>

          {/* Right Image */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[38%] h-[78%]">
            <div className="bg-white rounded-2xl p-4 h-full shadow-sm">
              <img
                src="/images/expertise-man.jpg"
                alt="Expertise"
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

export default ExpertiseSection;
