import { Briefcase, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { experience } from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've delivered"
          description="Four years at one studio wearing two hats running the agile process while staying close enough to the code to keep estimates honest."
        />

        <ol className="relative mt-14 space-y-8 border-l border-ink-200 pl-6 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.role} delay={i * 90} className="relative">
              {/* Timeline node */}
              <span
                className={`absolute -left-[1.7rem] top-7 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white sm:-left-[2.95rem] ${
                  job.current ? 'bg-accent-500' : 'bg-ink-300'
                }`}
              >
                {job.current && (
                  <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-accent-500 opacity-60" />
                )}
              </span>

              <article className="group rounded-2xl border border-ink-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/5 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-900 sm:text-xl">
                      {job.role}
                    </h3>
                    <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      <span className="inline-flex items-center gap-1.5 font-semibold text-brand-600">
                        <Briefcase size={14} />
                        {job.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-ink-400">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${
                      job.current
                        ? 'bg-accent-500/10 text-accent-600'
                        : 'bg-ink-100 text-ink-600'
                    }`}
                  >
                    {job.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300" />
                      {point}
                    </li>
                  ))}
                </ul>

                {job.note && (
                  <p className="mt-5 rounded-xl border border-brand-100 bg-brand-50/60 p-4 text-sm leading-relaxed text-ink-600">
                    {job.note}
                  </p>
                )}

                {job.stack && (
                  <div className="mt-5">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-400">
                      Stack
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-lg border border-ink-200 bg-ink-50 px-2.5 py-1.5 text-xs font-medium text-ink-600"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
