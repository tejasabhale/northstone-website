import React, { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { PROCESS_STEPS } from "./data.js";
import {
    CARD_RADIUS,
    CONTAINER,
    EASE,
    FOCUS,
    HEADING,
    SECTION_Y,
    SERIF,
    Check,
    Reveal,
    SectionHeading,
    useMediaQuery,
} from "./shared.jsx";

export default function Process() {
    const [active, setActive] = useState(0);
    const sectionRef = useRef(null);

    const reduceMotion = useReducedMotion();
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    // Parallax only on large screens; on phones/tablets the columns stack and would overlap.
    const parallax = isDesktop && !reduceMotion;

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const leftY = useTransform(scrollYProgress, [0, 1], [28, -28]);
    const rightY = useTransform(scrollYProgress, [0, 1], [-18, 18]);
    const backgroundY = useTransform(scrollYProgress, [0, 1], [65, -65]);

    const step = PROCESS_STEPS[active];
    const last = PROCESS_STEPS.length - 1;

    return (
        <section
            ref={sectionRef}
            id="process"
            className={`relative isolate scroll-mt-20 overflow-hidden border-t border-[#B9B0A2]/40 bg-[#E8E1D6]/30 ${SECTION_Y}`}
        >
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 top-20 hidden h-72 w-72 rounded-full border border-[#B9B0A2]/30 md:block"
                style={{ y: parallax ? backgroundY : 0 }}
            />
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 left-[-5rem] hidden h-64 w-64 rounded-full border border-[#D94F35]/10 md:block"
                style={{ y: parallax ? leftY : 0 }}
            />

            <div className={`relative z-10 ${CONTAINER}`}>
                <SectionHeading
                    accent="operational launch."
                    intro="Every project moves through structured milestones with concrete documentation, clear communication, and predictable delivery dates."
                >
                    Five steps. From brief to
                </SectionHeading>

                <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                    {/* Step list */}
                    <Reveal className="lg:col-span-5">
                        <motion.div style={{ y: parallax ? leftY : 0 }}>
                            <div className="relative">
                                <div
                                    className="absolute bottom-6 left-5 top-6 w-px bg-[#B9B0A2]/50"
                                    aria-hidden="true"
                                />
                                <div
                                    className={`absolute left-5 top-6 w-px bg-[#D94F35] transition-all duration-700 ${EASE}`}
                                    style={{ height: `calc((100% - 3rem) * ${active / last})` }}
                                    aria-hidden="true"
                                />

                                <ol className="relative space-y-2">
                                    {PROCESS_STEPS.map((item, index) => {
                                        const isActive = active === index;
                                        const isDone = index < active;

                                        return (
                                            <li key={item.step}>
                                                <button
                                                    type="button"
                                                    onClick={() => setActive(index)}
                                                    aria-current={isActive ? "step" : undefined}
                                                    className={`flex w-full items-center gap-3 rounded-2xl p-2.5 text-left transition-colors duration-300 sm:gap-4 sm:p-3 ${FOCUS} ${isActive
                                                            ? "bg-[#F5F1E8] shadow-sm"
                                                            : "hover:bg-[#F5F1E8]/60"
                                                        }`}
                                                >
                                                    <span
                                                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-all duration-500 ${EASE} ${isActive
                                                                ? "scale-110 border-[#D94F35] bg-[#D94F35] text-white"
                                                                : isDone
                                                                    ? "border-[#191919] bg-[#191919] text-[#F5F1E8]"
                                                                    : "border-[#B9B0A2] bg-[#F5F1E8] text-[#191919]/60"
                                                            }`}
                                                    >
                                                        {isDone ? <Check className="h-4 w-4" /> : item.step}
                                                    </span>

                                                    <span className="min-w-0 flex-1">
                                                        <span className={`${HEADING} block text-base font-bold`}>
                                                            {item.title}
                                                        </span>
                                                        <span className="text-xs text-[#191919]/60">
                                                            {item.duration}
                                                        </span>
                                                    </span>
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ol>
                            </div>
                        </motion.div>
                    </Reveal>

                    {/* Active step */}
                    <Reveal className="lg:col-span-7" delay={120}>
                        <motion.div style={{ y: parallax ? rightY : 0 }}>
                            <div className={`overflow-hidden ${CARD_RADIUS} border border-[#191919] bg-[#F5F1E8]`}>
                                <div className="flex gap-1.5 px-6 pt-6 sm:px-10 sm:pt-8" aria-hidden="true">
                                    {PROCESS_STEPS.map((item, index) => (
                                        <span
                                            key={item.step}
                                            className="h-1 flex-1 overflow-hidden rounded-full bg-[#191919]/10"
                                        >
                                            <span
                                                className={`block h-full origin-left rounded-full bg-[#D94F35] transition-transform duration-700 ${EASE} ${index <= active ? "scale-x-100" : "scale-x-0"
                                                    }`}
                                            />
                                        </span>
                                    ))}
                                </div>

                                <div key={step.step} className="ns-swap px-6 pb-6 pt-5 sm:px-10 sm:pb-10">
                                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                                        <span className={`${SERIF} text-5xl leading-none text-[#D94F35] sm:text-7xl`}>
                                            {step.step}
                                        </span>
                                        <span className="rounded-full border border-[#B9B0A2]/60 px-3 py-1 text-xs text-[#191919]/70">
                                            {step.duration}
                                        </span>
                                    </div>

                                    <h3 className={`${HEADING} mt-5 text-balance text-2xl font-bold tracking-tight sm:text-3xl`}>
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 leading-relaxed text-[#191919]/80 sm:text-lg">
                                        {step.description}
                                    </p>

                                    <div className="mt-6 rounded-2xl bg-[#E8E1D6]/60 p-4 sm:mt-8 sm:p-5">
                                        <span className="block text-sm font-semibold text-[#D94F35]">
                                            What you receive
                                        </span>
                                        <p className="mt-1 text-sm font-medium text-[#191919]">
                                            {step.deliverables}
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setActive((c) => (c === last ? 0 : c + 1))}
                                        className={`group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#191919] transition-colors hover:text-[#D94F35] ${FOCUS}`}
                                    >
                                        {active === last ? "Back to step 01" : "Next step"}
                                        <span
                                            className={`inline-block transition-transform duration-300 ${EASE} group-hover:translate-x-1`}
                                        >
                                            →
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}