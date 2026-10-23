
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Monitor,
  Smartphone,
} from "lucide-react";
import { siteData } from "../data/siteData";

type Filter = "all" | "web" | "mobile";

type ProjectItem = {
  number?: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  link?: string | null;
  technologies: string[];
  kind?: "web" | "mobile";
};

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "web", label: "Websites" },
  { id: "mobile", label: "Mobile apps" },
];

function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const hasLink =
    typeof project.link === "string" &&
    project.link.trim().length > 0;

  const isWebsite = project.kind === "web" || !project.kind;
  const Icon = isWebsite ? Monitor : Smartphone;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group overflow-hidden rounded-2xl border border-line bg-surface"
    >
      <div className="relative overflow-hidden border-b border-line bg-slate-100">
        {isWebsite ? (
          <div className="relative aspect-[16/10] overflow-hidden bg-white">
            <div className="flex h-10 items-center gap-2 border-b border-slate-200 bg-slate-50 px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

              <div className="ml-3 flex-1 truncate rounded-md bg-slate-200/70 px-3 py-1 text-[10px] text-slate-500">
                {hasLink ? project.link : "Preview unavailable"}
              </div>
            </div>

            {hasLink ? (
              <>
                <iframe
                  src={project.link!}
                  title={`${project.title} live website preview`}
                  loading="lazy"
                  className="h-[calc(100%-2.5rem)] min-h-[260px] w-full border-0 bg-white"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />

                <a
                  href={project.link!}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} website`}
                  className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-black/60 to-transparent py-5 pt-12 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100"
                >
                  Open live website
                  <ExternalLink size={14} />
                </a>
              </>
            ) : (
              <div className="flex h-[calc(100%-2.5rem)] min-h-[260px] flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-white p-6 text-center">
                <Monitor size={32} className="text-slate-400" />
                <p className="mt-3 text-sm font-medium text-slate-600">
                  Website preview coming soon
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  No project link has been added yet.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex aspect-[16/10] flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-100 p-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-600 shadow-sm">
              <Icon size={30} strokeWidth={1.5} />
            </div>

            <p className="mt-4 text-sm font-medium text-slate-500">
              Mobile application
            </p>

            {hasLink ? (
              <a
                href={project.link!}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title}`}
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
              >
                View project
                <ArrowUpRight size={16} />
              </a>
            ) : (
              <span className="mt-2 text-sm text-slate-400">
                Mobile project coming soon
              </span>
            )}
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line text-iris">
                <Icon size={16} />
              </span>

              <span className="text-xs font-medium text-muted">
                {project.category}
              </span>
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-text">
              {project.title}
            </h3>
          </div>

          {hasLink && (
            <a
              href={project.link!}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-text transition-colors hover:border-iris hover:bg-iris hover:text-white"
            >
              <ArrowUpRight size={17} />
            </a>
          )}
        </div>

        <p className="mt-3 text-sm leading-6 text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-line px-3 py-1 text-xs text-muted"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const projects = siteData.projects as ProjectItem[];

  const shown = useMemo(() => {
    return projects.filter((project) => {
      if (filter === "all") return true;
      if (filter === "web") {
        return project.kind === "web" || !project.kind;
      }
      return project.kind === "mobile";
    });
  }, [filter, projects]);

  const whatsappMessage = encodeURIComponent(
    "Hello HebTech, I would like to discuss a project with you.",
  );

  const whatsappLink = `https://wa.me/${siteData.whatsapp}?text=${whatsappMessage}`;

  return (
    <section
      id="work"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36"
    >
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-slate-400">
            01 — Selected work
          </p>

          <h2 className="font-display text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Selected work
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-muted sm:text-base">
            From school websites to hospitality platforms and mobile
            applications, we build fast, reliable digital products that help
            businesses and institutions communicate, connect and grow.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === item.id
                  ? "border-iris bg-iris text-white"
                  : "border-line text-muted hover:text-text"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {shown.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:mt-14 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {shown.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-line px-6 py-12 text-center sm:mt-14 lg:mt-16">
          <Smartphone className="mx-auto mb-4 text-muted" size={24} />

          <h3 className="text-lg font-semibold text-text">
            Mobile projects coming soon
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted">
            We build Android and iOS applications tailored to your
            business and users. Get in touch to discuss your project.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-iris px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
          >
            Discuss a project
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      <div className="mt-16 border-t border-line pt-12 sm:mt-20 lg:mt-24 lg:pt-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Have a different vision?
            </p>

            <h3 className="font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Let&apos;s build something for you.
            </h3>

            <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
              Need a custom website, web application or mobile app?
              Let&apos;s discuss your idea and create a solution that
              fits your goals.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-iris px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:self-center"
          >
            Let&apos;s talk
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}