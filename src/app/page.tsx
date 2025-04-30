import React from "react";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

const Home: React.FC = () => {
    return (
        <div className="relative">
            {/* Navbar stays fixed at the top */}
            <Navbar />

            {/* Main content sections */}
            <div className="">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </div>
    );
};

export default Home;
