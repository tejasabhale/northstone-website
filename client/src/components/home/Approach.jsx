import React from "react";
import { PRINCIPLES } from "./data.js";
import {
    CARD_PAD,
    CARD_RADIUS,
    HEADING,
    Reveal,
    Section,
    SectionHeading,
    Spotlight,
} from "./shared.jsx";

export default function Approach() {
    return (
        <Section id="approach" dark>
            <SectionHeading
                dark
                accent="engineering principles."
                intro="A high-conviction engineering and design partner. No buzzwords, no invented awards, and no black boxes. Here is what you can depend on."
            >
                How we build:
            </SectionHeading>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                {PRINCIPLES.map((item, index) => (
                    <Reveal
                        key={item.title}
                        delay={(index % 2) * 120}
                        className="h-full"
                    >
                        <Spotlight
                            className={`h-full ${CARD_RADIUS} border border-[#3A3B36] bg-[#2B2C28] transition-colors duration-500 hover:border-[#D94F35]/50`}
                        >
                            <div className={`flex h-full flex-col justify-between ${CARD_PAD}`}>
                                <div>
                                    <h3 className={`${HEADING} text-xl font-bold tracking-tight text-[#F5F1E8] sm:text-2xl`}>
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 leading-relaxed text-[#B9B0A2]">
                                        {item.text}
                                    </p>
                                </div>

                                <span className="mt-6 inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-[#D94F35]/40 px-3.5 py-1.5 text-xs font-medium text-[#D94F35] sm:mt-8">
                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D94F35]" />
                                    {item.tag}
                                </span>
                            </div>
                        </Spotlight>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}