
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Palette,
  Monitor,
  Smartphone,
} from "lucide-react";
import { siteData } from "../data/siteData";

type Filter = "all" | "web" | "mobile" | "uiux";

type ProjectItem = {
  number: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  link: string;
  technologies: string[];
  image?: string;
  kind?: "web" | "mobile" | "uiux";
};

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "web", label: "Websites" },
  { id: "mobile", label: "Mobile" },
  { id: "uiux", label: "UI/UX design" },
];

function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const isDesign = project.kind === "uiux" || Boolean(project.image);

  const Icon =
    project.kind === "mobile"
      ? Smartphone
      : isDesign
        ? Palette
        : Monitor;

  const isWebsite = project.kind === "web" || !project.kind;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group overflow-hidden rounded-2xl border border-line bg-surface"
    >
      <div className="relative overflow-hidden border-b border-line bg-slate-100">
        {project.image ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title}`}
            className="relative block aspect-[16/10] overflow-hidden"
          >
            <img
              src={project.image}
              alt={`${project.title} visual preview`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </a>
        ) : isWebsite ? (
          <div className="relative aspect-[16/10] overflow-hidden bg-white">
            <div className="flex h-10 items-center gap-2 border-b border-slate-200 bg-slate-50 px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

              <div className="ml-3 flex-1 truncate rounded-md bg-slate-200/70 px-3 py-1 text-[10px] text-slate-500">
                {project.link}
              </div>
            </div>

            <iframe
              src={project.link}
              title={`${project.title} live website preview`}
              loading="lazy"
              className="h-[calc(100%-2.5rem)] min-h-[260px] w-full border-0 bg-white"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} website`}
              className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-black/60 to-transparent py-5 pt-12 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100"
            >
              Open live website
              <ExternalLink size={14} />
            </a>
          </div>
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title}`}
            className="flex aspect-[16/10] flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-100 p-8 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-600 shadow-sm">
              <Icon size={30} strokeWidth={1.5} />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              {project.kind === "mobile"
                ? "Mobile application"
                : "Digital experience"}
            </p>

            <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
              View project
              <ArrowUpRight size={16} />
            </span>
          </a>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
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

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-text transition-colors hover:border-iris hover:bg-iris hover:text-night"
          >
            <ArrowUpRight size={18} />
          </a>
        </div>

        <p className="mt-3 text-sm leading-7 text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-line px-3 py-1.5 text-xs text-muted"
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

      if (filter === "mobile") {
        return project.kind === "mobile";
      }

      return project.kind === "uiux" || Boolean(project.image);
    });
  }, [filter, projects]);

  return (
    <section
      id="work"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8"
    >
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-slate-400">
            01 — Selected work
          </p>

          <h2 className="font-display text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Selected work
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
            From school websites to mobile applications and intuitive digital
            interfaces, we design and build digital experiences that help
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
                  ? "border-iris bg-iris text-night"
                  : "border-line text-muted hover:text-text"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {shown.length > 0 ? (
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {shown.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-line px-6 py-14 text-center">
          {filter === "mobile" ? (
            <Smartphone className="mx-auto mb-4 text-muted" size={28} />
          ) : (
            <Palette className="mx-auto mb-4 text-muted" size={28} />
          )}

          <h3 className="text-lg font-semibold text-text">
            {filter === "mobile"
              ? "Mobile projects coming soon"
              : "UI/UX projects coming soon"}
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-muted">
            {filter === "mobile"
              ? "We build mobile applications and digital products tailored to your business and users."
              : "We design user interfaces and experiences for websites, mobile apps and digital products."}{" "}
            Get in touch to discuss your project.
          </p>

          <a
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-iris px-5 py-3 text-sm font-semibold text-night transition-opacity hover:opacity-90"
          >
            Discuss a project
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      {/* Let's build something for you */}
      <div className="mt-20 border-t border-line pt-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Have a different vision?
            </p>

            <h3 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Let&apos;s build something for you.
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              Need a custom website, mobile application, digital product or
              UI/UX design? Let&apos;s discuss your idea and create a solution
              that fits your goals.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-iris px-6 py-3.5 text-sm font-semibold text-night transition-transform hover:-translate-y-0.5 sm:self-center"
          >
            Let&apos;s talk
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}