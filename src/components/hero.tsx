"use client";
import React from "react";

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="relative w-full h-full text-white flex items-center justify-start bg-cover xl:bg-right md:bg-left"
        >
            <div className="absolute top-0 left-0 w-full h-full inset-0 z-10 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-6xl font-light">
                    I&apos;m <span className="text-accent">Kiron</span>.<br />I
                    make things on the internet.
                </h1>
                <button
                    onClick={() => {
                        const aboutSection = document.getElementById("about");
                        if (aboutSection) {
                            aboutSection.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                    className="mt-6 px-6 py-3 border border-accent text-accent hover:border-white hover:text-white transition cursor-pointer"
                >
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default Hero;
