import React from "react";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import MovingBackground from "@/components/particle";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

const Home: React.FC = () => {
    return (
        <div className="relative">
            {/* Top Section */}
            {/* Background particles for top */}
            <div className="relative w-full h-screen bg-black z-10">
                <MovingBackground zIndex={10} />
                <div className="absolute top-0 left-0 w-full h-screen inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
                    <Hero />
                </div>
            </div>
            {/* Moving background particles that is behind the top section and takes up the entire parent */}
            <div className="absolute top-0 left-0 w-full h-full inset-0 z-0">
                <MovingBackground
                    hero={false}
                    highlight={false}
                    velocity={0.75}
                    zIndex={0}
                    fixed={true}
                />
            </div>
            <div className="relative z-20">
                <Navbar />
                <div className="px-4">
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default Home;
