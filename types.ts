export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  details: string[];
}

export interface Degree {
  institution: string;
  degree: string;
  location: string;
  period: string;
  specialization?: string;
  gpa?: string;
  coursework?: string[];
  thesis?: { title: string; body: string };
  highlights?: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  hint?: string;
}

export interface ProjectTechItem {
  name: string;
  why: string;
}

export interface ProjectImage {
  src: string;
  alt?: string;
  caption?: string;
}

export interface ProjectHero {
  image?: ProjectImage;
}

export interface ProjectApiEndpoint {
  method: string;            // GET / POST / etc.
  path: string;              // /api/v1/...
  description: string;
  example?: string;          // optional snippet (curl / json)
}

export interface ProjectConfigItem {
  key: string;
  defaultValue: string;
  note: string;
}

export interface ProjectProduct {
  letter?: string;                // A / B / C
  name: string;                   // product name
  task: string;                   // "Binary classification"
  model: string;                  // model name + algorithm
  inputs?: string[];              // feature names
  output: string;                 // response description
  training?: string;              // brief training description
  metric?: string;                // primary eval metric
}

export interface ProjectLayer {
  name: string;
  services: string[];
  role: string;
}

export interface ProjectDag {
  name: string;
  schedule: string;
  purpose: string;
}

export interface ProjectService {
  name: string;
  port?: string;
  role: string;
  credentials?: string;
}

export interface ProjectTourStop {
  image: ProjectImage;
  title: string;
  body: string[];           // paragraphs of narrative
  tools?: string[];         // optional tech chips for this stop
  bullets?: string[];       // optional bullet list under the body
}

export interface ProjectQualityGate {
  metric: string;
  threshold: string;
  role: string;
}

export interface ProjectHighlight {
  title: string;
  body: string;
}

// SQL-chatbot-style: example queries (NL -> SQL)
export interface ProjectCodeSample {
  input: string;
  query?: string;           // generated SQL
  language?: string;        // e.g. 'sql'
  output?: string;          // optional result preview
  note?: string;
}

// SQL-chatbot-style: guardrails (rule + reason)
export interface ProjectGuardrail {
  title: string;
  body: string;
}

// Podcast-style: input modes (cards)
export interface ProjectInputMode {
  name: string;
  body: string;
  steps?: string[];
}

// NASA-style: research-paper sections
export interface ProjectPaperSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ProjectDetail {
  summary: string;
  hero?: ProjectHero;
  gallery?: ProjectImage[];
  overview?: string[];
  problem?: string | string[];
  architecture?: string[];
  features?: { title: string; body: string }[];
  results?: ProjectMetric[];
  techStackDetailed?: ProjectTechItem[];
  challenges?: { title: string; body: string }[];
  apiEndpoints?: ProjectApiEndpoint[];
  keyConfig?: ProjectConfigItem[];
  dataFlow?: string[];
  // New optional sections (OPENSKY-style)
  products?: ProjectProduct[];
  layers?: ProjectLayer[];
  dags?: ProjectDag[];
  services?: ProjectService[];
  // Visual-tour sections (NYC-Taxi style)
  highlights?: ProjectHighlight[];
  tourStops?: ProjectTourStop[];
  qualityGates?: ProjectQualityGate[];
  // Example / guardrail / input-mode / paper-section sections
  codeSamples?: ProjectCodeSample[];
  guardrails?: ProjectGuardrail[];
  inputModes?: ProjectInputMode[];
  paperSections?: ProjectPaperSection[];
}

export interface Project {
  slug: string;
  title: string;
  techStack: string[];
  period: string;
  description: string[];
  links: {
    repo?: string;
    video?: string;
    site?: string;
  };
  detail?: ProjectDetail;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  linkedin?: string;
  github?: string;
  website?: string;
}