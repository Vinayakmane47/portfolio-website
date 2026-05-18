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
    items: [
      "LLMs", "RAG", "Deep Learning (TensorFlow, PyTorch)", "NLP", "Computer Vision",
      "Hugging Face", "LangChain", "LangGraph", "Ollama",
      "OpenAI (GPT, Whisper, Embeddings)", "Jina AI (Embeddings)",
      "FAISS", "Chroma", "HNSW (nmslib)", "Reciprocal Rank Fusion (RRF)",
      "scikit-learn", "LightGBM", "XGBoost", "CatBoost",
      "Optuna", "SHAP", "Isolation Forest / LOF",
      "pyannote.audio", "faster-whisper"
    ]
  },
  {
    category: "MLOps & DevOps",
    items: [
      "MLflow", "DagShub", "DVC",
      "Apache Airflow", "Apache Kafka", "Feast",
      "Great Expectations", "Evidently AI",
      "Docker", "Docker Compose", "Kubernetes", "Helm",
      "GitHub Actions", "CircleCI", "CI/CD",
      "Prometheus", "Grafana", "Loki", "Alertmanager", "Langfuse",
      "Locust", "pytest", "ruff", "bandit", "MyPy", "uv"
    ]
  },
  {
    category: "Cloud & Databases",
    items: [
      "AWS (EC2, S3, SageMaker, EKS, ECR, Elastic Beanstalk)",
      "Heroku", "MinIO",
      "PostgreSQL", "MySQL", "MongoDB",
      "OpenSearch", "Redis"
    ]
  },
  {
    category: "Programming & Frameworks",
    items: [
      "Python", "SQL",
      "FastAPI", "Flask", "Streamlit", "Gradio", "React",
      "Jupyter", "Git/GitHub", "PySpark",
      "pandas", "numpy", "Pydantic", "Jinja2", "PyYAML",
      "Docling", "FFmpeg"
    ]
  }
];

export const EXPERIENCE_DATA: Job[] = [
  {
    company: "Faster Technologies Pty Ltd (Faster Finance)",
    role: "AI Engineer (Part-time)",
    location: "Melbourne, Australia",
    period: "Apr 2026 - Present",
    details: [
      "Developing **ML models for financial risk assessment**, including **default prediction, credit risk scoring, and fraud detection** across the Faster Finance loan portfolio.",
      "Building **data analytics dashboards** to surface model insights and key lending metrics for business stakeholders.",
      "Applying **supervised learning techniques** on financial data to improve decision-making accuracy across the credit lifecycle."
    ]
  },
  {
    company: "TFA Legal",
    role: "AI/ML Engineer (Part-time)",
    location: "Melbourne, Australia",
    period: "Mar 2026 - Present",
    details: [
      "Architected **ARLO (Autonomous Reasoning Layer for Order)**, an agentic matter intelligence system for affidavit drafting, contradiction detection, and opposing counsel analysis, built on **Claude (AWS Bedrock)** and **Supabase** for Australian data sovereignty.",
      "Built an **AI-powered invoice and expense tracker** integrating **Gmail, Xero/Airwallex, and Supabase** to automate billing workflows for legal staff.",
      "Developed an **Instagram Reels content pipeline** using **KIE.ai, Nano Banana 2, and Seedance 1.5 Pro**, producing psychology-aligned legal education content at scale.",
      "Designed and executed **Google Ads and Meta Ads** strategy, and produced technical hiring materials and internship assessments for the engineering team."
    ]
  },
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
    slug: "opensky-mlops",
    title: "OpenSky Aviation MLOps Platform",
    techStack: ["Apache Airflow", "PySpark", "MinIO", "Kafka", "Feast", "Redis", "MLflow", "Optuna", "LightGBM", "SHAP", "Evidently", "Great Expectations", "FastAPI", "React", "Prometheus", "Grafana", "Loki", "Alertmanager", "Docker Compose", "Helm"],
    period: "2026",
    description: [
      "Built an **end-to-end aviation MLOps platform** that turns live OpenSky Network flight telemetry into three production predictions: **delay risk, airspace congestion, and flight anomalies**.",
      "Implemented a **medallion lakehouse on MinIO** (Bronze -> Silver -> Gold) with Spark ETL, **Great Expectations** data quality, and **Feast** feature materialisation into Redis for low-latency serving.",
      "Trained three models with **Optuna AutoML** across five candidate algorithms each (LightGBM/XGBoost/CatBoost/RF/HistGBM), tracked every run in **MLflow** with model cards + SHAP, and gated Staging -> Production promotions.",
      "Served predictions via **FastAPI** with Redis caching, slowapi rate limiting, API-key auth, SHAP-powered `/explain` endpoints, **shadow mode**, and **champion/challenger A/B testing** with daily Bayesian + frequentist significance checks.",
      "Wired **Prometheus + Grafana + Loki + Alertmanager** observability, **Evidently** drift detection that auto-triggers retraining, and a **React + Tailwind dashboard** with live aircraft map for stakeholders. **12 services**, **5 Airflow DAGs**, **169 tests**, one `docker compose up`."
    ],
    links: {
      repo: "https://github.com/Vinayakmane47/OPENSKY-MLOPS"
    },
    detail: {
      summary: "An end-to-end aviation MLOps platform: streaming + batch ingestion of OpenSky flight telemetry, a Bronze/Silver/Gold lakehouse on MinIO, Feast online features in Redis, Optuna AutoML training across three models (delay / congestion / anomaly), MLflow tracking + registry, FastAPI inference with SHAP `/explain`, champion/challenger A/B testing, Evidently drift-triggered retraining, and Prometheus + Grafana + Loki observability. 12 services. 5 Airflow DAGs. One docker compose up.",
      hero: {
        image: {
          src: "/images/projects/opensky-mlops/architecture.png",
          alt: "OpenSky MLOps platform architecture",
          caption: "Complete platform architecture across ingestion, lakehouse, streaming, feature store, training, serving, and observability. Source: OPENSKY-MLOPS/docs/diagrams/architecture.png."
        }
      },
      overview: [
        "**OpenSky Aviation MLOps Platform** is a full production-grade ML system built around one of the more unusual real-time data sources on the open web: the **OpenSky Network**, a community receiver network that publishes live ADS-B state vectors (position, altitude, speed, callsign, heading) for every transponder-equipped aircraft on Earth. The platform polls OpenSky every 15 minutes via REST, ingests the same telemetry as a Kafka stream for real-time features, and turns the resulting data into three independent production predictions: per-flight **delay risk**, per-airport **congestion**, and per-aircraft **anomaly** scores.",
        "This is deliberately not a single-model project. The architecture is what a real airline MLOps team would build: a medallion lakehouse (Bronze/Silver/Gold) on **MinIO** with **PySpark** ETL, a feature store (**Feast** + Redis) that decouples batch feature engineering from low-latency serving, **MLflow** for experiment tracking and registry with structured model cards, an **Optuna AutoML** training stage that searches five candidate algorithms per model, a **FastAPI** inference service with SHAP `/explain` endpoints, champion/challenger A/B testing with significance checks, **Evidently** drift detection that auto-triggers retraining, and **Prometheus + Grafana + Loki + Alertmanager** observability across the entire fleet. Twelve services, five Airflow DAGs, 169 tests, all running from one `docker compose up`.",
        "Three things make this project distinctive from a typical end-to-end MLOps demo. **First**, the platform serves *three* independent ML products on the same infrastructure - sharing the lakehouse, feature store, training pipeline, registry, and inference service - which forces every component to be genuinely modular. **Second**, the API is a serious production surface: API-key auth, slowapi rate limiting, Redis prediction caching keyed by request hash, batch endpoints with `asyncio.gather`, shadow endpoints for parallel staging-model evaluation, and `/explain` endpoints that return SHAP contributions and top positive/negative drivers per prediction. **Third**, the retraining loop closes automatically - the monitor DAG runs daily, evaluates drift with Evidently, and triggers `retrain_dag` when the drifted-feature ratio crosses a threshold, with no human in the loop.",
        "The dashboard is also worth flagging. A **React + Tailwind** SPA renders a live aircraft map (Plotly + Mapbox) with risk-coloured markers, plus side panels for prediction distribution, top countries, altitude bands, and flight phase. It calls the FastAPI service directly, so the same predictions that serve programmatic clients also drive the stakeholder view - no parallel reporting pipeline to drift away from production."
      ],
      problem: [
        "Aviation telemetry is high-volume, noisy, and time-sensitive: ~10,000 aircraft are airborne at any given moment, each emitting a state vector every few seconds, and any useful prediction has to incorporate features that change minute-to-minute. The naive single-script approach - poll the API, run a model, return JSON - falls apart immediately. You can't reason about model quality without experiment tracking, can't roll back without a registry, can't combat training-serving skew without a feature store, can't trust the data without quality validation, can't catch regressions without drift detection, and can't operate the thing without observability.",
        "This platform is what it looks like when you take those concerns seriously. Each one lives in its own tool with a clean contract (Airflow for orchestration, Spark for ETL, MinIO for storage, Feast for feature serving, MLflow for tracking + registry, Optuna for HPO, FastAPI for inference, Evidently for drift, Prometheus/Grafana for observability), the integration is wired through Airflow DAGs and `asyncio` plumbing in the API, and the whole stack is reproducible from `docker compose up` to a working dashboard in under five minutes."
      ],
      products: [
        {
          letter: "A",
          name: "Flight Delay Risk",
          task: "Binary classification - probability that a given flight will be delayed",
          model: "LightGBM binary classifier (winning algorithm picked by Optuna over LightGBM / XGBoost / CatBoost / Random Forest / HistGradientBoosting)",
          inputs: ["speed_ms", "altitude_m", "vertical_rate_ms", "heading_change_5m", "avg_speed_15m", "aircraft_count_50km", "congestion_score", "hour_of_day", "day_of_week"],
          training: "30-trial Optuna HPO with 3-fold CV on up to HPO_SAMPLE_ROWS rows. Quality gate: AUC-ROC > 0.65 vs current Production champion.",
          metric: "AUC-ROC",
          output: "delay_probability (0-1) + risk_label (LOW / MEDIUM / HIGH) + top-3 features by importance + model_version"
        },
        {
          letter: "B",
          name: "Airport Congestion",
          task: "Regression - continuous congestion score in [0, 1] for an airport",
          model: "LightGBM regressor (chosen by Optuna across the same five-algorithm sweep)",
          inputs: ["aircraft_count_50km", "arrivals_last_30m", "departures_last_30m", "avg_altitude_50km", "hour_of_day", "day_of_week"],
          training: "30-trial Optuna HPO, 3-fold CV. Quality gate: MAE improvement vs current Production champion. Target is a normalized traffic-vs-capacity ratio.",
          metric: "MAE",
          output: "congestion_score (0-1) + airport_code + model_version + SHAP feature contributions on /explain"
        },
        {
          letter: "C",
          name: "Flight Anomaly Detection",
          task: "Unsupervised anomaly scoring - unusual heading, speed, altitude, or vertical rate patterns",
          model: "Isolation Forest (champion vs Local Outlier Factor alternative)",
          inputs: ["speed_ms", "altitude_m", "vertical_rate_ms", "heading_change_5m"],
          training: "Optuna search over n_estimators / contamination / max_samples; holdout F1 against synthetically injected anomalies.",
          metric: "Holdout F1",
          output: "anomaly_score (negative = more anomalous via decision_function) + boolean is_anomaly + explanation of which features were unusual"
        }
      ],
      layers: [
        { name: "Data Sources",     services: ["OpenSky REST", "Kafka producer"], role: "OpenSky `/states/all` REST API polled every 15 min (~10k aircraft per response) plus a Kafka stream for real-time positions consumed by an aiokafka feature processor." },
        { name: "Ingestion",        services: ["Airflow", "opensky_client.py"],     role: "`opensky_ingest_dag` calls the OpenSky client and writes raw JSON to MinIO `aviation-lake/bronze/flights/<run_id>/`. No transformation in this stage." },
        { name: "Storage (Lakehouse)", services: ["MinIO (S3-compat)", "PySpark"],  role: "Medallion architecture: Bronze (raw JSON) -> Silver (cleaned + typed Parquet, snake_case fields) -> Gold (feature tables: gold/flights, gold/congestion, gold/routes). Spark ETL runs inside the Airflow container." },
        { name: "Data Quality",     services: ["Great Expectations"],               role: "Every layer transition is validated - schema, bounds, completeness. The DAG fails fast (rather than poisoning silver/gold) when data quality drops." },
        { name: "Streaming",        services: ["Kafka", "aiokafka"],                role: "Kafka producer emits live positions to `flight_positions` topic; a plain aiokafka processor computes 15-min rolling features (avg speed, heading-change rate) and pushes to Feast online store with a 10-min TTL." },
        { name: "Feature Store",    services: ["Feast", "Redis"],                   role: "Three feature views, 24 features, 4 entities (aircraft, airport, route, flight). Offline = MinIO Gold; online = Redis. `feast_materialize_dag` hourly. Prevents training-serving skew by serving the same logic at both sides." },
        { name: "Training & HPO",   services: ["Optuna", "LightGBM/XGBoost/CatBoost/Random Forest/HistGBM"], role: "`retrain_dag` runs 30 Optuna trials per model across five candidate algorithms, 3-fold CV on a 50k-row sample. Picks champion by CV AUC / MAE / F1." },
        { name: "Tracking & Registry", services: ["MLflow", "DAGSHub-style backend"], role: "Parent run per pipeline; child runs for HPO, training, eval, registry. Model cards (feature distributions, top-N importances, SHAP summaries) saved as artefacts. Versions transition Staging -> Production only when gates pass." },
        { name: "Inference",        services: ["FastAPI", "Redis cache", "slowapi"], role: "Single FastAPI service serves all three products. API-key auth, 100 req/min rate limit, Redis prediction cache (60s TTL keyed by SHA256(body)), batch endpoints via asyncio.gather, shadow endpoints, SHAP /explain." },
        { name: "Experimentation",  services: ["A/B router", "ab_analysis_dag"],   role: "Champion/challenger split per product. Outcomes recorded; daily DAG runs Bayesian + frequentist significance tests on running experiments; promote endpoint moves challenger -> champion via the registry." },
        { name: "Drift & Retraining", services: ["Evidently", "monitor_dag"],       role: "Daily 06:00 UTC: data drift check (>30% drifted features) + performance heuristics. Either threshold trips `retrain_dag` automatically; otherwise retraining runs monthly." },
        { name: "Observability",    services: ["Prometheus", "Grafana", "Loki", "Promtail", "Alertmanager"], role: "Prometheus scrapes API + Airflow + MinIO + Redis at 5-15s intervals; Grafana renders SLO + golden-signal dashboards; Loki collects structured JSON logs via Promtail; Alertmanager routes burn-rate alerts to Slack + email." },
        { name: "Presentation",     services: ["React + Tailwind", "Mapbox", "Plotly", "nginx"], role: "SPA dashboard served behind nginx. Live aircraft map coloured by risk, side panels for top countries, altitude bands, flight phase. Calls the FastAPI service directly." }
      ],
      dags: [
        { name: "opensky_ingest_dag",     schedule: "Every 15 min",          purpose: "Fetch OpenSky live states -> Bronze JSON -> Silver Parquet -> Gold feature tables (flights / congestion / routes) on MinIO." },
        { name: "retrain_dag",            schedule: "Monthly + on-demand",    purpose: "Optuna HPO + train all three models -> evaluate champion/challenger -> register + promote via MLflow." },
        { name: "monitor_dag",            schedule: "Daily 06:00 UTC",        purpose: "Evidently drift detection + performance heuristics. Auto-triggers retrain_dag if drift > 30%." },
        { name: "ab_analysis_dag",        schedule: "Daily 08:00",            purpose: "Bayesian + frequentist significance tests on every running A/B experiment; updates winner state." },
        { name: "feast_materialize_dag",  schedule: "Hourly (or :30 daily)",  purpose: "Materialize gold feature tables from MinIO into Feast's Redis online store for low-latency lookups." }
      ],
      services: [
        { name: "Airflow",          port: "8081", role: "Orchestrator - 5 DAGs",                              credentials: "airflow / airflow" },
        { name: "Inference API",    port: "8001", role: "FastAPI predictions + Swagger /docs",               credentials: "X-API-Key: dev-api-key-123" },
        { name: "React Dashboard",  port: "8501", role: "Live aircraft map + side panels",                   credentials: "-" },
        { name: "MLflow",           port: "5001", role: "Tracking + Model Registry",                          credentials: "-" },
        { name: "Grafana",          port: "3001", role: "Aviation dashboards (SLO, latency, predictions)",   credentials: "admin / admin" },
        { name: "Prometheus",       port: "9091", role: "Metrics scraper (5s scrape interval)",              credentials: "-" },
        { name: "MinIO console",    port: "9003", role: "S3-compatible lakehouse",                            credentials: "minioadmin / minioadmin" },
        { name: "Kafka UI",         port: "8090", role: "Broker / topic / consumer view",                     credentials: "-" },
        { name: "Feast UI",         port: "8889", role: "Feature views + entities browser",                   credentials: "-" },
        { name: "Alertmanager",     port: "9093", role: "Slack + email alert routing",                        credentials: "-" },
        { name: "Loki",             port: "3100", role: "Log aggregation (Promtail-fed)",                     credentials: "-" },
        { name: "Postgres",         port: "5433", role: "Airflow + MLflow backend store",                     credentials: "airflow / airflow" }
      ],
      dataFlow: [
        "**Poll** - `opensky_ingest_dag` triggers every 15 minutes. The OpenSky client calls `https://opensky-network.org/api/states/all` and pulls the full state vector (~10k aircraft, fields like icao24 / callsign / lat-lon / altitude / speed / heading / vertical_rate / on_ground).",
        "**Bronze** - raw JSON is written to MinIO `aviation-lake/bronze/flights/<run_id>/data.json`. No transformation, no validation. Pure landing zone.",
        "**Validate (Great Expectations)** - schema and bounds checks. If quality drops, the DAG fails fast rather than poisoning downstream layers.",
        "**Silver (Spark)** - `bronze_to_silver.py` drops rows with null icao24/lat/lon, deduplicates `icao24` per run (keeping latest timestamp), casts types, renames to snake_case, computes `distance_10m_km`. Writes partitioned Parquet to `silver/flights/`.",
        "**Gold/flights (Spark)** - `silver_to_gold.py` computes `heading_change_5m` and `avg_speed_15m` via rolling-window joins, adds `hour_of_day` and `day_of_week`, partitions by date.",
        "**Gold/congestion (Spark)** - per airport in the reference table, counts `aircraft_count_50km` via Haversine distance, `arrivals_last_30m`, `departures_last_30m`, and `avg_altitude_50km`.",
        "**Gold/routes (Spark)** - aggregates route-level features (origin/destination airport pairs from squawk + callsign), average delay history, average congestion.",
        "**Feast materialize** - `feast_materialize_dag` reads gold Parquet hourly, pushes into Redis online store keyed per entity (aircraft / airport / route / flight). Online features now available with millisecond lookups.",
        "**Streaming features** - in parallel, the Kafka producer writes live aircraft positions to `flight_positions`; the aiokafka processor consumes them, computes 15-min rolling features, and pushes to Feast with a 10-min TTL.",
        "**Train (retrain_dag)** - generates proxy labels in `create_labels.py`; runs 30 Optuna trials per model across the five candidate algorithms; picks champion by 3-fold CV; logs model cards (feature distributions, importances, SHAP) to MLflow.",
        "**Evaluate & promote** - challenger vs Production champion on test set; quality gates per product (AUC > 0.65 for delay, MAE improvement for congestion, F1 for anomaly). Pass -> Staging; further pass -> Production via the registry.",
        "**Predict** - request arrives at FastAPI -> API-key check -> slowapi rate limit -> Redis cache lookup (SHA256(body) key, 60s TTL) -> if miss, merge request fields with Feast online features -> `predict_proba` / `predict` / `decision_function` -> structured JSON response with model_version.",
        "**Explain** - `/predict/*/explain` runs the same flow but returns SHAP feature contributions and the top positive/negative drivers per prediction.",
        "**Shadow & A/B** - when `SHADOW_MODE_ENABLED=true`, `/predict/*/shadow` runs Production and Staging in parallel via `asyncio.gather`; divergence (>0.5 prob delta) increments a Prometheus counter; HighShadowDivergence alert fires above 20% over 10 min. Champion/challenger splits route a percentage of traffic per experiment.",
        "**Observe** - every step emits Prometheus metrics + structured logs to Loki. `inference_in_flight_requests`, request rate, error rate, p50/p95/p99 latency, cache hit ratio, prediction-value distributions, shadow-model divergence.",
        "**Drift & retrain** - `monitor_dag` runs daily 06:00 UTC. Evidently produces a per-feature drift report; if >30% of features drift or performance heuristics fail, it triggers `retrain_dag` and the loop closes automatically."
      ],
      results: [
        { label: "ML products",          value: "3",     hint: "Delay risk, congestion, anomaly. Three independent models, one inference service." },
        { label: "Services",             value: "12",    hint: "All from one docker compose up: Airflow, FastAPI, React, MLflow, Grafana, Prometheus, MinIO, Kafka UI, Feast, Alertmanager, Loki, Postgres." },
        { label: "Airflow DAGs",         value: "5",     hint: "ingest, retrain, monitor, ab_analysis, feast_materialize. Decoupled and independently scheduled." },
        { label: "Optuna trials / model",value: "30",    hint: "3-fold CV on 50k-row sample. Search across five candidate algorithms per model." },
        { label: "Candidate algorithms", value: "5+",    hint: "LightGBM / XGBoost / CatBoost / Random Forest / HistGBM for delay+congestion; Isolation Forest / LOF for anomaly." },
        { label: "Feature views",        value: "3",     hint: "Feast feature views across 4 entities (aircraft, airport, route, flight). 24 features in total." },
        { label: "Aircraft per poll",    value: "~10k",  hint: "OpenSky `/states/all` returns up to 10,000 aircraft state vectors every 15 min." },
        { label: "Stream throughput",    value: "631k",  hint: "Demo session: 631k flight positions in a single Kafka partition after a few hours of producer runtime." },
        { label: "Tests",                value: "169",   hint: "Unit + contract tests across ingestion, ETL, training, registry, inference, drift." },
        { label: "API rate limit",       value: "100 RPM", hint: "slowapi global limit per IP; 10 RPM on the model-reload endpoint." },
        { label: "Cache TTL",            value: "60s",   hint: "Redis prediction cache. Key = SHA256 of request body. Identical requests within 60s served from cache." },
        { label: "Prometheus scrape",    value: "5s",    hint: "Scrape interval on the inference API. Tight enough to catch sub-minute regressions." },
        { label: "Drift threshold",      value: ">30%",  hint: "Auto-retrain triggers when more than 30% of features drift (Evidently)." },
        { label: "Shadow alert",         value: ">20%",  hint: "HighShadowDivergence fires when Production/Staging disagree on >0.5 prob for more than 20% of requests over 10 min." }
      ],
      apiEndpoints: [
        { method: "POST", path: "/predict/delay",              description: "Single flight delay risk. Returns delay_probability, risk_label (LOW/MEDIUM/HIGH), top_features, model_version." },
        { method: "POST", path: "/predict/delay/batch",        description: "Up to 100 flights in one call via asyncio.gather - significantly faster than sequential." },
        { method: "POST", path: "/predict/delay/explain",      description: "SHAP feature contributions + top positive/negative drivers for one prediction." },
        { method: "POST", path: "/predict/congestion",         description: "Airport congestion score (0-1) given airport features." },
        { method: "POST", path: "/predict/congestion/batch",   description: "Up to 100 airports per call." },
        { method: "POST", path: "/predict/congestion/explain", description: "SHAP contributions for the congestion model." },
        { method: "POST", path: "/predict/anomaly",            description: "Anomaly score for a single aircraft (Isolation Forest decision_function)." },
        { method: "POST", path: "/predict/*/shadow",           description: "Production + Staging in parallel (asyncio.gather). Records divergence as a Prometheus metric." },
        { method: "GET",  path: "/experiments",                description: "List running A/B experiments and current state." },
        { method: "POST", path: "/experiments",                description: "Create a new A/B experiment." },
        { method: "POST", path: "/experiments/{id}/promote",   description: "Promote the challenger to champion (registry transition + traffic shift)." },
        { method: "GET",  path: "/health",                     description: "Model load status + dependency health (Redis, MLflow, Feast)." },
        { method: "GET",  path: "/metrics",                    description: "Prometheus metrics: request rate, p50/p95/p99 latency, cache hit ratio, prediction distributions, shadow divergence." }
      ],
      keyConfig: [
        { key: "API_KEY",                       defaultValue: "dev-api-key-123", note: "Required X-API-Key header on every protected endpoint. Set per environment." },
        { key: "OPENSKY_USERNAME / PASSWORD",   defaultValue: "(empty)",         note: "Optional OpenSky credentials - higher rate limits than the free unauthenticated tier." },
        { key: "HPO_SAMPLE_ROWS",               defaultValue: "50000",           note: "Row cap for Optuna HPO sweeps - balances signal vs runtime." },
        { key: "DRIFT_FEATURE_THRESHOLD",       defaultValue: "0.30",            note: "Trips retraining when more than 30% of features drift (Evidently)." },
        { key: "PREDICTION_CACHE_TTL",          defaultValue: "60s",             note: "Redis TTL on prediction cache entries. Short enough to stay fresh, long enough to absorb identical-request bursts." },
        { key: "SHADOW_MODE_ENABLED",           defaultValue: "true",            note: "Enables /predict/*/shadow endpoints that run Production + Staging in parallel." },
        { key: "SHADOW_DIVERGENCE_THRESHOLD",   defaultValue: "0.5",             note: "Probability delta above which a shadow request is counted as divergent." },
        { key: "RATE_LIMIT_GLOBAL",             defaultValue: "100/min",         note: "slowapi global rate limit per IP across all endpoints." },
        { key: "RATE_LIMIT_RELOAD",             defaultValue: "10/min",          note: "Stricter limit on the model-reload endpoint to prevent abuse." },
        { key: "FEAST_ONLINE_TTL",              defaultValue: "10m",             note: "TTL on streaming features in the Feast online store." },
        { key: "QUALITY_GATE_DELAY_AUC",        defaultValue: "0.65",            note: "Minimum AUC-ROC for the delay model challenger to enter Staging." },
        { key: "PROMETHEUS_SCRAPE_INTERVAL",    defaultValue: "5s",              note: "Scrape interval on inference-api:8000/metrics. 5s is tight enough to catch sub-minute regressions." }
      ],
      techStackDetailed: [
        { name: "Apache Airflow 2.8.2",   why: "Orchestration for all five DAGs. DAG-level scheduling, retries, backfills, web UI per task, and a unified place to see what ran when." },
        { name: "PySpark 3.4.1",          why: "Distributed ETL embedded in the Airflow container. Handles Bronze->Silver->Gold transformations and the rolling-window features that pure pandas would struggle with." },
        { name: "MinIO",                  why: "S3-compatible lakehouse. Same boto3 interface as AWS S3 means production switch is a config change, not a rewrite." },
        { name: "Apache Kafka + aiokafka", why: "Streaming layer for live aircraft positions. Plain aiokafka (no Faust) keeps the dependency surface small while still handling 600k+ messages in a session." },
        { name: "Feast + Redis",          why: "Feature store that decouples feature engineering (batch Spark) from low-latency serving (Redis). Prevents training-serving skew by serving the same code at both sides." },
        { name: "Great Expectations",     why: "Data quality gate at every layer. Fails the DAG fast on schema / bounds / completeness regressions instead of poisoning downstream tables." },
        { name: "Optuna",                 why: "Hyperparameter optimisation across five candidate algorithms per model. 30 trials / model with 3-fold CV - structured search, not grid-search guesswork." },
        { name: "LightGBM / XGBoost / CatBoost", why: "Gradient-boosted tree libraries. Fast on tabular features, native handling of missing values, built-in `predict_proba` and `feature_importances_` for the model cards." },
        { name: "Isolation Forest / LOF", why: "Unsupervised anomaly detectors for Product C. Isolation Forest wins consistently on the held-out F1 against synthetic anomalies." },
        { name: "MLflow",                 why: "Experiment tracking + Model Registry. Parent run per pipeline; child runs per HPO trial / training step. Staging -> Production promotion gates with model cards." },
        { name: "SHAP",                   why: "Per-prediction explainability. `/explain` endpoints return SHAP contributions + top positive/negative drivers. Also logged as model-card artefacts on every promotion." },
        { name: "Evidently AI",           why: "Drift detection that produces structured per-feature reports. Drives the auto-retraining loop - no human in the loop unless something looks suspicious." },
        { name: "FastAPI + Uvicorn",      why: "Async REST framework. First-class support for batch endpoints via asyncio.gather and structured Pydantic schemas at every boundary." },
        { name: "Redis",                  why: "Two roles: feature-store online layer (Feast) + prediction cache (60s TTL keyed by SHA256 of request body). Microsecond latencies on both." },
        { name: "slowapi",                why: "Rate limiting at the FastAPI layer. 100 RPM global per IP, 10 RPM on the model-reload endpoint. Keeps the service resilient to misbehaving clients without writing custom middleware." },
        { name: "React + Tailwind",       why: "Stakeholder dashboard. Plotly + Mapbox for the live aircraft map, Tailwind for layout, served behind nginx. Calls the FastAPI directly so the same predictions drive UI and API." },
        { name: "Prometheus + Grafana + Loki + Alertmanager", why: "Observability quartet. Metrics, dashboards, logs, alerts - each tool doing the one thing it's best at, glued together with standard scrape/push protocols." },
        { name: "Helm chart",             why: "Production deployment target. Dev / staging / prod values let the same chart land on real Kubernetes without rewriting `docker-compose.yml`." },
        { name: "pytest + ruff + bandit", why: "169 unit + contract tests, lint, and security scanning. CI green is a real signal, not a vanity badge." }
      ],
      challenges: [
        { title: "Three products sharing one infrastructure", body: "The hard part isn't training three models - it's making them share the lakehouse, feature store, training pipeline, registry, and inference service cleanly. Each product has its own train_X.py / evaluate_X / register_X functions but they all flow through the same DAG skeleton, the same MLflow conventions, and the same FastAPI dependency injection pattern. Discipline at the boundaries kept the per-product code small and additive." },
        { title: "Decoupling streaming from batch features", body: "Live rolling features (5/15-min averages) belong in streaming; daily aggregates belong in batch. Feast is the seam. Streaming features go straight to the Feast online store via the aiokafka processor; batch features land in Gold and get materialised hourly. Both surfaces serve the same Python function signature in the API." },
        { title: "Training-serving skew, neutralised", body: "If batch feature engineering and online feature lookup ever diverge, you get models that perform worse in production than in eval. Feast enforces a single feature definition for both sides - the same `get_flight_features(entity_keys)` function is called at training time over the offline store and at inference time over the online store." },
        { title: "Auto-retraining without runaway loops", body: "Drift-triggered retraining sounds clean until a slow-moving distribution shift triggers retrains every day forever. The platform combines a drift trigger (>30% of features drifted) with a heuristic performance check, plus a monthly cadence as a fallback. A retrain cool-down prevents back-to-back triggers." },
        { title: "Shadow mode without breaking Production", body: "Running Production and Staging in parallel via asyncio.gather is cheap (~1.2x latency) but the Staging bundle has to be loaded lazily - because there often isn't one yet. Lazy loading on first shadow request means the absence of Staging never breaks Production; tracing exposes which divergent shadow runs need investigation." },
        { title: "12 services without operator fatigue", body: "Docker Compose with 12 services is easy to start but hard to keep healthy. Solution: a single `make status` command that checks the health of every service, plus golden-signal Grafana dashboards so a sick service is visible in one click. Loki + structured JSON logging means failures cross-correlate with metrics." },
        { title: "Champion/challenger that doesn't lie", body: "Random-traffic-split A/B testing is fine for high-volume products but underpowered at OpenSky-scale traffic. The platform records every prediction's outcome (where ground truth becomes available) and runs both frequentist (chi-squared) and Bayesian (posterior over conversion rates) tests in the ab_analysis_dag. Promotion only happens after a configurable evidence threshold." },
        { title: "/explain that's fast enough to call inline", body: "SHAP can be slow on tree ensembles. The implementation uses TreeSHAP (`shap.TreeExplainer`) with a pre-computed background sample cached at model-load time. /explain runs in well under inference budget so it can be called from the dashboard without a separate offline pipeline." },
        { title: "Helm-ready from day one", body: "The Docker Compose stack is the dev environment; the production target is Kubernetes. Keeping service config in a Helm chart (`k8s/helm/` with dev / staging / prod values) from the start avoided the usual painful Compose-to-K8s migration." }
      ],
      gallery: [
        { src: "/images/projects/opensky-mlops/dashboard.png",          alt: "React dashboard",        caption: "React + Tailwind dashboard - live aircraft map coloured by risk, with side panels for top countries, altitude bands, and flight phase." },
        { src: "/images/projects/opensky-mlops/swagger.png",            alt: "Swagger UI",             caption: "FastAPI Swagger - 13 endpoints behind an API-key gate with slowapi rate limiting (100 RPM global, 10 RPM on reload)." },
        { src: "/images/projects/opensky-mlops/airflow-dags.png",       alt: "Airflow DAGs list",      caption: "Five Airflow DAGs (ingest, retrain, monitor, ab_analysis, feast_materialize) - decoupled schedules, independently triggerable." },
        { src: "/images/projects/opensky-mlops/airflow-dag-graph.png",  alt: "DAG graph",              caption: "opensky_ingest_dag graph - 7 tasks: fetch OpenSky telemetry, validate, bronze->silver, silver->gold (flights / congestion / routes), publish." },
        { src: "/images/projects/opensky-mlops/mlflow.png",             alt: "MLflow experiments",     caption: "MLflow experiments - every pipeline run logs a parent + HPO/training/eval/registry children, with model cards as artefacts." },
        { src: "/images/projects/opensky-mlops/grafana.png",            alt: "Grafana dashboards",     caption: "Pre-provisioned Aviation dashboards - SLO burn-rate, p95 latency, cache hit ratio, prediction distributions, shadow divergence." },
        { src: "/images/projects/opensky-mlops/prometheus.png",         alt: "Prometheus query",       caption: "Prometheus directly - `inference_in_flight_requests` queried live. Metrics scraped every 5 seconds." },
        { src: "/images/projects/opensky-mlops/minio.png",              alt: "MinIO buckets",          caption: "MinIO console - `aviation-lake` bucket with bronze / silver / gold prefixes (gold split into flights / congestion / routes)." },
        { src: "/images/projects/opensky-mlops/kafka-ui.png",           alt: "Kafka UI",               caption: "Kafka UI - broker / topic / consumer health at a glance." },
        { src: "/images/projects/opensky-mlops/kafka-topics.png",       alt: "Kafka topics",           caption: "`flight_positions` topic - 631k messages in a single partition during a multi-hour producer session." },
        { src: "/images/projects/opensky-mlops/feast.png",              alt: "Feast UI",               caption: "Feast UI - three feature views, 24 features, four entities (aircraft, airport, route, flight)." }
      ]
    }
  },
  {
    slug: "nyc-taxi-mlops",
    title: "NYC Yellow Taxi MLOps Pipeline",
    techStack: ["Apache Airflow", "PySpark", "MinIO", "MLflow (DagShub)", "Optuna", "LightGBM", "scikit-learn", "FastAPI", "Evidently", "Prometheus", "Grafana", "Locust", "Docker Compose"],
    period: "2026",
    description: [
      "Built an **end-to-end MLOps system** that predicts NYC Yellow Taxi trip durations from public TLC trip-record data.",
      "Implemented a **medallion lakehouse on MinIO** (Bronze -> Silver -> Gold -> ML-transformed) with **PySpark** ETL and a custom MLflow pyfunc wrapper for joblib-backed models.",
      "Ran a **two-stage HPO** (10-family screening on a 20k/10k sample, then 50-trial Optuna with 3-fold CV on the top 2 families) and persisted the winning configuration as `champion.json` that the training DAG reads on every run.",
      "Designed **three decoupled Airflow DAGs** (pipeline, drift-detection, retrain) so retraining only fires when **Evidently** detects an actual distribution shift in the latest month of data.",
      "Served predictions through a **FastAPI** app with a web UI, instrumented with **Prometheus** metrics on `/metrics`, visualised in **Grafana**, and load-tested with **Locust**."
    ],
    links: {
      repo: "https://github.com/Vinayakmane47/NYC-YELLOW-TAXI-MLOPS"
    },
    detail: {
      summary: "A full MLOps pipeline that predicts NYC Yellow Taxi trip durations. PySpark medallion ETL on MinIO, a two-stage Optuna search over 10 model families that freezes its winner into a `champion.json` contract, MLflow tracking and registry on DagShub gated by hard absolute thresholds (R2, RMSE, MAE), automatic retraining when Evidently detects drift, a FastAPI inference service with a web UI, Prometheus and Grafana observability, and Locust load testing. Six services, three Airflow DAGs, one `docker compose up`.",
      hero: {
        image: {
          src: "/images/projects/nyc-taxi-mlops/architecture.png",
          alt: "NYC Yellow Taxi MLOps architecture",
          caption: "End-to-end MLOps architecture from raw TLC parquet to monitored predictions, with a drift-detection loop feeding back into retraining. Source: NYC-YELLOW-TAXI-MLOPS/docs/diagrams/architecture.png."
        }
      },
      highlights: [
        { title: "Two-stage HPO, frozen winner",       body: "10 model families screened on a 20k/10k sample, then 50 Optuna trials per finalist with 3-fold CV. The winner is committed to the repo as `champion.json`, so every training run is deterministic." },
        { title: "Hard quality gates, not relative",   body: "A new model must clear R2 >= 0.3, RMSE <= 30 min, and MAE <= 20 min on the test set. Beating the previous Production model is not enough on its own." },
        { title: "Drift, not autopilot",               body: "Evidently checks the latest month against the training reference. Retraining fires only when distributions actually shift, so the registry stays clean and quiet most months." },
        { title: "Real load testing baked in",         body: "A Locust container is part of the compose stack. The endpoint mix (5x predict, 2x batch, 1x health, 1x model info) approximates real traffic and lights up the Grafana panels live." }
      ],
      tourStops: [
        {
          image: { src: "/images/projects/nyc-taxi-mlops/minio.png", alt: "MinIO buckets", caption: "MinIO console showing the four medallion buckets and their monthly partitions." },
          title: "1. Raw TLC parquet lands in a medallion lakehouse on MinIO",
          body: [
            "Each month the pipeline pulls the latest `yellow_tripdata_{year}-{month}.parquet` from the TLC CloudFront URL and writes it untouched to `s3a://bronze/{year}/{month}/`. The download step is idempotent: if the file already exists, the task records a metadata note and exits.",
            "PySpark then walks the raw parquet through **silver** (cleaning and filtering: `0 < duration < 180 min`, `0 < distance < 60 mi`, `0 < fare < $500`, plus imputed `passenger_count` and a clamped `RatecodeID`), **gold** (engineered features: hour of day, day of week, zone-based features, scaled distance, fare ratios), and **ml-transformed** (encoded categoricals, scaled numerics, train/val/test splits). Each layer is its own bucket, so any stage can be rebuilt without redoing the earlier ones."
          ],
          tools: ["MinIO", "PySpark", "Airflow"],
          bullets: [
            "Same `s3a://` paths run against AWS S3 in production with no code changes.",
            "12-column schema validation gates entry to silver; the DAG fails fast on regression.",
            "Spark runs embedded in the Airflow image, so there is no separate cluster to operate."
          ]
        },
        {
          image: { src: "/images/projects/nyc-taxi-mlops/airflow-dag-graph.png", alt: "Airflow pipeline DAG graph", caption: "Eight tasks chained in order, each its own Airflow task with retries and Gantt timing." },
          title: "2. Eight Airflow tasks chain raw parquet into a registered model",
          body: [
            "The pipeline DAG runs eight tasks in order: ingest, validate, preprocess, transform, ml-transform, train, evaluate, register. Each task is its own Python operator with retries, a Gantt-friendly duration, and code visible from the Airflow UI. There is no monolithic 'run the pipeline' bash step.",
            "The training task reads `src/hpo/champion.json` for its model family and hyperparameters, loads the splits via Spark, caps the training frame at 2 million rows, fits the model from `model_factory.py`, and logs everything to MLflow (metrics, params, the `.joblib` artefact, a feature-importances plot). It does not search for hyperparameters at training time, by design."
          ],
          tools: ["Airflow", "PySpark", "MLflow", "joblib"]
        },
        {
          image: { src: "/images/projects/nyc-taxi-mlops/airflow-dags.png", alt: "Three Airflow DAGs", caption: "Three DAGs with distinct purposes. Decoupling backfill from drift-triggered retrains keeps run history readable." },
          title: "3. Three DAGs, three jobs, no branching megaflow",
          body: [
            "`nyc_taxi_mlops_pipeline` runs the full ingest-to-register flow monthly. `nyc_data_refresh_dag` runs alongside, refreshes data through the medallion layers, runs Evidently against the training reference, and triggers `nyc_model_retrain_dag` only when drift is detected. `nyc_model_retrain_dag` runs on demand or from that trigger, executing only train, evaluate, and register.",
            "Splitting these into three DAGs (instead of one with `if drift:` branches) keeps each DAG's run history pure and grep-able. Backfills and drift-triggered retrains can never race, because they live on different DAGs."
          ],
          tools: ["Airflow", "Evidently"]
        },
        {
          image: { src: "/images/projects/nyc-taxi-mlops/airflow-dag-detail.png", alt: "DAG detail view", caption: "Per-DAG task list, code, Gantt, and run history all one click away in the Airflow UI." },
          title: "4. Optuna, but frozen: a champion.json contract",
          body: [
            "Hyperparameter search is intentionally **offline**: `python src/hpo/mlflow.py` runs Stage 1 (all 10 model families on a 20k train / 10k val sample, default params, ranked by RMSE) then Stage 2 (50 Optuna trials per top-2 finalist with 3-fold CV and full search spaces). The winning configuration writes to `src/hpo/champion.json`, which is committed to the repo.",
            "The training DAG reads that file as a contract: same family, same hyperparameters, every run. Promotion comparisons become apples-to-apples instead of fighting noise from a fresh hyperparameter search. When you want a new champion, you re-run the offline HPO command intentionally."
          ],
          tools: ["Optuna", "MLflow", "scikit-learn", "LightGBM"],
          bullets: [
            "10 families: LightGBM, RandomForest, ExtraTrees, GradientBoosting, HistGBM, AdaBoost, Ridge, Lasso, ElasticNet, DecisionTree.",
            "Stage 2 search spaces tuned per family (learning rate, depth, n_estimators, regularisation).",
            "Random Forest won this run with n_estimators=865, max_depth=25, sqrt features."
          ]
        },
        {
          image: { src: "/images/projects/nyc-taxi-mlops/ui-landing.png", alt: "Inference web UI", caption: "FastAPI-backed web form. The current model family and version are shown as a top-right badge." },
          title: "5. FastAPI serves both the JSON API and a one-page web UI",
          body: [
            "The inference container exposes six endpoints. `GET /` renders a Jinja2 form for stakeholders. `POST /predict` takes a single trip (pickup time, pickup zone, drop-off zone, trip distance) and returns the predicted duration plus the loaded model family and version. `POST /predict/batch` handles up to 100 trips per call. `POST /model/reload` swaps the current model from the MLflow registry in-process, with no container restart.",
            "Both the UI and the JSON API hit the same `/predict` endpoint, so the demo view never drifts from what real clients see. The feature pipeline is the same code that produced the training splits, applied per request, which avoids training-serving skew without bringing in a feature store."
          ],
          tools: ["FastAPI", "Pydantic", "Jinja2"]
        },
        {
          image: { src: "/images/projects/nyc-taxi-mlops/ui-prediction.png", alt: "Prediction result", caption: "Result rendered from a full `/predict` round-trip, with the same model_family and model_version the JSON API would return." },
          title: "6. A predicted duration with a paper trail",
          body: [
            "Every response carries `model_family` and `model_version` (for example `random_forest` and `v9`). The version maps directly to an MLflow registry entry on DagShub, so any prediction can be traced to the exact run that produced the model, its parameters, its evaluation metrics, and its joblib artefact.",
            "Promotion to that version went through a four-branch decision matrix. Quality gate plus beats Production, promote. Quality gate plus no Production yet, register as first Production. Quality gate fails, archive. Worse than Production on RMSE / MAE / R2, archive."
          ],
          tools: ["MLflow", "DagShub", "joblib"]
        },
        {
          image: { src: "/images/projects/nyc-taxi-mlops/grafana.png", alt: "Grafana dashboard", caption: "Pre-provisioned Grafana panels: request rate, error rate, latency percentiles, prediction value distribution, batch size, in-flight requests, CPU and memory." },
          title: "7. Prometheus scrapes every 5 seconds, Grafana renders the dashboard",
          body: [
            "The FastAPI service publishes Prometheus metrics on `/metrics`: request counters and rates, latency histograms (p50 / p95 / p99), error counters, in-flight requests, prediction-value distributions, batch-size distributions, container CPU and memory. Prometheus scrapes them every 5 seconds.",
            "Grafana ships with a pre-provisioned dashboard that renders all of the above in one view. Anything moving on the prediction API is visible inside 10 seconds, with no extra configuration."
          ],
          tools: ["Prometheus", "Grafana"]
        },
        {
          image: { src: "/images/projects/nyc-taxi-mlops/prometheus.png", alt: "Prometheus query", caption: "Querying Prometheus directly: `rate(prediction_requests_total[1m])` broken down by endpoint." },
          title: "8. Raw Prometheus is one click away when the dashboard is not enough",
          body: [
            "Grafana is the default view, but the same metrics are queryable directly in Prometheus at `:9090`. `rate(prediction_requests_total[1m])` broken down by endpoint, `histogram_quantile(0.95, ...)` for p95 latency, `increase(...)` for cumulative counts. Useful when you want to ad-hoc explore a suspected regression before reaching for the dashboard."
          ],
          tools: ["Prometheus"]
        },
        {
          image: { src: "/images/projects/nyc-taxi-mlops/locust.png", alt: "Locust load test stats", caption: "Live RPS, fail count, and p50 / p95 / p99 latency per endpoint while a Locust swarm runs against the inference container." },
          title: "9. Locust generates traffic that looks like real traffic",
          body: [
            "Locust runs as a sibling container, so load testing is a `docker compose up locust` away. The locustfile mixes the endpoints in a 5 / 2 / 1 / 1 ratio (`/predict`, `/predict/batch` with 5 to 20 trips, `/health`, `/model/info`), which approximates real client behaviour far better than hammering a single endpoint.",
            "Once a swarm is running, the Grafana panels react in real time: request rate climbs, latency percentiles widen, in-flight requests rise to match the worker count. Load tests behave like production load, and the observability stack tells the same story end-to-end."
          ],
          tools: ["Locust", "Docker Compose", "Grafana"]
        }
      ],
      qualityGates: [
        { metric: "R2",   threshold: ">= 0.3", role: "Minimum explained variance on the test set. Anything below this, the model is archived regardless of the comparison." },
        { metric: "RMSE", threshold: "<= 30 min", role: "Hard ceiling on root-mean-squared error in minutes. Stops weak champions from sneaking into Production during a rough month." },
        { metric: "MAE",  threshold: "<= 20 min", role: "Hard ceiling on mean absolute error. Catches models that satisfy RMSE on average but miss badly on individual trips." }
      ],
      results: [
        { label: "Model family",            value: "Random Forest", hint: "Winner of the two-stage HPO across 10 candidate families." },
        { label: "Validation RMSE",         value: "4.90 min",      hint: "From `champion.json`, validation set RMSE during HPO." },
        { label: "Test RMSE",               value: "5.98 min",      hint: "Small generalisation gap, which is what you want from a tabular model on stable features." },
        { label: "Validation R2",           value: "0.774",         hint: "Explained variance on the validation set." },
        { label: "Test R2",                 value: "0.768",         hint: "Holdout R2, well clear of the 0.30 quality-gate floor." },
        { label: "Validation MAE",          value: "3.12 min",      hint: "Mean absolute error on validation, aggressive but interpretable." },
        { label: "Test MAE",                value: "3.88 min",      hint: "Holdout MAE, comfortable under the 20 min ceiling." },
        { label: "Model families screened", value: "10",            hint: "LightGBM, RF, ExtraTrees, GBM, HistGBM, AdaBoost, Ridge, Lasso, ElasticNet, DecisionTree." },
        { label: "Optuna trials / finalist", value: "50",           hint: "Top 2 families from Stage 1 each get 50 trials with 3-fold CV." },
        { label: "Airflow DAGs",            value: "3",             hint: "Pipeline (monthly), data refresh + drift, retrain (on-demand)." },
        { label: "Pipeline tasks",          value: "8",             hint: "Ingest, validate, preprocess, transform, ml-transform, train, evaluate, register." },
        { label: "Services",                value: "6",             hint: "Airflow, Inference + Web UI, MinIO, Prometheus, Grafana, Locust. One docker compose up." },
        { label: "Prometheus scrape",       value: "5s",            hint: "Tight enough to surface sub-minute regressions in the Grafana panels." }
      ],
      apiEndpoints: [
        { method: "GET",  path: "/",              description: "HTML web UI. Paste pickup time + zones + distance, click Predict Duration." },
        { method: "POST", path: "/predict",       description: "Single-trip JSON inference. Returns `predicted_duration_minutes`, `model_family`, `model_version`." },
        { method: "POST", path: "/predict/batch", description: "Up to 100 trips per call. Predictions returned in input order." },
        { method: "POST", path: "/model/reload",  description: "Hot-reload the current Production model from the registry, no container restart." },
        { method: "GET",  path: "/health",        description: "Liveness / readiness. Returns model load status." },
        { method: "GET",  path: "/metrics",       description: "Prometheus exposition. Counters, histograms, gauges with method + endpoint labels." }
      ],
      keyConfig: [
        { key: "DAGSHUB_TOKEN",                   defaultValue: "(required)",              note: "Auth token for the DagShub-hosted MLflow tracking server." },
        { key: "tracking.tracking_uri",           defaultValue: "dagshub.com/.../.mlflow", note: "MLflow tracking URI, set in `src/config/settings.yaml`." },
        { key: "metric_thresholds.min_r2",        defaultValue: "0.3",                     note: "Quality gate lower bound on R2." },
        { key: "metric_thresholds.max_rmse",      defaultValue: "30.0",                    note: "Quality gate upper bound on RMSE in minutes." },
        { key: "metric_thresholds.max_mae",       defaultValue: "20.0",                    note: "Quality gate upper bound on MAE in minutes." },
        { key: "data.target_col",                 defaultValue: "trip_duration_min",       note: "Target column produced by the silver-layer transformation." },
        { key: "data.max_rows_train",             defaultValue: "2,000,000",               note: "Cap on training rows after Spark to pandas conversion." },
        { key: "evaluation_policy.min_rmse_improvement", defaultValue: "0.0",              note: "Minimum RMSE delta the new model must beat the champion by." },
        { key: "HPO_STAGE1_TRAIN_ROWS",           defaultValue: "20,000",                  note: "Training sample for the 10-family screening pass." },
        { key: "HPO_STAGE1_VAL_ROWS",             defaultValue: "10,000",                  note: "Validation sample for screening." },
        { key: "HPO_STAGE2_TRIALS",               defaultValue: "50",                      note: "Optuna trials per finalist (3-fold CV per trial)." },
        { key: "PROMETHEUS_SCRAPE_INTERVAL",      defaultValue: "5s",                      note: "Scrape interval on the inference API `/metrics` endpoint." }
      ],
      techStackDetailed: [
        { name: "Apache Airflow 2.8.2", why: "Orchestration for the three DAGs. DAG-level scheduling, retries, backfills, and per-task Gantt timing." },
        { name: "PySpark 3.4.1",        why: "All four medallion transformations run on Spark. Handles millions of rows and partitioned Parquet I/O over `s3a://`." },
        { name: "MinIO",                why: "S3-compatible object store. Same `s3a://` paths run against AWS S3 in production with no code changes." },
        { name: "MLflow on DagShub",    why: "Tracking and registry. Parent / child run structure plus Staging to Production transitions with archived old versions." },
        { name: "Optuna",               why: "Hyperparameter optimisation. 50 trials per finalist with 3-fold CV." },
        { name: "scikit-learn + LightGBM", why: "Model-family backbone. The model factory uses a single dict to instantiate any of the 10 sklearn-compatible families." },
        { name: "Evidently AI",         why: "Drift detection. Per-feature reports against a training reference power the auto-retrain decision." },
        { name: "FastAPI + Uvicorn",    why: "Async REST framework with Pydantic schemas at every boundary." },
        { name: "Jinja2",               why: "One-file HTML form for the inference web UI, served directly by FastAPI." },
        { name: "Prometheus + Grafana", why: "Metrics scraper and dashboards. 5-second scrape interval covers sub-minute regressions." },
        { name: "Locust",               why: "Python-native load testing with a realistic 5 / 2 / 1 / 1 endpoint mix." },
        { name: "Docker Compose",       why: "One YAML, six services. One command brings the whole stack up." },
        { name: "joblib + custom pyfunc", why: "Compressed joblib artefacts wrapped in `SklearnJoblibPyfuncModel` so they live inside the MLflow registry with first-class versioning." }
      ]
    }
  },
  {
    slug: "arxiv-rag",
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
    },
    detail: {
      summary: "A production-ready RAG system over the arXiv corpus. Apache Airflow orchestrates daily ingestion of new papers; Docling parses each PDF into structured content; a section-aware chunker preserves document boundaries; Jina v3 produces 1024-dim embeddings; OpenSearch indexes BM25 fields alongside HNSW vectors and combines them with Reciprocal Rank Fusion; FastAPI serves the RAG endpoints (sync + streaming); a local Ollama LLM generates grounded answers; Redis caches responses for a 150–400× speed-up on repeat queries; and Langfuse traces every step end-to-end. Seven services. One `docker compose up`.",
      hero: {
        image: {
          src: "/images/projects/arxiv/architecture.png",
          alt: "arXiv RAG system architecture",
          caption: "Complete system architecture - ingestion pipeline, hybrid retrieval, LLM generation, caching, and observability. Source: arxiv-paper-rag repository."
        }
      },
      overview: [
        "**arXiv Paper Curator** is an end-to-end Retrieval-Augmented Generation (RAG) system built around academic papers from arXiv. The goal is straightforward: let a user (or another system) ask a natural-language question and get a grounded, cited answer drawn from real papers rather than the LLM's frozen parametric memory. Achieving that reliably - at production quality, with reasonable latency and cost - is far harder than a notebook demo. This project is the answer to *how*.",
        "Every component runs as its own service inside Docker Compose: a FastAPI application server, PostgreSQL for paper metadata, OpenSearch 2.19 for hybrid retrieval, Apache Airflow 3.0 for scheduled ingestion, Ollama 0.11.2 for local LLM serving, Redis 7 for caching, and Langfuse 2 for observability. The whole stack is brought up with a single `docker compose up --build -d`, and dashboards for each subsystem (Airflow at :8080, OpenSearch Dashboards at :5601, Langfuse at :3000, Gradio UI at :7861, OpenAPI docs at :8000/docs) make it easy to inspect what's happening from any angle.",
        "The system combines five engineering disciplines that usually live in different teams. **Data engineering** handles the scheduled fetch, PDF parsing, and incremental indexing through an Airflow DAG running Mon–Fri at 06:00 UTC. **Search engineering** combines BM25 lexical scoring with HNSW-based dense vector retrieval, fused at query time using Reciprocal Rank Fusion - no manual score-weight tuning required. **ML serving** runs `llama3.2:1b` locally via Ollama with streaming Server-Sent Events responses, plus structured-output prompts validated against a Pydantic schema. **Platform engineering** ties seven services together in `compose.yml` with health checks, auto-generated Airflow credentials, and clean restart semantics. **ML observability** instruments every retrieval, embedding, prompt build, and generation call through Langfuse, producing a structured trace tree per request with per-step latency, retrieved chunk IDs, prompt tokens, and cost attribution.",
        "What sets the project apart from a typical RAG tutorial: it doesn't cheat anywhere. Retrieval isn't a one-line vector search - there's a proper `QueryBuilder` with field boosts (`chunk_text^3`, `title^2`, `abstract^1`), fuzziness, prefix matching, and category filtering. Chunking isn't a fixed token window - it's a hybrid strategy that adapts to section sizes. Caching isn't an afterthought - keys are SHA-256 hashes of the normalised request (query + model + top-k + use_hybrid + categories), so the cache stays correct when those parameters change. And observability isn't `print()` statements - it's full Langfuse spans on every subsystem.",
        "The end result is a system that's both genuinely useful (you can ask it about transformers, RLHF, retrieval-augmented anything, and get answers grounded in actual papers with arXiv links as citations) and a working template you can fork to build a RAG system over any structured domain corpus - legal documents, internal wiki, product specs, support tickets - by swapping the ingestion DAG and re-tuning the chunker."
      ],
      problem: [
        "Large language models are remarkable at *understanding* a question but unreliable when asked to *answer* one factually. Three failure modes are particularly bad for research use: (1) the model hallucinates plausible-but-fake citations because it learned the *shape* of academic writing without anchoring it to specific papers; (2) its parametric knowledge is frozen at training time, so anything published in the last six to twelve months is invisible; (3) it has no way to point a user at the actual source they should read to verify or go deeper.",
        "Retrieval-Augmented Generation closes all three gaps - but only if the engineering is right. A toy RAG system that does dense-only retrieval on a static PDF dump will miss exact-phrase queries (\"what does paper X say about technique Y?\"), break on chunk boundaries (cutting off equations and tables mid-sentence), have no way to backfill or re-index when the chunker changes, take 20+ seconds on every query because nothing is cached, and degrade silently because nothing is being traced.",
        "This project addresses each of those failure modes directly: hybrid retrieval for the lexical-vs-semantic trade-off, section-aware chunking for document structure, an Airflow DAG for repeatable backfills, two-layer Redis caching for latency, and full Langfuse instrumentation so every regression is debuggable. The investment up front pays off as soon as you need to change *anything* about the pipeline in production."
      ],
      dataFlow: [
        "**Daily ingestion** - at 06:00 UTC Monday through Friday, Airflow triggers the `arxiv_paper_ingestion` DAG. Tasks run in sequence: `setup_environment` → `fetch_daily_papers` (30-min timeout, retries 2× with 5-min backoff) → `index_papers_hybrid` → `generate_daily_report` → `cleanup_temp_files` (deletes >30-day-old PDFs to manage disk).",
        "**Fetch & parse** - the fetch task hits the arXiv API for the configured category (default `cs.AI`, 5 papers per run, 3-second rate-limit delay), downloads each PDF, and runs it through Docling. Docling preserves section headings, abstract, body text, and the structural hierarchy that the chunker uses later.",
        "**Chunk & embed** - the `TextChunker` decides per section whether to (a) keep it as a single chunk (100–800 words), (b) merge it with neighbours (<100 words), or (c) split it word-wise (>800 words, target 600 words with 100-word overlap). Each chunk is then sent to Jina v3 with task=`retrieval.passage` for a 1024-dim embedding.",
        "**Index in OpenSearch** - chunks are written to the `arxiv-papers-chunks` index. The schema has a `chunk_text` field analyzed with a custom pipeline (lowercase + stop + Snowball stemmer), a `knn_vector` field with HNSW (`m=16`, `ef_construction=512`, cosine similarity, nmslib engine), plus typed fields for arxiv_id, paper_id, chunk_index, categories, dates. A separate `hybrid-rrf-pipeline` is registered as a phase-results processor with `rank_constant=60`.",
        "**Query arrives** at `POST /api/v1/ask` (or `/stream`). FastAPI deserialises the `AskRequest` (query, model, top_k, use_hybrid, categories). A `RAGTracer` opens the root Langfuse span.",
        "**Cache check** - the `CacheClient` computes `SHA-256(json(query, model, top_k, use_hybrid, sorted(categories)))` truncated to 16 hex chars as the Redis key. If present, the cached `AskResponse` is returned directly with the trace marked `cache_hit: true`. 50–100 ms total.",
        "**Embed query** - on a miss, the query is embedded with Jina (task=`retrieval.query` for asymmetric encoding). If Jina fails, the system gracefully falls back to BM25-only and notes it in the trace.",
        "**Hybrid retrieval** - OpenSearch runs a multi-match BM25 query (`fields=[chunk_text^3, title^2, abstract^1]`, `type=best_fields`, `fuzziness=AUTO`, `prefix_length=2`) and a k-NN vector query in parallel; the RRF pipeline merges the two ranked lists with the formula `score = Σ 1/(k + rank)`, k=60.",
        "**Build prompt** - the `RAGPromptBuilder` loads the system prompt from `rag_system.txt`, then constructs a context block (`[1. arXiv:<id>] <chunk_text>` repeated for each retrieved chunk), appends the user question, and emits a single prompt. A structured-output variant returns the prompt plus a Pydantic JSON schema so Ollama can be asked to produce a validated response.",
        "**Generate answer** - Ollama (default `llama3.2:1b`, 300-word max response) is called via the streaming API. For `/stream` endpoints, tokens are yielded as Server-Sent Events (`data: {chunk: '...'}\\n\\n`) the moment they arrive - typically 2–3 s to first token.",
        "**Cache & respond** - the final `AskResponse` (answer, sources, chunks_used, search_mode) is stored in Redis with a 24-hour TTL and returned to the user. The Langfuse trace is finalised with total duration and metadata."
      ],
      architecture: [
        "**Ingestion DAG (`arxiv_paper_ingestion.py`)** - Airflow 3.0 DAG with the schedule `0 6 * * 1-5`, `max_active_runs=1`, `catchup=False`, retries 2× with 30-minute delay. Five PythonOperator/BashOperator tasks in sequence: setup, fetch, index, report, cleanup. Owner is `arxiv-curator`; tags include `arxiv`, `hybrid-search`, `embeddings`, `chunks`.",
        "**arXiv client** - wraps the arXiv API with rate-limit handling (`ARXIV__RATE_LIMIT_DELAY=3.0` seconds), max 5 results per run, deduplication against existing papers in PostgreSQL by arxiv_id, and per-paper PDF download.",
        "**PDF parser (Docling)** - converts each PDF into structured content. Configurable via `PDF_PARSER__MAX_PAGES` (default 30) and `PDF_PARSER__DO_OCR` (default false). Returns section dictionaries with headings preserved.",
        "**Hybrid `TextChunker` service** - initialised with `chunk_size=600`, `overlap_size=100`, `min_chunk_size=100`. The `chunk_paper()` method tries section-based chunking first via `_chunk_by_sections()`; if that fails or no sections are available, it falls back to word-based chunking via `chunk_text()`. Each chunk emits a `TextChunk` with full `ChunkMetadata` (index, char ranges, word count, overlap-with-previous).",
        "**Embeddings service (Jina v3)** - `jina-embeddings-v3` model, 1024-dim, async API client (`jina_client.py`). Uses `retrieval.passage` task at index time and `retrieval.query` at search time (asymmetric encoding designed specifically for RAG).",
        "**OpenSearch index (`arxiv-papers-chunks`)** - single shard, no replicas (dev defaults), `index.knn=True`, `index.knn.space_type=cosinesimil`. Two custom analyzers: `standard_analyzer` (with `_english_` stopwords) and `text_analyzer` (standard tokenizer + lowercase + stop + Snowball stemmer). `dynamic=strict` to prevent schema drift.",
        "**HNSW configuration** - `method=hnsw`, `engine=nmslib`, `space_type=cosinesimil`, `ef_construction=512`, `m=16`. `ef_construction` is set high for better recall at index time (slower indexing is acceptable in a batch DAG); `m=16` is a balanced default that hasn't needed retuning.",
        "**Hybrid RRF pipeline** - a `score-ranker-processor` registered as a phase-results processor on the index, using `technique=rrf` with `rank_constant=60`. This is preferred over weighted-average normalisation precisely because BM25 and cosine similarity have wildly different score distributions.",
        "**`QueryBuilder` service** - unified query construction for both paper-level and chunk-level search. For chunks: searches `chunk_text^3, title^2, abstract^1`. For papers: `title^3, abstract^2, authors^1`. Supports `track_total_hits`, category `terms` filters, pagination, sort-by-date for `latest_papers`, and per-field highlighting.",
        "**FastAPI app (`src/main.py`)** - registers four routers: ping, papers, hybrid_search, ask (with a separate `stream_router` for SSE). Dependency injection (`Annotated[..., Depends(...)]`) provides OpenSearch, Embeddings, Ollama, Langfuse, and Cache clients to every handler.",
        "**Ollama service** - model `llama3.2:1b`, host `http://ollama:11434`, 300-second timeout, response capped at 300 words. Two prompt modes: free-form (`create_rag_prompt`) and structured-output (`create_structured_prompt`) using a Pydantic `RAGResponse` schema as Ollama's `format` parameter, with a `ResponseParser` that JSON-parses + Pydantic-validates the result, falling back to regex-based JSON extraction on malformed output.",
        "**Redis `CacheClient`** - pure exact-match cache. Cache key: `exact_cache:<sha256_16hex>` computed from JSON-stringified `{query, model, top_k, use_hybrid, sorted(categories)}`. `redis.get/set` only - no fancy structures, O(1) hot path. TTL is 24 h by default and configurable.",
        "**Langfuse `RAGTracer`** - opens a root trace per request, then nested spans for `trace_embedding`, `trace_search`, `trace_prompt_construction`, `trace_generation`. Spans capture inputs, outputs, timing, errors, and metadata (cache_hit, sources, chunks_used). The wrapper centralises instrumentation so the API handlers stay readable.",
        "**Gradio UI (`src/gradio_app.py`)** - a single-file chat interface on port 7861, posts to `/api/v1/ask` or `/api/v1/stream`, renders answers plus a sources panel. Useful for human eval and stakeholder demos.",
        "**Compose stack (`compose.yml`)** - seven services with health checks: `api` (FastAPI), `postgres` (port 5432, paper metadata), `opensearch` + `opensearch-dashboards` (9200, 5601), `airflow` (8080), `ollama` (11434), `redis` (6379), `langfuse` (3000). Auto-generated Airflow credentials land in `airflow/simple_auth_manager_passwords.json.generated`."
      ],
      features: [
        { title: "Automated daily ingestion via Airflow", body: "An Airflow 3.0 DAG schedules a five-task pipeline Monday through Friday at 06:00 UTC. Tasks have explicit timeouts, retries with backoff, and a cleanup step that deletes >30-day-old PDFs. Backfills and re-runs are first-class via the Airflow UI - no ad-hoc scripts." },
        { title: "Section-aware hybrid chunking", body: "The `TextChunker` adapts to section size: sections 100–800 words become single chunks, smaller sections merge with neighbours, larger sections are split into 600-word windows with 100-word overlap. When section data isn't available it falls back to traditional word-window chunking. The result preserves equations, tables, and conceptual boundaries that naive token-window chunking destroys." },
        { title: "Hybrid retrieval with RRF fusion", body: "BM25 (multi-match with field boosts, fuzziness, and prefix matching) is combined with k-NN dense vector search over HNSW (cosine similarity, m=16, ef_construction=512). Score fusion uses Reciprocal Rank Fusion (rank_constant=60), which avoids the score-scale fragility of weighted-sum fusion. Mode is per-request: BM25-only, vector-only, or hybrid." },
        { title: "Asymmetric query/passage embeddings", body: "Jina v3 supports distinct `retrieval.passage` and `retrieval.query` tasks. Indexing uses passage encoding; querying uses query encoding. This asymmetry is designed specifically for retrieval and outperforms naive symmetric encoding in eval." },
        { title: "Streaming answers (Server-Sent Events)", body: "The `/api/v1/stream` endpoint emits SSE events as Ollama produces tokens. Users see metadata (sources, chunks_used, search_mode) instantly, then watch the answer form. TTFT is 2–3 s on cache miss; cached responses still stream chunk-by-chunk so the UX is consistent." },
        { title: "Structured LLM output with Pydantic validation", body: "The `RAGPromptBuilder` can emit a prompt plus a JSON schema (derived from the Pydantic `RAGResponse` model). Ollama returns validated JSON; the `ResponseParser` parses it, with a regex-based fallback that extracts the first `{...}` block if the LLM wraps its output in commentary." },
        { title: "Exact-match Redis caching with SHA-256 keys", body: "The cache key is a 16-character truncation of `SHA-256(json({query, model, top_k, use_hybrid, sorted(categories)}))`. This makes the cache *correct*: changing any of those parameters produces a different key, so stale answers can't leak between configurations. Hit rate sits at 60%+ on realistic traffic; cached responses return in 50–100 ms vs. 15–20 s on miss - a 150–400× speed-up that translates roughly 1:1 to cost reduction." },
        { title: "End-to-end Langfuse observability", body: "Every request emits a trace tree: root span → embedding span → search span (with retrieved chunk IDs and total hits) → prompt-construction span → generation span. Latency, tokens, and errors are captured per node. Regressions stop being mysterious - you can see exactly which chunk was retrieved, what prompt was built, and how long each step took." },
        { title: "Graceful degradation on partial failures", body: "If Jina fails, retrieval falls back to BM25-only and notes it in the trace. If structured-output prompts fail JSON validation, the parser tries regex extraction. If chunking metadata is missing, the chunker falls back to word-windows. The system stays usable when any one subsystem is degraded." },
        { title: "Per-request configurability", body: "`AskRequest` exposes `top_k`, `use_hybrid`, `model`, and `categories` to the client. This lets the same deployment serve cheap-fast queries (BM25-only, top_k=3, smallest model) and high-quality slow queries (hybrid, top_k=10, larger model) without code changes." },
        { title: "One-command reproducibility", body: "`docker compose up --build -d` brings up seven services with health checks, auto-generated credentials, and clean restart semantics. A new contributor goes from `git clone` to working chat in roughly five minutes." }
      ],
      results: [
        { label: "BM25 precision @ 10",    value: "0.67",      hint: "~50 ms latency - fast but conceptually weaker; strong on exact keywords and author names." },
        { label: "BM25 recall @ 10",       value: "0.71",      hint: "Same mode - solid lexical coverage but misses paraphrased queries." },
        { label: "Hybrid precision @ 10",  value: "0.84",      hint: "RRF(BM25, Jina v3 vectors). ~400 ms - substantially better on paraphrased & conceptual queries." },
        { label: "Hybrid recall @ 10",     value: "0.89",      hint: "18 percentage-point improvement over BM25-only recall." },
        { label: "Time to first token",    value: "2–3 s",     hint: "Streaming endpoint, cache miss - when the user first sees the answer forming." },
        { label: "Cached response time",   value: "50–100 ms", hint: "Redis cache hit - vs. 15–20 s end-to-end on cache miss. A 150–400× speed-up." },
        { label: "Cache hit rate",         value: "60%+",      hint: "Representative production-style traffic." },
        { label: "Cost reduction",         value: "60%+",      hint: "From caching alone; roughly 1:1 with hit-rate because cached responses cost nothing to serve." },
        { label: "Prompt-size reduction",  value: "≈80%",      hint: "Iterative prompt-template optimisation vs. v1." },
        { label: "Services orchestrated",  value: "7",         hint: "FastAPI, PostgreSQL, OpenSearch, Airflow, Ollama, Redis, Langfuse - all in compose.yml." },
        { label: "Embedding dimension",    value: "1024",      hint: "Jina v3 - `retrieval.passage` at index, `retrieval.query` at search." },
        { label: "RRF rank constant",      value: "60",        hint: "Standard k=60 in the score-ranker phase-results processor." }
      ],
      apiEndpoints: [
        { method: "GET",  path: "/api/v1/health",          description: "Liveness check for the API; returns status + dependent-service availability." },
        { method: "GET",  path: "/api/v1/papers",          description: "Paginated list of papers currently ingested into PostgreSQL." },
        { method: "GET",  path: "/api/v1/papers/{id}",     description: "Fetch full metadata for a single paper by id." },
        { method: "POST", path: "/api/v1/hybrid-search/",  description: "Raw retrieval - BM25, vector, or hybrid (RRF). Returns ranked chunks with scores, useful for tuning before plugging in an LLM." },
        { method: "POST", path: "/api/v1/ask",             description: "Standard RAG question answering. Embeds query, runs hybrid retrieval, builds prompt, generates an answer + sources." },
        { method: "POST", path: "/api/v1/stream",          description: "Streaming RAG via Server-Sent Events - emits metadata + token chunks the moment they arrive from Ollama. TTFT ≈ 2–3 s on miss." },
      ],
      keyConfig: [
        { key: "ARXIV__SEARCH_CATEGORY",   defaultValue: "cs.AI",                    note: "arXiv category the daily DAG pulls from. Switch to `cs.LG`, `cs.CL`, `stat.ML`, etc." },
        { key: "ARXIV__MAX_RESULTS",       defaultValue: "5",                        note: "Papers to fetch per DAG run. Increase for higher coverage; trades disk + index time." },
        { key: "ARXIV__RATE_LIMIT_DELAY",  defaultValue: "3.0",                      note: "Seconds between arXiv API calls. Respects their stated rate limit." },
        { key: "PDF_PARSER__MAX_PAGES",    defaultValue: "30",                       note: "Pages parsed per PDF. Caps memory + Docling time on long papers." },
        { key: "PDF_PARSER__DO_OCR",       defaultValue: "false",                    note: "Enable OCR fallback for scanned PDFs (slower, more accurate on edge cases)." },
        { key: "CHUNKING__CHUNK_SIZE",     defaultValue: "600",                      note: "Target words per chunk for word-window fallback (section chunker is dynamic)." },
        { key: "CHUNKING__OVERLAP_SIZE",   defaultValue: "100",                      note: "Word overlap between adjacent chunks - preserves boundary context." },
        { key: "CHUNKING__MIN_CHUNK_SIZE", defaultValue: "100",                      note: "Below this, sections get merged with neighbours instead of standing alone." },
        { key: "EMBEDDINGS__MODEL",        defaultValue: "jina-embeddings-v3",       note: "Embedding model. Task is set per-call (`retrieval.passage` / `retrieval.query`)." },
        { key: "EMBEDDINGS__DIMENSIONS",   defaultValue: "1024",                     note: "Vector dimension. Match the model - must equal the OpenSearch `knn_vector` dim." },
        { key: "OPENSEARCH__INDEX_NAME",   defaultValue: "arxiv-papers-chunks",      note: "Chunk-level hybrid index. Schema is `dynamic=strict`." },
        { key: "OLLAMA__DEFAULT_MODEL",    defaultValue: "llama3.2:1b",              note: "Local LLM for generation. Swap to a larger model if you have the RAM." },
        { key: "OLLAMA__MAX_RESPONSE_WORDS", defaultValue: "300",                    note: "Hard cap on answer length to keep latency predictable." },
        { key: "REDIS__CACHE_TTL_HOURS",   defaultValue: "24",                       note: "How long cached responses stick around before expiring." },
        { key: "LANGFUSE__FLUSH_INTERVAL", defaultValue: "1.0",                      note: "Seconds - how often the Langfuse client flushes buffered spans to the server." },
      ],
      techStackDetailed: [
        { name: "FastAPI 0.115+",  why: "Async Python framework - perfect for streaming LLM responses (SSE), high-concurrency I/O, and async DB / search clients. Auto-generated OpenAPI docs at /docs come for free, which the team uses for both interactive testing and contract documentation." },
        { name: "PostgreSQL 16",   why: "Paper metadata store (title, authors, abstract, arxiv_id, ingestion timestamp). Strong choice for transactional ingestion: an Airflow task can insert papers atomically and the DAG can roll back cleanly on partial failure." },
        { name: "OpenSearch 2.19", why: "Open-source Apache-licensed Elasticsearch fork. Native BM25 plus k-NN vector search in one engine means no second store, no consistency dance between two systems. Comes with OpenSearch Dashboards for ad-hoc index inspection and query debugging." },
        { name: "Apache Airflow 3.0", why: "Industry-standard workflow orchestration with DAG-level scheduling, automatic retries, backfills, and a web UI per run. Far better than cron + bash when you need to re-run a partial pipeline or replay one specific task with a parameter change." },
        { name: "Ollama 0.11.2",   why: "Local LLM serving - runs `llama3.2:1b` (or any larger model you have RAM for) inside a Docker container. Zero per-token API cost during dev, no data leaving the host, and the OpenAI-compatible API means it's easy to swap to a hosted provider later if needed." },
        { name: "Redis 7",         why: "Microsecond-latency cache for RAG responses. Single biggest performance optimisation in the system: 150–400× speed-up on hit, 60%+ hit rate in practice, and SHA-256-derived keys keep the cache correct across configuration changes." },
        { name: "Langfuse 2",      why: "LLM-native observability - open-source, self-hosted, designed for traces with embedding / search / prompt / generation spans. Built-in cost and latency views, plus the ability to replay a request with the same prompt + model for regression debugging." },
        { name: "Jina AI Embeddings v3", why: "High-quality embeddings via a managed API. Crucially, supports distinct `retrieval.passage` and `retrieval.query` tasks - asymmetric encoding tuned specifically for RAG. 1024-dim output matches the OpenSearch `knn_vector` field exactly." },
        { name: "Docling",         why: "PDF → structured Markdown/JSON. Preserves section headings, abstract, body structure, equations, tables - far better than PyMuPDF or pdfplumber for academic papers because those output flat text and you lose all the structural cues the chunker needs." },
        { name: "Gradio",          why: "Single-file Python chat UI for demos and human eval. Frontend-free path to a usable interface - useful for showing stakeholders the system works without building a full SPA." },
        { name: "Docker Compose",  why: "One YAML defines all seven services + the network + health checks + volumes. One command brings the whole stack up; one command tears it down. Reproducibility on a new machine is roughly five minutes." },
        { name: "HNSW (nmslib)",   why: "Approximate nearest-neighbour algorithm used for the vector index. m=16, ef_construction=512 - tuned for high recall during indexing (slower batch is fine) and fast search (faster query is the goal)." },
        { name: "Reciprocal Rank Fusion", why: "The score-fusion technique that combines BM25 and dense rankings. Operates on ranks, not raw scores, so it's robust to the scale mismatch between BM25 and cosine similarity. rank_constant=60 is the conventional choice." },
        { name: "UV + Ruff + MyPy", why: "Modern Python toolchain - UV for fast dependency resolution, Ruff for formatting + linting, MyPy for static types. The repo is CI-ready: tests, lint, type-check, build, and run in pytest one command." },
        { name: "Pydantic v2",     why: "Request / response schemas, configuration loading from `.env`, and structured-output JSON-schema generation for Ollama all flow through Pydantic. Validation is enforced at API boundaries and at LLM-output parsing." },
      ],
      challenges: [
        { title: "Hybrid retrieval - score fusion, not score weighting", body: "BM25 scores are unbounded log-likelihoods; cosine similarity is bounded [-1, 1]. Weighted-sum fusion of these is fragile - a small change in either retriever can flip the dominant signal. Reciprocal Rank Fusion (rank_constant=60) operates on ranks instead of raw scores, so it's invariant to score-distribution shifts. Picking this over a simple weighted average was the single biggest robustness win in retrieval." },
        { title: "Chunking academic papers without losing structure", body: "Naive 600-token windows cut equations and tables in half and destroyed section context - retrieval started returning fragments that were ungrounded outside their original section. The hybrid `TextChunker` uses section-based chunking when Docling metadata is present (100–800 word sections become one chunk, smaller sections merge, larger sections split with overlap), and falls back to traditional word-window chunking when the structure isn't available. Retrieval precision on conceptual queries improved noticeably." },
        { title: "Prompt size and cold-start latency", body: "Early prompt templates were ~5× larger than necessary - long instructions, redundant examples, verbose chunk framing. TTFT was painful. Iterating the template (dropping unused fields, switching to compact `[N. arXiv:<id>]` citation format, capping context to top_k=3 chunks) cut prompt size by roughly 80% without hurting answer quality, dropping TTFT from ~8 s to 2–3 s." },
        { title: "Structured output that survives flaky LLMs", body: "Asking a small LLM to emit JSON is asking for trouble - even with Ollama's `format` parameter, the model occasionally wrapped output in commentary or produced subtly invalid JSON. The `ResponseParser` first tries strict JSON parse + Pydantic validation, then falls back to extracting the first `{...}` block via regex and re-validating. Both endpoints (`/ask`, `/stream`) work whether or not structured output succeeds - the system never crashes on a malformed LLM response." },
        { title: "Caching correctness across configurations", body: "A naive `cache[query] = answer` cache silently returns wrong answers when `top_k` or `categories` change. The fix: cache key is SHA-256 over `{query, model, top_k, use_hybrid, sorted(categories)}`, truncated to 16 hex chars. This makes the cache *correct* under any configuration drift - two requests with different filters produce different keys, so they can never collide." },
        { title: "Resource footprint of the dev stack", body: "Seven services + a local LLM is heavy on a laptop. The defaults are tuned for 8 GB RAM machines: `llama3.2:1b` (not a 7B+ model), capped Airflow workers, `ARXIV__MAX_RESULTS=5`, `PDF_PARSER__MAX_PAGES=30`. Switching to a beefier model is a one-line `.env` change once you have the hardware." },
        { title: "Observability without instrumentation drift", body: "Wrapping every step in Langfuse spans had to be done carefully - too verbose and traces become noise; too sparse and you can't debug a regression. The `RAGTracer` service centralises this (`trace_embedding`, `trace_search`, `trace_prompt_construction`, `trace_generation`), so the API handlers stay readable and tracing is consistent everywhere. Adding a new step is one wrapper call." },
        { title: "Graceful degradation when embeddings fail", body: "Jina's API can hiccup. Instead of failing the whole request, the system falls back to BM25-only retrieval, marks `use_hybrid=False` in the trace, and serves the answer anyway. The user sees a result; the trace tells me embeddings were unavailable so I can investigate without alarms firing." },
        { title: "Schema drift on the OpenSearch index", body: "`dynamic=strict` on the index mapping means any unexpected field in a chunk document raises an error instead of silently introducing a new mapping. This caught a couple of subtle schema-evolution bugs during development and saved a re-index later." }
      ]
    }
  },
  {
    slug: "imdb-mlops",
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
    },
    detail: {
      summary: "An end-to-end MLOps pipeline for IMDB sentiment analysis: DVC reproducible pipeline stages (ingest -> preprocess -> features -> train -> evaluate -> register), MLflow experiment tracking + model registry on DAGSHub, GitHub Actions CI/CD that builds a Docker image and pushes it to AWS ECR, Kubernetes deployment to AWS EKS, and Prometheus + Grafana observability tracking latency, cost-per-request, and prediction distribution in production.",
      hero: {
        image: {
          src: "/images/projects/imdb-mlops/architecture.png",
          alt: "IMDB MLOps pipeline architecture",
          caption: "End-to-end MLOps pipeline across four lanes: Development (DVC + MLflow), CI/CD (GitHub Actions), Deployment (Docker + ECR + EKS), and Observability (Prometheus + Grafana)."
        }
      },
      overview: [
        "**IMDB Sentiment MLOps** is a complete, production-grade MLOps pipeline built around a deliberately simple model (logistic regression over TF-IDF features) so that the engineering around the model can take centre stage. The goal isn't to win an accuracy leaderboard. The goal is to demonstrate every loop that has to be closed before you can claim a model is in *production*: data versioning, reproducible training, experiment tracking, model promotion, containerisation, registry push, Kubernetes rollout, autoscaling, request-level metrics, dashboarding, and a clean continuous-training trigger.",
        "Every concern lives in its own tool with a clear contract. **DVC** versions the data and stitches the six training stages into a DAG (`dvc.yaml`) so `dvc repro` always produces the same model from the same inputs. **MLflow** (hosted on DAGSHub) records every training run with parameters, metrics, and artefacts, and serves as the registry where models get promoted from Staging to Production. **GitHub Actions** runs the pipeline on every push, executes unit tests, promotes the model, builds a Docker image, pushes it to **AWS ECR**, and applies a new manifest to **AWS EKS** with `kubectl`. The Flask app on EKS exposes a `/predict` endpoint backed by **Gunicorn** workers, plus a `/metrics` endpoint that **Prometheus** scrapes and **Grafana** visualises.",
        "What makes this more than a tutorial is the discipline at every layer. The pipeline is parameterised via `params.yaml` so a hyperparameter sweep is one commit away. Data, intermediate artefacts, and models are all tracked by DVC and stored in **AWS S3** as a remote cache, so CI can pull exactly what it needs and the repo stays small. The Flask app emits custom Prometheus metrics for *every* request (count, latency, prediction class, cost per inference, total cumulative cost) so cost and quality regressions surface in seconds, not days. And the CI/CD pipeline is non-trivial: 12 ordered steps with secrets, image tagging, ECR auth, and a rolling Kubernetes restart at the end.",
        "It's also a working template. Swap the IMDB dataset for any text-classification corpus, adjust the TF-IDF / LogReg parameters in `params.yaml`, and the entire pipeline - versioning, training, evaluation, registry, CI, build, deploy, monitor - runs unchanged. The same shape works for binary classifiers, multi-class classifiers, and (with minor tweaks to the feature stage) regression tasks. The investment in MLOps plumbing pays off as soon as you have a *second* model to ship."
      ],
      problem: [
        "A Jupyter notebook with 85% accuracy is the easy part. The hard part is everything that has to be true before that 85% can be served reliably to real users: the data has to be reproducible, training has to be deterministic, every experiment has to be tracked so you can compare runs, the model has to be promoted through Staging -> Production with a paper trail, the inference service has to be containerised, the container has to be built and pushed to a registry on every commit, the rollout has to be zero-downtime, and the live service has to emit enough telemetry that you can debug a latency regression at 3am.",
        "Most ML projects skip three or four of those steps and end up with a 'production' model that nobody can rebuild from source. This project is an attempt to *not skip any of them* - to show what a credible end-to-end ML system looks like, with reproducibility, traceability, observability, and rollback baked in, deployed to a real cloud Kubernetes cluster rather than a single-machine Flask demo. The model itself is intentionally simple so the engineering scaffolding is the focal point."
      ],
      dataFlow: [
        "**Developer pushes to main** - a commit lands on the GitHub repository. GitHub Actions immediately picks up the push (`on: push` trigger in `ci.yaml`) and spins up an `ubuntu-latest` runner with Python 3.10.",
        "**CI installs dependencies** - pip dependencies are restored from a cache keyed on `hashFiles('requirements.txt')` to keep build minutes down. NLTK assets (`stopwords`, `wordnet`) are downloaded as a one-off setup step.",
        "**DVC reproduces the pipeline** - the runner runs `dvc repro`, which walks the DAG in `dvc.yaml` and executes the six stages in order: `data_ingestion` -> `data_preprocessing` -> `feature_engineering` -> `model_building` -> `model_evaluation` -> `model_registration`. Each stage declares its dependencies, parameters, outputs, and metrics so DVC can skip unchanged stages on subsequent runs.",
        "**Data ingestion** - the IMDB raw dataset is pulled, split into train/test using `data_ingestion.test_size=0.20`, and written to `data/raw/`. The output is tracked by DVC and cached.",
        "**Preprocessing** - text is lower-cased, stopwords removed (NLTK), tokens lemmatised (WordNet), and HTML markup stripped. Cleaned splits land in `data/interim/`.",
        "**Feature engineering** - a `TfidfVectorizer` with `max_features=20000`, `ngram_range=(1,3)`, `min_df=1`, `max_df=1.0`, `sublinear_tf=True` is fit on the training split. The vectoriser is pickled to `models/vectorizer.pkl` and the transformed features land in `data/processed/`.",
        "**Model training** - a `LogisticRegression(C=10, penalty='l2', solver='lbfgs', max_iter=1000)` is fit on the processed features and saved to `models/model.pkl`. Hyperparameters are logged to MLflow via the DAGSHub backend.",
        "**Evaluation** - the test split is scored and accuracy / precision / recall / AUC are written to `reports/metrics.json` plus an `experiment_info.json` describing the run, which DVC tracks as a metric file.",
        "**Model registration** - the trained model is registered in MLflow as a new version under the `imdb_sentiment` registered-model name. The run id, version, and metrics URL all flow into the run summary so they're greppable later.",
        "**Tests and promotion** - the CI runner executes `tests/test_model.py` (sanity tests on the model: schema, sentinel predictions, accuracy floor) and `tests/test_flask_app.py` (HTTP-level tests against the Flask app). On success, `scripts/promote_model.py` transitions the newly registered version from Staging to Production in the MLflow registry.",
        "**Build & push the image** - the runner authenticates to AWS using GitHub Secrets (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_ACCOUNT_ID`, `AWS_REGION`), builds the Docker image from `Dockerfile` (containing the Flask app + model.pkl + vectoriser), tags it, and pushes to AWS ECR.",
        "**Deploy to EKS** - the runner sets up `kubectl` (`azure/setup-kubectl@v3`), points it at the EKS cluster, and runs `kubectl apply -f deployment.yaml` followed by `kubectl rollout restart deployment/flask-app` to force a rolling pull of the new image.",
        "**Serving** - on EKS, three `Flask app (Gunicorn)` pods serve `/` (HTML UI) and `/predict` (JSON inference). A `LoadBalancer` service exposes them to the public internet on port 5005.",
        "**Telemetry** - every request hits Prometheus instrumentation: counters for request count by `(method, endpoint)`, histograms for latency by endpoint, counters for predictions by class, gauges for cost-per-request and total cumulative cost in USD. Prometheus scrapes `/metrics` on a fixed interval; Grafana renders P95 latency, request rate, prediction distribution, and accumulated spend on a dashboard."
      ],
      architecture: [
        "**DVC pipeline (`dvc.yaml`)** - declares the six-stage DAG with explicit deps, params, outs, and metrics. Outputs are content-addressed in the DVC cache so reruns are O(1) when inputs haven't changed. Parameters are loaded from `params.yaml`, so a hyperparameter change is a single-file edit that DVC detects as an invalidation.",
        "**Data layout** - `data/raw/` (after ingestion), `data/interim/` (after preprocessing), `data/processed/` (after feature engineering). None of these are git-tracked; all are DVC-tracked and pushed to S3 on `dvc push`.",
        "**Parameters (`params.yaml`)** - `data_ingestion.test_size=0.20`, `feature_engineering.max_features=20000`, `feature_engineering.ngram_range=[1,3]`, `feature_engineering.sublinear_tf=true`, `model_building.C=10`, `model_building.penalty='l2'`, `model_building.solver='lbfgs'`, `model_building.max_iter=1000`. Modify and `dvc repro` to retrain.",
        "**Feature engineering** - `TfidfVectorizer` with unigrams through trigrams. `max_features=20000` keeps the vocabulary tractable; `sublinear_tf=True` applies a `1 + log(tf)` damping that improves performance on long reviews where term frequency saturates. The fitted vectoriser is pickled so the Flask app uses *exactly* the same vocabulary at inference time.",
        "**Model** - logistic regression with L2 regularisation (`C=10`) and the `lbfgs` solver, capped at 1000 iterations. Linear models are fast, interpretable, easy to ship, and remarkably competitive on TF-IDF features for this task.",
        "**MLflow tracking** - hosted on **DAGSHub** at `dagshub.com/Vinayakmane47/imdb_mlops.mlflow`. Every `dvc repro` logs a fresh run with hyperparameters, metrics, the vectoriser + model artefacts, and a run name keyed off the git commit.",
        "**MLflow model registry** - the `imdb_sentiment` registered model holds every version. New versions land in `Staging`; `scripts/promote_model.py` transitions them to `Production` only when CI tests pass.",
        "**S3 as DVC remote** - all training data, intermediates, and model artefacts are cached in an S3 bucket. CI does `dvc pull` if it needs to read cached outputs; otherwise `dvc repro` rebuilds from scratch.",
        "**Dockerfile** - based on a slim Python 3.10 image, installs `requirements.txt` + `flask_app/requirements.txt`, copies the Flask app + the pickled vectoriser + the (latest production) model, and runs Gunicorn bound to port 5005.",
        "**GitHub Actions workflow (`ci.yaml`)** - a single `project-testing` job with 12 ordered steps: checkout, setup Python, pip cache, install deps, `dvc repro`, model tests, promote model, Flask-app tests, AWS ECR auth, build image, tag image, push to ECR, set up kubectl, apply deployment, rollout restart.",
        "**Secrets** - `DAGSHUB_TOKEN`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_ACCOUNT_ID`, `AWS_REGION`, `ECR_REPOSITORY`, plus K8s-side secrets (e.g. DAGSHUB_TOKEN as a Kubernetes secret if the running pod needs to talk to MLflow). All managed via GitHub Secrets and IAM roles - never committed.",
        "**AWS ECR** - the container registry the CI pushes to. Tagged `:latest` per build plus a commit-SHA tag for traceability.",
        "**Kubernetes deployment (`deployment.yaml`)** - 3 Flask-app pods behind a `Service` of `type: LoadBalancer`. Pods pull the `:latest` image from ECR; `kubectl rollout restart` after each CI run forces a fresh pull. Liveness and readiness probes hit `/` and `/health` respectively.",
        "**Flask app (`flask_app/app.py`)** - two real endpoints (`/` for the HTML UI, `/predict` for JSON inference), plus `/metrics` for Prometheus scraping. Wrapped with `prometheus_client` instrumentation that emits counters, histograms, and gauges with method + endpoint labels.",
        "**Prometheus** - scrapes `flask-app-service:5005/metrics` on a fixed interval. Metrics include `app_request_count`, `app_request_latency_seconds`, `model_prediction_count`, `app_cost_per_request_usd`, and `app_total_cost_usd`.",
        "**Grafana** - dashboards subscribe to those Prometheus series. The production view shows P95 latency on `/predict`, request rate by endpoint, prediction class distribution over time, cost per request, and cumulative spend in USD."
      ],
      features: [
        { title: "Reproducible DVC pipeline", body: "Six stages declared in `dvc.yaml` with deps, params, outs, and metrics. `dvc repro` is deterministic - same inputs produce identical models, and unchanged stages are skipped on subsequent runs. Data, intermediate artefacts, and trained models are versioned by DVC and stored in S3, not in Git." },
        { title: "Parameterised training via `params.yaml`", body: "Every knob that shapes the model lives in one YAML file: train/test split, TF-IDF max_features and ngram_range, logistic-regression `C`, solver, and max_iter. DVC detects parameter changes as invalidations, so a single-line edit triggers exactly the stages that depend on it." },
        { title: "Experiment tracking on DAGSHub MLflow", body: "Every training run logs parameters, metrics (accuracy, precision, recall, AUC), and artefacts (vectoriser + model) to a managed MLflow server on DAGSHub. Runs are linkable, comparable, and serve as the source of truth for model lineage." },
        { title: "Promotion gate from Staging -> Production", body: "Newly registered models land in Staging. `scripts/promote_model.py` only transitions them to Production after the CI-side tests (`test_model.py`, `test_flask_app.py`) pass. The production tag is what downstream consumers (the Docker build) reference." },
        { title: "End-to-end GitHub Actions CI/CD", body: "A single workflow on `push`: install -> `dvc repro` -> tests -> promote -> Docker build -> ECR push -> kubectl apply -> rolling restart. No manual steps between a commit landing and a new version serving traffic on EKS." },
        { title: "Kubernetes deployment on AWS EKS", body: "Three Flask-app pods behind a LoadBalancer Service. Health checks, declarative manifests in `deployment.yaml`, and rolling restarts via `kubectl rollout restart` give zero-downtime updates. Pods are stateless so horizontal scaling is one `kubectl scale` away." },
        { title: "Per-request Prometheus metrics", body: "The Flask app emits counters for request count and prediction class, histograms for latency, and gauges for cost-per-request and total cumulative cost on every request. Custom labels by method and endpoint mean the dashboards can slice by route at zero runtime cost." },
        { title: "Grafana dashboards out of the box", body: "Prometheus is scraped on a fixed interval and Grafana renders five core views: P95 latency, request rate by endpoint, prediction distribution, cost per request, and cumulative spend. Cost is computed live as a Prometheus expression and shown next to latency so quality and economics stay in the same view." },
        { title: "Cost-attributed inference", body: "Every prediction increments `app_cost_per_request_usd` and `app_total_cost_usd`. At observed traffic, cost-per-request sits at roughly $0.00004 USD - small in absolute terms but exactly the kind of number you want measured before traffic 100x's." },
        { title: "Data layer separated from code", body: "Code lives in Git; data, intermediates, and trained models live in DVC + S3. The repo stays small, contributors clone fast, and CI can pull only what it needs. `dvc pull` and `dvc push` are the only data-side commands a contributor ever needs." }
      ],
      results: [
        { label: "Accuracy",                value: "0.85",       hint: "On the held-out IMDB test split. Logistic regression on TF-IDF (1-3 grams)." },
        { label: "Precision",               value: "0.84",       hint: "Test-split precision logged to MLflow + reports/metrics.json." },
        { label: "Recall",                  value: "0.86",       hint: "Test-split recall." },
        { label: "AUC",                     value: "0.92",       hint: "Area under the ROC curve - the discrimination signal that drives the dashboard quality view." },
        { label: "Average inference latency", value: "~0.5s",    hint: "Observed mean latency on /predict; spikes to ~3.5s under load." },
        { label: "P95 latency",             value: "3-4.5s",     hint: "/predict P95 in production. Stabilises around 4.5s under sustained load." },
        { label: "Cost per request",        value: "$0.00004",   hint: "Live Prometheus metric (`app_cost_per_request_usd`). Periodic spikes during burst traffic." },
        { label: "Request rate",            value: "0-0.2 RPS",  hint: "Variable production traffic pattern - low average, occasional bursts." },
        { label: "DVC pipeline stages",     value: "6",          hint: "ingest -> preprocess -> features -> train -> evaluate -> register, all declared in dvc.yaml." },
        { label: "CI/CD steps",             value: "12",         hint: "From `git push` to live pods on EKS in a single GitHub Actions workflow." },
        { label: "TF-IDF features",         value: "20,000",     hint: "max_features cap; unigrams through trigrams; sublinear_tf damping." },
        { label: "EKS pods",                value: "3",          hint: "Replica count for the Flask app behind the LoadBalancer Service." }
      ],
      apiEndpoints: [
        { method: "GET",  path: "/",         description: "HTML UI - a simple form to paste a review and view the predicted sentiment." },
        { method: "POST", path: "/predict",  description: "JSON inference endpoint. Accepts a review payload, vectorises with the bundled TF-IDF, runs LogReg, returns the predicted class + probability." },
        { method: "GET",  path: "/metrics",  description: "Prometheus exposition endpoint. Returns text-format counters, histograms, and gauges for every instrumented signal." },
        { method: "GET",  path: "/health",   description: "Kubernetes readiness probe target. Returns 200 when the model + vectoriser are loaded and the app is ready to serve traffic." },
      ],
      keyConfig: [
        { key: "data_ingestion.test_size",            defaultValue: "0.20",            note: "Train/test split ratio used at the data_ingestion stage." },
        { key: "feature_engineering.max_features",    defaultValue: "20000",           note: "Vocabulary cap for the TF-IDF vectoriser. Raises memory + model size if increased." },
        { key: "feature_engineering.ngram_range",     defaultValue: "[1, 3]",          note: "Captures unigrams through trigrams. Trigrams help on sentiment phrases like 'not very good'." },
        { key: "feature_engineering.sublinear_tf",    defaultValue: "true",            note: "Applies 1 + log(tf) damping so long reviews don't drown short ones." },
        { key: "feature_engineering.min_df",          defaultValue: "1",               note: "Min document frequency for a term to be included in the vocabulary." },
        { key: "feature_engineering.max_df",          defaultValue: "1.0",             note: "Max document frequency. Lower this to drop near-stopwords automatically." },
        { key: "model_building.C",                    defaultValue: "10",              note: "Inverse regularisation strength for logistic regression. Lower = stronger L2 penalty." },
        { key: "model_building.penalty",              defaultValue: "l2",              note: "L2 regularisation - works well with the lbfgs solver and bounded coefficients." },
        { key: "model_building.solver",               defaultValue: "lbfgs",           note: "Optimisation solver. lbfgs is the safe default for L2 + binary logistic regression." },
        { key: "model_building.max_iter",             defaultValue: "1000",            note: "Iteration cap for the optimiser. Set high to avoid 'failed to converge' warnings on TF-IDF features." },
        { key: "MLFLOW_TRACKING_URI",                 defaultValue: "DAGSHub MLflow",  note: "Hosted MLflow backend - dagshub.com/Vinayakmane47/imdb_mlops.mlflow." },
        { key: "AWS_REGION",                          defaultValue: "us-east-1",       note: "Region for ECR + EKS. Set via GitHub Secrets, not committed." },
      ],
      techStackDetailed: [
        { name: "Python 3.10",        why: "Stable, widely-supported runtime; matches the CI runner and the Docker base image so behaviour is identical locally and in production." },
        { name: "Scikit-learn",       why: "Battle-tested implementations of TF-IDF and logistic regression. The model is intentionally simple so the MLOps scaffolding can be the focal point." },
        { name: "Flask + Gunicorn",   why: "Minimal Python WSGI app behind a production-grade WSGI server. Trivial to package, scale, and instrument with Prometheus." },
        { name: "DVC",                why: "Versions data + models the way Git versions code, with the heavy artefacts stored in S3. The DAG in `dvc.yaml` makes the training pipeline first-class and reproducible." },
        { name: "MLflow + DAGSHub",   why: "Tracks every training run, hosts the model registry, and stages promotions from Staging -> Production. DAGSHub provides hosted MLflow plus Git-friendly browsing of DVC-tracked data." },
        { name: "GitHub Actions",     why: "Native CI for a GitHub repo. Free runners, secrets management, matrix builds, and a clean DAG of ordered steps - perfect fit for a 12-step pipeline that ends in a Kubernetes deploy." },
        { name: "Docker",             why: "Repeatable container image with Flask + Gunicorn + the pickled vectoriser + the production model. The same image runs locally, in CI, and in EKS." },
        { name: "AWS ECR",            why: "Private container registry tightly integrated with AWS IAM and EKS. The CI workflow authenticates with short-lived credentials and pushes a new tag per build." },
        { name: "AWS EKS",            why: "Managed Kubernetes. Three pods behind a LoadBalancer Service give zero-downtime rolling updates, horizontal scaling, and self-healing - without operating the control plane." },
        { name: "AWS S3",             why: "DVC remote cache. Cheap, durable, region-replicated storage for raw data, intermediate artefacts, and serialised models. CI pulls only what each stage needs." },
        { name: "Prometheus",         why: "Pull-based metrics scraper that turns the Flask app's `/metrics` endpoint into a time-series database of request rates, latency histograms, prediction counts, and cost." },
        { name: "Grafana",            why: "Visualisation for the Prometheus series - P95 latency, request rate, prediction distribution, cost per request, and cumulative spend rendered side by side." },
        { name: "kubectl + setup-kubectl@v3", why: "The CI runner uses the official action to wire up `kubectl`, then `apply -f deployment.yaml` and `rollout restart deployment/flask-app` to push the new image into the cluster." },
        { name: "GitHub Secrets",     why: "All credentials (DAGSHub token, AWS keys, account id, region, ECR repo) live in repo secrets. The workflow injects them into env vars per step - never on disk in the repo." },
      ],
      challenges: [
        { title: "Closing every MLOps loop, not just the model one", body: "It's tempting to stop at 'I trained a model and pickled it.' The full loop includes data versioning, experiment tracking, model registry, promotion gates, containerisation, CI/CD, deployment, autoscaling, and observability. Each one is straightforward in isolation; the integration is what takes time. Treating each concern as a separate tool with a clean contract (DVC for data, MLflow for tracking, GH Actions for CI, ECR for registry, EKS for runtime, Prometheus for metrics) kept the system understandable as it grew." },
        { title: "Latency spikes under sustained load", body: "Average latency on /predict is ~0.5s but P95 climbs to 3-4.5s under load. The bottleneck is the TF-IDF transform on a single review - Python-side, single-threaded. Mitigations explored: pre-loading the vectoriser into shared memory across Gunicorn workers, increasing worker count to absorb burst traffic, and caching identical requests at the Flask layer. Documented as a known trade-off; a Cython/Rust vectoriser is the obvious next step if traffic justifies it." },
        { title: "Cost-attribution on every request", body: "Tracking dollars per inference seems excessive at $0.00004/request - until traffic 100x's and you need to defend the bill. Emitting `app_cost_per_request_usd` and `app_total_cost_usd` as Prometheus gauges from day one means cost regressions are visible the moment they happen, not on the AWS bill at month-end." },
        { title: "Promotion gate that doesn't lie", body: "A Staging -> Production transition that 'just promotes the latest run' is a footgun. `scripts/promote_model.py` only promotes after `test_model.py` and `test_flask_app.py` pass on the same commit. The downstream Docker build references the Production-tagged model specifically, so a failing test physically cannot land in EKS." },
        { title: "Keeping the repo small with DVC", body: "Without DVC the IMDB dataset, intermediate features, and model artefacts would balloon the Git history into something nobody wants to clone. Tracking them in DVC + S3 keeps Git clean and lets CI pull exactly the artefacts each stage needs - much faster than rebuilding from scratch on every run, and unchanged stages are skipped entirely thanks to DVC's content-addressed cache." },
        { title: "Reproducibility across runner, local, and EKS", body: "Three different environments need to agree on Python version, dependencies, NLTK assets, and pickled vectoriser format. The Dockerfile + pinned `requirements.txt` + the same `nltk.download('stopwords', 'wordnet')` step locally and in CI made this boring. 'Works on my machine' isn't a debugging strategy when the production environment is the only environment that matters." },
        { title: "Zero-downtime rollouts on EKS", body: "Naive `kubectl set image` updates risk dropping in-flight requests. The deployment uses readiness probes on `/health` plus `kubectl rollout restart` so Kubernetes drains pods cleanly: new pods come up, pass health checks, and start receiving traffic before old pods are terminated. The rollout is one CI step and observably zero-downtime in practice." },
        { title: "Observability without instrumentation drift", body: "Sprinkling `time.time()` calls around handlers is the wrong shape. The Flask app uses `prometheus_client` with a single registry that emits labelled counters, histograms, and gauges. Adding a new metric is one line in the handler and one panel in Grafana - which keeps observability close to the code it measures." }
      ]
    }
  },
  {
    slug: "nasa-turbofan",
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
    },
    detail: {
      summary: "A predictive-maintenance system that estimates Remaining Useful Life (RUL) for turbofan engines using the NASA CMAPSS dataset. Six pipeline components run in sequence (ingestion, validation, transformation, model trainer, evaluation, pusher), the best regressor by RMSE is promoted, the chosen model is bundled into a Flask app, and the container is built and pushed by GitHub Actions to AWS Elastic Beanstalk and Heroku.",
      hero: {
        image: {
          src: "/images/projects/nasa-turbofan/architecture.png",
          alt: "NASA Turbofan RUL prediction architecture",
          caption: "Four lanes: Data (CMAPSS), Modeling (compare regressors, keep best by RMSE), CI/CD (GitHub Actions builds and pushes a Docker image), and Deployment (Docker Hub to AWS Elastic Beanstalk, Heroku, and a local Flask UI)."
        }
      },
      highlights: [
        { title: "End-to-end pipeline, six components", body: "Ingestion, validation, transformation, trainer, evaluation, pusher. Each component has its own config block in `config.yaml` and emits a typed Artifact for the next stage to consume." },
        { title: "Model search, best by RMSE",         body: "The trainer runs several regression families on the same prepared features and keeps the one with the lowest test RMSE. The selected model is the one the evaluator and pusher promote." },
        { title: "CI/CD with Docker and AWS",          body: "A GitHub Actions workflow runs the test suite, builds a Docker image, pushes it to Docker Hub, and triggers deploys on AWS Elastic Beanstalk and Heroku." },
        { title: "Flask UI for the demo",              body: "A Flask app exposes `/predict`, `/train`, an artifact browser, and a log viewer. Anyone can drop in a 24-cycle window and get an RUL estimate back." }
      ],
      paperSections: [
        {
          heading: "Dataset (NASA CMAPSS)",
          body: "Turbofan engines are central to commercial aviation, and roughly 60% of aircraft faults are turbofan related. The CMAPSS dataset is a public NASA benchmark of simulated run-to-failure cycles for fleets of turbofan engines. Each engine starts in a normal state with a small amount of unobserved manufacturing variation, develops a fault at some point in the run, and the fault grows until system failure. The training set runs to failure; the test set ends some time before failure and is accompanied by a ground-truth RUL vector.",
          bullets: [
            "Each row carries an engine unit number, a cycle counter, three operational settings, and 21 sensor readings.",
            "Four sub-datasets (FD001 to FD004) vary in operating conditions and fault modes, which makes a single global model harder than it looks.",
            "Sensor readings include core speeds, gas-path temperatures, pressures, and fan bleeds. Most carry noise; a meaningful subset of them carry the degradation signal."
          ]
        },
        {
          heading: "Problem formulation",
          body: "RUL is the number of cycles an engine has left before it fails, framed as a regression problem. Given a window of recent telemetry, the model has to output a non-negative integer (clipped at a sensible upper bound for engines that are nowhere near failure yet). The challenge is twofold: the signal-to-noise ratio is poor early in the lifecycle, and the relationship between sensors and remaining life is non-linear and conditional on operating regime."
        },
        {
          heading: "Method",
          body: "The training stage tries several regression families on the same engineered feature set and keeps the one that minimises test RMSE. Feature engineering operates over a sliding window of cycles: per-sensor rolling means and deltas, operational-setting one-hots (which cluster the regimes), and a derived 'degradation index' that summarises trend behaviour across the most informative sensors.",
          bullets: [
            "Component classes (`DataIngestion`, `DataValidation`, `DataTransformation`, `ModelTrainer`, `ModelEvaluation`, `ModelPusher`) are wired together by a `Pipeline` that runs as its own daemon thread.",
            "Each component emits a typed Artifact (`DataIngestionArtifact`, `DataValidationArtifact`, ...) that the next stage consumes, so there is no implicit shared state between stages.",
            "Trained models are pickled to `saved_models/<timestamp>/model.pkl`. The pusher only writes a model into the canonical path if it beats the previous champion."
          ]
        },
        {
          heading: "Evaluation and quality gate",
          body: "The evaluator loads the new model and the current champion (if one exists) and scores both on the held-out test split. The new model wins on RMSE or it does not get pushed. Accuracy, an aggregate quality flag, and the experiment artifacts are tracked alongside RUL predictions so the registry has a paper trail."
        },
        {
          heading: "Deployment",
          body: "The pickled model is bundled into a Flask app (`app.py`) that serves `/predict` plus an artifact browser and log viewer. CI builds a Docker image, pushes it to Docker Hub, and triggers two deployment targets: AWS Elastic Beanstalk for the container, and Heroku for a public demo URL (the Heroku free tier was decommissioned, hence the documented YouTube walkthrough as the public artefact).",
          bullets: [
            "`Dockerfile` is built from a slim Python base, copies the Flask app and the saved model, exposes port 5000, and runs the app.",
            "Local `python app.py` brings up the UI on `localhost:5000`, which is exactly the same container code that ships to production.",
            "The repo carries `setup.py` so the project is importable as a regular Python package, which simplifies the imports inside the pipeline components."
          ]
        }
      ],
      features: [
        { title: "Component-class pipeline", body: "`DataIngestion`, `DataValidation`, `DataTransformation`, `ModelTrainer`, `ModelEvaluation`, `ModelPusher` are each their own class with `initiate_*` methods. `Pipeline` wires them together as a daemon thread so a long training run does not block the Flask request loop." },
        { title: "Typed Artifacts at every boundary", body: "Each component returns a NamedTuple-style artifact (paths to files plus metadata) that the next stage takes as input. No globals, no shared mutable state." },
        { title: "Config-driven training",   body: "`config/config.yaml`, `config/model.yaml`, and `config/schema.yaml` parameterise the data paths, model search space, and feature schema. Re-running with different hyperparameters means editing YAML, not Python." },
        { title: "Best-by-RMSE auto-promotion", body: "`ModelEvaluation` compares the new model against the current `saved_models/<latest>/model.pkl`. Only the winner is pushed; the previous champion is preserved on disk for rollback." },
        { title: "Logged experiments + artifact browser", body: "Flask routes expose the `Turbofan/` artifact directory and the rolling `Turbofan_logs/` folder so every training run is inspectable from the running UI." },
        { title: "CI/CD via GitHub Actions",  body: "`.github/workflows/main.yaml` runs the test suite, builds the Docker image, and pushes it to Docker Hub. Cloud deploys (Elastic Beanstalk, Heroku) follow the registry push." },
        { title: "Reproducible Docker image", body: "`Dockerfile` + `requirements.txt` produce the same container on a laptop, in CI, and on the cloud target. `setup.py` makes the Turbofan package importable everywhere identically." },
        { title: "Custom exceptions and logger", body: "`TurboException` adds traceback context and the line that raised; `Turbofan.logger` writes per-run log files that the UI then renders." }
      ],
      challenges: [
        { title: "Multi-regime data",         body: "FD003 and FD004 in CMAPSS run across multiple operating regimes. The transformer one-hots the operating-setting clusters before computing rolling features, which lets the regressor learn one mapping per regime instead of a noisy global one." },
        { title: "Imbalanced run lengths",    body: "Engines fail at very different cycle counts. RUL targets are clipped at a sensible upper bound (a common CMAPSS convention) so the model is not optimising hard on engines that are nowhere near failure yet." },
        { title: "Sensor noise vs. signal",   body: "Several of the 21 sensors are flat or pure noise. The feature engineer drops zero-variance sensors and weights the trend-bearing ones (e.g. core speeds, exhaust temperatures) higher via the degradation index." },
        { title: "Reproducible from notebook to container", body: "Pinning `python==3.7` and the exact `requirements.txt` version set, plus a Docker image that mirrors that environment exactly, kept the model deterministic from the original `EDA_FE_Training.ipynb` notebook to the deployed container." },
        { title: "Heroku free tier deprecation", body: "The original public demo lived on Heroku. After the free tier was withdrawn, the README documents the situation explicitly and points the user at the YouTube walkthrough, keeping the project narrative honest." }
      ],
      techStackDetailed: [
        { name: "Python 3.7",     why: "Locked at training time. Pinning the runtime means the same `requirements.txt` resolves to the same dependency graph in dev, CI, and the deployed container." },
        { name: "scikit-learn",   why: "Regression family backbone. The model search runs over sklearn-compatible regressors so the trainer is a single dispatcher." },
        { name: "pandas + numpy", why: "Standard tabular data plumbing for sensor windows and rolling-feature computation." },
        { name: "Flask",          why: "The deployment target. `/predict` accepts a window of cycles and returns a scalar RUL; the artifact browser and log viewer make the running container self-inspectable." },
        { name: "PyYAML",         why: "Drives the three config files (`config.yaml`, `model.yaml`, `schema.yaml`) that parameterise the pipeline." },
        { name: "Docker",         why: "Builds a reproducible image with the Flask app and the saved model. Same image runs on a laptop, in CI, and in production." },
        { name: "GitHub Actions", why: "`main.yaml` workflow: test, build, push to Docker Hub. Triggers the AWS and Heroku deploys downstream." },
        { name: "AWS Elastic Beanstalk", why: "Container deployment target. EB pulls the Docker Hub image and routes the load balancer at the Flask app." },
        { name: "Heroku",         why: "Original public demo target. Kept in the architecture for historical context; the live URL is now retired but the walkthrough video remains." },
        { name: "setup.py",       why: "Makes the `Turbofan` source tree importable as a normal Python package, which simplifies the component imports inside the pipeline." }
      ]
    }
  },
  {
    slug: "sql-chatbot",
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
    },
    detail: {
      summary: "A Streamlit chatbot that turns natural-language questions into safe, validated SQL against a live database. Built on LangChain with a semantic-similarity few-shot selector over a Chroma vector store, table routing to keep prompts small, and a thin guardrail layer that blocks destructive operations. The model writes the query, the database returns the rows, and the agent rewrites the result as a short answer plus a 10-row markdown table.",
      hero: {
        image: {
          src: "/images/projects/sql-chatbot/architecture.png",
          alt: "SQL Database Chatbot architecture",
          caption: "User question to validated SQL: Streamlit UI, table router, RAG layer (Chroma vector store of few-shot examples, ERDs, table docs), LangChain agent driving OpenAI GPT, and a guardrail pass before MySQL ever sees the query."
        }
      },
      highlights: [
        { title: "Natural language in, SQL out",     body: "Ask for it in plain English, get a syntactically correct MySQL query back. The agent quotes table and column names exactly as they exist in the schema." },
        { title: "Few-shot examples on demand",      body: "A Chroma vector store holds curated question/SQL pairs. The example selector retrieves the two most semantically similar examples per request, so the prompt stays small and on-topic." },
        { title: "Table routing keeps prompts lean", body: "A pre-step decides which tables are relevant before the SQL prompt is built. Smaller table_info means cheaper requests and fewer hallucinated joins." },
        { title: "Guardrails before the database",   body: "Destructive verbs are blocked, ambiguous joins are caught, and the agent falls back to a clarifying question instead of executing on bad output." }
      ],
      codeSamples: [
        {
          input: "List all customers in France with a credit limit over 20,000.",
          query: "SELECT * FROM customers\nWHERE country = 'France' AND creditLimit > 20000;",
          language: "sql",
          note: "Straight from the few-shot example set used during prompt construction. The agent matches on country + credit-limit filter pattern."
        },
        {
          input: "Get the highest payment amount made by any customer.",
          query: "SELECT MAX(amount) FROM payments;",
          language: "sql",
          output: "120166.58",
          note: "Single-aggregate query. The result formatter strips the row wrapper and presents the scalar directly in the answer."
        },
        {
          input: "Show product details for products in the 'Motorcycles' product line.",
          query: "SELECT *\nFROM products\nWHERE productLine = 'Motorcycles';",
          language: "sql",
          note: "Returns more than 10 rows, so the result formatter renders the SQL above a markdown table capped at 10 rows."
        },
        {
          input: "Retrieve the names of employees who report to employee number 1002.",
          query: "SELECT firstName, lastName\nFROM employees\nWHERE reportsTo = 1002;",
          language: "sql",
          note: "Projection-only query (no SELECT *). The few-shot example set teaches the agent to project columns when the question names specific fields."
        },
        {
          input: "What is the price of '1968 Ford Mustang'?",
          query: "SELECT `buyPrice`, `MSRP`\nFROM products\nWHERE `productName` = '1968 Ford Mustang'\nLIMIT 1;",
          language: "sql",
          output: "buyPrice: 95.34  |  MSRP: 194.57",
          note: "Backtick-quoted identifier (MySQL's column-name dialect). The few-shot set primes the agent to quote any column referenced in the natural-language question."
        }
      ],
      guardrails: [
        { title: "DROP / TRUNCATE / ALTER are blocked",       body: "Any generated query containing a destructive verb is rejected before it ever reaches the database driver. The agent is told this in the system prompt and the validator enforces it." },
        { title: "Ambiguous joins fail fast",                 body: "If the generated SQL joins two tables with no explicit FK relationship in the loaded schema, the validator raises and the agent retries with extra schema context." },
        { title: "Infinite-loop / self-referencing queries", body: "Recursive CTEs without termination clauses and self-joins with no constraint are caught by the validator and force a regeneration." },
        { title: "Schema-only column references",             body: "Columns the agent tries to project must exist in the table_info string. Anything else is treated as a hallucination and triggers a clarifying response." },
        { title: "Single statement per request",              body: "The validator rejects multiple semicolon-separated statements. One question, one query, no piggybacked deletes." },
        { title: "Row caps on read responses",                body: "The result formatter caps preview output at 10 rows of markdown table. Large result sets are summarised rather than dumped to the chat." }
      ],
      features: [
        { title: "Streamlit chat UI",                       body: "A `st.chat_input` + `st.chat_message` driven UI with session-state-backed history. Sidebar lets users swap between MySQL, PostgreSQL, and MongoDB connections by entering host / port / user / password / database." },
        { title: "Two-stage prompt: route then generate",   body: "The router stage picks the relevant tables via a small LLM call; the generator stage builds the SQL with only those tables in the prompt. Keeps token usage and join hallucinations both low." },
        { title: "Semantic few-shot retrieval (Chroma)",    body: "`SemanticSimilarityExampleSelector` over OpenAI embeddings + Chroma picks the 2 most similar curated examples per request, injected via `FewShotChatMessagePromptTemplate`." },
        { title: "Schema-aware system prompt",              body: "The base prompt declares 'You are a MySQL expert' and slots in the LangChain `SQLDatabase.get_table_info()` output for only the routed tables, so the model always sees the actual column names and types." },
        { title: "Answer rendering with SQL + table",       body: "After execution, an `answer_prompt` rewrites the result into three blocks: a short natural-language answer, the SQL it ran in a markdown code fence, and the result as a markdown table capped at 10 rows." },
        { title: "Multi-DB connection switching",           body: "The same chat works against MySQL, PostgreSQL, or MongoDB. The connector module builds the LangChain `SQLDatabase` URI per backend; the rest of the chain is agnostic." },
        { title: "Caching the example selector",            body: "`@st.cache_resource` on the Chroma + embeddings setup means the vector store is built once per session, not per message. The chat stays snappy even with many examples." }
      ],
      challenges: [
        { title: "Schema bloat in the prompt",        body: "Even a small production database has dozens of tables. Dumping every `CREATE TABLE` into the prompt blows the context window and the cost. The table router fixes this by deciding upstream which tables actually need to be in `table_info` for a given question." },
        { title: "Few-shot drift",                    body: "Random examples bias the model. Semantic selection over a curated example set keeps the prompt focused on the question style being asked, not generic boilerplate. Chroma + OpenAI embeddings handle this cleanly." },
        { title: "Identifier quoting in MySQL",       body: "Column names with reserved words or spaces must be backtick-quoted in MySQL. The few-shot set explicitly demonstrates backtick quoting so the model picks up the convention without a custom decoder." },
        { title: "Safe fallback on a bad generation", body: "An LLM occasionally writes valid-looking SQL that touches a nonexistent column or joins on the wrong key. The guardrail pass + a single regeneration attempt with the validator's error message in context resolves most of these without bailing out to the user." },
        { title: "Result rendering at scale",         body: "A SELECT * on a million-row table is a footgun. The result formatter inserts a `LIMIT 10` for the preview and shows the SQL above the table, so the user always sees what they actually asked the database to do." }
      ],
      techStackDetailed: [
        { name: "Streamlit",          why: "One-file Python UI with built-in chat primitives, sidebar widgets, session state, and a cache decorator. Perfect for an LLM agent demo that needs to ship in a single `streamlit run main.py`." },
        { name: "LangChain",          why: "`SQLDatabase`, `ChatPromptTemplate`, `FewShotChatMessagePromptTemplate`, `SemanticSimilarityExampleSelector`. Provides the prompt scaffolding and the SQL chain so the project code only owns the routing, the validator, and the example set." },
        { name: "OpenAI GPT (chat)",  why: "Generates the SQL given the routed table_info, few-shot examples, and chat history. GPT-3.5 / GPT-4 are both pluggable through `ChatOpenAI`." },
        { name: "OpenAI Embeddings",  why: "Powers the semantic similarity search over the curated few-shot example set. 1536-dim text-embedding-ada-002 is fast and cheap." },
        { name: "Chroma",             why: "Local vector store for the few-shot examples. Persistent on disk, fast for the small example set the chatbot ships with." },
        { name: "MySQL (primary), PostgreSQL, MongoDB", why: "The connector module supports all three. LangChain's `SQLDatabase` covers MySQL + PostgreSQL; a thin adapter routes MongoDB requests separately." },
        { name: "python-dotenv",      why: "Loads OPENAI_API_KEY plus the optional DB credentials from `.env`, so the same chatbot can run locally against a test DB and in a container against a real one." }
      ]
    }
  },
  {
    slug: "podcast-chatbot",
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
    },
    detail: {
      summary: "A Streamlit podcast chatbot that takes audio from three different sources (YouTube URL, file upload, or live microphone recording), diarizes the speakers with pyannote.audio, transcribes each speaker with Whisper, indexes the transcripts in a FAISS vector store, auto-generates a list of suggested questions, and answers follow-ups through a LangChain QA chain backed by OpenAI GPT-4.",
      hero: {
        image: {
          src: "/images/projects/podcast-chatbot/architecture.png",
          alt: "Podcast Chatbot architecture",
          caption: "Audio in, conversation out. Three input modes feed one pipeline: yt-dlp / FFmpeg to MP3, pyannote diarization, per-speaker chunking, Whisper transcription, LangChain embeddings into FAISS, then a Streamlit chat UI driving a QA chain on GPT-4."
        }
      },
      highlights: [
        { title: "Audio from anywhere",           body: "YouTube URL, MP3 / WAV upload, or live microphone recording. Three different on-ramps that converge on the same downstream pipeline." },
        { title: "Speaker-aware transcripts",     body: "pyannote.audio segments the audio per speaker before transcription, so the final transcript is labelled `Speaker_1: ...` / `Speaker_2: ...` rather than one undifferentiated wall of text." },
        { title: "Whisper for accuracy",          body: "`faster-whisper` (large-v3, beam_size=5) handles the speech-to-text. Runs on CUDA when available and falls back cleanly to int8 on CPU. Chunks anything over 25 MB so OpenAI's Whisper variants stay happy." },
        { title: "Suggested questions on load",   body: "Once a transcript exists, a separate LLM call generates a list of follow-up questions so the user has a starting point instead of staring at an empty input box." }
      ],
      inputModes: [
        {
          name: "YouTube URL",
          body: "Paste a YouTube link. The pipeline pulls the video with yt-dlp, converts it to MP3 with FFmpeg, and forwards the resulting file into the diarization + transcription chain.",
          steps: [
            "Paste link into the Streamlit form",
            "`yt-dlp` downloads the video to a temp file",
            "`FFmpeg` extracts MP3 audio",
            "Audio enters the standard pipeline"
          ]
        },
        {
          name: "Audio Upload",
          body: "Drag-and-drop a podcast file or short clip. Works on MP3, WAV, and M4A. The file lands directly in the diarization step with no conversion needed for supported formats.",
          steps: [
            "Drop an MP3 / WAV / M4A on the upload widget",
            "Streamlit writes it to a temp path",
            "File goes straight to diarization",
            "Transcript and chat UI appear when ready"
          ]
        },
        {
          name: "Live Recording",
          body: "Record audio directly from the browser via `sounddevice`. Useful for short clips and meeting-style demos. Default capture is 10 seconds at 16 kHz mono, written to a temp WAV.",
          steps: [
            "Click record, capture 10 s (configurable)",
            "`sounddevice` writes a 16 kHz mono WAV",
            "Saved to a `NamedTemporaryFile`",
            "Same downstream pipeline as the other modes"
          ]
        }
      ],
      dataFlow: [
        "**Audio in** - one of three modes (YouTube URL via yt-dlp / FFmpeg, file upload, or live microphone via sounddevice + wavio) drops a clean MP3 or WAV file into a temp path.",
        "**Diarization (pyannote.audio)** - Hugging Face-hosted pipeline identifies who spoke when. Output is a timeline of `(speaker_id, start, end)` segments. Token is loaded from `.env` via the `HUGGINGFACE_TOKEN`.",
        "**Per-speaker segmentation** - the audio is split into one folder per identified speaker, with each segment appended to that speaker's MP3 so every speaker gets one combined file.",
        "**Chunking for the ASR limit** - any per-speaker file over 25 MB is sliced into 25-MB chunks before transcription. Whisper's hosted endpoint has a size cap; the chunker keeps that boundary invisible to the rest of the pipeline.",
        "**Transcription (Whisper)** - each chunk runs through `faster-whisper` (`large-v3`, `beam_size=5`). Device defaults to CUDA when available, MPS is detected and explicitly skipped because faster-whisper does not support it, and CPU runs at `int8` to stay fast.",
        "**Transcript per speaker** - the per-chunk transcripts are joined back into one transcript per speaker, then concatenated into a single labelled document (`Speaker_1: ...`, `Speaker_2: ...`).",
        "**FAQ generation** - a separate prompt asks the LLM to read the transcript and propose 5 to 10 suggested questions, surfaced in the UI so the user has a starting point.",
        "**Embedding into FAISS** - `OpenAIEmbeddings` turns the labelled transcript into vectors that land in a local FAISS index. The chunk granularity preserves narrative structure across long-form audio.",
        "**Q&A (LangChain)** - the user types a question into the Streamlit chat input. A LangChain QA chain runs top-k retrieval against FAISS, builds a context window with the matched chunks, and calls `ChatOpenAI(model='gpt-3.5-turbo-0125')` (or `gpt-4` / `llama3` via Ollama, selectable at startup).",
        "**Answer back** - the streamed response renders in the chat panel and gets appended to session state. Follow-up questions reuse the same FAISS index without re-running ASR."
      ],
      features: [
        { title: "Three input modes, one pipeline", body: "YouTube, upload, and live recording converge on the same diarization + ASR + RAG chain. Adding a new audio source means adding one more on-ramp; nothing downstream changes." },
        { title: "Speaker labels in the transcript", body: "pyannote.audio segments per speaker before transcription. The final transcript is `Speaker_1 / Speaker_2 / ...` labelled, and the optional MeetingMinutes pass can replace those with real names if the audio mentions them." },
        { title: "Hardware-aware Whisper", body: "Detects CUDA, MPS (and explicitly skips it, with a printed note), and CPU. Picks `float16` on GPU and `int8` on CPU. Initialisation logs the chosen device + compute type." },
        { title: "Size-aware audio chunking", body: "Anything over the 25 MB Whisper limit is sliced and rejoined transparently. The user never sees a 'file too big' error." },
        { title: "OpenAI or Ollama at the LLM layer", body: "`MeetingMinutes` and the chat backend accept `model_type='openai'` (default `gpt-3.5-turbo-0125`) or `'ollama'` (default `llama3`), so the same project runs on a hosted API or a local Ollama instance." },
        { title: "Suggested-question bootstrapping", body: "On transcript completion, a one-shot prompt produces a list of likely follow-ups. Cuts the cold-start anxiety of staring at an empty chat box." },
        { title: "Persistent session state", body: "Streamlit keeps the transcript, FAISS index, and chat history across reruns. Asking the eighth follow-up question is just as cheap as the first." },
        { title: "Detailed logging", body: "Every pipeline step writes to `main.log` with timestamps and step names. Failures (download errors, diarization timeouts, ASR exceptions) are caught and logged without crashing the UI." }
      ],
      challenges: [
        { title: "Diarization quality depends on audio quality", body: "Hands-free recordings and noisy YouTube uploads can confuse pyannote. The pipeline falls back to a single-speaker transcript when only one cluster is found, so the UX stays usable even when diarization fails." },
        { title: "Long-form audio and the 25 MB limit", body: "Podcasts are typically 30 to 90 minutes. The per-speaker chunker plus rejoin step keeps the transcript continuous despite the API limit, and the FAISS chunking on the LangChain side preserves narrative boundaries." },
        { title: "MPS on Apple Silicon", body: "faster-whisper does not support MPS as of writing. The pipeline detects it, prints an explicit note, and falls back to CPU `int8`, which is fast enough for short clips and keeps the dev experience consistent across hardware." },
        { title: "Whisper hallucinations on silence", body: "Pure-silence stretches occasionally produce hallucinated transcripts. Beam-size=5 plus a confidence threshold on segments drops the worst of these before the transcript is built." },
        { title: "Real-time recording UX", body: "Recording audio from a browser through Streamlit is fiddly. `sounddevice` + `wavio` + `NamedTemporaryFile` is reliable, but capped at a fixed duration to keep the UX predictable." }
      ],
      techStackDetailed: [
        { name: "Streamlit",         why: "Chat UI, file upload widget, sidebar controls, session state, all in one Python file. Iteration speed beats anything else for an audio + chat demo." },
        { name: "yt-dlp + FFmpeg",   why: "YouTube to MP3 pipeline that handles every video container and codec quirk in the wild. Doing this without yt-dlp is a research project of its own." },
        { name: "pyannote.audio",    why: "Speaker diarization via Hugging Face. Produces clean `(speaker, start, end)` timelines that drive the per-speaker segmentation step." },
        { name: "faster-whisper",    why: "CTranslate2-backed Whisper. Significantly faster than reference Whisper on the same hardware, supports CUDA + CPU + int8 compute types, beam search built in." },
        { name: "OpenAI Whisper API", why: "Used as the hosted fallback when local resources are constrained. The size-aware chunker keeps the request envelope under the 25 MB limit." },
        { name: "sounddevice + wavio", why: "Records and writes audio from the browser-driven Streamlit page. Default 16 kHz mono is the right format for Whisper without resampling." },
        { name: "LangChain",         why: "QA chain, prompt templates, embeddings interface, and `ChatPromptTemplate`. Keeps the embedding model + LLM swappable without touching the rest of the code." },
        { name: "OpenAI Embeddings + FAISS", why: "Vector embeddings via OpenAI plus local FAISS index for top-k retrieval. Persistent on disk so re-asking does not re-embed." },
        { name: "ChatOpenAI (GPT-3.5 / GPT-4)", why: "Default LLM for the QA chain. `gpt-3.5-turbo-0125` for fast iteration, `gpt-4` for accuracy when needed." },
        { name: "ChatOllama",        why: "Local LLM alternative (llama3) for offline use. Same prompt + chain code; only the model object changes." },
        { name: "python-dotenv",     why: "Loads `OPENAI_API_KEY` and `HUGGINGFACE_TOKEN` from `.env` without committing secrets to the repo." }
      ]
    }
  }
];