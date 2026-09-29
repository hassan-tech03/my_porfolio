import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { projectFilters, projects } from '../data/resume';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Projects"
          description="Products delivered with the iSOFTSTUDIOS team — streaming, marketplaces, EdTech, SaaS and health — that I've led as Scrum Master or built the frontend for."
        />

        <div
          role="group"
          aria-label="Filter projects"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {projectFilters.map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                filter === name
                  ? 'border-transparent bg-gradient-brand text-white shadow-md shadow-b/25'
                  : 'border-line bg-panel text-fg-2 hover:text-fg'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((project) => (
            <article key={project.title} className="card card-hover group flex flex-col p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-line bg-chip px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-a">
                  {project.kind}
                </span>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-fg-3 transition-colors group-hover:text-a"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>

              <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-fg">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-3">{project.description}</p>

              <ul className="mt-5 space-y-2">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-fg-2">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-a" />
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-line bg-chip px-2 py-1 text-[11px] font-medium text-fg-3"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
