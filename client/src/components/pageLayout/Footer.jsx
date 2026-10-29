import React from "react";
import { CONTAINER, FOCUS } from "../home/shared.jsx";

const FOOTER_NAVIGATION = [
    { label: "Home", href: "#home" },
    { label: "Services & Capabilities", href: "#services" },
    { label: "Selected Work", href: "#work" },
    { label: "Our Process", href: "#process" },
    { label: "Studio Approach", href: "#approach" },
    { label: "Pricing Plans", href: "#pricing" },
    { label: "Start a Project", href: "#contact", featured: true },
];

const FOOTER_CAPABILITIES = [
    { number: "01", title: "Web & App Development", description: "Websites and full-stack applications" },
    { number: "02", title: "Business Automation", description: "Workflows, CRMs and integrations" },
    { number: "03", title: "Search Engine Optimization", description: "Technical and local SEO" },
    { number: "04", title: "Digital Advertising", description: "Google and Meta campaigns" },
];

/* ---------- Contact & social details: replace the placeholders below ---------- */
const EMAIL = "hello@northstone.in";
const PHONE_DISPLAY = "+91 00000 00000"; // TODO: your real mobile number
const PHONE_HREF = "+910000000000"; // digits with country code, no spaces

const SOCIAL_LINKS = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/your-handle", external: true },
    { name: "Instagram", href: "https://www.instagram.com/your-handle", external: true },
    { name: "X", href: "https://x.com/your-handle", external: true },
    { name: "Facebook", href: "https://www.facebook.com/your-handle", external: true },
    { name: "Email", href: `mailto:${EMAIL}`, label: `Email ${EMAIL}` },
    { name: "Phone", href: `tel:${PHONE_HREF}`, label: `Call ${PHONE_DISPLAY}` },
];

function SocialIcon({ name }) {
    const stroke = {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.7,
        strokeLinecap: "round",
        strokeLinejoin: "round",
    };

    return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
            {name === "LinkedIn" && (
                <path
                    fill="currentColor"
                    d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"
                />
            )}
            {name === "Instagram" && (
                <g {...stroke}>
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
                </g>
            )}
            {name === "X" && (
                <path
                    fill="currentColor"
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
            )}
            {name === "Facebook" && (
                <path
                    fill="currentColor"
                    d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.25-1.5 1.55-1.5h1.65V3.45C16.4 3.4 15.45 3.3 14.35 3.3c-2.3 0-3.85 1.4-3.85 4V9.8H7.8V13h2.7v8h3z"
                />
            )}
            {name === "Email" && (
                <g {...stroke}>
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="m4 7.5 8 6 8-6" />
                </g>
            )}
            {name === "Phone" && (
                <path
                    {...stroke}
                    d="M5 4h3.5l1.8 4.5-2.2 1.4a11 11 0 0 0 5 5l1.4-2.2L19 14.5V18a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2z"
                />
            )}
        </svg>
    );
}

const eyebrow =
    "text-[11px] font-mono font-medium uppercase tracking-[0.16em] text-[#B9B0A2]";

const footerLink = `inline-flex min-h-9 items-center rounded-sm text-sm text-[#F5F1E8]/75 transition-colors duration-200 hover:text-[#D94F35] sm:min-h-7 ${FOCUS}`;

function scrollToSection(event, href) {
    const target = document.getElementById(href.slice(1));

    // Keep normal anchor behaviour if the target doesn't exist.
    if (!target) return;

    event.preventDefault();

    if (window.lenis) {
        window.lenis.scrollTo(target, { offset: -72 });
    } else {
        const top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: "smooth" });
    }

    window.history.pushState(null, "", href);
}

function scrollToTop(event) {
    event.preventDefault();

    const home = document.getElementById("home");

    if (window.lenis) {
        window.lenis.scrollTo(home || 0);
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.history.pushState(null, "", home ? "#home" : window.location.pathname);
}

function FooterHeading({ children }) {
    return <h3 className={`${eyebrow} mb-5 sm:mb-6`}>{children}</h3>;
}

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            id="footer"
            className="overflow-hidden border-t border-[#3A3B36] bg-[#191919] text-[#F5F1E8]"
        >
            {/* Contact callout */}
            <div className={CONTAINER}>
                <div className="grid gap-8 border-b border-[#3A3B36] py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)] lg:items-end lg:gap-12 lg:py-24">
                    <h2 className="min-w-0 text-balance font-['Plus_Jakarta_Sans',sans-serif] text-4xl font-bold leading-[1.1] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                        <span className="block">Have an idea?</span>

                        <a
                            href="#contact"
                            onClick={(event) => scrollToSection(event, "#contact")}
                            className={`group mt-1 inline-flex max-w-full flex-wrap items-baseline gap-x-3 rounded-sm text-[#D94F35] transition-colors duration-200 hover:text-[#F07459] ${FOCUS}`}
                        >
                            <span className="font-['Instrument_Serif',serif] font-normal italic">
                                Let&apos;s build it.
                            </span>
                            <span
                                aria-hidden="true"
                                className="inline-block text-2xl font-normal transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 sm:text-3xl"
                            >
                                ↗
                            </span>
                        </a>
                    </h2>

                    <div className="flex min-w-0 flex-col gap-5 lg:items-start">
                        <a
                            href={`mailto:${EMAIL}`}
                            className="inline-flex min-h-12 w-full items-center justify-between gap-4 rounded-full border border-[#D94F35] bg-[#D94F35] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#BF412A] hover:bg-[#BF412A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F1E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#191919] sm:w-fit sm:min-w-64 lg:w-full"
                        >
                            <span className="min-w-0 break-all">{EMAIL}</span>
                            <span aria-hidden="true">↗</span>
                        </a>

                        <a
                            href={`tel:${PHONE_HREF}`}
                            className={`inline-flex min-h-12 w-full items-center justify-between gap-4 rounded-full border border-[#F5F1E8]/25 px-6 py-3 text-sm font-semibold text-[#F5F1E8] transition-colors duration-200 hover:border-[#D94F35] hover:text-[#D94F35] sm:w-fit sm:min-w-64 lg:w-full ${FOCUS}`}
                        >
                            <span>{PHONE_DISPLAY}</span>
                            <span aria-hidden="true">↗</span>
                        </a>

                        <div className="flex items-start gap-3 text-sm text-[#B9B0A2]">
                            <span aria-hidden="true" className="mt-0.5 text-[#D94F35]">
                                ↳
                            </span>
                            <div>
                                <p className="text-[#F5F1E8]">Pune, Maharashtra, India</p>
                                <p className="mt-1 text-xs leading-5 text-[#B9B0A2]/80">
                                    Working with businesses across India and beyond.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main footer grid */}
            <div className={`${CONTAINER} py-12 sm:py-16 lg:py-20`}>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-12 lg:gap-x-8">
                    {/* Studio identity */}
                    <div className="min-w-0 sm:col-span-2 lg:col-span-5">
                        <a
                            href="#home"
                            onClick={(event) => scrollToSection(event, "#home")}
                            aria-label="North Stone home"
                            className={`group inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-sm ${FOCUS}`}
                        >
                            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl font-extrabold tracking-[-0.04em] text-[#F5F1E8] transition-colors duration-200 group-hover:text-[#D94F35]">
                                North Stone
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#D94F35]">
                                Digital Studio
                            </span>
                        </a>

                        <p className="mt-5 max-w-md text-sm leading-7 text-[#B9B0A2]">
                            An independent digital agency building purposeful websites, robust web
                            applications, and business automation systems that help businesses work
                            smarter and grow with clarity.
                        </p>

                        <ul aria-label="Contact and social links" className="mt-6 flex flex-wrap gap-2.5">
                            {SOCIAL_LINKS.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        aria-label={item.label || item.name}
                                        title={item.label || item.name}
                                        {...(item.external
                                            ? { target: "_blank", rel: "noopener noreferrer" }
                                            : {})}
                                        className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#3A3B36] text-[#F5F1E8]/80 transition-colors duration-200 hover:border-[#D94F35] hover:bg-[#D94F35] hover:text-white ${FOCUS}`}
                                    >
                                        <SocialIcon name={item.name} />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[#3A3B36] pt-5 font-mono text-[10px] uppercase leading-5 tracking-[0.1em] text-[#B9B0A2]/80 sm:mt-7 sm:gap-x-4">
                            <span>Bespoke Engineering</span>
                            <span aria-hidden="true" className="text-[#D94F35]">/</span>
                            <span>Measurable Impact</span>
                            <span aria-hidden="true" className="text-[#D94F35]">/</span>
                            <span>Clean Code</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav aria-label="Footer navigation" className="min-w-0 lg:col-span-3">
                        <FooterHeading>Explore</FooterHeading>

                        <ul className="space-y-1 sm:space-y-2">
                            {FOOTER_NAVIGATION.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        onClick={(event) => scrollToSection(event, item.href)}
                                        className={`${footerLink} ${item.featured
                                                ? "font-medium text-[#D94F35] hover:text-[#F07459]"
                                                : ""
                                            }`}
                                    >
                                        {item.label}
                                        {item.featured && (
                                            <span aria-hidden="true" className="ml-2">↗</span>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Services */}
                    <div className="min-w-0 lg:col-span-4">
                        <FooterHeading>What We Do</FooterHeading>

                        <ul className="divide-y divide-[#3A3B36]">
                            {FOOTER_CAPABILITIES.map((item) => (
                                <li key={item.number}>
                                    <a
                                        href="#services"
                                        onClick={(event) => scrollToSection(event, "#services")}
                                        className={`group grid grid-cols-[2rem_minmax(0,1fr)] gap-3 py-4 first:pt-0 last:pb-0 ${FOCUS}`}
                                    >
                                        <span className="pt-0.5 font-mono text-[10px] tabular-nums text-[#D94F35]">
                                            {item.number}
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block text-sm font-medium leading-6 text-[#F5F1E8]/90 transition-colors duration-200 group-hover:text-[#D94F35]">
                                                {item.title}
                                            </span>
                                            <span className="mt-1 block text-xs leading-5 text-[#B9B0A2]/75">
                                                {item.description}
                                            </span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 border-t border-[#3A3B36] pt-5">
                            <span className={`${eyebrow} block`}>Studio Location</span>
                            <p className="mt-2 text-sm leading-6 text-[#B9B0A2]">
                                Based in Pune, Maharashtra. Collaborating with ambitious teams across
                                locations and industries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-[#3A3B36]">
                <div
                    className={`${CONTAINER} flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between`}
                    style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
                >
                    <p className="text-xs leading-5 text-[#B9B0A2]/80">
                        © {currentYear} North Stone. All rights reserved.
                    </p>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        className={`group inline-flex min-h-10 w-fit items-center gap-2 rounded-sm text-xs font-medium text-[#F5F1E8] transition-colors duration-200 hover:text-[#D94F35] ${FOCUS}`}
                    >
                        <span>Back to top</span>
                        <span
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:-translate-y-0.5"
                        >
                            ↑
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}