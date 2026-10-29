import React, { useState } from "react";
import { PROJECTS } from "./data.js";
import {
    CARD_RADIUS,
    FOCUS,
    HEADING,
    Check,
    CountUp,
    Reveal,
    Section,
    SectionHeading,
} from "./shared.jsx";

const slug = (text) =>
    String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function Preview({ project }) {
    const data = project.previewData;
    const rise = (index) => ({ animationDelay: `${120 + index * 110}ms` });

    return (
        <div className="flex min-h-[280px] flex-col justify-between sm:min-h-[320px]">
            {project.previewType === "live-browser" && (
                <div className="space-y-5 sm:space-y-6">
                    <div className="ns-rise border-b border-[#3A3B36] pb-4" style={rise(0)}>
                        <span className="mb-1 block text-xs text-[#D94F35]">{data.tagline}</span>
                        <h4 className={`${HEADING} text-lg font-bold text-[#F5F1E8] sm:text-2xl`}>
                            {data.headline}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#B9B0A2]">{data.subtext}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        {data.stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="ns-rise min-w-0 rounded-xl border border-[#3A3B36] bg-[#222320] p-2.5 text-center sm:p-3"
                                style={rise(index + 1)}
                            >
                                <span className={`${HEADING} block text-base font-bold text-[#D94F35] sm:text-lg`}>
                                    <CountUp value={stat.val} />
                                </span>
                                <span className="block text-[11px] leading-tight text-[#B9B0A2] sm:text-xs">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {project.previewType === "learning-interface" && (
                <div className="space-y-4">
                    <div className="ns-rise border-b border-[#3A3B36] pb-3" style={rise(0)}>
                        <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                                <span className="text-xs text-[#D94F35]">{data.module}</span>
                                <h4 className="text-base font-bold text-[#F5F1E8] sm:text-lg">
                                    {data.activeCourse}
                                </h4>
                            </div>
                            <span className="shrink-0 whitespace-nowrap rounded-full border border-[#D94F35]/40 bg-[#D94F35]/15 px-3 py-1 text-xs text-[#D94F35]">
                                {data.progress}
                            </span>
                        </div>

                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#3A3B36]">
                            <div
                                className="ns-fill h-full origin-left rounded-full bg-[#D94F35]"
                                style={{ width: `${data.progressValue}%`, animationDelay: "300ms" }}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        {data.lessons.map((lesson, index) => (
                            <div
                                key={lesson.title}
                                className={`ns-rise flex items-center justify-between gap-3 rounded-xl border p-3 text-xs ${lesson.status === "Completed"
                                        ? "border-[#3A3B36] bg-[#222320]/60 text-[#B9B0A2]"
                                        : lesson.status === "In Progress"
                                            ? "border-[#D94F35]/50 bg-[#D94F35]/10 font-semibold text-[#F5F1E8]"
                                            : "border-[#3A3B36]/60 bg-[#222320]/30 text-[#B9B0A2]/60"
                                    }`}
                                style={rise(index + 1)}
                            >
                                <span className="min-w-0">{lesson.title}</span>
                                <span className="flex shrink-0 items-center gap-1.5">
                                    {lesson.status === "Completed" && (
                                        <Check className="h-3.5 w-3.5 text-[#D94F35]" />
                                    )}
                                    {lesson.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {project.previewType === "marketplace-feed" && (
                <div className="space-y-4">
                    <div
                        className="ns-rise flex items-center justify-between gap-3 border-b border-[#3A3B36] pb-3"
                        style={rise(0)}
                    >
                        <div className="min-w-0">
                            <span className="text-xs text-[#D94F35]">Real-time APMC mandi feed</span>
                            <h4 className="text-base font-bold text-[#F5F1E8] sm:text-lg">
                                {data.marketIndex}
                            </h4>
                        </div>
                        <span className="shrink-0 text-xs text-[#B9B0A2]">{data.updatedAt}</span>
                    </div>

                    <div className="space-y-2 text-xs">
                        {data.lots.map((lot, index) => (
                            <div
                                key={lot.item}
                                className="ns-rise flex flex-col justify-between gap-2 rounded-xl border border-[#3A3B36] bg-[#222320] p-3 transition-colors duration-300 hover:border-[#D94F35]/50 sm:flex-row sm:items-center"
                                style={rise(index + 1)}
                            >
                                <div className="min-w-0">
                                    <strong className="block text-[#F5F1E8]">{lot.item}</strong>
                                    <span className="text-[11px] text-[#B9B0A2]">{lot.origin}</span>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                    <span className="text-[11px] text-[#B9B0A2] line-through">
                                        {lot.avgPrice}
                                    </span>
                                    <span className="font-bold text-[#D94F35]">{lot.directOffer}</span>
                                    <span className="rounded-full bg-[#3A3B36] px-2 py-0.5 text-[10px] text-[#F5F1E8]">
                                        {lot.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {project.previewType === "kanban-board" && (
                <div className="space-y-4">
                    <div className="ns-rise border-b border-[#3A3B36] pb-3" style={rise(0)}>
                        <span className="text-xs text-[#D94F35]">Team workflow board</span>
                        <h4 className="text-base font-bold text-[#F5F1E8] sm:text-lg">{data.boardName}</h4>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {data.columns.map((column, index) => (
                            <div
                                key={column.name}
                                className="ns-rise min-w-0 rounded-xl border border-[#3A3B36] bg-[#222320] p-3"
                                style={rise(index + 1)}
                            >
                                <div className="mb-2 flex items-center justify-between text-xs text-[#B9B0A2]">
                                    <span>{column.name}</span>
                                    <span className="rounded-full bg-[#3A3B36] px-2 py-0.5">{column.count}</span>
                                </div>
                                <div className="rounded-lg border border-[#3A3B36]/80 bg-[#2B2C28] p-2.5 text-xs text-[#F5F1E8] transition-transform duration-300 hover:-translate-y-0.5">
                                    {column.task}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-[#3A3B36] pt-3 text-xs text-[#B9B0A2]">
                <span>North Stone architecture</span>
                <span className="text-[#D94F35]">React · Modular UI</span>
            </div>
        </div>
    );
}

export default function Work() {
    const [active, setActive] = useState(0);
    const project = PROJECTS[active];

    const onTabKeyDown = (e) => {
        const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
        let next = active;

        if (e.key in step) {
            next = (active + step[e.key] + PROJECTS.length) % PROJECTS.length;
        } else if (e.key === "Home") {
            next = 0;
        } else if (e.key === "End") {
            next = PROJECTS.length - 1;
        } else {
            return;
        }

        e.preventDefault();
        setActive(next);
        document.getElementById(`tab-${PROJECTS[next].id}`)?.focus();
    };

    return (
        <Section id="work" className="border-t border-[#B9B0A2]/40">
            <SectionHeading
                accent="digital platforms."
                intro="Live client engagements, learning applications, and operational prototypes built to solve tangible problems."
            >
                Selected work &
            </SectionHeading>

            <Reveal>
                <div
                    role="tablist"
                    aria-label="Projects"
                    onKeyDown={onTabKeyDown}
                    className="mb-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3"
                >
                    {PROJECTS.map((item, index) => {
                        const isActive = active === index;

                        return (
                            <button
                                key={item.id}
                                id={`tab-${item.id}`}
                                role="tab"
                                type="button"
                                aria-selected={isActive}
                                aria-controls={`panel-${item.id}`}
                                tabIndex={isActive ? 0 : -1}
                                onClick={() => setActive(index)}
                                className={`flex min-w-0 items-center gap-2 rounded-2xl border px-3.5 py-2.5 text-left text-sm font-medium leading-tight transition-all duration-300 sm:gap-2.5 sm:rounded-full sm:px-5 ${FOCUS} ${isActive
                                        ? "border-[#191919] bg-[#191919] text-[#F5F1E8]"
                                        : "border-[#B9B0A2]/60 text-[#191919]/75 hover:border-[#191919]/60 hover:text-[#191919]"
                                    }`}
                            >
                                <span
                                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${item.status === "Live" ? "bg-[#D94F35]" : "bg-[#B9B0A2]"
                                        }`}
                                    aria-hidden="true"
                                />
                                <span className="min-w-0">{item.title}</span>
                            </button>
                        );
                    })}
                </div>
            </Reveal>

            <Reveal delay={100}>
                <div
                    key={project.id}
                    id={`panel-${project.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${project.id}`}
                    className={`ns-swap grid overflow-hidden ${CARD_RADIUS} border border-[#B9B0A2]/50 bg-[#E8E1D6]/40 lg:grid-cols-12`}
                >
                    <div className="flex min-w-0 flex-col justify-between border-b border-[#B9B0A2]/50 p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">
                        <div>
                            <span className="inline-block rounded-full border border-[#D94F35]/25 bg-[#D94F35]/10 px-3 py-1 text-xs font-semibold text-[#D94F35]">
                                {project.badge}
                            </span>

                            <h3 className={`${HEADING} mt-5 text-2xl font-bold tracking-tight sm:text-3xl`}>
                                {project.title}
                            </h3>
                            <div className="mt-1 text-sm text-[#191919]/65">{project.category}</div>

                            <p className="mt-5 text-sm leading-relaxed text-[#191919]/80">
                                {project.description}
                            </p>

                            <ul className="mt-6 space-y-2.5 border-t border-[#B9B0A2]/40 pt-5">
                                {project.deliverables.map((item) => (
                                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#191919]/85">
                                        <Check className="mt-0.5 text-[#D94F35]" />
                                        <span className="min-w-0">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8 border-t border-[#B9B0A2]/40 pt-6">
                            {project.url ? (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group inline-flex items-center gap-2 break-all text-sm font-semibold text-[#191919] transition-colors hover:text-[#D94F35] ${FOCUS}`}
                                >
                                    Visit {project.displayUrl}
                                    <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                        ↗
                                    </span>
                                </a>
                            ) : (
                                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-2xl border border-[#B9B0A2]/50 bg-[#E8E1D6] px-4 py-2 text-xs text-[#191919]/75">
                                    <span>{project.displayUrl}</span>
                                    <span className="text-[#D94F35]">Internal showcase</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="min-w-0 bg-[#222320] p-4 text-[#F5F1E8] sm:p-6 lg:col-span-7 lg:p-8">
                        <div className="flex items-center justify-between gap-3 rounded-t-xl border border-[#3A3B36] bg-[#191919] px-3 py-3 text-xs sm:px-4">
                            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#D94F35]/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[#B9B0A2]/50" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[#B9B0A2]/30" />
                            </div>

                            <div className="min-w-0 flex-1 truncate text-center font-mono text-[#B9B0A2]">
                                {project.url || `https://${slug(project.title)}.internal/preview`}
                            </div>

                            <div className="shrink-0 text-[11px] font-semibold text-[#D94F35]">
                                {project.status === "Live" ? "Live · SSL" : "Sandbox"}
                            </div>
                        </div>

                        <div className="rounded-b-xl border-x border-b border-[#3A3B36] bg-[#2B2C28] p-4 sm:p-6 lg:p-8">
                            <Preview project={project} />
                        </div>
                    </div>
                </div>
            </Reveal>
        </Section>
    );
}