# Hassan Shahid — Portfolio

A single-page portfolio for a Scrum Master / Agile Coach with a senior frontend
background. Built with React 19, Vite and Tailwind CSS v4.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run lint
```

## How it's put together

All copy lives in one place — [`src/data/resume.js`](src/data/resume.js). Edit
that file to change anything on the page; the components are presentational and
read from it.

| Export | Drives |
| --- | --- |
| `profile` | Hero headline, contact links, footer, page metadata |
| `stats` | The four-up stat band under the hero |
| `navLinks` | Navbar, mobile sheet and footer links (also the scroll-spy targets) |
| `sprintBoard` | The mock sprint board rendered in the hero visual |
| `experience` | Experience timeline |
| `projects` | Project cards — set `featured: true` to accent one |
| `skillGroups` | Skills cards; `icon` maps to a lucide icon in `Skills.jsx` |
| `softSkills`, `interests`, `achievements`, `education` | About section |

Section metadata (`<title>`, description, Open Graph) lives in
[`index.html`](index.html) and is not read from `resume.js`.

### Components

```
src/
├── App.jsx                     section order
├── index.css                   Tailwind theme: ink/brand/accent scales, reveal, backdrops
├── data/resume.js              all content
└── components/
    ├── Reveal.jsx              IntersectionObserver fade-in wrapper (`delay` staggers siblings)
    ├── SectionHeading.jsx      eyebrow + title + description
    ├── Navbar.jsx              scroll-spy nav, mobile sheet
    ├── Hero.jsx  About.jsx  Experience.jsx  Projects.jsx  Skills.jsx  Contact.jsx  Footer.jsx
    └── icons/LinkedInIcon.jsx  lucide dropped brand icons, so this ships inline
```

### Design tokens

Colours are defined as Tailwind v4 `@theme` variables in `src/index.css`:

- `ink-50 … ink-900` — neutral slate ramp (text, borders, surfaces)
- `brand-50 … brand-700` — indigo, used for accents and the gradient headline
- `accent-500 / accent-600` — teal, used for "live" states and check marks

Change those values and the whole page follows.

## Notes

- Fonts (Inter, Plus Jakarta Sans) load from Google Fonts in `index.html`.
- Animations respect `prefers-reduced-motion`.
- `public/profile.jpg` is unused by the current design — the hero uses the
  sprint-board panel instead of a photo.

## Tech stack

React 19 · Vite 5 · Tailwind CSS v4 · lucide-react
