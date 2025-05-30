/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.section
            id="about"
            className="min-h-screen text-white px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="flex justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src="/profile.jpg"
                    alt="Kiron Gonidis"
                    className="w-80 h-80 rounded-full shadow-lg border-4 border-accent"
                />
            </motion.div>

            <motion.div
                className="space-y-6 text-center lg:text-left"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-accent">
                    About Me
                </h2>
                <p className="text-base md:text-lg lg:text-lg leading-relaxed lg:pr-20 xl:pr-30 2xl:pr-60">
                    I’m Kiron Gonidis—a strategic technology leader who thrives at
                    the intersection of innovation, people, and process. Over the
                    past 15 years I’ve guided cross-disciplinary teams to deliver
                    transformative products—from cloud-powered energy dashboards
                    and mobile IoT front ends to enterprise e-commerce platforms
                    and next-generation positioning systems. I believe the
                    strongest solutions emerge when engineering, product, and
                    customer success unite around a shared vision: reliable
                    performance, intuitive experiences, and measurable business
                    impact.
                </p>
                <p className="text-base md:text-lg lg:text-lg leading-relaxed lg:pr-20 xl:pr-30 2xl:pr-60">
                    At eCamion, I led an engineering team through the full product
                    lifecycle: defining roadmaps, integrating with embedded
                    systems, and scaling Kubernetes-based services to meet growing
                    demand. Along the way I introduced clear, collaborative
                    workflows—bridging Zendesk support queues with Jira backlogs—to
                    accelerate issue resolution and reinforce quality at every
                    step. My partnerships with clients like Loblaws, Ford, and
                    Landmark taught me to adapt high-level strategy into tailored
                    outcomes, aligning technical roadmaps with real-world goals.
                </p>
                <p className="text-base md:text-lg lg:text-lg leading-relaxed lg:pr-20 xl:pr-30 2xl:pr-60">
                    Above all, I champion transparent, empowering leadership. I
                    mentor engineers by blending architectural guidance with
                    coaching, nurturing ownership and professional growth. I
                    connect across functions, distilling complex requirements into
                    scalable roadmaps, and rally teams around a culture of trust
                    and shared accountability. Looking ahead, I’m eager to scale
                    these principles into transformational leadership roles—where
                    I can shape platform strategy, expand high-performance teams,
                    and deliver exceptional products at the enterprise level.
                </p>
            </motion.div>
        </motion.section>
    );
};

export default About;
