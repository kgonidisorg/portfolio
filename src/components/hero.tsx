"use client";
import React, { useState, useEffect } from "react";

const heading1 = "I'm ";
const heading2 = "Kiron.";
const heading3 = "Tech Leader and End-to-End Digital Experience Architect";
const Hero: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [currentHeading, setCurrentHeading] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentHeading === 0 && index < heading1.length) {
                setIndex((prevIndex) => prevIndex + 1);
            } else if (currentHeading === 0 && index === heading1.length) {
                setCurrentHeading(1);
                setIndex(0);
            } else if (currentHeading === 1 && index < heading2.length) {
                setIndex((prevIndex) => prevIndex + 1);
            } else if (currentHeading === 1 && index === heading2.length) {
                setCurrentHeading(2);
                setIndex(0);
            } else if (currentHeading === 2 && index < heading3.length) {
                setIndex((prevIndex) => prevIndex + 1);
            } else {
                setCurrentHeading(3);
                clearInterval(interval);
            }
        }, 60); // Adjust typing speed here (40ms per character)
        return () => clearInterval(interval);
    }, [index, currentHeading]);

    const h1 = currentHeading === 0 ? heading1.substring(0, index) : heading1;
    const h2 = () => {
        if (currentHeading < 1) return null;
        if (currentHeading === 1) {
            return (
                <span className="text-accent">
                    {heading2.substring(0, index)}
                </span>
            );
        }
        return <span className="text-accent">{heading2}</span>;
    };
    const h3 = () => {
        if (currentHeading < 2) return null;
        if (currentHeading === 2) {
            return (
                <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light mt-4">
                    {heading3.substring(0, index)}
                </h1>
            );
        }
        return (
            <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light mt-4">
                {heading3}
            </h1>
        );
    };

    return (
        <section
            id="home"
            className="relative w-full h-full text-white flex items-center justify-start bg-cover xl:bg-right md:bg-left"
        >
            <div className="absolute top-0 left-0 w-full h-full inset-0 z-10 flex flex-col items-center justify-center text-center">
                {/* Typing Effect */}
                <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light">
                    {h1}
                    {h2()}
                </h1>
                {h3()}
                {/* Button */}
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
