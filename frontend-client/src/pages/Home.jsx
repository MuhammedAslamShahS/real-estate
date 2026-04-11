import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "../components/home/HeroSection";
import FeaturedProperties from "../components/home/FeaturedProperties";
import CategorySection from "../components/home/CategorySection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <HeroSection />
      <FeaturedProperties />
      <CategorySection />

      <Footer />
    </div>
  );
};

export default Home;