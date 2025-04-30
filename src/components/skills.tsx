"use client";
import React, { useRef, useEffect } from "react";

const skills: Record<string, number> = {
    Leadership: 85,
    "Cloud Infrastructure (AWS, Azure, Google Cloud)": 88,
    "Machine Learning Fundamentals": 78,
    "Complex IoT Systems": 82,
    "Frontend Development": 80,
    "Backend Development": 82,
    "Data Management": 76,
    "DevOps Principles": 83,
    "System Design": 79,
    "Agile Practices": 84,
    "Team Coordination": 81,
};

const getColor = (value: number): string => {
    if (value >= 90)
        return "bg-[var(--color-complementary-dark)] text-complementary-muted";
    if (value >= 80)
        return "bg-[var(--color-complementary-secondary)] text-complementary-dark";
    if (value >= 70)
        return "bg-[var(--color-complementary-accent)] text-complementary-dark";
    return "bg-red-500 text-white";
};

const Skills: React.FC = () => {
    const radiusBase = 300;
    const radius_mult = 6;
    const rad_omit = (50 * Math.PI) / 180;
    const keys = Object.keys(skills);
    const center = 400;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const key_rads = keys.map((skill, i) => {
        const single_rad = (2 * Math.PI - 2 * rad_omit) / keys.length;
        let angle: number;
        if (i < keys.length / 4) {
            angle = i * single_rad;
        } else if (i < (keys.length * 3) / 4) {
            angle = i * single_rad + rad_omit;
        } else {
            angle = i * single_rad + 2 * rad_omit;
        }
        const level = skills[keys[i]];
        const radius = radiusBase + (level - 70) * radius_mult;
        const x = Math.round(center + radius * Math.cos(angle));
        const y = Math.round(center + radius * Math.sin(angle));

        return { skill, x, y };
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = getComputedStyle(document.documentElement)
            .getPropertyValue("--color-complementary-secondary")
            .trim();
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
        ctx.shadowBlur = 3;

        key_rads.forEach(({ x, y }) => {
            ctx.beginPath();
            ctx.moveTo(center, center);
            ctx.lineTo(x, y);
            ctx.stroke();
        });
    }, [key_rads]);

    return (
        <section
            id="skills"
            className="min-h-screen bg-[var(--color-complementary-muted)] px-6 py-16 flex flex-col items-center justify-center"
        >
            <h2 className="text-4xl font-bold text-center text-[var(--color-complementary-dark)] mt-5">
                Areas of Focus
            </h2>
            <div className="relative w-[800px] h-[800px] rounded-full">
                {/* Canvas for lines */}
                <canvas
                    ref={canvasRef}
                    width={800}
                    height={800}
                    className="absolute top-0 left-0 z-0"
                />

                {/* Center node */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 py-6 bg-[var(--color-complementary-primary)] text-white rounded-full shadow-xl font-bold text-xl z-10 border-4 border-[var(--color-complementary-secondary)]">
                    Skills
                </div>

                {/* Skill nodes */}
                {key_rads.map(({ skill, x, y }) => {
                    const level = skills[skill];
                    return (
                        <div
                            key={skill}
                            className={`absolute inline-block rounded-full shadow-lg text-sm font-semibold z-10 hover:scale-105 transition-transform duration-300 whitespace-nowrap px-4 py-2 ${getColor(
                                level
                            )}`}
                            style={{
                                left: `${x}px`,
                                top: `${y}px`,
                                transform: "translate(-50%, -50%)",
                                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                                border: "2px solid rgba(0, 0, 0, 0.05)"
                            }}
                        >
                            {skill}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
