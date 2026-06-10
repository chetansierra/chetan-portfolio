/*
  ─────────────────────────────────────────────────────────────
  EDIT YOUR SITE HERE. All copy lives in this one file.
  Lines marked  // TODO  are inferred or placeholder — confirm/replace them.
  ─────────────────────────────────────────────────────────────
*/

export const profile = {
  name: 'Chetan',
  fullName: 'Chetan Sharma',
  email: 'chetansierra@gmail.com',
  resumeUrl: '/Chetan_Sharma_Resume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/chetansierra' },
    { label: 'LinkedIn', href: '#' }, // TODO: add your LinkedIn URL
    { label: 'Email', href: 'mailto:chetansierra@gmail.com' },
  ],
}

// ── Home (/) — single, no-scroll big-picture page ─────────────────
export const home = {
  welcome: 'welcome to my corner of the internet',
  greeting: "Hi, I'm Chetan",
  purpose: [
    "This is where I capture what I'm into: the learning, the building, the little experiments I run on myself. I leave it all out for anyone curious enough to look.",
    "Some of it's work. Most of it isn't.",
  ],
}

// ── Otherwise (/otherwise) — the "other than work" feed ───────────
// A flexible collection: anything goes — a book, a diet you tried, a
// trip, a thing you're running, a rabbit hole. Each entry has a `kind`
// label, a title, and a blurb. Add/remove freely.
export const otherwise = {
  intro:
    "A running list of whatever I'm into lately — things I read, try, make, or fall down a rabbit hole on. Some of it sticks, some doesn't. It all ends up here.",
  entries: [
    { kind: 'Reading', title: 'A book or idea that stuck', blurb: 'Placeholder — a philosophy, essay, or book you keep coming back to.' },
    { kind: 'Experiment', title: 'A month of trying something', blurb: 'Placeholder — that diet / habit / challenge you ran for a month.' },
    { kind: 'Currently', title: "Something I'm building", blurb: "Placeholder — a thing you're running or making right now." },
    { kind: 'Trip', title: 'Somewhere I went', blurb: "Placeholder — a trip you took, or one you're planning." },
    { kind: 'Rabbit hole', title: 'My latest obsession', blurb: 'Placeholder — a topic you got weirdly deep into recently.' },
  ],
}

// ── Work (/work) — two blocks (at work + for fun), then the game ───
// `what` lines are pulled from Chetan's résumé (factual).
// `loved` lines are a DRAFT of the voice — make them yours. // TODO
export const work = {
  intro:
    "The professional corner. I build backend systems for things that can't afford to break — and I care about the people building alongside me as much as the thing we're building.",
  atWork: [
    {
      title: 'Cross-border payments, at scale',
      what:
        "Built the systems behind APAC mass payments — a high-availability, regulation-compliant platform in Java and Spring Boot handling 200K+ transactions a day, including during the market's busiest, most fragile moments.",
      loved:
        "The stakes. When money has to move correctly during a market spike, 'retry later' isn't an option — designing for that kind of reliability is a different game.",
      stack: ['Java', 'Spring Boot', 'PostgreSQL'],
    },
    {
      title: 'Making deploys forgettable',
      what:
        'Rebuilt how 8 APAC environments ship — reusable Tekton and Harness pipeline templates with Ansible, replacing an ageing TeamCity/UDeploy setup. Release prep dropped by around half.',
      loved:
        'Taking friction away from other engineers. A good pipeline is invisible; you only notice it when it bites. Making deployments boring was the whole point.',
      stack: ['Tekton', 'Harness', 'Ansible', 'OpenShift'],
    },
    {
      title: 'Giving legacy code a second life',
      what:
        'Untangled 10K+ lines of legacy SQL and shell scripts into clean Java microservices with proper REST APIs.',
      loved:
        'The archaeology — working out what a decade-old script actually does, then turning it into something a human can comfortably maintain.',
      stack: ['Java', 'SQL', 'Microservices'],
    },
  ],
  sideProjects: [
    {
      title: 'System Design Arena',
      what:
        'An interactive system-design quiz — answer under a timer, rack up a score, climb the board. A full Go + gRPC + Postgres backend, built end to end.',
      loved: 'Over-engineering it on purpose, just to learn the whole stack properly. The predecessor to this very site.',
      stack: ['Go', 'gRPC', 'PostgreSQL', 'React'],
    },
    {
      title: 'Smart City Environmental Monitor',
      what:
        'An event-driven platform that ingests streaming sensor data and serves a live map with real-time updates, packaged for Kubernetes.',
      loved: 'Watching data flow through Kafka and land on a live map never quite got old.',
      stack: ['Go', 'Kafka', 'Redis', 'PostgreSQL'],
    },
    {
      title: 'This site',
      what: "The one you're on — a deliberately lightweight, static personal site. No backend, no clutter.",
      loved: 'Stripping a heavier idea down to something fast and simple — and getting to keep tweaking it.',
      stack: ['React', 'Vite', 'TypeScript'],
    },
  ],
}
