import { ArrowUpRight, Download, Mail, MapPin, Phone } from 'lucide-react';
import Reveal from './Reveal';
import ContactForm from './ContactForm';
import LinkedInIcon from './icons/LinkedInIcon';
import { profile } from '../data/resume';

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: profile.linkedin,
    external: true,
  },
  { icon: MapPin, label: 'Location', value: profile.location },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="card relative overflow-hidden px-7 py-14 text-center sm:px-14 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div
              className="absolute -left-20 -top-20 h-72 w-72 rounded-full blur-[90px]"
              style={{ background: 'var(--glow-a)' }}
            />
            <div
              className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full blur-[90px]"
              style={{ background: 'var(--glow-b)' }}
            />
          </div>

          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              Let&apos;s get your team <span className="text-gradient">shipping on cadence</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-fg-3">
              Open to remote Scrum Master, Agile Coach and delivery lead roles, with overlap
              across US, UK and EU hours. Drop me a line and I&apos;ll get back to you shortly.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="focus-ring inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-b/25"
              >
                <Mail size={16} />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-6 py-3 text-sm font-semibold text-fg transition-colors hover:bg-chip"
              >
                LinkedIn
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={profile.resume}
                download="Hassan_Shahid_Resume.pdf"
                className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-6 py-3 text-sm font-semibold text-fg transition-colors hover:bg-chip"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60} className="mt-6">
          <ContactForm />
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => {
            const inner = (
              <>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-chip text-a">
                  <c.icon size={17} />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-fg-3">
                  {c.label}
                </p>
                <p className="mt-1 break-words text-sm font-medium text-fg">{c.value}</p>
              </>
            );
            const cls = 'card card-hover block p-6';
            return (
              <Reveal key={c.label} delay={i * 70}>
                {c.href ? (
                  <a
                    href={c.href}
                    className={`${cls} focus-ring`}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
