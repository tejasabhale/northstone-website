import React from "react";
import {
    CARD_PAD,
    CARD_RADIUS,
    HEADING,
    SERIF,
    Reveal,
    RollButton,
    Section,
} from "./shared.jsx";

// text-base on mobile prevents iOS Safari from zooming into focused fields
const FIELD =
    "w-full rounded-xl border border-[#B9B0A2]/60 bg-[#F5F1E8] px-4 py-3 text-base text-[#191919] placeholder-[#191919]/40 transition-[border-color,box-shadow] duration-300 sm:text-sm focus-visible:border-[#D94F35] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D94F35]/15";

const LABEL = "mb-2 block text-sm font-medium text-[#191919]";

export default function Contact({ formData, setFormData, submitted, setSubmitted }) {
    const onChange = (event) => {
        const { name, value } = event.target;
        setFormData((previous) => ({ ...previous, [name]: value }));
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const subject = encodeURIComponent(
            `Project Inquiry from ${formData.name} · North Stone`
        );

        const body = [
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            `Service Needed: ${formData.service}`,
            `Estimated Budget Tier: ${formData.budget}`,
            `\nProject Overview & Goals:\n${formData.details}`,
            `\n---\nSent via North Stone Website (Pune, India)`,
        ].join("\n");

        window.location.href = `mailto:hello@northstone.in?subject=${subject}&body=${encodeURIComponent(body)}`;

        setSubmitted(true);
    };

    return (
        <Section id="contact" innerClassName="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
                <Reveal>
                    <h2 className={`${HEADING} text-balance text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl`}>
                        Have a project in mind?{" "}
                        <span className={`${SERIF} text-[1.08em] text-[#D94F35]`}>
                            Let&apos;s build something that matters.
                        </span>
                    </h2>
                </Reveal>

                <Reveal delay={120}>
                    <p className="mt-5 leading-relaxed text-[#191919]/75 sm:mt-6">
                        Whether you need a custom website, a high-performing web application,
                        workflow automation, or strategic search visibility, tell us about your
                        goals. We read every brief and reply with clear next steps.
                    </p>
                </Reveal>

                <Reveal delay={200}>
                    <dl className="mt-8 space-y-6 border-t border-[#B9B0A2]/40 pt-8 text-sm sm:mt-10">
                        <div>
                            <dt className="text-[#191919]/55">Email</dt>
                            <dd>
                                <a
                                    href="mailto:hello@northstone.in"
                                    className="break-all text-lg font-medium transition-colors hover:text-[#D94F35]"
                                >
                                    hello@northstone.in
                                </a>
                            </dd>
                        </div>

                        <div>
                            <dt className="text-[#191919]/55">Studio</dt>
                            <dd className="font-medium">Pune, Maharashtra, India</dd>
                            <dd className="text-[#191919]/60">
                                Serving clients across India, UAE, UK, and worldwide
                            </dd>
                        </div>

                        <div>
                            <dt className="text-[#191919]/55">Response time</dt>
                            <dd className="text-[#191919]/80">
                                Typically within 24 business hours. No spam, no high-pressure
                                sales calls.
                            </dd>
                        </div>
                    </dl>
                </Reveal>
            </div>

            <Reveal className="lg:col-span-7" delay={120}>
                <div className={`${CARD_RADIUS} border border-[#B9B0A2]/50 bg-[#E8E1D6]/40 ${CARD_PAD}`}>
                    {submitted ? (
                        <div className="ns-swap py-6 text-center sm:py-10">
                            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#D94F35] text-white">
                                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
                                    <path
                                        className="ns-draw"
                                        d="M5 12.5 10 17.5 19 7"
                                        stroke="currentColor"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <h3 className={`${HEADING} mb-2 text-2xl font-bold`}>Inquiry prepared</h3>

                            <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-[#191919]/80">
                                Your email app should have opened with your project summary filled
                                in. Press send to deliver it to <strong>hello@northstone.in</strong>.
                            </p>

                            <div className="mx-auto mb-6 max-w-md rounded-2xl border border-[#B9B0A2]/40 bg-[#F5F1E8] p-4 text-sm text-[#191919]/80">
                                If it didn&apos;t open, write to us directly:
                                <a
                                    href="mailto:hello@northstone.in"
                                    className="mt-1 block break-all font-semibold text-[#D94F35]"
                                >
                                    hello@northstone.in
                                </a>
                            </div>

                            <button
                                type="button"
                                onClick={() => setSubmitted(false)}
                                className="text-sm font-medium text-[#D94F35] underline underline-offset-4 hover:text-[#BF412A]"
                            >
                                Edit brief or send another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit} className="space-y-5 sm:space-y-6">
                            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                                <div>
                                    <label htmlFor="name" className={LABEL}>
                                        Your name or organization <span className="text-[#D94F35]">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        value={formData.name}
                                        onChange={onChange}
                                        placeholder="e.g. Rohini Sharma"
                                        className={FIELD}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className={LABEL}>
                                        Email address <span className="text-[#D94F35]">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={formData.email}
                                        onChange={onChange}
                                        placeholder="rohini@company.com"
                                        className={FIELD}
                                    />
                                </div>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                                <div>
                                    <label htmlFor="service" className={LABEL}>
                                        Primary service
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={onChange}
                                        className={FIELD}
                                    >
                                        <option value="Web & App Development">Web & App Development</option>
                                        <option value="Workflow Automation">Workflow Automation</option>
                                        <option value="Search Engine Optimization">Search Engine Optimization</option>
                                        <option value="Google & Meta Ads">Google & Meta Ads</option>
                                        <option value="Comprehensive System Overhaul">Integrated multi-service scope</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="budget" className={LABEL}>
                                        Target budget
                                    </label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={onChange}
                                        className={FIELD}
                                    >
                                        <option value="₹14,999 (Launch Tier)">₹14,999 (Launch Tier)</option>
                                        <option value="₹39,999 (Growth Tier)">₹39,999 (Growth Tier)</option>
                                        <option value="₹89,999+ (Scale Tier)">₹89,999+ (Scale Tier)</option>
                                        <option value="Undetermined / Exploring Options">Undetermined / exploring options</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="details" className={LABEL}>
                                    Project details and goals <span className="text-[#D94F35]">*</span>
                                </label>
                                <textarea
                                    id="details"
                                    name="details"
                                    rows={4}
                                    required
                                    value={formData.details}
                                    onChange={onChange}
                                    placeholder="Tell us about your organization, the problem you want to solve, and your timeline..."
                                    className={`${FIELD} resize-y`}
                                />
                            </div>

                            <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                                <RollButton type="submit" variant="accent" className="w-full sm:w-auto">
                                    Send project brief
                                </RollButton>
                                <span className="text-sm text-[#191919]/60">
                                    Opens a pre-filled email in your mail app
                                </span>
                            </div>
                        </form>
                    )}
                </div>
            </Reveal>
        </Section>
    );
}