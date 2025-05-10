"use client";
import React from "react";

const Navbar: React.FC = () => {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="absolute w-full sticky top-0 inset-0 bg-black bg-opacity-20 text-white shadow-md z-50 border border-accent">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div
                    className="flex items-center cursor-pointer space-x-2"
                    onClick={() => handleScroll("home")}
                >
                    <span className="text-lg font-bold">Kiron Gonidis</span>
                </div>
                <div className="space-x-6">
                    <button
                        onClick={() => handleScroll("about")}
                        className="hover:text-accent transition-colors"
                    >
                        About
                    </button>
                    <button
                        onClick={() => handleScroll("skills")}
                        className="hover:text-accent transition-colors"
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => handleScroll("projects")}
                        className="hover:text-accent transition-colors"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => handleScroll("contact")}
                        className="hover:text-accent transition-colors"
                    >
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
