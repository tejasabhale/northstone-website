import React from "react";
import { PRICING_TIERS } from "./data.js";
import {
    CARD_PAD,
    CARD_RADIUS,
    EASE,
    HEADING,
    Check,
    Reveal,
    RollButton,
    Section,
    SectionHeading,
    goTo,
} from "./shared.jsx";

export default function Pricing({ onChoose }) {
    return (
        <Section id="pricing" className="border-b border-[#B9B0A2]/40">
            <SectionHeading
                accent="Defined by scope."
                intro="We quote upfront and transparently. These tiers show typical project baselines. Final pricing reflects your exact requirements and integrations."
            >
                Straightforward pricing.
            </SectionHeading>

            <div className="mx-auto grid max-w-xl items-stretch gap-8 pt-4 lg:max-w-none lg:grid-cols-3 lg:gap-6">
                {PRICING_TIERS.map((tier, index) => (
                    <Reveal key={tier.name} delay={index * 120} className="h-full">
                        <div
                            className={`relative flex h-full flex-col justify-between ${CARD_RADIUS} ${CARD_PAD} transition-all duration-500 ${EASE} lg:hover:-translate-y-1.5 ${tier.featured
                                    ? "bg-[#191919] text-[#F5F1E8] shadow-[0_30px_60px_-25px_rgba(25,25,25,0.55)]"
                                    : "border border-[#B9B0A2]/50 bg-[#E8E1D6]/40 hover:border-[#191919]/40 hover:shadow-[0_24px_50px_-30px_rgba(25,25,25,0.35)]"
                                }`}
                        >
                            {tier.badge && (
                                <div className="absolute -top-3.5 left-6 rounded-full bg-[#D94F35] px-3.5 py-1 text-xs font-semibold text-white shadow-sm sm:left-8">
                                    {tier.badge}
                                </div>
                            )}

                            <div>
                                <h3 className={`${HEADING} text-xl font-bold sm:text-2xl`}>
                                    {tier.name}
                                </h3>

                                <div className="mt-4">
                                    <span className={`${HEADING} text-4xl font-extrabold tracking-tight sm:text-5xl`}>
                                        {tier.startingPrice}
                                    </span>
                                    <span
                                        className={`mt-1 block text-sm ${tier.featured ? "text-[#F5F1E8]/60" : "text-[#191919]/60"
                                            }`}
                                    >
                                        {tier.cadence}
                                    </span>
                                </div>

                                <p
                                    className={`mb-6 mt-5 border-b pb-6 text-sm leading-relaxed ${tier.featured
                                            ? "border-[#F5F1E8]/15 text-[#F5F1E8]/75"
                                            : "border-[#B9B0A2]/40 text-[#191919]/75"
                                        }`}
                                >
                                    {tier.tagline}
                                </p>

                                <ul className="mb-8 space-y-3">
                                    {tier.scope.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2.5 text-sm">
                                            <Check className="mt-0.5 text-[#D94F35]" />
                                            <span className="min-w-0 leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div
                                className={`border-t pt-6 ${tier.featured ? "border-[#F5F1E8]/15" : "border-[#B9B0A2]/40"
                                    }`}
                            >
                                <div
                                    className={`mb-4 text-sm ${tier.featured ? "text-[#F5F1E8]/60" : "text-[#191919]/60"
                                        }`}
                                >
                                    {tier.deliverableTime}
                                </div>

                                <RollButton
                                    href="#contact"
                                    onClick={(event) => {
                                        onChoose(tier);
                                        goTo(event, "#contact");
                                    }}
                                    variant={tier.featured ? "accentOnDark" : "ghost"}
                                    className="w-full"
                                >
                                    {tier.ctaText}
                                </RollButton>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            <Reveal delay={100}>
                <p className="mt-10 max-w-4xl rounded-2xl border border-[#B9B0A2]/40 bg-[#E8E1D6]/50 p-5 text-sm leading-relaxed text-[#191919]/75 sm:mt-12">
                    <strong className="text-[#191919]">Pricing clarity: </strong>
                    Figures listed are starting prices for typical project baselines. Your final
                    quotation follows our discovery session, based on exact scope. Third-party
                    costs (Google/Meta ad spend, domain registrations, and cloud hosting) are paid
                    directly to those providers so you keep 100% account ownership.
                </p>
            </Reveal>
        </Section>
    );
}