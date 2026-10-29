import React, { useState } from "react";
import { SERVICES_DATA } from "./data.js";
import {
    EASE,
    FOCUS,
    HEADING,
    Check,
    Reveal,
    Section,
    SectionHeading,
} from "./shared.jsx";

export default function Services() {
    const [open, setOpen] = useState(0);

    return (
        <Section id="services" className="border-t border-[#B9B0A2]/40">
            <SectionHeading
                accent="compound results."
                intro="Four complementary areas that form an integrated growth engine. Each delivers value on its own and multiplies when connected."
            >
                Four disciplines. Engineered to
            </SectionHeading>

            <div className="border-b border-[#B9B0A2]/50">
                {SERVICES_DATA.map((service, index) => {
                    const isOpen = open === index;

                    return (
                        <Reveal key={service.id} delay={index * 80} y={20}>
                            <div className="border-t border-[#B9B0A2]/50">
                                <button
                                    type="button"
                                    onClick={() => setOpen(isOpen ? -1 : index)}
                                    aria-expanded={isOpen}
                                    aria-controls={`service-${service.id}`}
                                    className={`group flex w-full items-center justify-between gap-4 py-5 text-left sm:gap-6 sm:py-7 lg:py-9 ${FOCUS}`}
                                >
                                    <span className="flex min-w-0 items-center gap-3 sm:gap-6 lg:gap-8">
                                        <svg
                                            viewBox="0 0 28 28"
                                            className={`h-5 w-5 shrink-0 sm:h-7 sm:w-7 transition-transform duration-700 ${EASE} ${isOpen ? "rotate-90 scale-110" : "rotate-0"
                                                }`}
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M14 3 L16.4 11.6 L25 14 L16.4 16.4 L14 25 L11.6 16.4 L3 14 L11.6 11.6 Z"
                                                fill={isOpen ? "#D94F35" : "#B9B0A2"}
                                                className="transition-colors duration-500"
                                            />
                                        </svg>

                                        <span
                                            className={`${HEADING} min-w-0 text-balance text-xl font-bold leading-tight tracking-tight transition-all duration-500 ${EASE} sm:text-3xl lg:text-4xl ${isOpen
                                                    ? "translate-x-1 text-[#D94F35]"
                                                    : "text-[#191919] group-hover:translate-x-1"
                                                }`}
                                        >
                                            {service.title}
                                        </span>
                                    </span>

                                    <span
                                        className={`relative h-9 w-9 shrink-0 rounded-full border transition-colors duration-500 sm:h-10 sm:w-10 ${isOpen
                                                ? "border-[#D94F35] bg-[#D94F35] text-white"
                                                : "border-[#191919]/25 text-[#191919] group-hover:border-[#191919]"
                                            }`}
                                        aria-hidden="true"
                                    >
                                        <span className="absolute left-1/2 top-1/2 h-[1.5px] w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                                        <span
                                            className={`absolute left-1/2 top-1/2 h-4 w-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-500 ${EASE} ${isOpen ? "scale-y-0" : "scale-y-100"
                                                }`}
                                        />
                                    </span>
                                </button>

                                <div
                                    id={`service-${service.id}`}
                                    className={`grid transition-[grid-template-rows,opacity] duration-700 ${EASE} ${isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="grid gap-8 pb-8 sm:pl-[52px] sm:pb-10 lg:grid-cols-2 lg:gap-16 lg:pl-[60px]">
                                            <div>
                                                <p className="text-base font-medium text-[#191919] sm:text-lg">
                                                    {service.subtitle}
                                                </p>
                                                <p className="mt-4 leading-relaxed text-[#191919]/75">
                                                    {service.summary}
                                                </p>
                                                <p className="mt-6 border-l-2 border-[#D94F35] pl-4 text-sm italic leading-relaxed text-[#191919]/80">
                                                    {service.outcome}
                                                </p>
                                            </div>

                                            <ul className="space-y-3">
                                                {service.deliverables.map((deliverable, itemIndex) => (
                                                    <li
                                                        key={deliverable}
                                                        className={`flex items-start gap-3 text-[15px] text-[#191919]/90 transition-all duration-700 ${EASE} ${isOpen
                                                                ? "translate-x-0 opacity-100"
                                                                : "translate-x-6 opacity-0"
                                                            }`}
                                                        style={{
                                                            transitionDelay: isOpen
                                                                ? `${200 + itemIndex * 70}ms`
                                                                : "0ms",
                                                        }}
                                                    >
                                                        <Check className="mt-1 text-[#D94F35]" />
                                                        <span className="min-w-0">{deliverable}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    );
                })}
            </div>

            <p className="mt-8 text-sm text-[#191919]/60 sm:mt-10">
                Have a project that combines several of these? We design cross-functional scopes.
            </p>
        </Section>
    );
}