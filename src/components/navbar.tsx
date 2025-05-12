"use client";
import React from "react";
import { useScreenSize } from "./utils";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const { isMobile } = useScreenSize();
    const scrollby = 150; // Adjust this value to change the scroll offset

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const yOffset = isMobile ? -scrollby : 0; // Adjust for mobile
            const y =
                section.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
        setIsMobileMenuOpen(false); // Close menu on navigation
    };

    return (
        <nav className="w-full sticky top-0 inset-0 bg-black bg-opacity-20 text-white shadow-md z-50 border border-accent">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div
                    className="flex items-center cursor-pointer space-x-2"
                    onClick={() => handleScroll("home")}
                >
                    <span className="text-lg font-bold">Kiron Gonidis</span>
                </div>
                <div className="hidden md:flex space-x-6">
                    {["about", "skills", "projects", "contact"].map(
                        (section) => (
                            <button
                                key={section}
                                onClick={() => handleScroll(section)}
                                className="hover:text-accent transition-colors cursor-pointer"
                            >
                                {section.charAt(0).toUpperCase() +
                                    section.slice(1)}
                            </button>
                        )
                    )}
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    isMobileMenuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black bg-opacity-90 text-white">
                    <button
                        onClick={() => handleScroll("about")}
                        className="block w-full text-left px-4 py-2 hover:bg-accent hover:text-black transition-colors"
                    >
                        About
                    </button>
                    <button
                        onClick={() => handleScroll("skills")}
                        className="block w-full text-left px-4 py-2 hover:bg-accent hover:text-black transition-colors"
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => handleScroll("projects")}
                        className="block w-full text-left px-4 py-2 hover:bg-accent hover:text-black transition-colors"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => handleScroll("contact")}
                        className="block w-full text-left px-4 py-2 hover:bg-accent hover:text-black transition-colors"
                    >
                        Contact
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
