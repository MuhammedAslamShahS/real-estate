import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services = () => {
  const services = [
    {
      title: "Property Buying",
      description:
        "We help you find the right property based on your budget, location, and needs.",
    },
    {
      title: "Property Selling",
      description:
        "We support property owners in listing, promoting, and selling their properties smoothly.",
    },
    {
      title: "Rental Services",
      description:
        "Find rental homes, apartments, and commercial spaces easily with our guidance.",
    },
    {
      title: "Property Investment",
      description:
        "Get expert support in choosing properties with strong investment potential.",
    },
    {
      title: "Legal Support",
      description:
        "We assist with documentation, verification, and basic legal procedures in real estate deals.",
    },
    {
      title: "Consultation",
      description:
        "Our team provides clear advice to help you make confident property decisions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              We provide simple and reliable real estate services to help you
              buy, sell, rent, and invest with confidence.
            </p>
          </div>
        </section>

        {/* Services Cards */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-7">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-8">
              We focus on giving our clients a smooth and transparent experience.
              From the first inquiry to the final deal, our goal is to provide
              trusted support, clear communication, and quality service.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;