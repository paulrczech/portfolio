import cccsaScreenshot from '../assets/projects/cccsa.jpg'
import eddyScreenshot from '../assets/projects/eddy.jpg'
import bananabreadScreenshot from '../assets/projects/bananabread.jpg'

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
  imageAspect?: string
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
      closing: '',
    },
  },
  {
    id: 'trail-guide',
    eyebrow: 'Case Study · Mobile',
    title: 'Colorado Ski Trail Guide App',
    blurb:
      'A mobile-first app for the Colorado Cross Country Skiing Association covering resort discovery, punch-pass redemption, and real-time weather, built on reusable components and modular state logic.',
    tags: ['Vue 3', 'Ionic', 'Capacitor', 'Geolocation'],
    visual: 'trail',
    image: cccsaScreenshot,
    imageAspect: '4 / 3',
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
        'CCCSA needed a single mobile app for its members, covering resort discovery with GPS, digital punch-pass redemption, and up-to-date weather and conditions.',
      sections: [
        {
          heading: 'Role',
          body: [
            'Built the front end using Vue 3 and Ionic, from early design through launch.',
          ],
        },
        {
          heading: 'What I built',
          body: [
            'A GPS-based resort locator with offline-friendly map data, so members can find and pick a resort even with poor signal.',
            'Digital punch-pass redemption at participating resorts.',
            'Real-time weather and conditions surfaced by resort.',
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
        'A utility infrastructure inspection company needed its field data collection app rebuilt from the ground up. The existing app ran on an outdated, unsupported stack, while field crews still depended on it daily to record inspections, often from locations with poor or no connectivity.',
      sections: [
        {
          heading: 'Role',
          body: [
            'Rebuilt the mobile front end using Vue 3 and Ionic, working against APIs from a separate backend team, while preserving every workflow existing users depended on.',
          ],
        },
        {
          heading: 'What I built',
          body: [
            'A cross-platform iOS and Android app from a single Vue 3 and Ionic codebase, with front-end flows for two-factor authentication and role-based access across different user types.',
            "An offline-first workflow built on a custom sync queue: field measurements save locally first, then sync automatically on a timer or reconnect, with a visible pending-sync count so crews always know their data's status.",
            'Multi-account and multi-device switching so support reps can move between customer portals without re-authenticating.',
          ],
        },
      ],
      closing: '',
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
    image: bananabreadScreenshot,
    links: [
      {
        label: 'Visit Site',
        href: 'https://bananabread.dev/',
        icon: 'external',
      },
    ],
    caseStudy: {
      summary:
        "Page builder plugins are a common request, but they tend to produce content that's flexible in the wrong way: inconsistent, hard to maintain, easy to break. This site was built as a working demo for future client conversations, making the case for something better: real layout flexibility through a purpose-built set of Gutenberg blocks, without losing the guardrails that keep a site's content clean and on-brand.",
      sections: [
        {
          heading: 'Role',
          body: [
            'Styled and extended a custom Gutenberg block library built by a teammate: matching a Figma design system, adding functionality to existing blocks as new content needs came up, and building several new blocks from scratch to round out the library.',
          ],
        },
        {
          heading: 'What I built',
          body: [
            "Custom front-end styling for the full block library, banners, cards, CTAs, testimonials, stats, accordions, and more, matched to the project's Figma design system.",
            "Extended several existing blocks with new functionality as the demo's content needs grew.",
            "Designed and built several new blocks from scratch to fill gaps the original library didn't cover.",
          ],
        },
      ],
      closing: '',
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
    image: eddyScreenshot,
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
