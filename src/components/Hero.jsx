import { Clock, Download, Gauge, ListChecks, Mail, MapPin, TrendingUp } from 'lucide-react';
import Reveal from './Reveal';
import ScrumRunner from './ScrumRunner';
import LinkedInIcon from './icons/LinkedInIcon';
import { profile, stats } from '../data/resume';

const statIcons = { clock: Clock, gauge: Gauge, list: ListChecks, trend: TrendingUp };

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-backdrop absolute inset-0" />
        <div
          className="absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full blur-[140px]"
          style={{ background: 'var(--glow-a)' }}
        />
        <div
          className="absolute -right-32 top-24 h-[30rem] w-[30rem] rounded-full blur-[140px]"
          style={{ background: 'var(--glow-b)' }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 text-xs font-semibold text-a">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-a opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-a" />
                </span>
                {profile.availability}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-[3.4rem]">
                Hi, I&apos;m
                <span className="text-gradient block">{profile.name},</span>
                Scrum Master
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-4 font-display text-lg font-semibold text-fg-2 sm:text-xl">
                {profile.role}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-3 sm:text-lg">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="focus-ring group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-b/25 transition-all hover:shadow-xl hover:shadow-b/35"
                >
                  <Mail size={16} />
                  Contact me
                </a>
                <a
                  href={profile.resume}
                  download="Hassan_Shahid_Resume.pdf"
                  className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-5 py-3 text-sm font-semibold text-fg transition-colors hover:bg-chip"
                >
                  <Download size={16} />
                  Download resume
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-panel text-fg-2 transition-colors hover:text-a"
                >
                  <LinkedInIcon size={17} />
                </a>
              </div>
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-fg-3">
                <MapPin size={15} className="text-a" />
                {profile.location}
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="card mx-auto w-full max-w-sm p-8 text-center shadow-2xl shadow-black/20">
              <div className="relative mx-auto h-48 w-48">
                <span
                  aria-hidden
                  className="animate-spin-slow absolute -inset-2 rounded-full border-2 border-dashed border-b/70"
                />
                <div className="h-48 w-48 overflow-hidden rounded-full">
                  <img
                    src="/profile.jpg"
                    alt="Portrait of Hassan Shahid"
                    width="192"
                    height="192"
                    className="h-full w-full origin-[50%_38%] scale-[2.3] object-cover object-top"
                  />
                </div>
              </div>
              <p className="mt-6 font-display text-lg font-bold text-fg">{profile.name}</p>
              <p className="mt-1 text-sm font-medium text-a">{profile.role}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <dl className="card mt-16 grid grid-cols-2 gap-x-6 gap-y-8 p-6 sm:p-8 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = statIcons[stat.icon] ?? Clock;
              return (
                <div key={stat.label} className="flex items-center gap-4">
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-md shadow-b/20 xs:inline-flex">
                    <Icon size={20} />
                  </span>
                  <div className="flex flex-col-reverse">
                    <dt className="text-sm text-fg-3">{stat.label}</dt>
                    <dd className="font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                      {stat.value}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
        <SectionRunnerIntro />
        <Reveal delay={80} className="mt-8">
          <ScrumRunner />
        </Reveal>
      </div>
    </section>
  );
}

function SectionRunnerIntro() {
  return (
    <Reveal className="text-center">
      <h2 className="font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">
        Interactive Scrum Runner
      </h2>
      <p className="mt-2 text-sm text-fg-3 sm:text-base">
        Run a suite to check the numbers behind my delivery record.
      </p>
    </Reveal>
  );
}
