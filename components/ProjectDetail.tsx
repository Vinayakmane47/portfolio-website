import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Github,
  Youtube,
  ExternalLink,
  Calendar,
  Sparkles,
  Layers,
  Target,
  CheckCircle2,
  Wrench,
  AlertTriangle,
  Terminal,
  Settings,
  GitBranch,
  Package,
  Server,
  Workflow,
  Compass,
  ShieldCheck,
  Star,
  Code2,
  ShieldAlert,
  Mic,
  BookOpen,
} from 'lucide-react';
import { PROJECTS_DATA } from '../constants';
import type { Project, ProjectImage } from '../types';

interface ProjectDetailProps {
  slug: string;
  onBack: () => void;
  onOpen: (slug: string) => void;
}

const renderFormattedText = (text: string): React.ReactNode[] => {
  const parts: React.ReactNode[] = [];
  // Combined matcher: **bold**, `code`, *italic*
  const regex = /(\*\*([^*\n]+?)\*\*)|(`([^`\n]+?)`)|(\*([^*\n]+?)\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    if (match[2] !== undefined) {
      parts.push(
        <strong key={key++} className="font-semibold text-primary-700">
          {match[2]}
        </strong>
      );
    } else if (match[4] !== undefined) {
      parts.push(
        <code key={key++} className="px-1.5 py-0.5 bg-slate-100 text-slate-800 rounded text-[0.88em] font-mono">
          {match[4]}
        </code>
      );
    } else if (match[6] !== undefined) {
      parts.push(
        <em key={key++} className="italic text-slate-600">
          {match[6]}
        </em>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.substring(lastIndex));
  return parts.length > 0 ? parts : [text];
};

interface BlockProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const TourStopCard: React.FC<{
  stop: import('../types').ProjectTourStop;
  index: number;
}> = ({ stop, index }) => {
  const [imgErr, setImgErr] = React.useState(false);
  const imgFirst = index % 2 === 0;
  const num = String(index + 1).padStart(2, '0');
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-start bg-white border border-slate-200 rounded-xl p-4 lg:p-5 shadow-sm">
      <div className={`order-1 ${imgFirst ? '' : 'lg:order-2'}`}>
        {!imgErr ? (
          <figure className="overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
            <img
              src={stop.image.src}
              alt={stop.image.alt ?? stop.title}
              onError={() => setImgErr(true)}
              className="w-full h-auto block"
            />
            {stop.image.caption && (
              <figcaption className="px-3 py-2 text-xs text-slate-500 leading-snug bg-slate-50 border-t border-slate-100">
                {stop.image.caption}
              </figcaption>
            )}
          </figure>
        ) : (
          <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 p-6 text-sm text-slate-400 text-center">
            (image unavailable)
          </div>
        )}
      </div>
      <div className={`order-2 ${imgFirst ? '' : 'lg:order-1'}`}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-primary-700 tabular bg-primary-50 px-2 py-0.5 rounded-md border border-primary-100">
            Stop {num}
          </span>
          {stop.tools && stop.tools.slice(0, 4).map((t) => (
            <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-bold text-slate-900 text-lg md:text-xl leading-snug mb-2">
          {stop.title}
        </h3>
        <div className="space-y-2 text-[14.5px] text-slate-700 leading-relaxed">
          {stop.body.map((p, i) => (
            <p key={i}>{renderFormattedText(p)}</p>
          ))}
        </div>
        {stop.bullets && stop.bullets.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {stop.bullets.map((b, i) => (
              <li key={i} className="relative pl-4 text-sm text-slate-600 leading-relaxed">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                {renderFormattedText(b)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

const GalleryGrid: React.FC<{ items: ProjectImage[] }> = ({ items }) => {
  const [loaded, setLoaded] = React.useState<Record<number, 'ok' | 'err'>>({});
  const visible = items.filter((_, i) => loaded[i] !== 'err');

  if (visible.length === 0) {
    return (
      <p className="text-sm text-slate-500 italic">
        No screenshots yet - drop images into <code className="px-1.5 py-0.5 bg-slate-100 rounded text-[12px]">/public/images/projects/&lt;slug&gt;/</code> and reference them in <code className="px-1.5 py-0.5 bg-slate-100 rounded text-[12px]">constants.tsx → detail.gallery</code>.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((img, i) => {
        if (loaded[i] === 'err') return null;
        return (
          <figure key={i} className="bg-slate-50 border border-slate-100 rounded-lg overflow-hidden group">
            <div className="aspect-video overflow-hidden bg-slate-100">
              <img
                src={img.src}
                alt={img.alt ?? `Screenshot ${i + 1}`}
                onLoad={() => setLoaded((s) => ({ ...s, [i]: 'ok' }))}
                onError={() => setLoaded((s) => ({ ...s, [i]: 'err' }))}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            {img.caption && (
              <figcaption className="px-3 py-2 text-xs text-slate-600 leading-snug">
                {img.caption}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
};

const Block: React.FC<BlockProps> = ({ icon, title, subtitle, children }) => (
  <section className="bg-white border border-slate-200 rounded-xl p-5 md:p-7 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-primary-50 rounded-lg text-primary-600">{icon}</div>
      <div>
        <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">{title}</h2>
        {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
      </div>
    </div>
    {children}
  </section>
);

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ slug, onBack, onOpen }) => {
  const idx = PROJECTS_DATA.findIndex((p) => p.slug === slug);
  const project: Project | undefined = idx >= 0 ? PROJECTS_DATA[idx] : undefined;
  const prev = idx > 0 ? PROJECTS_DATA[idx - 1] : null;
  const next = idx >= 0 && idx < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[idx + 1] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-sm text-primary-600 hover:underline">
          <ArrowLeft size={16} /> Back to projects
        </button>
        <p className="mt-6 text-slate-600">Project not found.</p>
      </div>
    );
  }

  const d = project.detail;

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-8 md:py-12 animate-fadeIn">
      {/* Back */}
      <button
        onClick={onBack}
        className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors mb-6"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
        Back to all projects
      </button>

      {/* Header card */}
      <header className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-md font-medium">
            <Calendar size={12} /> {project.period}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary-50 text-primary-700 rounded-md font-medium">
            Project · {String(idx + 1).padStart(2, '0')} / {String(PROJECTS_DATA.length).padStart(2, '0')}
          </span>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
          {project.title}
        </h1>

        {d?.summary && (
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {d.summary}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] md:text-xs px-2.5 py-1 bg-slate-50 text-slate-700 rounded-md font-medium border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors"
            >
              <Github size={16} /> Repository
            </a>
          )}
          {project.links.video && (
            <a
              href={project.links.video}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:text-red-600 hover:border-red-200 transition-colors"
            >
              <Youtube size={16} /> Watch demo
            </a>
          )}
          {project.links.site && (
            <a
              href={project.links.site}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:text-primary-600 hover:border-primary-200 transition-colors"
            >
              <ExternalLink size={16} /> Live site
            </a>
          )}
        </div>
      </header>

      {/* Hero visual */}
      {d?.hero?.image && (
        <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-4 md:p-6 shadow-sm">
          <figure>
            <img
              src={d.hero.image.src}
              alt={d.hero.image.alt ?? project.title}
              className="w-full h-auto rounded-xl"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
            {d.hero.image.caption && (
              <figcaption className="mt-3 text-xs text-slate-500 text-center italic">
                {d.hero.image.caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}

      {/* Results strip */}
      {d?.results && d.results.length > 0 && (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {d.results.map((m) => (
            <div key={m.label} className="bg-white border border-slate-200 rounded-xl p-4">
              <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">{m.label}</p>
              <p className="mt-1 text-2xl font-bold text-primary-700">{m.value}</p>
              {m.hint && <p className="mt-1 text-xs text-slate-500 leading-snug">{m.hint}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Highlights (NYC-Taxi-style: short intro cards) */}
      {d?.highlights && d.highlights.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {d.highlights.map((h, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 hover:border-primary-200 hover:shadow-sm transition-all">
              <div className="flex items-start gap-2 mb-1.5">
                <Star size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                <h3 className="font-bold text-slate-900 text-sm leading-snug">{h.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{renderFormattedText(h.body)}</p>
            </div>
          ))}
        </div>
      )}

      {/* Body */}
      <div className="mt-6 space-y-6">
        {/* Quality Gates (NYC-Taxi-style: hard thresholds) */}
        {d?.qualityGates && d.qualityGates.length > 0 && (
          <Block icon={<ShieldCheck size={18} />} title="Quality gates" subtitle="Hard thresholds a new model must clear before it touches Production">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {d.qualityGates.map((g, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 bg-gradient-to-b from-primary-50/30 to-white text-center">
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{g.metric}</p>
                  <p className="mt-1 text-2xl font-bold text-primary-700 font-mono">{g.threshold}</p>
                  <p className="mt-2 text-xs text-slate-600 leading-snug">{g.role}</p>
                </div>
              ))}
            </div>
          </Block>
        )}

        {/* Visual tour (NYC-Taxi-style: image + narrative alternating) */}
        {d?.tourStops && d.tourStops.length > 0 && (
          <Block icon={<Compass size={18} />} title="Visual tour" subtitle="A guided walk through the system, screen by screen">
            <div className="space-y-4">
              {d.tourStops.map((stop, i) => (
                <TourStopCard key={i} stop={stop} index={i} />
              ))}
            </div>
          </Block>
        )}

        {/* Input modes (Podcast-style) */}
        {d?.inputModes && d.inputModes.length > 0 && (
          <Block icon={<Mic size={18} />} title="Three ways to feed audio in" subtitle="One workflow downstream, three ways to start it">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {d.inputModes.map((m, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-4 bg-gradient-to-b from-primary-50/40 to-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-md bg-primary-600 text-white flex items-center justify-center font-bold text-sm">{String(i+1).padStart(2,'0')}</span>
                    <h3 className="font-bold text-slate-900 text-base leading-tight">{m.name}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{renderFormattedText(m.body)}</p>
                  {m.steps && m.steps.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {m.steps.map((s, j) => (
                        <li key={j} className="relative pl-4 text-xs text-slate-600 leading-relaxed">
                          <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                          {renderFormattedText(s)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Block>
        )}

        {/* Code samples (SQL-style: NL -> SQL) */}
        {d?.codeSamples && d.codeSamples.length > 0 && (
          <Block icon={<Code2 size={18} />} title="What it does, in examples" subtitle="A natural language question goes in, a validated query comes out">
            <div className="grid grid-cols-1 gap-3">
              {d.codeSamples.map((s, i) => (
                <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                  <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200">
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">Ask</p>
                    <p className="text-sm text-slate-800 leading-snug">"{s.input}"</p>
                  </div>
                  {s.query && (
                    <div className="bg-slate-900 px-4 py-3 border-b border-slate-200">
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Generated {s.language ?? 'SQL'}</p>
                      <pre className="text-xs text-green-300 font-mono leading-relaxed whitespace-pre-wrap break-words">{s.query}</pre>
                    </div>
                  )}
                  {s.output && (
                    <div className="bg-white px-4 py-2.5 border-b border-slate-200">
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">Result</p>
                      <p className="text-sm text-slate-700 font-mono">{s.output}</p>
                    </div>
                  )}
                  {s.note && (
                    <div className="bg-primary-50/40 px-4 py-2 text-xs text-slate-600 leading-snug italic">
                      {s.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Block>
        )}

        {/* Guardrails (SQL-style: blocked behaviours) */}
        {d?.guardrails && d.guardrails.length > 0 && (
          <Block icon={<ShieldAlert size={18} />} title="Guardrails" subtitle="What the agent is allowed to do, and what it is not">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {d.guardrails.map((g, i) => (
                <div key={i} className="border-l-4 border-red-400 bg-red-50/50 rounded-r-lg p-3">
                  <h3 className="font-semibold text-red-800 text-sm mb-1">{g.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{renderFormattedText(g.body)}</p>
                </div>
              ))}
            </div>
          </Block>
        )}

        {/* Paper-style sections (NASA-style) */}
        {d?.paperSections && d.paperSections.length > 0 && (
          <Block icon={<BookOpen size={18} />} title="Method, in sections" subtitle="The project, written up like a short paper">
            <div className="space-y-5">
              {d.paperSections.map((p, i) => (
                <div key={i}>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 leading-tight mb-1.5">
                    <span className="text-primary-600 mr-2 font-mono tabular text-sm">{String(i+1).padStart(2,'0')}.</span>
                    {p.heading}
                  </h3>
                  <p className="text-[15px] text-slate-700 leading-relaxed">{renderFormattedText(p.body)}</p>
                  {p.bullets && p.bullets.length > 0 && (
                    <ul className="mt-2 space-y-1.5">
                      {p.bullets.map((b, j) => (
                        <li key={j} className="relative pl-4 text-sm text-slate-600 leading-relaxed">
                          <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                          {renderFormattedText(b)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Block>
        )}

        {/* Products (OPENSKY-style: 3 ML products) */}
        {d?.products && d.products.length > 0 && (
          <Block icon={<Package size={18} />} title="The three ML products" subtitle="One platform, three independent prediction tasks">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {d.products.map((p, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-4 bg-gradient-to-b from-primary-50/40 to-white">
                  <div className="flex items-center gap-2 mb-3">
                    {p.letter && (
                      <span className="w-7 h-7 rounded-md bg-primary-600 text-white flex items-center justify-center font-bold text-sm">
                        {p.letter}
                      </span>
                    )}
                    <h3 className="font-bold text-slate-900 text-base leading-tight">{p.name}</h3>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <p className="uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Task</p>
                      <p className="text-slate-700">{p.task}</p>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Model</p>
                      <p className="text-slate-700 font-medium">{p.model}</p>
                    </div>
                    {p.inputs && p.inputs.length > 0 && (
                      <div>
                        <p className="uppercase tracking-wider text-slate-400 font-semibold mb-1">Inputs</p>
                        <div className="flex flex-wrap gap-1">
                          {p.inputs.map((f) => (
                            <span key={f} className="px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded text-[10px] font-mono">{f}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {p.training && (
                      <div>
                        <p className="uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Training</p>
                        <p className="text-slate-600 leading-snug">{p.training}</p>
                      </div>
                    )}
                    {p.metric && (
                      <div>
                        <p className="uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Eval metric</p>
                        <p className="text-slate-700 font-mono">{p.metric}</p>
                      </div>
                    )}
                    <div className="pt-2 border-t border-slate-100">
                      <p className="uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Output</p>
                      <p className="text-slate-700 leading-snug">{p.output}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Block>
        )}

        {/* Platform layers */}
        {d?.layers && d.layers.length > 0 && (
          <Block icon={<Layers size={18} />} title="Platform layers" subtitle="Top-to-bottom: each layer with its services and responsibility">
            <div className="space-y-2">
              {d.layers.map((l, i) => (
                <div key={i} className="grid grid-cols-12 gap-3 p-3 bg-slate-50 rounded-lg items-start">
                  <div className="col-span-12 md:col-span-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary-700 tabular bg-primary-100 px-1.5 py-0.5 rounded">{String(i+1).padStart(2,'0')}</span>
                      <h3 className="font-bold text-slate-900 text-sm">{l.name}</h3>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <div className="flex flex-wrap gap-1">
                      {l.services.map((s) => (
                        <span key={s} className="text-[10px] font-mono px-1.5 py-0.5 bg-white border border-slate-200 rounded text-slate-700">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <p className="text-xs text-slate-600 leading-snug">{renderFormattedText(l.role)}</p>
                  </div>
                </div>
              ))}
            </div>
          </Block>
        )}

        {/* Airflow DAGs */}
        {d?.dags && d.dags.length > 0 && (
          <Block icon={<Workflow size={18} />} title="Airflow DAGs" subtitle="What runs, when, and why">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {d.dags.map((dg, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-3 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-xs font-mono font-semibold text-primary-700">{dg.name}</code>
                    <span className="text-[10px] uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold">{dg.schedule}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-snug">{renderFormattedText(dg.purpose)}</p>
                </div>
              ))}
            </div>
          </Block>
        )}

        {/* Services */}
        {d?.services && d.services.length > 0 && (
          <Block icon={<Server size={18} />} title="Service inventory" subtitle="The full stack that comes up with one docker compose">
            <div className="overflow-hidden border border-slate-200 rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  <tr>
                    <th className="px-3 py-2 text-left">Service</th>
                    <th className="px-3 py-2 text-left">Port</th>
                    <th className="px-3 py-2 text-left">Role</th>
                    <th className="px-3 py-2 text-left hidden md:table-cell">Credentials</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {d.services.map((s, i) => (
                    <tr key={i} className="hover:bg-slate-50/60">
                      <td className="px-3 py-2 font-semibold text-slate-800">{s.name}</td>
                      <td className="px-3 py-2 font-mono text-xs text-slate-700">{s.port ?? '-'}</td>
                      <td className="px-3 py-2 text-slate-600">{s.role}</td>
                      <td className="px-3 py-2 font-mono text-xs text-slate-500 hidden md:table-cell">{s.credentials ?? '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Block>
        )}

        {/* Overview */}
        {d?.overview && d.overview.length > 0 && (
          <Block icon={<Sparkles size={18} />} title="Overview" subtitle="What this project is and why it exists">
            <div className="space-y-5 max-w-4xl">
              {d.overview.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "border-l-4 border-primary-200 pl-4 text-slate-800 leading-relaxed text-[16px] md:text-[17px]"
                      : "text-slate-700 leading-relaxed text-[15px]"
                  }
                >
                  {renderFormattedText(p)}
                </p>
              ))}
            </div>
          </Block>
        )}

        {/* Problem */}
        {d?.problem && (
          <Block icon={<Target size={18} />} title="The problem" subtitle="The gap this project closes">
            {Array.isArray(d.problem)
              ? <div className="space-y-3">{d.problem.map((p, i) => (<p key={i} className="text-slate-700 leading-relaxed text-[15px]">{p}</p>))}</div>
              : <p className="text-slate-700 leading-relaxed text-[15px]">{d.problem}</p>
            }
          </Block>
        )}

        {/* Architecture */}
        {d?.architecture && d.architecture.length > 0 && (
          <Block icon={<Layers size={18} />} title="Architecture & approach" subtitle="How the pieces fit together">
            <ol className="space-y-3">
              {d.architecture.map((step, i) => (
                <li key={i} className="flex gap-4 text-[15px] text-slate-700 leading-relaxed">
                  <span className="flex-shrink-0 w-7 h-7 bg-primary-50 text-primary-700 rounded-md flex items-center justify-center text-xs font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{renderFormattedText(step)}</span>
                </li>
              ))}
            </ol>
          </Block>
        )}

        {/* Data flow */}
        {d?.dataFlow && d.dataFlow.length > 0 && (
          <Block icon={<GitBranch size={18} />} title="Data flow" subtitle="A single request, end-to-end">
            <ol className="relative border-l-2 border-primary-100 ml-3 space-y-4">
              {d.dataFlow.map((step, i) => (
                <li key={i} className="ml-5 relative">
                  <span className="absolute -left-[31px] top-1 w-5 h-5 bg-primary-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-[15px] text-slate-700 leading-relaxed">{renderFormattedText(step)}</p>
                </li>
              ))}
            </ol>
          </Block>
        )}

        {/* API endpoints */}
        {d?.apiEndpoints && d.apiEndpoints.length > 0 && (
          <Block icon={<Terminal size={18} />} title="API surface" subtitle="REST endpoints exposed by the service">
            <div className="overflow-hidden border border-slate-200 rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  <tr>
                    <th className="px-4 py-2 text-left">Method</th>
                    <th className="px-4 py-2 text-left">Path</th>
                    <th className="px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {d.apiEndpoints.map((ep, i) => (
                    <tr key={i} className="hover:bg-slate-50/60">
                      <td className="px-4 py-3 align-top">
                        <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded ${
                          ep.method === 'GET' ? 'bg-green-50 text-green-700' :
                          ep.method === 'POST' ? 'bg-blue-50 text-blue-700' :
                          ep.method === 'DELETE' ? 'bg-red-50 text-red-700' :
                          'bg-slate-100 text-slate-700'
                        }`}>{ep.method}</span>
                      </td>
                      <td className="px-4 py-3 align-top font-mono text-xs text-slate-800">{ep.path}</td>
                      <td className="px-4 py-3 align-top text-slate-600">{ep.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Block>
        )}

        {/* Key configuration */}
        {d?.keyConfig && d.keyConfig.length > 0 && (
          <Block icon={<Settings size={18} />} title="Key configuration" subtitle="Knobs that shape behavior">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {d.keyConfig.map((c, i) => (
                <div key={i} className="border border-slate-100 rounded-lg p-3 bg-slate-50">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <code className="text-[12px] font-mono font-semibold text-primary-700">{c.key}</code>
                    <code className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">{c.defaultValue}</code>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.note}</p>
                </div>
              ))}
            </div>
          </Block>
        )}

        {/* Features */}
        {d?.features && d.features.length > 0 && (
          <Block icon={<CheckCircle2 size={18} />} title="Key features" subtitle="The capabilities that matter most">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {d.features.map((f, i) => (
                <div key={i} className="border border-slate-100 rounded-lg p-4 bg-slate-50">
                  <h3 className="font-semibold text-slate-900 text-sm mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{renderFormattedText(f.body)}</p>
                </div>
              ))}
            </div>
          </Block>
        )}

        {/* Tech stack details */}
        {d?.techStackDetailed && d.techStackDetailed.length > 0 && (
          <Block icon={<Wrench size={18} />} title="Tech choices, with reasons" subtitle="What and why">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {d.techStackDetailed.map((t) => (
                <div key={t.name} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 text-xs font-semibold text-primary-700 bg-primary-50 px-2 py-0.5 rounded-md mt-0.5 min-w-[5.5rem] text-center">
                    {t.name}
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed">{renderFormattedText(t.why)}</p>
                </div>
              ))}
            </div>
          </Block>
        )}

        {/* Challenges */}
        {d?.challenges && d.challenges.length > 0 && (
          <Block icon={<AlertTriangle size={18} />} title="Challenges & learnings" subtitle="Where things got interesting">
            <ul className="space-y-4">
              {d.challenges.map((c, i) => (
                <li key={i} className="border-l-2 border-primary-200 pl-4">
                  <h3 className="font-semibold text-slate-900 text-sm mb-1">{c.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{renderFormattedText(c.body)}</p>
                </li>
              ))}
            </ul>
          </Block>
        )}

        {/* Fallback: original description bullets if no rich detail */}
        {!d?.overview && project.description && (
          <Block icon={<Sparkles size={18} />} title="Highlights" subtitle="Summary of the work">
            <ul className="space-y-2">
              {project.description.map((line, i) => (
                <li key={i} className="relative pl-4 text-[15px] text-slate-700 leading-relaxed">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                  {renderFormattedText(line)}
                </li>
              ))}
            </ul>
          </Block>
        )}
      </div>

      {/* Gallery */}
      {d?.gallery && d.gallery.length > 0 && (
        <section className="mt-6 bg-white border border-slate-200 rounded-xl p-5 md:p-7 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
              <Sparkles size={18} />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">Screenshots</h2>
              <p className="text-xs text-slate-500 mt-0.5">A look at the running system</p>
            </div>
          </div>
          <GalleryGrid items={d.gallery} />
        </section>
      )}

      {/* Prev / Next nav */}
      <nav className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {prev ? (
          <button
            onClick={() => onOpen(prev.slug)}
            className="group bg-white border border-slate-200 rounded-xl p-4 text-left hover:border-primary-200 hover:shadow-sm transition-all"
          >
            <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-slate-400">
              <ArrowLeft size={12} /> Previous
            </span>
            <p className="mt-1 font-semibold text-slate-900 group-hover:text-primary-700 transition-colors">{prev.title}</p>
          </button>
        ) : <div className="hidden sm:block" />}
        {next ? (
          <button
            onClick={() => onOpen(next.slug)}
            className="group bg-white border border-slate-200 rounded-xl p-4 text-left hover:border-primary-200 hover:shadow-sm transition-all sm:text-right"
          >
            <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-slate-400 sm:justify-end sm:flex">
              Next <ArrowRight size={12} />
            </span>
            <p className="mt-1 font-semibold text-slate-900 group-hover:text-primary-700 transition-colors">{next.title}</p>
          </button>
        ) : null}
      </nav>
    </div>
  );
};
