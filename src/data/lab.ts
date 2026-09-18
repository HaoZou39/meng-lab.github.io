/**
 * Public-safe laboratory copy.
 *
 * PI REVIEW REQUIRED: wording/branding only.
 * This file must contain only published/public information.
 */

export const reviewStatus = 'pi-review' as const;

export const scientificIdentity = [
  'Cardiac Regeneration',
  'Cardiomyocyte Plasticity',
  'Cardioimmunology',
] as const;

export const scientificIdentityLine = scientificIdentity.join(' · ');

const mission =
  'Our lab investigates how cardiomyocyte plasticity and the cardiac microenvironment can be harnessed to promote heart regeneration and repair.';

export const siteMeta = {
  title: 'Meng Lab @ MCG VBC',
  description: mission,
} as const;

export const lab = {
  name: 'MENG LAB @ MCG VBC',
  shortName: 'Meng Lab @ MCG VBC',
  reviewStatus,
  tagline: 'Understanding signaling and cellular responses in cardiac repair and regeneration.',
  taglineLines: [
    'Understanding signaling and cellular responses',
    'in cardiac repair and regeneration.',
  ] as const,
  scientificIdentity,
  scientificIdentityLine,
  supportingSentence: mission,
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
    title: 'Cardiac Regeneration',
    summary:
      'The adult mammalian heart has a limited capacity to regenerate after injury. Our lab seeks to understand the molecular and cellular mechanisms that restrict cardiac regeneration and to develop strategies that restore regenerative potential in the adult heart.',
  },
  {
    number: '02',
    title: 'Cardiomyocyte Plasticity',
    summary:
      'Cardiomyocytes undergo profound changes in cellular state during development, injury, and regeneration. We investigate the mechanisms that control cardiomyocyte plasticity, including dedifferentiation, proliferation, metabolic remodeling, and redifferentiation.',
  },
  {
    number: '03',
    title: 'Cardioimmunology',
    summary:
      'Cardiac regeneration is not solely a cardiomyocyte-autonomous process. Immune cells, particularly macrophages, dynamically communicate with cardiomyocytes and stromal cells after injury.',
  },
] as const;

export const researchPage = {
  reviewStatus,
  intro: mission,
  sections: [
    {
      title: 'Cardiac Regeneration',
      text: 'The adult mammalian heart has a limited capacity to regenerate after injury. Our lab seeks to understand the molecular and cellular mechanisms that restrict cardiac regeneration and to develop strategies that restore regenerative potential in the adult heart. We are particularly interested in how developmental and regenerative signaling pathways can be transiently reactivated to protect the injured myocardium, promote cardiomyocyte renewal, and improve long-term cardiac repair.',
    },
    {
      title: 'Cardiomyocyte Plasticity',
      text: 'Cardiomyocytes undergo profound changes in cellular state during development, injury, and regeneration. We investigate the mechanisms that control cardiomyocyte plasticity, including dedifferentiation, proliferation, metabolic remodeling, and redifferentiation. A major focus of our research is understanding how Hippo-YAP signaling and other regenerative pathways reprogram adult cardiomyocytes toward a more youthful and regenerative state while preserving cardiac function.',
    },
    {
      title: 'Cardioimmunology',
      text: 'Cardiac regeneration is not solely a cardiomyocyte-autonomous process. Immune cells, particularly macrophages, dynamically communicate with cardiomyocytes and stromal cells after injury. We study how recruited and tissue-resident macrophages shape the regenerative microenvironment through cytokines, growth factors, extracellular matrix remodeling, and metabolic signaling. Our goal is to identify immune–cardiomyocyte interactions that can be therapeutically reprogrammed to enhance cardiac repair.',
    },
  ],
  cmYapon: {
    reviewStatus,
    title: 'CM-YAPon',
    text: 'In published work, CM-YAPon was developed as an AAV9-based, drug-inducible approach for transient control of YAP activity in cardiomyocytes, providing a proof of concept for temporally controlled regenerative gene therapy.',
  },
  approach: {
    title: 'Our Approach',
    text: 'We integrate genetic and viral mouse models, cardiac injury models, molecular and cellular biology, and functional cardiac phenotyping with single-cell and spatial multi-omics. By connecting molecular mechanisms with cell–cell communication and cardiac function, we aim to uncover fundamental principles of heart regeneration and translate them into new strategies for treating cardiovascular disease.',
  },
} as const;

export const peopleTeaser = {
  supporting: 'Meet the people behind our research.',
} as const;

export const joinCopy = {
  heading: 'Join Us',
  interest: 'Interested in the Meng Lab?',
  recruitmentSummary:
    'We are recruiting one Postdoctoral Fellow and one Research Assistant to join the Meng Lab in the Vascular Biology Center, Medical College of Georgia, Augusta University.',
} as const;

export const socialLinks = [
  {
    label: 'X',
    handle: '@MengLabMCG',
    href: 'https://x.com/MengLabMCG',
  },
] as const;

export const peoplePlaceholders = {
  title: 'Title and appointment will be added following PI review.',
  institution: 'Institutional affiliation has not yet been published on this site.',
  education: 'Education and training information will be added when confirmed.',
  awards: 'Selected awards will be listed when confirmed.',
  links: 'External profile links (for example Google Scholar or ORCID) will be added when provided.',
} as const;
