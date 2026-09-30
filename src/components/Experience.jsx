import { CalendarDays, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { experience } from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          title="Work experience"
          description="Five years at one studio. I started as a senior frontend developer and moved into Scrum Master, so I still know what a ticket really costs."
        />

        <ol className="relative mt-14 space-y-8 border-l border-line pl-6 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.role} delay={i * 90} className="relative">
              <span
                className={`absolute -left-[1.85rem] top-8 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-bg sm:-left-[3.05rem] ${
                  job.current ? 'bg-a' : 'bg-fg-3'
                }`}
              >
                {job.current && (
                  <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-a opacity-60" />
                )}
              </span>

              <article className="card card-hover p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand font-display text-lg font-bold text-white">
                      {job.company[0]}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-fg sm:text-xl">
                        {job.role}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-a">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1.5 text-xs sm:items-end">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-chip px-3 py-1 font-semibold text-fg-2">
                      <CalendarDays size={13} />
                      {job.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-fg-3">
                      <MapPin size={13} />
                      {job.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-fg-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-a" />
                      {point}
                    </li>
                  ))}
                </ul>

                {job.note && (
                  <p className="mt-5 rounded-xl border border-b/30 bg-b/10 p-4 text-sm leading-relaxed text-fg-2">
                    {job.note}
                  </p>
                )}

                {job.stack && (
                  <div className="mt-5">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-fg-3">
                      Stack
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-lg border border-line bg-chip px-2.5 py-1.5 text-xs font-medium text-fg-2"
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
