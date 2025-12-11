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
      "Leveraged **Salesforce CRM (Console)** to manage customer data, streamline workflows, and support data-driven decisions.",
      "Coordinated with teams to ensure smooth operations and resolved conflicts effectively through strong communication.",
      "Built skills in **CRM systems**, stakeholder engagement, and problem-solving, with exposure to **AI-driven customer experience** opportunities."
    ]
  },
  {
    company: "Blujay Robotics Pvt. Ltd.",
    role: "Machine Learning Engineer",
    location: "Pune, India",
    period: "Jun 2023 - Jan 2024",
    details: [
      "Built **ML solutions** for robotic systems, implementing **YOLO, CNNs, and ANNs** for real-time object detection.",
      "Developed **Python-based control system**, improving automation, accuracy, and efficiency in robotics workflows.",
      "Collaborated with engineers to integrate **AI models** into production, balancing research with deployment."
    ]
  },
  {
    company: "Deltafour",
    role: "Data Science Engineer",
    location: "Bengaluru, India",
    period: "Nov 2022 - May 2023",
    details: [
      "Led **predictive maintenance (PdM) project**, using **LSTM and ensemble models** for anomaly detection and fault classification.",
      "Designed and deployed **MLOps pipeline** with **CI/CD, Docker, and AWS EC2**, enabling scalable model training and deployment.",
      "Coordinated with cross-functional teams to deliver insights from real-time industrial pump data, driving data-informed decisions."
    ]
  },
  {
    company: "CIE Automotive",
    role: "Research And Development Engineer",
    location: "Aurangabad, Maharashtra, India",
    period: "Oct 2021 - Nov 2022",
    details: [
      "Applied **ML** to optimise **HPDC processes**, improving cycle stability and quality.",
      "Built **defect-prediction models** (porosity, cold shuts, misruns) from machine logs and sensor data.",
      "Developed **anomaly detection & tool-wear prediction systems** to reduce scrap and unplanned downtime.",
      "Collaborated with production teams to convert model insights into better parameter windows and higher first-pass yield."
    ]
  },
  {
    company: "iNeuron.ai",
    role: "Machine Learning Intern",
    location: "Remote",
    period: "Jul 2022 - Feb 2023",
    details: [
      "Worked on several **End-to-End Industry level projects** covering full ML lifecycle from data collection to deployment.",
      "Gained hands-on experience with production ML systems, model optimization, and deployment pipelines.",
      "Collaborated with team members on real-world ML challenges and industry-standard best practices."
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