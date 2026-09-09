/**
 * Central, easy-to-edit laboratory copy for Phase 1.
 *
 * PROVISIONAL / PI REVIEW REQUIRED:
 * This wording is frozen only for website development. Final scientific
 * language, branding, and institutional details require PI review.
 * Edit this file rather than duplicating strings in components.
 */

export const siteMeta = {
  title: 'Meng Lab',
  description: 'Reprogramming tissue niches for regeneration and rejuvenation.',
} as const;

export const lab = {
  name: 'MENG LAB',
  shortName: 'Meng Lab',
  tagline: 'Reprogramming tissue niches for regeneration and rejuvenation.',
  taglineLines: [
    'Reprogramming tissue niches',
    'for regeneration and rejuvenation.',
  ] as const,
  supportingSentence:
    'We study how transient cellular reprogramming and immune–tissue interactions restore regenerative capacity in the injured heart.',
} as const;

export const navigation = [
  { href: '/research', label: 'Research' },
  { href: '/people', label: 'People' },
  { href: '/publications', label: 'Publications' },
  { href: '/news', label: 'News' },
  { href: '/join', label: 'Join Us' },
] as const;

export const ourQuestion = {
  eyebrow: 'Our Question',
  main: 'Why does the mammalian heart lose its regenerative capacity after birth?',
  supporting:
    'We investigate how precisely controlled cell-state and tissue-niche reprogramming can restore regenerative competence.',
} as const;

export const researchPrograms = [
  {
    number: '01',
    title: 'Regenerative Cell-State Plasticity',
    question: 'How do cardiomyocytes enter, maintain, and exit regenerative states?',
    summary:
      'We study the cellular programs that allow cardiomyocytes to enter, sustain, and leave regenerative states after injury.',
  },
  {
    number: '02',
    title: 'Cardioimmune Regenerative Niches',
    question: 'How do immune cells coordinate multicellular tissue repair and regeneration?',
    summary:
      'We examine how immune–tissue interactions assemble a niche that supports cardiac repair and regeneration.',
  },
  {
    number: '03',
    title: 'Trained Immunity & Regeneration',
    question: 'How does transient immune reprogramming shape subsequent cardiac repair?',
    summary:
      'We investigate how brief immune reprogramming influences later rounds of cardiac repair.',
  },
] as const;

export const researchPage = {
  intro:
    'The mammalian heart loses regenerative capacity after birth. Understanding this transition, and whether regenerative competence can be restored, is the central problem of our work.',
  hypothesis:
    'Precise and transient reprogramming can reconstruct a pro-regenerative tissue niche.',
  approachIntro:
    'Our experimental approach is still being documented for this site. The headings below mark the methods we intend to describe; details will be added after PI review.',
  approach: [
    {
      title: 'Precise temporal control',
      text: 'Placeholder: strategies for time-resolved perturbation will be described here.',
    },
    {
      title: 'Genetic models',
      text: 'Placeholder: genetic systems used to study regenerative states will be described here.',
    },
    {
      title: 'Single-cell multi-omics',
      text: 'Placeholder: single-cell measurement approaches will be described here.',
    },
    {
      title: 'Spatial biology',
      text: 'Placeholder: spatial methods for mapping tissue niches will be described here.',
    },
    {
      title: 'Functional cardiac injury models',
      text: 'Placeholder: injury models used to assess regenerative outcomes will be described here.',
    },
  ],
  /**
   * PI REVIEW REQUIRED:
   * Final prominence and wording of YAPon as a signature platform are provisional.
   * Do not over-brand the entire laboratory around YAP.
   */
  yapon: {
    title: 'YAPon',
    text: 'A structural placeholder for the YAPon platform. Prominence, naming, and scientific wording are pending PI review and should not be treated as final laboratory branding.',
  },
} as const;

export const joinCopy = {
  heading: 'Join Us',
  interest: 'Interested in our research?',
  recruitmentPending:
    'Recruitment information will be added when it is available. This page does not currently list open positions.',
  environment:
    'A description of the research environment will be published once institutional affiliation is confirmed.',
  roles: {
    postdoc:
      'Information for postdoctoral fellows will be posted when recruitment details are available.',
    graduate:
      'Information for graduate students will be posted when recruitment details are available.',
    staff:
      'Information for research staff will be posted when recruitment details are available.',
  },
  apply:
    'Application instructions and contact channels will be added when official recruitment information is published. Please do not send application materials until those details appear here.',
} as const;

export const peoplePlaceholders = {
  title: 'Title and appointment will be added following PI review.',
  institution: 'Institutional affiliation has not yet been published on this site.',
  biography: 'A short biography will appear here after PI review.',
  education: 'Education and training details will be added when confirmed.',
  awards: 'Selected awards will be listed when confirmed.',
  links: 'External profile links (for example Google Scholar or ORCID) will be added when provided.',
} as const;
