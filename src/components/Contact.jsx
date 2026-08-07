import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import Reveal from './Reveal';
import LinkedInIcon from './icons/LinkedInIcon';
import { profile } from '../data/resume';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: profile.linkedin,
    external: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-ink-100 bg-ink-50/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl bg-ink-900 px-7 py-14 text-center shadow-2xl shadow-ink-900/20 sm:px-14 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-500/25 blur-[90px]" />
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-accent-500/25 blur-[90px]" />
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-200">
              Contact
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s get your team shipping on cadence
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-300">
              Open to Scrum Master, Agile Coach and delivery lead roles. Drop me a line
              and I&apos;ll get back to you shortly.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition-all hover:bg-brand-100"
              >
                <Mail size={16} />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                LinkedIn
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => {
            const inner = (
              <>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <c.icon size={17} />
                </span>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">
                    {c.label}
                  </p>
                  <p className="mt-1 break-words text-sm font-medium text-ink-800">
                    {c.value}
                  </p>
                </div>
              </>
            );

            const className =
              'block rounded-2xl border border-ink-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/5';

            return (
              <Reveal key={c.label} delay={i * 70}>
                {c.href ? (
                  <a
                    href={c.href}
                    className={className}
                    {...(c.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={className}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
