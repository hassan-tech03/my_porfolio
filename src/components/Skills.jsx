import { ClipboardList, Cloud, Code2, Users, Workflow, Wrench } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { skillGroups } from '../data/resume';

const icons = {
  clipboard: ClipboardList,
  users: Users,
  workflow: Workflow,
  code: Code2,
  cloud: Cloud,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Process &amp; stack"
          description="The agile toolkit I run teams with, plus the engineering side that keeps me credible in the room."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon] ?? ClipboardList;
            return (
              <Reveal
                key={group.title}
                delay={(i % 3) * 90}
                className="rounded-2xl border border-ink-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-500 to-brand-700 text-white shadow-sm">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-base font-bold text-ink-900">
                    {group.title}
                  </h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-ink-200 bg-ink-50 px-2.5 py-1.5 text-[13px] font-medium text-ink-600 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}

          {/* Delivery snapshot band */}
          <Reveal
            delay={180}
            className="rounded-2xl border border-dashed border-brand-300 bg-brand-50/50 p-7 md:col-span-2 lg:col-span-3"
          >
            <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
              <div className="max-w-md">
                <h3 className="font-display text-base font-bold text-ink-900">
                  Sustained sprint velocity
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Averaged 85%+ story point completion across 2-week sprints with a team
                  of 8–10, while cutting scope creep by 30% through disciplined backlog
                  grooming.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-ink-400">
                    Avg. completion
                  </span>
                  <span className="font-display text-2xl font-bold text-ink-900">85%</span>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-brand-100">
                  <div className="h-full w-[85%] rounded-full bg-linear-to-r from-brand-500 to-accent-500" />
                </div>
                <p className="mt-2 text-xs font-medium text-ink-400">
                  Rolling average · team of 8–10
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
