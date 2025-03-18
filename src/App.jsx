import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Companies from "./components/companies/Companies";
import Pricing from "./components/pricing/Pricing";
import Earnings from "./components/earnings/Earnings";
import Status from "./components/status/Status";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        Aos.init({
            once: true, // Animates only once
            offset: 50, // Triggers animation earlier
            duration: 1000, // Adjust animation speed
        });
    }, []);

    // Function to handle smooth scrolling
    const scrollToSection = (className) => {
        setTimeout(() => {
            document.querySelector(`.${className}`)?.scrollIntoView({
                behavior: "smooth",
            });
        }, 100); // Small delay to prevent AOS interference
    };

    return (
        <>
            <Navbar scrollToSection={scrollToSection} />
            <Hero />
            <Companies />
            <Pricing />
            <Earnings />
            <Status />
            <Subscribe />
            <Footer />
        </>
    )
}

export default App;
