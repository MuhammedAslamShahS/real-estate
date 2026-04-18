import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "../components/home/HeroSection";
import FeaturedProperties from "../components/home/FeaturedProperties";
import CategorySection from "../components/home/CategorySection";
import ExpertiseSection from "../components/home/ServicesSection";
import GuidesSection from "../components/home/GuidesSection";
import Toplocations from "../components/home/WhyChooseUs";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <HeroSection />
            <FeaturedProperties />
            <CategorySection />
            <Toplocations />
            <ExpertiseSection />
            <GuidesSection />

            <Footer />
        </div>
    );
};

export default Home;
