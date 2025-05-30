/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { projects, frameworks, Project } from "./data";
import {
    FaGithub,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectsPage: React.FC = () => {
    const projectsValues = Object.values(projects);

    return (
        <section
            id="projects"
            className="w-full min-h-screen text-white flex flex-col pt-25 py-6 overflow-hidden"
        >
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-accent text-4xl md:text-5xl font-bold col-span-3 text-center mb-30"
            >
                Projects
            </motion.h2>

            <div className="w-full flex flex-col gap-40 overflow-hidden">
                {projectsValues.map((project: Project, index: number) => (
                    <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        key={project.title}
                        className={`w-full flex flex-col ${
                            index % 2 === 0
                                ? "lg:flex-row"
                                : "lg:flex-row-reverse"
                        } rounded-lg overflow-hidden shadow-2xl lg:h-3/4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm`}
                    >
                        {/* Image Carousel */}
                        <div className="md:flex-none w-full lg:w-2/3 p-4">
                            <div className="flex items-center justify-center lg:h-full">
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
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    modules={[
                                        EffectCoverflow,
                                        Navigation,
                                        Pagination,
                                    ]}
                                    className="rounded-lg shadow-xl"
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
                                                    className="object-cover w-full h-full rounded-lg transform hover:scale-105 transition-transform duration-300"
                                                />
                                            </SwiperSlide>
                                        )
                                    )}
                                    {/* Custom Navigation Buttons */}
                                    <style>
                                        {`
                                            .swiper-button-prev::after,.swiper-button-next::after {
                                                content: none !important;
                                            }
                                            .swiper-button-prev.swiper-button-disabled,
                                            .swiper-button-next.swiper-button-disabled {
                                                display: none !important;
                                            }
                                            
                                            @media (max-width: 640px) {
                                                .swiper-button-prev,
                                                .swiper-button-next {
                                                    display: none !important;
                                                }
                                            }
                                        `}
                                    </style>
                                    <div
                                        className="swiper-button-prev flex items-center justify-center bg-black/30 hover:bg-black/40 focus:bg-black/50 transition-colors duration-200 p-0 rounded-none z-10"
                                        tabIndex={0}
                                        style={{
                                            height: "100%",
                                            position: "absolute",
                                            top: "0",
                                            margin: "0",
                                            left: "0",
                                            width: "50px",
                                            padding: "0 10px",
                                        }}
                                    >
                                        <FaChevronLeft className="text-white/50 hover:text-accent text-2xl" />
                                    </div>
                                    <div
                                        className="swiper-button-next flex items-center justify-center bg-black/30 hover:bg-black/40 focus:bg-black/50 transition-colors duration-200 p-0 rounded-none z-10"
                                        tabIndex={0}
                                        style={{
                                            height: "100%",
                                            position: "absolute",
                                            top: "0",
                                            margin: "0",
                                            right: "0",
                                            width: "50px",
                                            padding: "0 10px",
                                        }}
                                    >
                                        <FaChevronRight className="text-white/50 hover:text-accent text-2xl" />
                                    </div>
                                </Swiper>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="w-full lg:w-1/3 p-8 flex flex-col justify-between backdrop-blur-sm">
                            <div>
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="text-2xl lg:text-3xl font-semibold mb-4 text-accent"
                                >
                                    {project.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className="text-sm lg:text-base mb-6 leading-relaxed"
                                >
                                    {project.description}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    viewport={{ once: true }}
                                    className="flex flex-wrap gap-2 md:gap-3 mb-6"
                                >
                                    {project.skills.map((skill: string) => {
                                        let url: string | null = null;
                                        for (const group in frameworks) {
                                            url = frameworks[group][skill];
                                            if (url) break;
                                        }

                                        return (
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                key={skill}
                                                className="flex items-center gap-2 bg-accent/20 px-3 py-2 rounded-full text-xs md:text-sm hover:bg-accent/30 transition-colors"
                                            >
                                                {url && (
                                                    <img
                                                        src={`icons/${url}`}
                                                        alt={skill}
                                                        className="w-4 h-4 md:w-5 md:h-5"
                                                    />
                                                )}
                                                <span>{skill}</span>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </div>

                            <div className="flex flex-col">
                                {project.github && (
                                    <motion.a
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                        viewport={{ once: true }}
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-accent text-black font-semibold rounded-full hover:bg-accent/90 transition group"
                                    >
                                        <FaGithub className="mr-2 group-hover:rotate-12 transition-transform" />
                                        View on GitHub
                                    </motion.a>
                                )}
                                {project.demo && (
                                    <motion.a
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                        viewport={{ once: true }}
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-accent text-black font-semibold rounded-full hover:bg-accent/90 transition group mt-4"
                                    >
                                        <span className="mr-2 group-hover:rotate-12 transition-transform">
                                            🚀
                                        </span>
                                        View Demo
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;
