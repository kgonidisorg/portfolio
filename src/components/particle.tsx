"use client";
import React, { useRef, useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";

export interface MovingBackgroundProps {
    hero?: boolean;
    highlight?: boolean;
    velocity?: number;
    fixed?: boolean;
    zIndex?: number;
}

const particleMap = {
    Hero: {
        small: 50,
        medium: 75,
        large: 100,
        xl: 150,
        xxl: 250,
    },
    Normal: {
        small: 15,
        medium: 20,
        large: 25,
        xl: 30,
        xxl: 50,
    },
};

function useParticleCount(hero: boolean) {
    const isSmall = useMediaQuery({ query: "(max-width: 640px)" });
    const isMedium = useMediaQuery({
        query: "(min-width: 640px) and (max-width: 768px)",
    });
    const isLarge = useMediaQuery({
        query: "(min-width: 768px) and (max-width: 1024px)",
    });
    const isXLarge = useMediaQuery({
        query: "(min-width: 1024px) and (max-width: 1280px)",
    });
    const isXXLarge = useMediaQuery({ query: "(min-width: 1280px)" });

    return useMemo(() => {
        if (hero) {
            if (isSmall) return particleMap.Hero.small;
            if (isMedium) return particleMap.Hero.medium;
            if (isLarge) return particleMap.Hero.large;
            if (isXLarge) return particleMap.Hero.xl;
            if (isXXLarge) return particleMap.Hero.xxl;
        }

        if (isSmall) return particleMap.Normal.small;
        if (isMedium) return particleMap.Normal.medium;
        if (isLarge) return particleMap.Normal.large;
        if (isXLarge) return particleMap.Normal.xl;
        if (isXXLarge) return particleMap.Normal.xxl;
        return particleMap.Normal.large; // Default value
    }, [hero, isSmall, isMedium, isLarge, isXLarge, isXXLarge]);
}

const MovingBackground: React.FC<MovingBackgroundProps> = ({
    hero = true,
    highlight = true,
    velocity = 1.5,
    fixed = false,
    zIndex = 0,
}: MovingBackgroundProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const particleCount = useParticleCount(hero);

    useEffect(() => {
        const maxDistance = 100;
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const particles: { x: number; y: number; vx: number; vy: number }[] =
            [];
        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * velocity,
                vy: (Math.random() - 0.5) * velocity,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw particles
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255, 255, 255, 0.7)"; // More transparent
                ctx.shadowBlur = 10; // Glow effect
                ctx.shadowColor = "white"; // Glow color
                ctx.fill();
                ctx.shadowBlur = 0; // Reset shadowBlur to avoid affecting other elements
            });

            // Draw connections
            if (highlight) {
                for (let i = 0; i < particleCount; i++) {
                    for (let j = i + 1; j < particleCount; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < maxDistance) {
                            const highlight =
                                Math.abs(particles[i].x - mouseX.current) <
                                    150 &&
                                Math.abs(particles[i].y - mouseY.current) < 150;

                            ctx.strokeStyle = highlight
                                ? "skyblue"
                                : "rgba(255,255,255,0.1)";
                            ctx.lineWidth = highlight ? 1.5 : 0.5;
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }

            requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener("mousemove", (e: MouseEvent) => {
            mouseX.current = e.clientX;
            mouseY.current = e.clientY;
        });

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }, [highlight, particleCount, velocity]);

    return (
        <canvas
            ref={canvasRef}
            className={
                `top-0 left-0 w-full h-full z-${zIndex}` +
                (fixed ? " fixed" : "")
            }
        />
    );
};

export default MovingBackground;
