/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { SortedSkills } from "./data";
import { motion, LayoutGroup } from "framer-motion";
import { useScreenSize } from "./utils";

function CardSkill({
    title,
    icon,
    group,
    index,
    numcols,
    isHex,
}: {
    title: string;
    icon: string;
    group: string;
    index: number;
    numcols: number;
    isHex: boolean;
}) {
    const fadeInVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: Math.random() * 0.5, type: "spring" },
        },
    };
    const translate = `${
        Math.floor(index / numcols) % 2 == 1 ? "50%" : "0"
    } calc(${Math.floor(index / numcols) * -6} * var(--spacing))`;

    return (
        <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`w-full`}
        >
            <div
                className={`relative w-full lg:aspect-square flex items-center justify-center`}
                style={{
                    translate: isHex ? translate : undefined,
                }}
            >
                <div className="absolute inset-0 hidden lg:block clip-hexagon bg-gradient-to-r from-sky-500 to-red-500" />
                <div className="absolute inset-1 hidden clip-hexagon bg-gradient-to-b from-[#1a1a1a] to-[#1a1a1a] z-10 lg:flex flex-col items-center justify-center text-center">
                    <img
                        src={`/icons/${icon}`}
                        alt={title}
                        className="h-12 w-12 mb-1 mx-auto"
                    />
                    <h4 className="text-accent font-semibold text-xs xl:text-sm mb-0.5">
                        {group}
                    </h4>
                    <h3 className="text-white font-bold text-xs xl:text-sm">
                        {title}
                    </h3>
                </div>

                {/* Fallback for non-hex on smaller screens */}
                <div className="lg:hidden w-full flex flex-col items-center justify-center bg-gradient-to-r from-sky-500 to-red-500 rounded-lg p-1">
                    <div className="flex flex-col items-center justify-center w-full h-full rounded-lg bg-gradient-to-b from-[#1a1a1a] to-[#1a1a1a] px-4 py-3">
                        <img
                            src={`/icons/${icon}`}
                            alt={title}
                            className="h-12 w-12 mb-2"
                        />
                        <h4 className="text-accent font-semibold text-sm mb-1">
                            {group}
                        </h4>
                        <h3 className="text-white font-bold text-sm">
                            {title}
                        </h3>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function useSkills() {
    const { isXS, isSM, isMD, isLG, isXL, is2XL, is3XL } = useScreenSize();
    const [skills, setSkills] = React.useState(SortedSkills.slice(0, 20));
    const [showAllSkills, setShowAllSkills] = React.useState(false);
    const [skillColCount, setSkillColCount] = React.useState(5);

    const SetSkillColCount = React.useCallback(
        (show: boolean) => {
            if (isXS || isSM) {
                setSkillColCount(2);
                return;
            }
            if (isMD) {
                setSkillColCount(3);
                return;
            }
            if (show) {
                if (isLG) {
                    setSkillColCount(4);
                } else if (isXL) {
                    setSkillColCount(6);
                } else if (is2XL) {
                    setSkillColCount(7);
                } else if (is3XL) {
                    setSkillColCount(8);
                }
            } else {
                if (isLG || isXL) {
                    setSkillColCount(4);
                } else if (is2XL) {
                    setSkillColCount(5);
                } else if (is3XL) {
                    setSkillColCount(6);
                }
            }
        },
        [is2XL, is3XL, isLG, isMD, isSM, isXL, isXS]
    );

    const SetSkills = React.useCallback(
        (show: boolean) => {
            if (show) {
                setSkills(SortedSkills);
                return;
            }

            if (isXS || isSM) {
                setSkills(SortedSkills.slice(0, 8));
            } else if (isMD) {
                setSkills(SortedSkills.slice(0, 12));
            } else if (isLG) {
                setSkills(SortedSkills.slice(0, 16));
            } else if (isXL || is2XL) {
                setSkills(SortedSkills.slice(0, 20));
            } else if (is3XL) {
                setSkills(SortedSkills.slice(0, 23));
            }
        },
        [is2XL, is3XL, isLG, isMD, isSM, isXL, isXS]
    );

    React.useEffect(() => {
        SetSkillColCount(showAllSkills);
        SetSkills(showAllSkills);
    }, [
        showAllSkills,
        setSkillColCount,
        setSkills,
        isXS,
        isSM,
        isMD,
        isLG,
        isXL,
        is2XL,
        is3XL,
        SetSkillColCount,
        SetSkills,
    ]);

    const toggleShowAllSkills = React.useCallback(() => {
        setShowAllSkills((prev) => {
            const newShowAllSkills = !prev;
            SetSkillColCount(newShowAllSkills);
            SetSkills(newShowAllSkills);
            return newShowAllSkills;
        });
    }, [SetSkillColCount, SetSkills]);

    return {
        skills,
        showAllSkills,
        skillColCount,
        toggleShowAllSkills,
    };
}

const SkillsSection: React.FC = () => {
    const { isXL, is2XL, is3XL } = useScreenSize();
    const { skills, showAllSkills, skillColCount, toggleShowAllSkills } =
        useSkills();

    const getCardSkill = React.useCallback(
        (skill: { title: string; icon: string; group: string }, i: number) => (
            <CardSkill
                key={i}
                index={i}
                title={skill.title}
                icon={skill.icon}
                group={skill.group}
                numcols={skillColCount}
                isHex={isXL || is2XL || is3XL}
            />
        ),
        [is2XL, is3XL, isXL, skillColCount]
    );

    return (
        <LayoutGroup>
            <motion.section
                id="skills"
                className="relative w-full min-h-screen px-6 pt-20 flex flex-col"
                layout
            >
                <motion.h1
                    layout
                    className="text-accent text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12"
                >
                    Skills, Languages & Frameworks
                </motion.h1>

                <div className="flex-1 flex flex-col lg:flex-row gap-12">
                    {/* Left: Description */}
                    {!showAllSkills && (
                        <div className="lg:w-1/3 flex flex-col items-center lg:px-5 lg:pt-20 lg:gap-4">
                            <p className="text-white text-lg leading-relaxed">
                                I’ve built and deployed production-grade
                                applications using trusted technology stacks
                                like React, Next.js, Node.js, Python, and
                                PostgreSQL.
                            </p>
                            <p className="text-white text-lg leading-relaxed">
                                I bring deep experience in designing scalable
                                APIs, intuitive frontends, and resilient cloud
                                architectures.
                            </p>
                            <p className="text-white text-lg leading-relaxed">
                                From modern DevOps pipelines to cloud-native
                                deployments with Docker and AWS, I use proven
                                tools to accelerate development, improve
                                reliability, and deliver measurable impact.
                            </p>
                        </div>
                    )}

                    {/* Right: Skills Display */}
                    <div
                        className={`flex flex-col ${
                            showAllSkills ? "w-full" : "lg:w-2/3"
                        }`}
                    >
                        {/* Large screen hex grid with stagger */}
                        <div
                            className="hidden lg:grid gap-2 mr-20 items-center px-5"
                            style={{
                                gridTemplateColumns: `repeat(${skillColCount}, minmax(0, 1fr))`,
                            }}
                        >
                            {skills.map((skill, i) => getCardSkill(skill, i))}
                        </div>

                        {/* Fallback for small screens */}
                        <div
                            className="grid grid-cols-2 gap-4 lg:hidden"
                            style={{
                                gridTemplateColumns: `repeat(${skillColCount}, minmax(0, 1fr))`,
                            }}
                        >
                            {skills.map((skill, i) => getCardSkill(skill, i))}
                        </div>

                        {/* Show More Button */}
                        <button
                            onClick={() => {
                                toggleShowAllSkills();
                                if (showAllSkills)
                                    document
                                        .getElementById("skills")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                            }}
                            className="mt-6 self-center px-6 py-2 border-2 border-accent text-accent font-semibold hover:border-accent-dark hover:text-accent-dark hover:bg-accent-dark hover:text-white transition cursor-pointer"
                        >
                            {showAllSkills ? "Show Less" : "Show More"}
                        </button>
                    </div>
                </div>
            </motion.section>
        </LayoutGroup>
    );
};

export default SkillsSection;
