/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { projects, frameworks, Project } from "./data";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectsPage: React.FC = () => {
    const projectsValues = Object.values(projects);

    return (
        <section
            id="projects"
            className="w-full min-h-screen text-white flex flex-col pt-25 py-6"
        >
            <h2 className="text-accent text-4xl md:text-5xl font-bold col-span-3 text-center mb-30">
                Projects
            </h2>

            <div className="w-full flex flex-col gap-40">
                {projectsValues.map((project: Project, index: number) => (
                    <div
                        key={project.title}
                        className={`w-full flex flex-col ${
                            index % 2 === 0
                                ? "md:flex-row"
                                : "md:flex-row-reverse"
                        } rounded-lg overflow-hidden shadow-lg`}
                    >
                        {/* Image Carousel */}
                        <div className="md:flex-none w-full md:w-2/3">
                            <div className="flex items-center justify-center h-full px-10">
                                <Swiper
                                    effect="coverflow"
                                    grabCursor
                                    centeredSlides
                                    slidesPerView="auto"
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                    navigation
                                    pagination={{ clickable: true }}
                                    modules={[
                                        EffectCoverflow,
                                        Navigation,
                                        Pagination,
                                    ]}
                                    className="h-150"
                                >
                                    {project.images.map(
                                        (image: string, idx: number) => (
                                            <SwiperSlide
                                                key={idx}
                                                className="w-80 h-96"
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${project.title} ${
                                                        idx + 1
                                                    }`}
                                                    className="object-cover w-full rounded"
                                                />
                                            </SwiperSlide>
                                        )
                                    )}
                                </Swiper>
                            </div>
                        </div>

                        <span className="flex-1" />

                        {/* Project Info */}
                        <div className="w-full md:w-1/3 p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-semibold mb-4">
                                    {project.title}
                                </h3>
                                <p className="mb-4">{project.description}</p>

                                {/* Skills + Icons */}
                                <div className="flex flex-wrap gap-3 mb-4">
                                    {project.skills.map((skill: string) => {
                                        let url: string | null = null;
                                        for (const group in frameworks) {
                                            url = frameworks[group][skill];
                                            if (url) break;
                                        }

                                        return (
                                            <div
                                                key={skill}
                                                className="flex items-center gap-2 bg-slate-700 px-3 py-1 rounded-full text-sm"
                                            >
                                                {url && (
                                                    <img
                                                        src={`icons/${url}`}
                                                        alt={skill}
                                                        className="w-5 h-5"
                                                    />
                                                )}
                                                <span>{skill}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* GitHub Button */}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition"
                                >
                                    <FaGithub className="mr-2" /> View on GitHub
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;
