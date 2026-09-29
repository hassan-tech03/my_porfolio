import { CheckSquare, ClipboardList } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { checklist, interests, profile, softSkills } from '../data/resume';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Reveal className="card p-6 shadow-xl shadow-black/10 sm:p-8">
            <h3 className="flex items-center gap-2.5 font-display text-base font-bold text-fg">
              <ClipboardList size={18} className="text-a" />
              Delivery standards checklist
            </h3>
            <ul className="mt-5 space-y-2.5">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-line bg-chip px-4 py-3 text-sm text-fg-2"
                >
                  <CheckSquare size={16} className="mt-0.5 shrink-0 text-a" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <div>
            <SectionHeading.Inline
              title="About me"
              description="Predictable sprints and unblocked teams"
            />
            <Reveal delay={80}>
              <p className="mt-6 text-base leading-8 text-fg-2">{profile.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line bg-panel px-3.5 py-1.5 text-sm font-medium text-fg-2"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-fg-3">
                <span className="font-semibold text-fg-2">Outside work:</span>{' '}
                {interests.join(' · ')}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
