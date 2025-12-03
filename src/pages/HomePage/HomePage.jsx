import Hero from "../../components/Hero/Hero.jsx";
import TechStackMarquee from "../../components/TechStack/TechStackMarquee.jsx";
import FeaturedWork from "../../components/FeaturedProjects/FeaturedWork.jsx";
import './HomePage.css'


export function HomePage() {
    // Global topographic background is now applied via body element
    // No need for page-specific background

    return (
        <div className="home-page">
        <title>Paul Akelo</title>
            <Hero />
            <TechStackMarquee />
            <FeaturedWork />
        </div>
    );
}