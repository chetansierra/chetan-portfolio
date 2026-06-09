/*
  ─────────────────────────────────────────────────────────────
  EDIT YOUR SITE HERE. All copy lives in this one file.
  Lines marked  // TODO  are inferred or placeholder — confirm/replace them.
  ─────────────────────────────────────────────────────────────
*/

export const profile = {
  name: 'Chetan',
  role: 'Software Engineer',
  tagline:
    'I build systems that move money and stay standing through market spikes — and over-engineer side projects for the fun of it.',
  location: 'India', // TODO: confirm city
  email: 'chetansierra@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/chetansierra' }, // TODO: confirm handle
    { label: 'LinkedIn', href: '#' }, // TODO: add LinkedIn URL
    { label: 'Email', href: 'mailto:chetansierra@gmail.com' },
  ],
}

export const about = {
  // Voice carried over from your original site copy.
  paragraphs: [
    "I'm a software engineer who likes learning things properly — building to understand, revisiting ideas, and paying attention to the details that compound over time.",
    'For four years at Citibank I worked on the systems behind cross-border payments: high-availability services processing hundreds of thousands of transactions a day, in the moments that matter most.',
    'Outside the day job I over-engineer things on purpose. The learning is always the point.',
  ],
  interests: [
    'Distributed systems',
    'Event-driven architecture',
    'Reliability & performance',
    'Developer tooling',
    // TODO: add personal interests (music, sport, reading, travel, ...)
  ],
}

export const projects = [
  {
    name: 'System Design Arena',
    blurb:
      'An interactive system-design quiz — answer under a timer, rack up a score, climb the board. Built as a playground to learn a full Go + gRPC backend end to end.',
    stack: ['Go', 'gRPC', 'PostgreSQL', 'React'],
    note: 'The predecessor to this very site.',
  },
  {
    name: 'Smart City Environmental Monitor',
    blurb:
      'Event-driven platform that ingests streaming sensor data and serves a live map with real-time WebSocket updates, packaged for Kubernetes.',
    stack: ['Go', 'Kafka', 'Redis', 'PostgreSQL', 'React'],
    note: 'Jun 2025',
  },
  // TODO: add more projects here
]

export const experience = [
  {
    role: 'Software Engineer II',
    org: 'Citibank',
    team: 'Trade & Treasury Tech — Mass Payments Platform (APAC)',
    period: 'Aug 2022 – Dec 2025',
    points: [
      'Designed and shipped a regulatory-compliance system in Java/Spring Boot handling 200K+ daily transactions during peak market events.',
      'Led CI/CD modernization with reusable Tekton/Harness pipeline templates across 8 APAC environments, cutting release prep ~50%.',
      'Re-engineered 10K+ lines of legacy SQL and shell scripts into maintainable Java microservices.',
    ],
  },
  {
    role: 'Software Engineer I',
    org: 'Citibank',
    team: '',
    period: 'Jul 2021 – Aug 2022',
    points: [
      'Built a React/TypeScript operations dashboard used by 2,000+ users to trigger and monitor automation workflows in real time.',
      'Directed Java upgrades across 30 microservices; deployed on OpenShift with Helm.',
    ],
  },
]

export const education = {
  school: 'BITS Pilani',
  degree: 'B.E. Computer Science',
  period: '2017 – 2021',
}

export const coCurriculars = [
  {
    title: 'Learning Loop',
    blurb:
      'Started a peer-mentoring initiative and authored AI-assisted migration guidelines that were adopted as standard practice across a 150+ engineer group.',
  },
  // TODO: add clubs, sport, volunteering, writing, talks, etc.
]
