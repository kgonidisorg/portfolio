/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen text-white px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-10"
        >
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src="/profile.jpg"
                    alt="Kiron Gonidis"
                    className="rounded-full shadow-lg border-4 border-accent"
                    width={240}
                    height={240}
                />
            </div>

            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-accent">
                    About Me
                </h2>
                <p className="text-base md:text-lg lg:text-lg leading-relaxed lg:pr-20 xl:pr-30 2xl:pr-60">
                    I’m a{" "}
                    <strong className="text-accent">
                        Senior Full Stack Developer
                    </strong>{" "}
                    passionate about building fast, scalable web applications
                    and cloud systems that make an impact. From designing
                    intuitive <strong className="text-accent">frontend</strong>{" "}
                    experiences to architecting resilient{" "}
                    <strong className="text-accent">backend</strong> solutions,
                    I specialize in creating infrastructure that scales
                    seamlessly. I thrive on solving complex challenges —
                    blending <strong className="text-accent">cloud</strong>,{" "}
                    <strong className="text-accent">IoT</strong>, and modern
                    development practices to deliver innovative and reliable
                    software solutions.
                </p>
            </div>
        </section>
    );
};

export default About;
