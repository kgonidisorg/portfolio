/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useMemo, useState } from "react";
import { frameworks } from "./data";
import { motion, LayoutGroup } from "framer-motion";

function CardSkill({ title, icon }: { title: string; icon: string }) {
    const fadeInVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: Math.random() * 0.5, type: "spring" },
        },
    };

    return (
        <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center rounded-lg p-1 bg-gradient-to-r from-sky-500 to-red-500 w-full md:w-40 xl:w-50"
        >
            <div className="flex flex-col items-center justify-center w-full h-full rounded-lg bg-gradient-to-b from-[#1a1a1a] to-[#1a1a1a] px-4 py-3 lg:px-6 lg:py-4">
                <img
                    src={`/icons/${icon}`}
                    alt={title}
                    className="h-12 w-12 lg:h-16 lg:w-16 mb-2"
                />
                <h3 className="text-white font-bold text-xs sm:text-sm md:text-base">
                    {title}
                </h3>
            </div>
        </motion.div>
    );
}

const SkillsSection: React.FC = () => {
    const [visibleGroup, setVisibleGroup] = useState<string | null>(null);
    const groupKeys = useMemo(() => {
        const frameworkKeys = Object.keys(frameworks);
        return visibleGroup
            ? [
                  visibleGroup,
                  ...frameworkKeys.filter((key) => key !== visibleGroup),
              ]
            : frameworkKeys;
    }, [visibleGroup]);

    function getGroupSkills(group: string) {
        let keys = Object.keys(frameworks[group]);
        if (group !== visibleGroup) keys = keys.slice(0, 4);
        return keys.map((skill) => (
            <CardSkill
                key={skill}
                title={skill}
                icon={frameworks[group][skill]}
            />
        ));
    }

    return (
        <LayoutGroup>
            <motion.section
                id="skills"
                className="relative w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 pt-20"
                layout
                onViewportLeave={() => setVisibleGroup(null)}
            >
                <motion.h1
                    layout
                    className="text-accent text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8"
                >
                    Skills & Frameworks
                </motion.h1>
                <motion.div className="w-full h-fit grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
                    {groupKeys.map((group) => (
                        <motion.div
                            key={group}
                            layout
                            onClick={() => {
                                setVisibleGroup(
                                    visibleGroup === group ? null : group
                                );
                                if (visibleGroup !== group) {
                                    setTimeout(() => {
                                        document
                                            .getElementById(group)
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                                block: "center",
                                                inline: "center",
                                            });
                                    }, 100);
                                }
                            }}
                            id={group}
                            className={`relative rounded-lg flex flex-col py-4 sm:py-6 md:py-8 items-center justify-center cursor-pointer hover:ring-4 hover:ring-sky-400 transition-all ${
                                visibleGroup === group
                                    ? "col-span-2 lg:col-span-3 row-span-2 lg:row-span-3"
                                    : ""
                            }`}
                        >
                            <motion.h3
                                layout
                                className="font-bold mb-2 text-sm sm:text-base md:text-lg lg:text-xl"
                            >
                                {group}
                            </motion.h3>
                            <motion.div
                                layout
                                className={`grid ${
                                    visibleGroup === group
                                        ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                                        : "grid-cols-2"
                                } gap-3 sm:gap-4 md:gap-5`}
                            >
                                {getGroupSkills(group)}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </LayoutGroup>
    );
};

export default SkillsSection;
