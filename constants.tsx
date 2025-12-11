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
  email: "manevinayakv.47@gmail.com",
  address: "Melbourne, VIC 2053",
  linkedin: "https://www.linkedin.com/in/vinayak-mane-637698143/", // Placeholder as specific URL wasn't in text
  github: "https://github.com/Vinayakmane47",     // Placeholder
  website: "https://portfolio-website-gilt-chi.vercel.app/"  // Placeholder
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "AI/ML & GenAI",
    items: ["LLMs", "RAG", "Deep Learning (TensorFlow, PyTorch)", "NLP", "Computer Vision", "Hugging Face", "LangChain", "LangGraph", "Ollama", "OpenAI Whisper", "Jina AI (Embeddings)"]
  },
  {
    category: "MLOps & DevOps",
    items: ["MLflow", "DVC", "GitHub Actions", "CircleCI", "Docker", "Kubernetes", "Apache Airflow", "Prometheus", "Grafana", "Langfuse", "CI/CD"]
  },
  {
    category: "Cloud & Databases",
    items: ["AWS (EC2, S3, SageMaker, EKS)", "PostgreSQL", "MySQL", "MongoDB", "OpenSearch", "Redis"]
  },
  {
    category: "Programming & Frameworks",
    items: ["Python", "SQL", "FastAPI", "Flask", "Jupyter", "Git/GitHub", "Gradio", "Docling"]
  }
];

export const EXPERIENCE_DATA: Job[] = [
  {
    company: "Telstra",
    role: "Retail Consultant (Salesforce CRM Console)",
    location: "Melbourne, Australia",
    period: "Nov 2024 - Present",
    details: [
      "Operated in a high-volume technical retail environment, diagnosing customer issues across mobile, NBN, IoT devices, entertainment bundles, and enterprise accounts.",
      "Used **Salesforce CRM (Console)** for structured lead capture, customer profiling, workflow routing, and case escalation across multiple Telstra support units.",
      "Identified recurring customer pain points (billing errors, internet dropouts, SIM provisioning failures) and mapped them to correct troubleshooting workflows - improving first-contact resolution and reducing escalations.",
      "Collaborated with internal technical teams to surface patterns in device faults, network issues, and order failures, strengthening Telstra's retail->support feedback loop.",
      "Developed strong understanding of enterprise-grade CX environments, support workflows, and decision trees - foundational for building **LLM-powered CX automation tools**."
    ]
  },
  {
    company: "Blujay Robotics Pvt. Ltd.",
    role: "Machine Learning Engineer",
    location: "Pune, India",
    period: "Jun 2023 - Jan 2024",
    details: [
      "Built wireless robotic-control pipeline using **YOLO** and custom **CNN/ANN models** for real-time object detection and navigation.",
      "Improved on-device inference stability by optimizing preprocessing, quantizing model weights, and building lightweight inference wrapper - **reducing latency by ~35%**.",
      "Integrated perception module with robot's control system, enabling responsive task execution and safe operation under variable lighting and clutter.",
      "Conducted data collection, labeling, augmentation, and model evaluation; improved mean average precision with iterative training and failure-case analysis.",
      "Delivered deployable Python application used in prototype robotic systems for autonomous tasks."
    ]
  },
  {
    company: "Deltafour",
    role: "Data Science Engineer",
    location: "Bengaluru, India",
    period: "Nov 2022 - May 2023",
    details: [
      "Designed and deployed **predictive maintenance system** for industrial pumps using **LSTM-based anomaly detection** and ensemble fault-classification models.",
      "Built automated pipelines for data ingestion -> feature engineering -> model training -> batch scoring, orchestrated via **CI/CD workflows**.",
      "Containerized training and inference services using **Docker**; deployed on **AWS EC2** with scheduled retraining and monitoring.",
      "Improved fault-detection accuracy through advanced feature extraction (spectral + statistical) and model ensembling.",
      "Produced engineering dashboards for maintenance teams, enabling early detection of operational risks."
    ]
  }
];

export const EDUCATION_DATA: Degree[] = [
  {
    institution: "Monash University",
    degree: "Master's in Artificial Intelligence",
    location: "Melbourne, Australia",
    period: "Feb 2024 - Dec 2025"
  },
  {
    institution: "College of Engineering, Pune",
    degree: "Bachelor of Technology",
    location: "Pune, India",
    period: "Jun 2018 - Jul 2021"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "arXiv Paper RAG System",
    techStack: ["FastAPI", "PostgreSQL", "OpenSearch", "Apache Airflow", "Ollama", "Redis", "Langfuse", "Jina AI", "Docling", "Gradio", "Docker"],
    period: "2025",
    description: [
      "Built scalable, production-grade **RAG system** that ingests arXiv papers, parses PDFs using **Docling**, performs intelligent chunking, and generates embeddings using **Jina AI**.",
      "Implemented **hybrid retrieval (BM25 + semantic search)** in OpenSearch, achieving **84% precision and 89% recall** during evaluation on question-document pairs.",
      "Designed **Airflow DAGs** that automate scheduled data ingestion, extraction, chunking, embedding generation, and index refresh workflows.",
      "Developed **FastAPI backend** with streaming responses, server-side caching, and fault-tolerant query execution.",
      "Integrated **Redis caching** with **60%+ hit rate**, reducing inference costs and improving response latency significantly.",
      "Added **Langfuse** for observability, enabling trace-level monitoring of LLM latency, cost, and retrieval performance.",
      "Built lightweight **Gradio UI** for demos, and containerized entire stack with **Docker** for reproducible deployment."
    ],
    links: {
      repo: "https://github.com/Vinayakmane47/arxiv-paper-rag",
      video: "https://youtu.be/SmtmNT95E2I"
    }
  },
  {
    title: "IMDB Sentiment Analysis - End-to-End MLOps Pipeline",
    techStack: ["Python", "MLflow", "DVC", "AWS EKS", "Prometheus", "Grafana", "Kubernetes", "CI/CD", "Docker", "FastAPI"],
    period: "Dec 2025",
    description: [
      "Built full enterprise-grade **MLOps system** combining **DVC** for data + model versioning, **MLflow** for experiment tracking, and **GitHub Actions** for CI/CD.",
      "Containerized training and inference pipelines; automated model promotion from staging -> production using **MLflow model registry** triggers.",
      "Deployed **FastAPI inference service** on **AWS EKS**, configured **Horizontal Pod Autoscaling**, and exposed load-balanced endpoints.",
      "Added **Prometheus + Grafana dashboards** to track inference latency, throughput, GPU/CPU utilization, and failure patterns.",
      "Implemented **continuous training (CT) workflow** - retrains models when new tagged data is pushed to the repository."
    ],
    links: {
      repo: "https://github.com/Vinayakmane47/imdb_mlops",
      video: "https://youtu.be/0nNESkevqgM"
    }
  },
  {
    title: "SQL Database Chatbot - LLM to SQL Agent",
    techStack: ["LLMs", "LangChain", "RAG", "Python", "MySQL"],
    period: "Jul 2024",
    description: [
      "Built **schema-aware LLM agent** that converts natural language queries into safe, validated SQL statements.",
      "Designed strict **guardrails** to prevent DROP/TRUNCATE queries, infinite loops, ambiguous joins, and schema violations.",
      "Added lightweight **RAG layer** that retrieves table documentation, ERDs, and schema summaries to help model generate accurate SQL.",
      "Implemented batched execution and advanced error-handling to recover gracefully from missing tables, deadlocks, or malformed queries.",
      "Delivered polished demo UI + API service illustrating safe enterprise database querying."
    ],
    links: {
      repo: "https://github.com/Vinayakmane47/database-chatbot",
      video: "https://youtu.be/sax2rbURoY4"
    }
  },
  {
    title: "Podcast Chatbot - Whisper + RAG",
    techStack: ["OpenAI Whisper", "LangChain", "Python", "RAG"],
    period: "Jul 2024",
    description: [
      "Created intelligent chatbot that ingests full podcast episodes, performs **ASR using Whisper**, diarizes speakers, chunks transcripts, and stores them for **retrieval-augmented Q&A**.",
      "Supports **speaker-specific search**, timecode extraction, contextual memory, and follow-up question handling.",
      "Built custom chunking and embedding logic to maintain narrative structure across long-form audio.",
      "Delivered clean UI + API demonstrating multimodal -> text -> RAG workflows."
    ],
    links: {
      repo: "https://github.com/Vinayakmane47/podcast-chatbot",
      video: "https://youtu.be/E1Y8y4eRpGY"
    }
  },
  {
    title: "NASA Turbofan Jet Engine RUL Prediction",
    techStack: ["Python", "CI/CD", "Docker", "AWS", "Flask"],
    period: "May 2023",
    description: [
      "Implemented end-to-end ML pipeline for **Remaining Useful Life (RUL) prediction** using NASA CMAPSS dataset.",
      "Engineered domain-specific features (operational settings, sensor deltas, degradation patterns) and trained **ensemble regression models**.",
      "Automated **CI/CD with GitHub Actions** - tests, linting, container builds, and deployment to AWS.",
      "Packaged inference app in **Docker** and deployed small-scale **Flask API** for real-time prediction demos."
    ],
    links: {
      repo: "https://github.com/Vinayakmane47/NASA-turbofan-ML-Project-AIOPS",
      video: "https://youtu.be/WK7NbTI4pNk"
    }
  }
];