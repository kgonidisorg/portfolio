/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen bg-primary text-white px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-10"
        >
            <div className="md:w-1/2 flex justify-center">
                <img
                    src="/profile.jpg"
                    alt="Kiron Gonidis"
                    className="rounded-full shadow-lg border-4 border-accent"
                    width={320}
                    height={320}
                />
            </div>

            <div className="md:w-1/2 space-y-6 text-center md:text-left">
                <h2 className="text-4xl font-bold text-accent">About Me</h2>
                <p className="text-lg leading-relaxed">
                    I&apos;m Kiron Gonidis — a software architect, cloud
                    engineer, and machine learning specialist with over 15 years
                    of experience. I’ve led teams and designed systems across
                    energy infrastructure, urban rail, and embedded IoT, always
                    focusing on reliability, scale, and innovation.
                </p>
                <p className="text-lg leading-relaxed">
                    I build platforms that integrate cloud, ML, and embedded
                    hardware — thriving at the intersection of big ideas and
                    real-world implementation. I&apos;m currently exploring
                    opportunities to build the next generation of intelligent,
                    connected systems.
                </p>
            </div>
        </section>
    );
};

export default About;
