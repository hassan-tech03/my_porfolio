import { ClipboardList, Cloud, Code2, Users, Workflow } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { skillGroups } from '../data/resume';

const icons = {
  clipboard: ClipboardList,
  users: Users,
  workflow: Workflow,
  code: Code2,
  cloud: Cloud,
};

export default function Skills() {
  const groups = skillGroups.filter((g) => g.title !== 'Tools');

  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Skills & expertise"
          description="The agile toolkit I run teams with, plus the engineering side that keeps me credible in the room."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => {
            const Icon = icons[group.icon] ?? ClipboardList;
            return (
              <Reveal key={group.title} delay={(i % 3) * 90} className="card card-hover p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-md shadow-b/20">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-base font-bold text-fg">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-line bg-chip px-2.5 py-1.5 text-[13px] font-medium text-fg-2"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
