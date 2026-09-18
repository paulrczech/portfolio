export interface ProjectLink {
  label: string
  href: string
  icon: 'github' | 'external'
}

export interface CaseStudySection {
  heading: string
  body: string[]
}

export interface Project {
  id: string
  eyebrow: string
  title: string
  blurb: string
  tags: string[]
  visual: 'workflow' | 'trail' | 'notes' | 'blocks'
  image?: string
  links?: ProjectLink[]
  caseStudy?: {
    summary: string
    sections: CaseStudySection[]
    closing: string
  }
}

export const projects: Project[] = [
  {
    id: 'dispute-platform',
    eyebrow: 'Case Study · Enterprise',
    title: 'Contract Dispute & Claims Platform',
    blurb:
      'A ticketing and claims platform for a national pilot union, taking contract disputes from intake through multi-level review and resolution. Client work under NDA — described here without the client name.',
    tags: ['Vue 3', 'TypeScript', 'Pinia', 'Vue Router', 'DNN Integration'],
    visual: 'workflow',
    caseStudy: {
      summary:
        'Pilots needed a way to report contract violations and file formal claims. Union agents needed to triage, investigate, and route those claims through a multi-step review workflow, while company-side agents needed limited, read-only visibility once a claim reached them — all running as a module inside an existing enterprise DNN portal.',
      sections: [
        {
          heading: 'Role',
          body: [
            'Owned the Vue 3 frontend end to end — architecture, component library, state management, and API integration — from UX designs through production deployment as a DNN module.',
          ],
        },
        {
          heading: 'What I built',
          body: [
            'A dual-mode application (pilot-facing and admin-facing) from a single codebase, with seven distinct role levels controlling navigation, actions, and visibility through route guards.',
            'A dynamic drag-and-drop claim builder that lets agents assemble multi-section claims — pilot info, incident details, timecards, schedules, attachments, free text — from reusable component types, sharing the same rendering engine across edit, preview, and read-only modes.',
            'A threaded messaging and case-management system with auto-saving drafts, attachment handling, and integration with an external case-tracking system.',
            'An analytics dashboard covering throughput and agent performance, built on Chart.js with configurable date ranges and pilot-attribute filtering.',
            'A shared component library — data tables, offcanvas panels, validated form elements, modals — that grew alongside the product and now covers the large majority of new feature work through composition rather than new code.',
          ],
        },
      ],
      closing:
        'The system now spans dozens of views on top of that shared library, and new feature areas are typically built by composing existing pieces rather than writing new ones — a good sign the early architecture is still holding up as the product grows.',
    },
  },
  {
    id: 'trail-guide',
    eyebrow: 'Case Study · Mobile',
    title: 'Colorado Ski Trail Guide App',
    blurb:
      'A mobile-first app for the Colorado Cross Country Skiing Association covering GPS trail navigation, resort punch-pass redemption, and real-time weather — built on reusable components and modular state logic.',
    tags: ['Vue 3', 'Ionic', 'Capacitor', 'Geolocation'],
    visual: 'trail',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/cccsa-xc-ski/id6744336230', icon: 'external' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.coloradocrosscountry.app&hl=en', icon: 'external' },
    ],
    caseStudy: {
      summary:
        'CCCSA needed a single mobile app to replace paper trail maps and punch cards for its members — covering live GPS trail navigation, digital punch-pass redemption at resorts, and up-to-date weather and conditions.',
      sections: [
        {
          heading: 'Role',
          body: [
            'Built the front end using Vue 3 and Ionic, working from design through deployment to the app stores.',
          ],
        },
        {
          heading: 'What I built',
          body: [
            'GPS-based trail navigation with offline-friendly map data for use in areas with poor signal.',
            'Digital punch-pass redemption, replacing a paper-based system at participating resorts.',
            'Real-time weather and conditions surfaced contextually by trail and resort.',
          ],
        },
      ],
      closing: 'Live now on the App Store and Google Play for CCCSA members.',
    },
  },
  {
    id: 'ibba',
    eyebrow: 'Case Study · Agency Demo',
    title: 'International Banana Bread Association',
    blurb:
      'An agency demo site showing prospective clients a structured-content approach to WordPress. I styled and extended the site’s custom Gutenberg block library — including several blocks I built from scratch.',
    tags: ['WordPress', 'Custom Gutenberg Blocks', 'PHP', 'SCSS'],
    visual: 'blocks',
    links: [{ label: 'Visit Site', href: 'https://bananabread.dev/', icon: 'external' }],
    caseStudy: {
      summary:
        "Prospective clients often came in asking for 'a page builder plugin,' and ended up with content that was flexible but inconsistent, hard to maintain, and easy to break. This site was built as a working demo to make the opposite case: give editors real layout flexibility through a purpose-built set of Gutenberg blocks, without losing the guardrails that keep a site's content clean and on-brand.",
      sections: [
        {
          heading: 'Role',
          body: [
            'Styled and extended a custom Gutenberg block library built by a teammate — matching a Figma design system precisely, adding functionality to existing blocks as new content needs came up, and building several new blocks from scratch to round out the library.',
          ],
        },
        {
          heading: 'What I built',
          body: [
            'Custom front-end styling for the full block library — banners, cards, CTAs, testimonials, stats, accordions, and more — matched closely to the project’s Figma design system.',
            'Extended several existing blocks with new functionality as the demo’s content needs grew beyond their original scope.',
            'Designed and built several new blocks from scratch to fill gaps the original library didn’t cover.',
          ],
        },
      ],
      closing:
        "It's what the agency still pulls up when a prospective client asks what ‘structured content’ actually looks like in practice — a working site, not just a slide deck.",
    },
  },
  {
    id: 'eddy',
    eyebrow: 'Personal Project · In Development',
    title: 'Eddy',
    blurb:
      "A minimal voice-leading tool for songwriters and composers, inspired by Brian Eno's Oblique Strategies. Instead of picking chords, you move individual voices by small intervals guided by a strategy drawn from a deck of twenty — the chord that results is a byproduct, not the point.",
    tags: ['Vue 3', 'TypeScript', 'Ionic', 'Capacitor', 'Pinia', 'Tone.js'],
    visual: 'notes',
    links: [
      { label: 'Live Demo', href: 'https://eddyflow.netlify.app/home', icon: 'external' },
      { label: 'View Code', href: 'https://github.com/paulrczech/eddy', icon: 'github' },
    ],
  },
]
