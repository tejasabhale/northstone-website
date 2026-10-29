
import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";

import {
    HEADING,
    SERIF,
    goTo,
    RollButton,
} from "./shared.jsx";

const SERVICES = [
    "Web Development",
    "Workflow Automation",
    "Search Optimization",
    "Digital Growth",
];

const DETAILS = [
    {
        label: "Studio",
        value: "Pune, India",
    },
    {
        label: "Approach",
        value: "Strategy meets engineering",
    },
    {
        label: "Get in touch",
        value: "hello@northstone.in",
        href: "mailto:hello@northstone.in",
    },
];

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return undefined;

        const context = gsap.context(() => {
            const timeline = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            timeline
                .fromTo(
                    ".hero-title-line",
                    {
                        yPercent: 110,
                        autoAlpha: 0,
                    },
                    {
                        yPercent: 0,
                        autoAlpha: 1,
                        duration: 0.95,
                        stagger: 0.16,
                    },
                    0
                )
                .fromTo(
                    ".hero-copy",
                    {
                        y: 22,
                        autoAlpha: 0,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.75,
                    },
                    0.4
                )
                .fromTo(
                    ".hero-actions",
                    {
                        y: 18,
                        autoAlpha: 0,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.7,
                    },
                    0.55
                )
                .fromTo(
                    ".hero-service, .hero-separator",
                    {
                        y: 12,
                        autoAlpha: 0,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.45,
                        stagger: 0.07,
                    },
                    0.75
                )
                .fromTo(
                    ".hero-detail",
                    {
                        y: 14,
                        autoAlpha: 0,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.5,
                        stagger: 0.1,
                    },
                    0.95
                );
        }, heroRef);

        return () => context.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            id="home"
            className="border-b border-[#B9B0A2]/40 px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:px-12"
        >
            <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
                {/* Main heading */}
                <h1
                    className={`${HEADING} max-w-5xl text-5xl font-extrabold leading-[1.08] tracking-[-0.055em] text-[#191919] sm:text-6xl md:text-7xl lg:text-[88px]`}
                >
                    <span className="block overflow-hidden pb-[0.08em]">
                        <span className="hero-title-line block">
                            Digital work,
                        </span>
                    </span>

                    <span className="block overflow-hidden pb-[0.08em]">
                        <span
                            className={`hero-title-line block ${SERIF} tracking-normal text-[#D94F35]`}
                        >
                            built to move business forward.
                        </span>
                    </span>
                </h1>

                {/* Description */}
                <p className="hero-copy mt-8 max-w-2xl text-base leading-8 text-[#191919]/65 sm:text-lg sm:leading-9">
                    We design and build websites, applications, and
                    connected digital systems that help businesses
                    work smarter, reach more people, and grow with
                    confidence.
                </p>

                {/* Call-to-action buttons */}
                <div className="hero-actions mt-10 flex flex-wrap items-center justify-center gap-4">
                    <RollButton
                        href="#contact"
                        onClick={(event) => goTo(event, "#contact")}
                        variant="accent"
                    >
                        Start a project
                    </RollButton>

                    <RollButton
                        href="#work"
                        onClick={(event) => goTo(event, "#work")}
                        variant="ghost"
                    >
                        Explore our work
                    </RollButton>
                </div>

                {/* Services */}
                <div className="mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-3 border-t border-[#B9B0A2]/40 pt-8 text-sm sm:mt-20 sm:gap-x-5">
                    {SERVICES.map((service, index) => (
                        <React.Fragment key={service}>
                            <motion.span
                                className="hero-service inline-block text-[#191919]/65"
                                whileHover={{ color: "#D94F35" }}
                                transition={{ duration: 0.2 }}
                            >
                                {service}
                            </motion.span>

                            {index < SERVICES.length - 1 && (
                                <span
                                    className="hero-separator text-[#D94F35]"
                                    aria-hidden="true"
                                >
                                    /
                                </span>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Studio details */}
                <div className="mt-12 grid w-full max-w-4xl grid-cols-1 border-t border-[#B9B0A2]/40 pt-6 text-left sm:grid-cols-3 sm:gap-6">
                    {DETAILS.map((detail, index) => (
                        <div
                            key={detail.label}
                            className={`hero-detail min-w-0 py-3 sm:py-0 ${index > 0
                                    ? "border-t border-[#B9B0A2]/30 sm:border-t-0"
                                    : ""
                                }`}
                        >
                            <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-[#191919]/50">
                                {detail.label}
                            </span>

                            {detail.href ? (
                                <a
                                    href={detail.href}
                                    className="mt-2 inline-block break-all text-sm text-[#191919]/80 transition-colors duration-200 hover:text-[#D94F35] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94F35]"
                                >
                                    {detail.value}
                                </a>
                            ) : (
                                <p className="mt-2 text-sm text-[#191919]/80">
                                    {detail.value}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
