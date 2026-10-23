
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Layers3,
  Monitor,
  Sparkles,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { siteData } from "../data/siteData";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = siteData.projects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="glass w-full max-w-md rounded-[2rem] p-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
            404
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-900">
            Project not found.
          </h1>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            The project you're looking for doesn't exist.
          </p>

          <Link
            to="/#work"
            className="glass-button mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const hasLink =
    typeof project.link === "string" &&
    project.link.trim().length > 0;

  return (
    <main className="min-h-screen overflow-hidden text-slate-900">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="ambient-orb ambient-blue left-[-15%] top-[10%] h-[500px] w-[500px]" />

        <div className="ambient-orb ambient-white right-[-15%] top-[35%] h-[450px] w-[450px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.8),transparent_35%)]" />
      </div>

      {/* Header */}
      <header className="relative z-20 px-4 pt-4 md:px-6 md:pt-5">
        <div className="mx-auto max-w-6xl">
          <div className="glass flex h-16 items-center justify-between rounded-full px-4 md:px-6">
            <Link
              to="/"
              className="text-lg font-semibold tracking-[-0.05em] text-slate-900"
            >
              Slim<span className="text-slate-400">Tech</span>
            </Link>

            <Link
              to="/#work"
              className="glass-soft flex items-center gap-2 rounded-full px-4 py-2.5 text-xs text-slate-500 transition-colors hover:text-slate-900"
            >
              <ArrowLeft size={14} />
              All work
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-20 md:px-10 md:pt-24 lg:px-14 lg:pb-14 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="glass-soft rounded-full px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-slate-500">
              Project {project.number}
            </span>

            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
              {project.category}
            </span>
          </div>

          <h1 className="mt-6 max-w-6xl text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.86] tracking-[-0.08em] text-slate-900">
            {project.title}
            <span className="text-slate-300">.</span>
          </h1>

          <div className="mt-8 grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="glass-soft rounded-full px-3 py-2 text-[9px] uppercase tracking-[0.12em] text-slate-500"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Website preview */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="glass glass-highlight overflow-hidden rounded-[2rem] p-2 md:rounded-[2.5rem]"
        >
          <div className="relative overflow-hidden rounded-[1.5rem] bg-white md:rounded-[2rem]">
            {/* Browser toolbar */}
            <div className="flex h-12 items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 md:px-6">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />

              <div className="ml-3 flex-1 truncate rounded-md bg-slate-200/70 px-3 py-1.5 text-xs text-slate-500">
                {hasLink ? project.link : "Preview unavailable"}
              </div>

              {hasLink && (
                <a
                  href={project.link!}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} in a new tab`}
                  className="text-slate-500 transition-colors hover:text-slate-900"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            {hasLink ? (
              <iframe
                src={project.link!}
                title={`${project.title} website preview`}
                loading="lazy"
                className="h-[420px] w-full border-0 bg-white md:h-[600px] lg:h-[680px]"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            ) : (
              <div className="flex min-h-[360px] flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-100 px-6 py-16 text-center md:min-h-[500px]">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-blue-100 bg-white text-blue-600 shadow-sm">
                  <Monitor size={36} strokeWidth={1.4} />
                </div>

                <p className="mt-6 text-xs uppercase tracking-[0.25em] text-slate-400">
                  Website project
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-800">
                  {project.title}
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                  A live preview is not available yet. Contact us to
                  learn more about this project.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Project overview */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-14 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <Layers3 size={16} className="text-blue-500" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                Project overview
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-slate-900">
              Built to deliver a useful{" "}
              <span className="text-slate-400">
                digital experience.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500">
              {project.description}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Developed with a focus on responsive design, usability,
              performance, and the needs of the people using the product.
            </p>

            {hasLink && (
              <a
                href={project.link!}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              >
                Visit live project
                <ArrowUpRight size={16} />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Technology stack */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-[2rem] p-6 md:p-8 lg:p-10"
        >
          <div className="flex items-center gap-3">
            <Sparkles size={16} className="text-blue-500" />

            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
              Built with
            </p>
          </div>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {project.technologies.map((technology, index) => (
              <motion.div
                key={technology}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="glass-soft flex items-center gap-3 rounded-2xl px-4 py-3.5"
              >
                <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.7)]" />

                <span className="text-sm text-slate-500">
                  {technology}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to action */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass glass-highlight relative overflow-hidden rounded-[2.5rem] p-7 md:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute right-[-10%] top-[-50%] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="relative">
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
              Next project
            </p>

            <h2 className="mt-5 max-w-4xl text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-slate-900">
              Let's build something{" "}
              <span className="text-slate-400">
                worth remembering.
              </span>
            </h2>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${siteData.email}`}
                className="glass-button group inline-flex w-fit items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-transform duration-300 hover:-translate-y-1"
              >
                Start a project
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <Link
                to="/#work"
                className="glass-soft inline-flex w-fit items-center gap-2 rounded-full px-6 py-3.5 text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                <ArrowLeft size={16} />
                View all work
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200/70 px-6 py-7 md:px-10 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[10px] uppercase tracking-[0.18em] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} SlimTech</span>

          <Link
            to="/"
            className="transition-colors hover:text-slate-900"
          >
            Back to home
          </Link>
        </div>
      </footer>
    </main>
  );
}