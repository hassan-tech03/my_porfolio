import { Award, GraduationCap } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { achievements, education } from '../data/resume';

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading title="Education & recognition" />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          <Reveal className="card p-7">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-md shadow-b/20">
              <GraduationCap size={20} />
            </span>
            <h3 className="mt-5 font-display text-lg font-bold text-fg">{education.degree}</h3>
            <p className="mt-1 text-sm text-fg-2">{education.school}</p>
            <p className="mt-1 text-sm text-fg-3">{education.location}</p>
            <p className="mt-4 inline-flex rounded-full border border-line bg-chip px-3 py-1 text-xs font-semibold text-fg-2">
              {education.period}
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {achievements.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="card card-hover p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-md shadow-b/20">
                  <Award size={18} />
                </span>
                <h3 className="mt-4 font-display text-sm font-bold text-fg">{item.title}</h3>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-widest text-a">
                  {item.org}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fg-3">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
