"use client";
import React from "react";

const Hero: React.FC = () => {
    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen bg-primary text-white flex items-center justify-start px-8 py-16 bg-cover xl:bg-right md:bg-left"
            style={{ backgroundImage: "url('/cloud.jpg')" }}
        >
            <div className="max-w-2xl w-full md:ml-12 lg:ml-16 xl:ml-28 text-left space-y-6">
                <h1 className="text-5xl font-extrabold leading-tight">
                    Architecting Intelligent, Scalable Systems
                </h1>
                <p className="text-xl text-slate-200">
                    15+ years building cloud-native platforms, embedded
                    software, and machine learning pipelines. I lead teams that
                    deliver resilient, secure, and forward-thinking software
                    solutions.
                </p>
                <div className="flex gap-4 mt-6">
                    <button
                        onClick={() => handleScroll("projects")}
                        className="px-6 py-3 bg-accent text-white rounded-lg shadow hover:bg-sky-500 transition"
                    >
                        See My Work
                    </button>
                    <button
                        onClick={() => handleScroll("contact")}
                        className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-primary transition"
                    >
                        Contact Me
                    </button>
                </div>
                <div className="mt-16 animate-bounce text-slate-400">
                    ↓ Scroll to explore
                </div>
            </div>
        </section>
    );
};

export default Hero;
