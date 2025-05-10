"use client";
import React from "react";
import MovingBackground from "./particle";

const Hero: React.FC = () => {
    // const handleScroll = (id: string) => {
    //     const el = document.getElementById(id);
    //     if (el) {
    //         el.scrollIntoView({ behavior: "smooth" });
    //     }
    // };

    return (
        <section
            id="home"
            className="relative w-full h-full text-white flex items-center justify-start bg-cover xl:bg-right md:bg-left"
        >
            <div className="absolute top-0 left-0 w-full h-full inset-0 z-10 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-6xl font-light">
                    I&apos;m <span className="text-accent">Kiron</span>.<br/>I make
                    things on the internet.
                </h1>
                <button
                    onClick={() => {
                        const aboutSection = document.getElementById("about");
                        if (aboutSection) {
                            aboutSection.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                    className="mt-6 px-6 py-3 border border-accent text-accent rounded-lg shadow hover:bg-accent hover:text-primary transition"
                >
                    Learn More
                </button>
            </div>
        </section>
    );

    // return (
    //     <section
    //         id="home"
    //         className="min-h-screen bg-primary text-white flex items-center justify-start px-8 py-16 bg-cover xl:bg-right md:bg-left"
    //         style={{ backgroundImage: "url('/cloud.jpg')" }}
    //     >
    //         <div className="max-w-2xl w-full md:ml-12 lg:ml-16 xl:ml-28 text-left space-y-6">
    //             <h1 className="text-5xl font-extrabold leading-tight">
    //                 Architecting Intelligent, Scalable Systems
    //             </h1>
    //             <p className="text-2xl md:text-3xl text-slate-100 font-semibold shadow-lg">
    //                 15+ years architecting cloud-native platforms, advanced systems,
    //                 and cutting-edge machine learning solutions — leading teams that deliver
    //                 world-class software.
    //             </p>
    //             <div className="flex gap-4 mt-6">
    //                 <button
    //                     onClick={() => handleScroll("projects")}
    //                     className="px-6 py-3 bg-accent text-white rounded-lg shadow hover:bg-sky-500 transition"
    //                 >
    //                     See My Work
    //                 </button>
    //                 <button
    //                     onClick={() => handleScroll("contact")}
    //                     className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-primary transition"
    //                 >
    //                     Contact Me
    //                 </button>
    //             </div>
    //             <div className="mt-16 animate-bounce text-slate-400">
    //                 ↓ Scroll to explore
    //             </div>
    //         </div>
    //     </section>
    // );
};

export default Hero;
