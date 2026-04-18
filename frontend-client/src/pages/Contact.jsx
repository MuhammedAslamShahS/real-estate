import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl min-h-screen mx-auto pt-24">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <form className="bg-white p-6 rounded shadow max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-3 p-2 border rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-3 p-2 border rounded"
          />

          <textarea
            placeholder="Your Message"
            className="w-full mb-3 p-2 border rounded"
          />

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;