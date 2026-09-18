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
  visual: 'workflow' | 'trail' | 'notes' | 'blocks' | 'sync'
  image?: string
  links?: ProjectLink[]
  caseStudy?: {
    summary: string
    sections: CaseStudySection[]
    closing: string
  }
  sideNote?: {
    label: string
    href: string
    description: string
  }
}

export const projects: Project[] = [
  {
    id: 'dispute-platform',
    eyebrow: 'Case Study · Enterprise',
    title: 'Pilot Schedule Dispute Tracking System',
    blurb:
      'An airline pilot schedule dispute tracking and management system, built as a module inside an existing enterprise DNN portal. Client work under NDA, described here without the client name or other identifying details.',
    tags: ['Vue 3', 'TypeScript', 'Pinia', 'Vue Router', 'DNN Integration'],
    visual: 'workflow',
    caseStudy: {
      summary:
        'The client needed a structured way to collect, review, and route formal submissions within an existing portal.',
      sections: [
        {
          heading: 'Role',
          body: [
            'Built the Vue 3 front end and handled the API integrations, translating established wireframes and requirements into a responsive, accessible interface deployed as a DNN module.',
          ],
        },
        {
          heading: 'What I built',
          body: [
            'A role-based application with distinct views and permissions controlling navigation and visibility.',
            'A dynamic form builder for assembling structured submissions from reusable component types, shared across edit, preview, and read-only modes.',
            'A messaging interface with auto-saving drafts and attachment handling.',
            'A shared component library (data tables, panels, validated form elements, modals) that grew alongside the product and now covers most new feature work through composition rather than new code.',
          ],
        },
      ],
      closing:
        'The system now spans dozens of views on top of that shared library, and new feature areas are typically built by composing existing pieces rather than writing new ones, a good sign the early architecture is still holding up as the product grows.',
    },
  },
  {
    id: 'trail-guide',
    eyebrow: 'Case Study · Mobile',
    title: 'Colorado Ski Trail Guide App',
    blurb:
      'A mobile-first app for the Colorado Cross Country Skiing Association covering GPS trail navigation, resort punch-pass redemption, and real-time weather, built on reusable components and modular state logic.',
    tags: ['Vue 3', 'Ionic', 'Capacitor', 'Geolocation'],
    visual: 'trail',
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/cccsa-xc-ski/id6744336230',
        icon: 'external',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.coloradocrosscountry.app&hl=en',
        icon: 'external',
      },
    ],
    caseStudy: {
      summary:
        'CCCSA needed a single mobile app to replace paper trail maps and punch cards for its members, covering live GPS trail navigation, digital punch-pass redemption at resorts, and up-to-date weather and conditions.',
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
    id: 'field-inspection-app',
    eyebrow: 'Case Study · Enterprise Mobile',
    title: 'Field Inspection App Modernization',
    blurb:
      'A legacy-to-modern rebuild of a field data collection app for utility infrastructure inspection crews: two-factor auth, role-based access, and a full offline-first sync workflow for crews working in poor-connectivity areas. Client work described here without the client name.',
    tags: ['Vue 3', 'TypeScript', 'Ionic', 'Capacitor', 'Offline-First'],
    visual: 'sync',
    caseStudy: {
      summary:
        'A utility infrastructure inspection company needed its field data collection app rebuilt from the ground up. The existing app ran on an outdated, unsupported stack that could no longer be extended, while field crews still depended on it daily to record and submit inspection measurements, often from locations with poor or no connectivity.',
      sections: [
        {
          heading: 'Role',
          body: [
            'Rebuilt the mobile front end using Vue 3 and Ionic, working against APIs maintained by a separate backend team, while replacing the legacy stack and preserving every workflow existing users already depended on.',
          ],
        },
        {
          heading: 'What I built',
          body: [
            'A cross-platform iOS and Android app from a single Vue 3 and Ionic codebase, including the front-end flows for two-factor authentication and role-based access across different user types.',
            'A full offline-first workflow: field measurements save locally first, then sync automatically in the background on a timer and on network reconnect, with a visible pending-sync count so crews always know their data’s status.',
            'State management built on reactive service singletons rather than Pinia or Vuex, paired with a purpose-built offline sync queue instead of reaching for a heavier off-the-shelf solution.',
            'Multi-account and multi-device switching so support representatives can move between customer portals without re-authenticating.',
          ],
        },
      ],
      closing:
        'The rebuild preserved every workflow existing users depended on while replacing a stack that could not be extended further, setting up a foundation the team could keep building on instead of facing another full rewrite down the line.',
    },
  },
  {
    id: 'ibba',
    eyebrow: 'Case Study · Agency Demo',
    title: 'International Banana Bread Association',
    blurb:
      'An agency demo site showing prospective clients a structured-content approach to WordPress. I styled and extended the site’s custom Gutenberg block library, including several blocks I built from scratch.',
    tags: ['WordPress', 'Custom Gutenberg Blocks', 'PHP', 'SCSS'],
    visual: 'blocks',
    links: [
      {
        label: 'Visit Site',
        href: 'https://bananabread.dev/',
        icon: 'external',
      },
    ],
    caseStudy: {
      summary:
        "Prospective clients often came in asking for 'a page builder plugin,' and ended up with content that was flexible but inconsistent, hard to maintain, and easy to break. This site was built as a working demo to make the opposite case: give editors real layout flexibility through a purpose-built set of Gutenberg blocks, without losing the guardrails that keep a site's content clean and on-brand.",
      sections: [
        {
          heading: 'Role',
          body: [
            'Styled and extended a custom Gutenberg block library built by a teammate: matching a Figma design system precisely, adding functionality to existing blocks as new content needs came up, and building several new blocks from scratch to round out the library.',
          ],
        },
        {
          heading: 'What I built',
          body: [
            'Custom front-end styling for the full block library (banners, cards, CTAs, testimonials, stats, accordions, and more), matched closely to the project’s Figma design system.',
            'Extended several existing blocks with new functionality as the demo’s content needs grew beyond their original scope.',
            'Designed and built several new blocks from scratch to fill gaps the original library didn’t cover.',
          ],
        },
      ],
      closing:
        "It's what the agency still pulls up when a prospective client asks what ‘structured content’ actually looks like in practice: a working site, not just a slide deck.",
    },
  },
  {
    id: 'eddy',
    eyebrow: 'Personal Project · In Development',
    title: 'Eddy',
    blurb:
      "A minimal voice-leading tool for songwriters and composers, inspired by Brian Eno's Oblique Strategies. Instead of picking chords, you move individual voices by small intervals guided by a strategy drawn from a deck of twenty. The chord that results is a byproduct, not the point.",
    tags: ['Vue 3', 'TypeScript', 'Ionic', 'Capacitor', 'Pinia', 'Tone.js'],
    visual: 'notes',
    links: [
      {
        label: 'Live Demo',
        href: 'https://eddyflow.netlify.app/home',
        icon: 'external',
      },
      {
        label: 'View Code',
        href: 'https://github.com/paulrczech/eddy',
        icon: 'github',
      },
    ],
    sideNote: {
      label: 'Drift',
      href: 'https://project-drift.netlify.app/',
      description:
        'an ambient generative music experiment built on the same Vue 3 and Tone.js stack.',
    },
  },
]
