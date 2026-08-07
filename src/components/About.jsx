import { Award, Code2, GraduationCap, RefreshCw, Unplug } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { achievements, education, interests, profile, softSkills } from '../data/resume';

const highlights = [
  {
    icon: RefreshCw,
    title: 'Ceremony facilitation',
    body: 'Planning, standups, reviews and retrospectives for cross-functional teams of 8–10.',
  },
  {
    icon: Unplug,
    title: 'Impediment removal',
    body: '15+ cross-team blockers cleared per quarter, resolution time cut from 5 days to 2.',
  },
  {
    icon: Code2,
    title: "Engineer's toolkit",
    body: 'A senior frontend background that sharpens estimation and speeds up blocker triage.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-ink-100 bg-ink-50/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="Delivery is a rhythm, not a rescue"
          description="I work between product and engineering turning vague requirements into a ready backlog, and a ready backlog into a predictable release cadence."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="rounded-2xl border border-ink-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-base leading-8 text-ink-600">{profile.summary}</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title}>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <item.icon size={17} />
                  </span>
                  <h3 className="mt-3 font-display text-sm font-semibold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={80} className="rounded-2xl border border-ink-200 bg-white p-7 shadow-sm">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-ink-900 text-white">
                <GraduationCap size={17} />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-ink-600">{education.school}</p>
              <p className="mt-3 inline-flex rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-600">
                {education.period}
              </p>
            </Reveal>

            <Reveal delay={160} className="rounded-2xl border border-ink-200 bg-white p-7 shadow-sm">
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink-400">
                Soft skills
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-ink-200 bg-ink-50 px-3 py-1.5 text-sm text-ink-600"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              <h3 className="mt-7 font-display text-sm font-semibold uppercase tracking-widest text-ink-400">
                Interests
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {interests.join(' · ')}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Recognition */}
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {achievements.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/5"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-brand-500 to-brand-700 text-white shadow-sm">
                  <Award size={17} />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-widest text-brand-600">
                    {item.org}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-500">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
