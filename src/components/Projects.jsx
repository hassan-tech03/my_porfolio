import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { projects } from '../data/resume';

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-ink-100 bg-ink-50/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Products delivered with the iSOFTSTUDIOS team streaming, marketplaces, EdTech, SaaS and healthcare plus client work I've led as Scrum Master and built the frontend for."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal
              as="article"
              key={project.title}
              delay={(i % 3) * 90}
              className={`group relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5 ${
                project.featured
                  ? 'border-brand-200 md:col-span-2 lg:col-span-1'
                  : 'border-ink-200 hover:border-brand-200'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    project.featured
                      ? 'bg-brand-50 text-brand-700'
                      : 'bg-ink-100 text-ink-500'
                  }`}
                >
                  {project.kind}
                </span>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-all group-hover:border-brand-300 group-hover:bg-brand-50 group-hover:text-brand-600"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>

              <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink-900">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {project.description}
              </p>

              <ul className="mt-5 space-y-2">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-600">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent-500" />
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-ink-50 px-2 py-1 text-[11px] font-medium text-ink-500 ring-1 ring-inset ring-ink-200/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
