import { ArrowUp, Mail } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';
import { navLinks, profile } from '../data/resume';

const iconButton =
  'focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-panel text-fg-2 transition-colors hover:text-a';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#top" className="focus-ring flex items-center gap-3 rounded-lg">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand font-display text-sm font-bold text-white shadow-lg shadow-b/20">
                HS
              </span>
              <span className="leading-tight">
                <span className="block font-display text-sm font-bold text-fg">
                  {profile.name}
                </span>
                <span className="block text-xs text-fg-3">{profile.role}</span>
              </span>
            </a>
            <p className="mt-5 text-sm text-fg-3">Keeping teams shipping on cadence.</p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-fg-3 transition-colors hover:text-a">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-line pt-6">
          <p className="text-sm text-fg-3">
            © {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a href={`mailto:${profile.email}`} aria-label="Email" className={iconButton}>
              <Mail size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconButton}
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-lg shadow-b/25"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
