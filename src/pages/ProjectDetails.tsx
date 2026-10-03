
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Layers3,
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
            to="/"
            className="glass-button mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back home
          </Link>
        </div>
      </main>
    );
  }

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
          <div className="flex items-center gap-3">
            <span className="glass-soft rounded-full px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-slate-500">
              {project.number}
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

      {/* Main project visual */}
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
          <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
            <img
              src={project.image}
              alt={project.title}
              className="h-[360px] w-full object-cover md:h-[560px] lg:h-[680px]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-white/10" />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 md:bottom-7 md:left-7 md:right-7">
              <div className="glass-soft rounded-2xl px-4 py-3 backdrop-blur-2xl">
                <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400">
                  Featured project
                </p>

                <p className="mt-1 text-sm text-slate-700">
                  {project.title}
                </p>
              </div>

              <div className="glass-soft flex h-11 w-11 items-center justify-center rounded-full text-slate-700">
                <ArrowUpRight size={17} />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Overview */}
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
              Turning an idea into a useful{" "}
              <span className="text-slate-400">
                digital experience.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500">
              This project was designed and developed by SlimTech with a
              focus on clarity, usability and a polished digital
              experience.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              From the interface to the technology behind it, every part
              of the product was considered to create something practical
              and enjoyable to use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology */}
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

      {/* Secondary visual */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="glass overflow-hidden rounded-[2rem] p-2 md:rounded-[2.5rem]"
        >
          <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              className="h-[350px] w-full object-cover md:h-[560px]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-14 lg:pb-20">
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
          <span>
            © {new Date().getFullYear()} SlimTech
          </span>

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