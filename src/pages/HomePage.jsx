import About from "../components/About";
import Course from "../components/Course";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import HeroSec from "../components/Hero";
import Navbar from "../components/Navbar";
import Why from "../components/Whythis";

function HomePage() {
    return ( 
        <div>
            <div className="mb-0">
                <Navbar />
            </div>
            <HeroSec />
            <About />
            <Course />
            <Why />
            <Faqs />
            <Footer />
        </div>
    );
}

export default HomePage;