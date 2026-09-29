import { ArrowUp } from 'lucide-react';
import { navLinks, profile } from '../data/resume';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm font-bold text-fg">{profile.name}</p>
          <p className="mt-1 text-sm text-fg-3">
            {profile.role} · {profile.location}
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-fg-3 transition-colors hover:text-a">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <p className="text-sm text-fg-3">© {new Date().getFullYear()} All rights reserved.</p>
          <a
            href="#top"
            aria-label="Back to top"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg-3 transition-colors hover:text-a"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
