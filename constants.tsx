import { ContactInfo, Degree, Job, Project, SkillCategory } from './types';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Globe 
} from 'lucide-react';

export const CONTACT_INFO: ContactInfo = {
  phone: "+61 0468470514",
  email: "vman0027@student.monash.edu",
  address: "590 Lygon, Carlton, Melbourne, VIC 12345",
  linkedin: "https://linkedin.com", // Placeholder as specific URL wasn't in text
  github: "https://github.com",     // Placeholder
  website: "https://portfolio.com"  // Placeholder
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "AI/ML & GenAI",
    items: ["LLMs", "RAG", "Deep Learning (TensorFlow, PyTorch)", "NLP", "Computer Vision", "Hugging Face", "LangChain", "LangGraph"]
  },
  {
    category: "MLOps & DevOps",
    items: ["MLflow", "DVC", "GitHub Actions", "CircleCI", "Docker", "Kubernetes", "Airflow", "Prometheus", "Grafana", "Langfuse"]
  },
  {
    category: "Cloud & Databases",
    items: ["AWS (EC2, S3, SageMaker)", "PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    category: "Programming & Frameworks",
    items: ["Python", "SQL", "FastAPI", "Flask", "Jupyter", "Git/GitHub"]
  }
];

export const EXPERIENCE_DATA: Job[] = [
  {
    company: "Telstra",
    role: "Retail Consultant (Salesforce CRM Console)",
    location: "Melbourne, Australia",
    period: "Nov 2024 – Present",
    details: [
      "Served customers in a high-volume tech retail environment; mapped needs to devices, plans, entertainment, and home internet.",
      "Operated Salesforce CRM (Console) for lead capture, customer profiling, case/quote tracking, and pipeline hygiene."
    ]
  },
  {
    company: "Blujay Robotics Pvt. Ltd.",
    role: "Machine Learning Engineer",
    location: "Pune, India",
    period: "Jun 2023 – Jan 2024",
    details: [
      "Built Python application for wireless robotic control with YOLO and custom CNN/ANN models for object detection.",
      "Optimized preprocessing and model export to stabilize inference and improve on-device latency."
    ]
  },
  {
    company: "Deltafour",
    role: "Data Science Engineer",
    location: "Bengaluru, India",
    period: "Nov 2022 – May 2023",
    details: [
      "Developed predictive-maintenance pipeline on industrial pump data: LSTM anomaly detection + ensemble fault classifiers.",
      "Implemented MLOps + CI/CD; deployed on AWS EC2; automated ingestion, training, and scoring workflows."
    ]
  }
];

export const EDUCATION_DATA: Degree[] = [
  {
    institution: "Monash University",
    degree: "Master’s in Artificial Intelligence",
    location: "Melbourne, Australia",
    period: "Feb 2024 – Present"
  },
  {
    institution: "College of Engineering, Pune",
    degree: "Bachelor of Technology",
    location: "Pune, India",
    period: "Jun 2018 – Jul 2021"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "arXiv Paper RAG System",
    techStack: ["FastAPI", "PostgreSQL", "OpenSearch", "Apache Airflow", "Ollama", "Redis", "Langfuse", "Jina AI", "Docling", "Gradio", "Docker"],
    period: "2024",
    description: [
      "Built a production-grade RAG system for arXiv papers with hybrid search (BM25 + semantic) achieving 84% precision and 89% recall.",
      "Implemented end-to-end pipeline: PDF parsing with Docling, document chunking, embedding generation (Jina AI), and vector storage in OpenSearch.",
      "Designed Airflow DAGs for automated paper ingestion, deployed FastAPI REST API with streaming responses, and integrated Redis caching (60%+ hit rate) reducing costs by 60%+."
    ],
    links: {
      repo: "https://github.com/Vinayakmane47/arxiv-paper-rag"
    }
  },
  {
    title: "IMDB Sentiment Analysis",
    techStack: ["Python", "MLflow", "DVC", "AWS EKS", "Prometheus"],
    period: "Dec 2025",
    description: [
      "Built a full Industry grade MLOps pipeline with MLflow, DVC, CI/CD, and containerized training/inference.",
      "Deployed scalable Flask inference on AWS EKS with Prometheus/Grafana monitoring."
    ],
    links: {
      repo: "https://github.com/Vinayakmane47/imdb_mlops",
      video: "https://youtu.be/0nNESkevqgM"
    }
  },
  {
    title: "SQL Database Chatbot",
    techStack: ["LLM", "LangChain", "RAG", "Python", "MySQL"],
    period: "Jul 2024",
    description: [
      "Built an AI agent that converts natural language to safe SQL (schema-aware prompts, tool-calling, guardrails).",
      "Added RAG over table docs/ERDs; batched queries; robust error handling."
    ],
    links: {
      repo: "https://github.com/Vinayakmane47/database-chatbot",
      video: "https://youtu.be/sax2rbURoY4"
    }
  },
  {
    title: "Podcast Chatbot",
    techStack: ["OpenAI Whisper", "LangChain", "Python"],
    period: "Jul 2024",
    description: [
      "Ingests podcasts, performs ASR + diarization, chunks transcripts, and powers retrieval-augmented Q&A.",
      "Added memory and follow-ups; supports episode-level search and speaker-scoped answers."
    ],
    links: {
      repo: "https://github.com/Vinayakmane47/podcast-chatbot",
      video: "https://youtu.be/E1Y8y4eRpGY"
    }
  },
  {
    title: "NASA Turbofan Jet Engine RUL Prediction",
    techStack: ["Python", "MLOps", "CI/CD", "Docker", "AWS"],
    period: "May 2023",
    description: [
      "Predicted Remaining Useful Life on NASA CMAPSS; feature engineering + regression/ensemble models.",
      "Implemented CI/CD (GitHub Actions), Dockerized app; deployed via Flask to AWS."
    ],
    links: {
      repo: "https://github.com/Vinayakmane47/NASA-turbofan-ML-Project-AIOPS",
      video: "https://youtu.be/WK7NbTI4pNk"
    }
  }
];