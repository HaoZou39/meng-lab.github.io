/**
 * PI-approved recruitment copy for the Join Us page.
 */

export const recruitment = {
  pageTitle: 'Join Us',
  heading: 'Join the Meng Lab',
  intro:
    'The Meng Lab is recruiting one Postdoctoral Fellow and one Research Assistant. The lab is based in the Vascular Biology Center, Medical College of Georgia, Augusta University.',
  openPositionsLabel: 'Open positions:',
  openPositions: ['Postdoctoral Fellow', 'Research Assistant'] as const,
  description:
    'The Meng Lab is recruiting one Postdoctoral Fellow and one Research Assistant in the Vascular Biology Center, Medical College of Georgia, Augusta University.',

  researchFocus: {
    title: 'Research Focus',
    paragraphs: [
      'Our laboratory investigates the molecular and cellular mechanisms underlying cardiac regeneration and repair, with a particular focus on the interactions between cardiomyocyte-intrinsic regenerative signaling and the cardiac microenvironment. We are especially interested in understanding how key signaling pathways, macrophages, fibroblasts, and the extracellular matrix coordinately regulate cardiomyocyte dedifferentiation, proliferation, and redifferentiation during cardiac injury and repair.',
      'Our research integrates single-cell and spatial omics, genetically engineered mouse models, molecular and cellular approaches, and human clinical samples to define changes in cellular states and intercellular communication during cardiac injury, regeneration, and remodeling.',
      'The long-term goal of the laboratory is to identify new mechanisms and potential therapeutic strategies for promoting cardiac repair, regeneration, and functional recovery by reprogramming cardiomyocytes and their immune and extracellular matrix microenvironments.',
    ],
  },

  postdoc: {
    title: 'Postdoctoral Fellow',
    intro:
      'Applicants should hold a PhD, MD/PhD, or equivalent doctoral degree in biomedical sciences, molecular biology, cell biology, cardiovascular biology, physiology, immunology, or a related field.',
    qualifications: [
      'Strong and sustained interest in scientific research, with a responsible, collaborative, and proactive work style.',
      'Good written and verbal communication skills in English.',
      'At least one high-quality first-author research publication.',
      'Experience with mouse models.',
      'Experience in one or more of the following areas is highly desirable: RNA-seq; single-cell or single-nucleus RNA-seq; ATAC-seq or other epigenomic approaches; spatial transcriptomics or spatial multi-omics; bioinformatics and computational analysis of high-throughput datasets.',
      'Candidates with strong expertise in molecular and cellular biology, cardiovascular biology, immunology, mouse genetics, or in vivo disease models are particularly encouraged to apply.',
    ],
  },

  researchAssistant: {
    title: 'Research Assistant',
    intro:
      "Applicants should hold a Bachelor's or Master's degree in biology, biochemistry, biomedical sciences, molecular and cellular biology, or a related discipline.",
    qualifications: [
      'Strong interest in biomedical research, with reliability, motivation, and willingness to learn.',
      'Ability to accurately perform experiments according to established protocols and maintain careful experimental records, sample inventories, and laboratory documentation.',
      'Good organizational, communication, and teamwork skills.',
      'Prior laboratory experience in molecular or cellular biology.',
      'Experience with mouse work, including breeding, genotyping, colony management, tissue collection, or basic animal procedures, is preferred but not required.',
    ],
    note: 'We particularly welcome applicants who plan to pursue a PhD in biomedical sciences in the United States and are seeking 1–2 years of intensive research training to strengthen their experimental skills, scientific thinking, and research experience before graduate school.',
  },

  visitingScholars: {
    title: 'Visiting Scholars',
    text: "The laboratory also welcomes inquiries from Visiting Scholars interested in our research areas. Specific research projects and collaborative arrangements may be discussed based on the applicant's background, research interests, and mutual scientific goals.",
  },

  training: {
    title: 'Training & Career Development',
    intro:
      'We aim to build an open, collaborative, rigorous, and supportive research environment that promotes both scientific excellence and individual career development.',
    leadIn: 'Lab members will be actively encouraged and supported to:',
    items: [
      'Present their research at major U.S. and international scientific conferences.',
      'Apply for postdoctoral fellowships and independent research funding.',
      'Participate actively in experimental design, manuscript preparation, and grant writing.',
      'Develop individualized scientific and career plans based on their long-term goals.',
    ],
  },

  apply: {
    title: 'How to Apply',
    leadIn: 'Interested applicants should send the following materials in English to:',
    email: 'syrmeng@gmail.com',
    materials: [
      'Curriculum Vitae (CV)',
      'A brief description of previous research experience and current research interests',
      'Names and contact information for three references',
    ],
    followUp: 'Qualified applicants will be contacted for an online interview.',
  },

  environment: {
    title: 'About the Vascular Biology Center & Augusta',
    paragraphs: [
      'The Vascular Biology Center, part of the Medical College of Georgia at Augusta University, provides a highly collaborative environment for basic, translational, and clinically relevant cardiovascular research, with research spanning myocardial infarction, heart failure, hypertension, vascular biology, cardiovascular metabolism, inflammation, and regenerative biology.',
      'Augusta, Georgia combines a strong biomedical research environment with relatively affordable living costs and a high quality of life. Atlanta, Charleston, and Savannah are approximately 2–3 hours away by car.',
    ],
  },
} as const;
