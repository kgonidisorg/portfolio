"use client";
import React from "react";

const projects = [
  {
    title: "Big Data Pipeline",
    front: "EV Charging Data & ML",
    back: "Designed a scalable pipeline for energy systems with ML-driven anomaly & fraud detection. Delivered dashboards and a mobile app."
  },
  {
    title: "EV Charge Controller",
    front: "Smart Grid Integration",
    back: "Led launch of charge controllers connected to Ford's network and utility grid services, enabling grants and strategic wins."
  },
  {
    title: "Urban Rail Positioning",
    front: "Real-time Train Analytics",
    back: "Built system to track 100+ trains with ML-enhanced positioning and safety metrics. Reduced downtime, improved maintenance, and security."
  },
  {
    title: "Jira Transformation",
    front: "Agile Multi-Team Sync",
    back: "Integrated Jira across departments with Agile best practices. Boosted executive reporting and cross-team visibility."
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-50 py-2 px-6 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Project Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {projects.map((project, i) => (
                <div
                    key={i}
                    className="group perspective w-80 h-60 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] transition-transform duration-700 relative"
                >
                    {/* Front */}
                    <div className="absolute w-full h-full rounded-xl bg-gray-700 text-gray-100 flex flex-col items-center justify-center text-center shadow-2xl transform transition-transform duration-700 [backface-visibility:hidden] border border-gray-600">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-md italic text-gray-300">{project.front}</p>
                    </div>

                    {/* Back */}
                    <div className="absolute w-full h-full rounded-xl bg-gray-100 text-gray-800 flex items-center justify-center text-center px-6 shadow-2xl transform rotate-y-180 transition-transform duration-700 [backface-visibility:hidden] border border-gray-300">
                        <p className="text-md font-medium leading-relaxed">{project.back}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Projects;
