/**
 * Public-safe laboratory copy.
 *
 * PI REVIEW REQUIRED: wording/branding only.
 * This file must contain only published/public information.
 */

export const reviewStatus = 'pi-review' as const;

export const siteMeta = {
  title: 'Meng Lab',
  description:
    'Our published research spans cardiac biology, Hippo–YAP signaling, and innate immune regulation.',
} as const;

export const lab = {
  name: 'MENG LAB',
  shortName: 'Meng Lab',
  reviewStatus,
  tagline: 'Understanding signaling and cellular responses in cardiac repair and regeneration.',
  taglineLines: [
    'Understanding signaling and cellular responses',
    'in cardiac repair and regeneration.',
  ] as const,
  supportingSentence:
    'Our published research spans cardiac biology, Hippo–YAP signaling, and innate immune regulation.',
} as const;

export const navigation = [
  { href: '/research', label: 'Research' },
  { href: '/people', label: 'People' },
  { href: '/publications', label: 'Publications' },
  { href: '/news', label: 'News' },
  { href: '/join', label: 'Join Us' },
] as const;

export const researchThemes = [
  {
    number: '01',
    title: 'Cardiac Repair & Regeneration',
    summary:
      'Our published work examines how controlled modulation of YAP signaling influences cardiac responses to injury, cardiomyocyte states, and cardiac protection.',
  },
  {
    number: '02',
    title: 'Hippo–YAP Signaling',
    summary:
      'We investigate how Hippo pathway components and YAP/TAZ regulate cellular signaling across cardiovascular, immune, and disease contexts.',
  },
  {
    number: '03',
    title: 'Innate Immune Signaling',
    summary:
      'Our work has defined mechanisms connecting Hippo pathway signaling with antiviral defense, cytosolic nucleic-acid sensing, and antitumor immunity.',
  },
] as const;

export const researchPage = {
  reviewStatus,
  intro:
    'The Meng Lab website currently highlights published work spanning cardiac repair and regeneration, Hippo–YAP signaling, and innate immune regulation.',
  sections: [
    {
      title: 'Cardiac Repair & Regeneration',
      text: 'Recent published work has examined the therapeutic and biological consequences of controlled YAP activation in the heart. In the CM-YAPon study published in Nature Cardiovascular Research, drug-conditional YAP activation in cardiomyocytes promoted protection against cardiac injury while altering cardiomyocyte states and the surrounding cardiac environment.',
    },
    {
      title: 'Hippo–YAP Signaling',
      text: 'Hippo signaling and its downstream effectors YAP and TAZ regulate diverse cellular processes. Published work from Fansen Meng has investigated this pathway in cardiac biology, innate immune signaling, and host–pathogen interactions, including regulation of YAP/TEAD activity during SARS-CoV-2 infection.',
    },
    {
      title: 'Innate Immune Signaling',
      text: 'Earlier studies identified mechanisms through which Hippo pathway components regulate cytosolic nucleic-acid sensing and innate immune responses. This work includes regulation of IRF3 by Mst1, YAP/TAZ-mediated control of TBK1, and phase-separation-dependent suppression of cGAS–STING signaling by mutant NF2.',
    },
  ],
  cmYapon: {
    reviewStatus,
    title: 'CM-YAPon',
    text: 'In published work, CM-YAPon was developed as an AAV9-based, drug-inducible approach for transient control of YAP activity in cardiomyocytes. The study demonstrated cardiac protection following injury and provided a proof of concept for temporally controlled regenerative gene therapy.',
  },
} as const;

export const peopleTeaser = {
  supporting: 'Meet the people behind our research.',
} as const;

export const joinCopy = {
  heading: 'Join Us',
  interest: 'Interested in the Meng Lab?',
  recruitmentPending:
    'Recruitment information will be posted here when official details become available.',
} as const;

export const peoplePlaceholders = {
  title: 'Title and appointment will be added following PI review.',
  institution: 'Institutional affiliation has not yet been published on this site.',
  awards: 'Selected awards will be listed when confirmed.',
  links: 'External profile links (for example Google Scholar or ORCID) will be added when provided.',
} as const;
