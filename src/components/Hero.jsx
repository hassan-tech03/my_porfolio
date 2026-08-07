import { ArrowRight, Mail, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import SprintBoard from './SprintBoard';
import LinkedInIcon from './icons/LinkedInIcon';
import { profile, stats } from '../data/resume';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="dot-backdrop absolute inset-0" />
        <div className="absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-brand-200/45 blur-[130px]" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-accent-500/10 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Identity row — name stays small so the statement can carry the space */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-b border-ink-200/80 pb-6">
            <div className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 font-display text-sm font-bold text-white">
                HS
              </span>
              <div>
                <p className="font-display text-base font-bold tracking-tight text-ink-900">
                  {profile.name}
                </p>
                <p className="mt-0.5 text-sm text-ink-500">
                  {profile.role}
                  <span className="mx-1.5 text-ink-300">·</span>
                  <span className="inline-flex items-center gap-1 whitespace-nowrap">
                    <MapPin size={13} className="text-ink-400" />
                    {profile.location}
                  </span>
                </p>
              </div>
            </div>

            <p className="inline-flex items-center gap-2 text-sm font-medium text-ink-600">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
              </span>
              Open to Scrum Master &amp; delivery roles
            </p>
          </div>
        </Reveal>

        {/* Statement */}
        <Reveal delay={80}>
          <h1 className="mt-12 max-w-3xl font-display text-[2.6rem] font-extrabold leading-[1.06] tracking-tight text-ink-900 sm:text-6xl lg:text-[4.25rem]">
            Teams that ship
            <br />
            <span className="text-brand-600">on cadence</span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-500">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-9 flex items-center gap-2.5 sm:gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-ink-900/10 transition-all hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-600/20 sm:px-6"
            >
              View my work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-ink-200 bg-white px-5 py-3 text-sm font-semibold text-ink-800 shadow-sm transition-all hover:border-ink-300 hover:bg-ink-50 sm:px-6"
            >
              <Mail size={16} />
              <span className="hidden xs:inline">Get in touch</span>
              <span className="xs:hidden">Contact</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-500 shadow-sm transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600"
            >
              <LinkedInIcon size={17} />
            </a>
          </div>
        </Reveal>

        {/* Sprint board */}
        <Reveal delay={260}>
          <div className="mt-16">
            <SprintBoard />
          </div>
        </Reveal>

        {/* Stats — inline rule-separated row rather than a boxed grid */}
        <Reveal delay={120}>
          <dl className="mt-14 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col-reverse ${
                  i % 2 === 1 ? 'pl-6' : ''
                } sm:pl-0 ${i > 0 ? 'sm:border-l sm:border-ink-200 sm:pl-6' : ''}`}
              >
                <dt className="mt-1.5 text-sm text-ink-500">{stat.label}</dt>
                <dd className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
