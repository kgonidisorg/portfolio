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
                                ? "lg:flex-row"
                                : "lg:flex-row-reverse"
                        } rounded-lg overflow-hidden shadow-lg lg:h-3/4`}
                    >
                        {/* Image Carousel */}
                        <div className="md:flex-none w-full lg:w-2/3">
                            <div className="flex items-center justify-center lg:h-full px-2 lg:px-10">
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
                                    pagination={{ clickable: true }}
                                    navigation={{
                                        prevEl: ".swiper-button-prev",
                                        nextEl: ".swiper-button-next",
                                    }}
                                    modules={[
                                        EffectCoverflow,
                                        Navigation,
                                        Pagination,
                                    ]}
                                    className="mb-5 lg:mb-0 relative"
                                    onClick={(swiper, e) => {
                                        const rect =
                                            swiper.el.getBoundingClientRect();
                                        let clickX = 0;
                                        if ("clientX" in e) {
                                            clickX = e.clientX - rect.left;
                                        } else {
                                            return;
                                        }

                                        if (clickX > rect.width / 2) {
                                            swiper.slideNext();
                                        } else {
                                            swiper.slidePrev();
                                        }
                                    }}
                                >
                                    {project.images.map(
                                        (image: string, idx: number) => (
                                            <SwiperSlide
                                                key={idx}
                                                className="w-64 h-64 md:w-80 md:h-96"
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${project.title} ${
                                                        idx + 1
                                                    }`}
                                                    className="object-cover w-full rounded cursor-pointer"
                                                />
                                            </SwiperSlide>
                                        )
                                    )}
                                    <div className="swiper-button-prev swiper-hidden"></div>
                                    <div className="swiper-button-next swiper-hidden"></div>
                                </Swiper>
                            </div>
                        </div>

                        <span className="flex-1" />

                        {/* Project Info */}
                        <div className="w-full lg:w-1/3 px-2 lg:px-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-sm lg:text-base mb-4">
                                    {project.description}
                                </p>

                                {/* Skills + Icons */}
                                <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                                    {project.skills.map((skill: string) => {
                                        let url: string | null = null;
                                        for (const group in frameworks) {
                                            url = frameworks[group][skill];
                                            if (url) break;
                                        }

                                        return (
                                            <div
                                                key={skill}
                                                className="flex items-center gap-2 bg-slate-700 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm"
                                            >
                                                {url && (
                                                    <img
                                                        src={`icons/${url}`}
                                                        alt={skill}
                                                        className="w-4 h-4 md:w-5 md:h-5"
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
                                    className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition text-sm md:text-base"
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
