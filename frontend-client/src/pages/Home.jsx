import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "../components/home/HeroSection";
import FeaturedProperties from "../components/home/FeaturedProperties";
import CategorySection from "../components/home/CategorySection";
import ExpertiseSection from "../components/home/ExpertiseSection";
import GuidesSection from "../components/home/GuidesSection";
import Toplocations from "../components/home/Toplocations";

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
