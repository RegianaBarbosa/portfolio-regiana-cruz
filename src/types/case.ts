export interface CaseHeroData {
  tags: string[];
  title: string;
  description: string;
  role: string;
  context: string;
  market: string;
  duration: string;
  heroImage: string;
}

export interface CaseContextProblemData {
  title: string;
  paragraphs: (string | React.ReactNode)[];
  sideImages: string[];
  problemDefinition: {
    badge: string;
    question: string;
  };
  bulletPoints: string[];
}

export interface DesignProcessPhase {
  items: string[];
}

export interface CaseDesignProcessData {
  description: string;
  phases: DesignProcessPhase[];
  objective: string;
}

export interface ResearchFinding {
  number: string;
  title: string;
  finding: string;
  solution: string;
}

export interface ResearchArtifact {
  label: string;
  image: string;
}

export interface CaseResearchFindingsData {
  title: string;
  findings: ResearchFinding[];
  artifacts: ResearchArtifact[];
}

export interface UsabilityTestingCard {
  title: string;
  badge: string;
  problem: string;
  decision: string;
}

export interface CaseUsabilityTestingData {
  tagTitle?: string;
  title: string;
  description: string;
  cards: UsabilityTestingCard[];
}

export interface CriticalDecisionColumn {
  badge: string;
  title: string;
  text: string;
  image: string;
}

export interface CaseCriticalDecisionData {
  tagTitle?: string;
  title: string;
  columns: CriticalDecisionColumn[];
  tradeOff: string;
}

export interface CasePrototypeScreensData {
  tagTitle?: string;
  title: string;
  screens: string[];
}

export interface CaseImpactResultsData {
  tagTitle?: string;
  title: string;
  description: string;
  bulletPoints: string[];
  learning: {
    badge: string;
    quote: string;
    description: string;
  };
}

export interface CaseStudy {
  slug: string;
  metaTitle: string;
  hero: CaseHeroData;
  contextProblem: CaseContextProblemData;
  designProcess: CaseDesignProcessData;
  researchFindings: CaseResearchFindingsData;
  usabilityTesting: CaseUsabilityTestingData;
  criticalDecision: CaseCriticalDecisionData;
  prototypeScreens: CasePrototypeScreensData;
  impactResults: CaseImpactResultsData;
}