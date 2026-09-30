export const profile = {
  name: "Hassan Shahid",
  role: "Scrum Master & Agile Coach",
  tagline:
    "I keep cross-functional teams shipping on time. I run the sprint ceremonies, keep backlogs unblocked and bring a frontend engineer's eye for what's actually hard.",
  location: "Lahore, Pakistan",
  email: "hassan.shahid031998@gmail.com",
  phone: "+92 306 9167328",
  phoneHref: "+923069167328",
  resume: "/Hassan_Shahid_Resume.pdf",
  linkedin: "https://www.linkedin.com/in/hassan-shahid3006751b1",
  availability: "Open to remote · overlap with US / UK / EU hours",
  summary:
    "Scrum Master with a strong frontend engineering background. I use the Scrum framework and servant leadership to lead cross-functional teams of 8–10 across SaaS, e-commerce, EdTech and reporting products. I run the full agile lifecycle, from sprint planning and backlog grooming to retrospectives and stakeholder demos, and keep sprint velocity at 85%+. My technical background lets me take part properly in estimation, story refinement and engineering discussions, which means blockers get resolved faster and teams organise themselves better.",
};

export const stats = [
  { value: "5+", label: "Years in software delivery", icon: "clock" },
  { value: "85%+", label: "Sprint velocity", icon: "gauge" },
  { value: "100+", label: "Stories groomed", icon: "list" },
  { value: "40%", label: "Better on-time delivery", icon: "trend" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#tools", label: "Tools" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

/**
 * Suites for the hero's "Scrum runner" terminal. Every assertion restates a
 * figure from the experience section below — nothing here is live data.
 */
export const runnerSuites = [
  {
    id: "planning",
    label: "Run Sprint Planning",
    lines: [
      "backlog groomed .............. 100+ user stories",
      "sprint readiness ............. 2-week cycles",
      "team capacity ................ 8–10 members",
      "mid-sprint scope creep ....... -30%",
    ],
  },
  {
    id: "delivery",
    label: "Run Delivery Check",
    lines: [
      "sprint velocity .............. 85%+ story points",
      "on-time delivery ............. +40% in 6 months",
      "client engagements ........... 3+ in parallel",
      "stakeholder demos ............ bi-weekly",
    ],
  },
  {
    id: "retro",
    label: "Run Retrospective",
    lines: [
      "blockers resolved ............ 15+ per quarter",
      "resolution time .............. 5 days → 2 days",
      "retro actions tracked ........ every quarter",
      "CI/CD + test automation ...... adopted",
    ],
  },
];

export const checklist = [
  "Backlogs groomed to a 2-week sprint-ready state",
  "Blockers surfaced early and cleared fast",
  "Stories with clear acceptance criteria",
  "Demos every two weeks, roadmap always visible",
  "Async-friendly ceremonies across time zones",
];

export const experience = [
  {
    role: "Scrum Master",
    company: "iSOFTSTUDIOS",
    location: "Lahore, Pakistan",
    period: "Jan 2024 – Present",
    current: true,
    points: [
      "Sprint planning & delivery: facilitate all Scrum ceremonies (planning, daily standups, reviews and retrospectives) for a cross-functional team of 8–10, maintaining an average sprint velocity of 85%+ story point completion.",
      "Backlog management: partner with product owners to groom and prioritise backlogs of 100+ user stories, ensuring 2-week sprint readiness and reducing scope creep by 30%.",
      "Impediment removal: identify and resolve 15+ cross-team blockers per quarter, cutting average issue resolution time from 5 days to 2.",
      "Agile adoption: led the team's transition from an ad-hoc workflow to Scrum, improving on-time delivery rate by 40% within the first 6 months.",
      "Stakeholder communication: primary liaison between the development team and business stakeholders, running bi-weekly demos and maintaining transparent roadmaps.",
      "Continuous improvement: introduced retrospective action tracking that produces measurable process improvements each quarter, including automated testing integration and CI/CD pipeline setup.",
      "Client-facing delivery: manage 3+ services-based client engagements alongside internal product work, aligning sprint goals with evolving requirements and handling scope negotiations without disrupting the core team's rhythm.",
      "Async & distributed facilitation: run ceremonies and stakeholder updates across time zones using written standups, recorded demos and documented retrospective outcomes, keeping delivery on track without full-team overlap.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "iSOFTSTUDIOS",
    location: "Lahore, Pakistan",
    period: "Aug 2021 – Jan 2024",
    points: [
      "Team leadership: mentored 3–4 junior developers through weekly code reviews and pair programming, reducing average PR review cycles from 3 rounds to 1.5.",
      "Cross-functional collaboration: worked with designers, backend engineers and product owners across 6+ projects to align timelines and translate requirements into actionable tasks.",
      "Delivery & quality: architected and shipped production-grade frontend features across SaaS, e-commerce and reporting products, with zero critical post-launch bugs through structured QA.",
      "Process improvement: introduced a shared library of 50+ reusable React.js components, cutting new feature development time by ~35% and reducing cross-team inconsistencies.",
    ],
    note: "The engineering years are what make my estimation and blocker triage sharper as a Scrum Master.",
    stack: ["React.js", "Next.js", "Vue.js", "TypeScript", "Node.js", "AWS", "CI/CD"],
  },
];

/**
 * Titles and links for the studio products below come from the iSOFTSTUDIOS
 * portfolio: https://www.isoftstudios.com/portfolio
 *
 * Tech stacks were re-verified against each live URL (headers, import maps,
 * framework globals) rather than taken from that page, which carries a
 * copy-pasted stack across several unrelated products. Where a public URL only
 * serves a marketing site, the stack describes the actual product — the
 * marketing platform is tagged separately so the card stays checkable.
 */
export const projects = [
  {
    title: "OneStream Live",
    category: "SaaS",
    kind: "Live Streaming",
    featured: true,
    href: "https://onestream.live/",
    description:
      "Multistreaming and cloud broadcasting platform letting creators and businesses broadcast live or pre-recorded video to multiple platforms at once.",
    points: [
      "Centralised dashboard for multi-platform live streaming, with cloud-based video scheduling and encoding.",
      "Real-time analytics and stream monitoring, plus an automated pipeline that cut creator setup time.",
    ],
    // App sits behind a login at connect.onestream.live, so the product stack
    // could not be verified directly; marketing site is WordPress + Cloudflare.
    tags: [
      "AngularJS",
      "React (migration in progress)",
      "jQuery",
      "JavaScript",
      "Stripe",
      "Pusher",
      "Segment Analytics",
      "Intercom",
      "Cloudflare",
      "WordPress (marketing site)",
    ],
  },
  {
    title: "The Storefront",
    category: "Marketplace",
    kind: "PropTech & Retail",
    featured: true,
    href: "https://www.thestorefront.com/",
    description:
      "Global marketplace connecting brands and retailers with short-term commercial space pop-up stores, showrooms and event venues.",
    points: [
      "Scalable marketplace for discovering and booking retail spaces, with intelligent search and real-time availability.",
      "Booking management, payments and landlord dashboards, extended with multi-language and multi-currency support.",
    ],
    // Fully verified against the live site — the one product whose iSOFT-listed
    // stack matched exactly.
    tags: [
      "AngularJS 1.2.29",
      "jQuery 2.2.1",
      "Node.js / Express",
      "Google Maps API",
      "Stripe",
      "Pusher",
      "CloudFront CDN",
      "Segment Analytics",
      "Intercom",
      "Salesforce",
      "Prismic CMS",
      "Filestack",
      "Lodash",
    ],
  },
  {
    title: "Loosid",
    category: "Health",
    kind: "Health & Lifestyle",
    href: "https://loosidapp.com/",
    description:
      "Digital ecosystem promoting sober living, combining recovery programs, sober dating and a supportive community across web and mobile.",
    points: [
      "Unified web and mobile experiences with recovery tracking, sober dating and event discovery.",
      "Secure authentication and real-time in-app messaging over nationwide recovery resources.",
    ],
    tags: [
      "WordPress",
      "WPBakery Page Builder",
      "PHP",
      "MySQL",
      "jQuery",
      "Cloudflare",
      "Google Workspace",
    ],
  },
  {
    title: "FeedBear",
    category: "SaaS",
    kind: "SaaS Platform",
    href: "https://www.feedbear.com/",
    description:
      "Customer feedback and roadmap management tool that helps product teams collect ideas, prioritise features and publish progress transparently.",
    points: [
      "All-in-one feedback management and roadmap publishing platform with real-time voting and commenting.",
      "Public changelog integration that raised transparency and centralised user insight for product decisions.",
    ],
    // Product verified at app.feedbear.com; www.feedbear.com is the Webflow site.
    tags: [
      "Ruby on Rails",
      "Hotwire (Turbo)",
      "Vue.js",
      "Tailwind CSS",
      "Heroku",
      "CloudFront CDN",
      "Help Scout",
      "Webflow (marketing site)",
    ],
  },
  {
    title: "iReport",
    category: "SaaS",
    kind: "Public Safety & Reporting",
    href: "https://www.ireport.us/",
    description:
      "Online reporting application for enterprise clients with an interactive report builder.",
    points: [
      "Built the report builder and data visualisation dashboard, cutting manual reporting time by ~60%.",
      "Ran retrospectives that introduced 2 process improvements adopted team-wide.",
    ],
    tags: [
      "Ruby on Rails",
      "Hotwire (Turbo + Stimulus)",
      "jQuery",
      "Bootstrap",
      "PostgreSQL",
      "Google Maps API",
      "Stripe",
      "Twilio",
      "React Native",
      "Heroku",
    ],
  },
  {
    title: "Parkpnp",
    category: "Marketplace",
    kind: "PropTech",
    href: "https://parkpnp.com/ie/",
    description:
      "Smart parking marketplace connecting drivers with available spaces in real time and letting owners monetise unused parking.",
    points: [
      "Real-time marketplace for parking availability and booking, with location tracking, payments and reviews.",
      "Owner-side management tooling and a mobile-first experience tuned for quick spot discovery.",
    ],
    tags: [
      "Ruby on Rails",
      "Hotwire (Turbo)",
      "jQuery",
      "Stripe",
      "Google Maps API",
      "New Relic",
      "Crisp Chat",
      "Cloudflare",
      "Heroku",
    ],
  },
  {
    title: "Mastermind",
    category: "EdTech",
    kind: "Education & Coaching",
    href: "https://mastermind.com/",
    description:
      "Online course selling and purchasing platform supporting 500+ course listings.",
    points: [
      "Architected the storefront, checkout flow and student dashboard.",
      "Managed backlog grooming and sprint planning, reducing scope creep by 25% across 8 sprints.",
    ],
    // Product verified at account.mastermind.com (Next.js + Clerk); the public
    // mastermind.com is a WordPress/Elementor marketing site on WP Engine.
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Clerk (auth)",
      "Node.js",
      "Heroku",
      "Cloudflare",
      "WordPress + Elementor (marketing site)",
    ],
  },
  {
    title: "GeniusU",
    category: "EdTech",
    kind: "EdTech",
    href: "https://www.geniusu.com/",
    description:
      "EdTech ecosystem combining courses, mentorship and community networking for entrepreneurs building skills and businesses globally.",
    points: [
      "Scalable learning and mentorship ecosystem with gamified paths and skill assessments.",
      "Community networking, group discussions, and global payment plus multi-language support.",
    ],
    // app.geniusu.com redirects to the main site, so only the public surface
    // was verifiable — WordPress on Netlify with S3-backed attachments.
    tags: [
      "WordPress",
      "jQuery",
      "Bootstrap",
      "DataTables",
      "AWS S3",
      "Netlify",
      "Google Tag Manager",
    ],
  },
  {
    title: "GuidePointer",
    category: "Marketplace",
    kind: "Travel & Mapping",
    href: "https://guidepointer.com/",
    description:
      "Tour and travel booking application where users discover destinations, book guides and manage itineraries.",
    points: [
      "Led frontend development end to end, delivering a fully responsive UI with real-time availability features.",
      "Facilitated sprint ceremonies for a team of 6, maintaining a 90%+ sprint completion rate throughout delivery.",
    ],
    tags: [
      "Ruby on Rails",
      "jQuery",
      "Owl Carousel",
      "Font Awesome",
      "Google Fonts",
      "Google Analytics",
      "Google Tag Manager",
      "Heroku",
    ],
  },
  {
    title: "OurOffice",
    category: "SaaS",
    kind: "HR & Workforce",
    href: "https://www.ouroffice.io/",
    description:
      "All-in-one HR and DEI platform helping organisations track diversity metrics, manage engagement and run equitable workplace initiatives.",
    points: [
      "Centralised platform for HR, diversity and inclusion management with workforce analytics dashboards.",
      "Employee feedback, surveys and performance tracking feeding data-driven leadership decisions.",
    ],
    // Rebuilt since the iSOFT listing was written: the site now runs Webflow,
    // not WordPress/Elementor, and app.ouroffice.io no longer resolves.
    tags: [
      "Webflow",
      "Webflow CMS",
      "jQuery",
      "Hotjar",
      "YouTube Embed API",
      "CloudFront CDN",
      "Google Tag Manager",
      "Cloudflare",
    ],
  },
  {
    title: "FitYou",
    category: "Health",
    kind: "Health & Fitness",
    // The iSOFTSTUDIOS portfolio links https://fityou.sa/, but that domain no
    // longer resolves — left unlinked rather than pointing at a dead host.
    description:
      "AI-powered size and fit intelligence platform that cuts e-commerce returns through an embeddable retail widget driven by body metrics and preferences.",
    points: [
      "Cross-platform shopper profiling analysing body measurements and purchase history for personalised sizing.",
      "Multi-tenant Django REST API on AWS serving concurrent requests across retail partners.",
      "Stripe tiered subscription billing and Twilio SMS verification, lifting profile completion rates.",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next-Intl",
      "Webpack",
      "AI / Machine Learning",
      "Shopify Integration",
      "Salla Integration",
      "Zid Integration",
    ],
  },
  {
    title: "NyxionAI",
    category: "SaaS",
    kind: "AI SaaS",
    href: "https://www.nyxion.ai/",
    description:
      "AI-powered email generation SaaS product built on the OpenAI API.",
    points: [
      "Delivered the email editor, prompt configuration panel and export workflow.",
      "Managed velocity tracking and stakeholder demos, ensuring timely delivery of 3 major feature releases.",
    ],
    // www.nyxion.ai currently serves a Wix landing page; the product stack below
    // is from the CV and could not be verified against a live app.
    tags: [
      "React.js",
      "OpenAI API",
      "Node.js",
      "Tailwind CSS",
      "Wix (marketing site)",
    ],
  },
  {
    title: "HuureenHut",
    category: "Marketplace",
    kind: "Marketplace",
    href: "https://guides-and-hides-staging-105205e1adc6.herokuapp.com/",
    description:
      "Photography hide listing platform connecting photographers with wildlife hide owners.",
    points: [
      "Built the listing creation flow, search and filter system, and species/amenity tagging interface.",
      "Coordinated a remote team across 2 time zones to meet every delivery milestone on schedule.",
    ],
    tags: [
      "Ruby on Rails",
      "Hotwire (Turbo + Stimulus)",
      "ActionCable",
      "Active Storage",
      "Bootstrap 5",
      "jQuery",
      "Stripe",
      "Google Maps API",
      "FullCalendar",
      "Chartkick / Chart.js",
      "AWS S3",
      "CloudFront CDN",
      "Heroku",
    ],
  },
];

export const skillGroups = [
  {
    title: "Agile & Scrum",
    icon: "clipboard",
    skills: [
      "Sprint Planning",
      "Backlog Grooming",
      "Daily Standups",
      "Sprint Reviews",
      "Retrospectives",
      "JIRA",
      "Velocity Tracking",
      "Story Point Estimation",
      "Kanban",
    ],
  },
  {
    title: "Agile Coaching",
    icon: "users",
    skills: [
      "Team Facilitation",
      "Impediment Removal",
      "Conflict Resolution",
      "Self-Organisation",
      "Scrum Values",
      "Mentoring",
      "People Management",
    ],
  },
  {
    title: "Stakeholder Management",
    icon: "workflow",
    skills: [
      "Roadmap Communication",
      "Bi-weekly Demos",
      "Risk Management",
      "Expectation Setting",
      "Scope Negotiation",
    ],
  },
  {
    title: "Frontend Engineering",
    icon: "code",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "MongoDB",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS", "Heroku", "GitHub", "CI/CD", "Webpack"],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: ["JIRA", "Confluence", "Trello", "Git", "Figma", "VS Code", "Slack", "Zoom", "Miro", "Notion", "Loom"],
  },
];

export const softSkills = [
  "Leadership",
  "Coaching",
  "Mentoring",
  "Problem Solving",
  "Communication",
  "Collaboration",
];

export const interests = [
  "Software Development",
  "Agile & Product Thinking",
  "Cricket",
  "Reading",
  "Continuous Learning",
];

export const achievements = [
  {
    title: "Ace Employee of the Year",
    org: "iSOFTSTUDIOS",
    body: "Company-wide recognition for outstanding technical contribution.",
  },
  {
    title: "Employee of the Month",
    org: "iSOFTSTUDIOS",
    body: "Awarded for consistent delivery and leadership.",
  },
  {
    title: "Shining Star Award",
    org: "iSOFTSTUDIOS",
    body: "Recognised for cross-team collaboration and mentorship.",
  },
];

export const education = {
  degree: "B.Sc Computer Science",
  school: "University of South Asia",
  period: "2016 – 2020",
  location: "Lahore, Pakistan",
};

export const projectFilters = ["All", "SaaS", "Marketplace", "EdTech", "Health"];

export const tools = [
  { name: "JIRA", use: "Backlog & sprints", icon: "kanban" },
  { name: "Confluence", use: "Documentation", icon: "book" },
  { name: "Trello", use: "Boards", icon: "columns" },
  { name: "Figma", use: "Design review", icon: "figma" },
  { name: "Git & GitHub", use: "Version control", icon: "git" },
  { name: "Slack", use: "Team chat", icon: "chat" },
  { name: "Zoom / Meet", use: "Ceremonies", icon: "video" },
  { name: "Miro", use: "Retros & mapping", icon: "board" },
  { name: "Notion", use: "Async docs", icon: "note" },
  { name: "Loom", use: "Recorded demos", icon: "record" },
  { name: "VS Code", use: "Code & reviews", icon: "code" },
  { name: "CI/CD", use: "Release pipeline", icon: "pipeline" },
];
