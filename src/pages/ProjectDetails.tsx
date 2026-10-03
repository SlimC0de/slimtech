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
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
        <div className="glass w-full max-w-md rounded-[2rem] p-10 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            404
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">
            Project not found.
          </h1>

          <p className="mt-4 text-sm leading-7 text-white/35">
            The project you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="glass-button mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white"
          >
            <ArrowLeft size={16} />
            Back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="ambient-orb ambient-blue left-[-15%] top-[10%] h-[500px] w-[500px]" />

        <div className="ambient-orb ambient-white right-[-15%] top-[35%] h-[450px] w-[450px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.07),transparent_35%)]" />
      </div>

      {/* Header */}
      <header className="relative z-20 px-4 pt-4 md:px-6 md:pt-5">
        <div className="mx-auto max-w-7xl">
          <div className="glass flex h-16 items-center justify-between rounded-full px-4 md:px-6">
            <Link
              to="/"
              className="text-lg font-semibold tracking-[-0.05em]"
            >
              Slim<span className="text-white/40">Tech</span>
            </Link>

            <Link
              to="/#work"
              className="glass-soft flex items-center gap-2 rounded-full px-4 py-2.5 text-xs text-white/50 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} />
              All work
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 lg:px-14 lg:pb-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex items-center gap-3">
            <span className="glass-soft rounded-full px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/40">
              {project.number}
            </span>

            <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              {project.category}
            </span>
          </div>

          <h1 className="mt-7 max-w-6xl text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.84] tracking-[-0.08em]">
            {project.title}
            <span className="text-white/20">.</span>
          </h1>

          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-base leading-8 text-white/40 md:text-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="glass-soft rounded-full px-3 py-2 text-[9px] uppercase tracking-[0.12em] text-white/40"
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
          initial={{ opacity: 0, y: 45, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="glass glass-highlight overflow-hidden rounded-[2rem] p-2 md:rounded-[2.5rem]"
        >
          <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
            <img
              src={project.image}
              alt={project.title}
              className="h-[420px] w-full object-cover md:h-[650px] lg:h-[760px]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-white/[0.06]" />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 md:bottom-8 md:left-8 md:right-8">
              <div className="glass-soft rounded-2xl px-4 py-3 backdrop-blur-2xl">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Featured project
                </p>

                <p className="mt-1 text-sm text-white/70">
                  {project.title}
                </p>
              </div>

              <div className="glass-soft flex h-11 w-11 items-center justify-center rounded-full">
                <ArrowUpRight size={17} />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-14 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <Layers3 size={16} className="text-blue-300" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                Project overview
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
              Turning an idea into a useful{" "}
              <span className="text-white/25">
                digital experience.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/40">
              This project was designed and developed by SlimTech with a
              focus on clarity, usability and a polished digital
              experience.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/30">
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
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-[2rem] p-7 md:p-10 lg:p-12"
        >
          <div className="flex items-center gap-3">
            <Sparkles size={16} className="text-blue-300" />

            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Built with
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {project.technologies.map((technology, index) => (
              <motion.div
                key={technology}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="glass-soft flex items-center gap-3 rounded-2xl px-5 py-4"
              >
                <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.7)]" />

                <span className="text-sm text-white/55">
                  {technology}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Secondary visual */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-28 md:px-6 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="glass overflow-hidden rounded-[2rem] p-2 md:rounded-[2.5rem]"
        >
          <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              className="h-[400px] w-full object-cover md:h-[650px]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 md:px-10 lg:px-14 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass glass-highlight relative overflow-hidden rounded-[2.5rem] p-8 md:p-14 lg:p-16"
        >
          <div className="pointer-events-none absolute right-[-10%] top-[-50%] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="relative">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Next project
            </p>

            <h2 className="mt-6 max-w-4xl text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              Let's build something{" "}
              <span className="text-white/25">
                worth remembering.
              </span>
            </h2>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${siteData.email}`}
                className="glass-button group inline-flex w-fit items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-1"
              >
                Start a project
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <Link
                to="/#work"
                className="glass-soft inline-flex w-fit items-center gap-2 rounded-full px-6 py-3.5 text-sm text-white/50 transition-colors hover:text-white"
              >
                <ArrowLeft size={16} />
                View all work
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.07] px-6 py-8 md:px-10 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[10px] uppercase tracking-[0.18em] text-white/20 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} SlimTech
          </span>

          <Link
            to="/"
            className="transition-colors hover:text-white/60"
          >
            Back to home
          </Link>
        </div>
      </footer>
    </main>
  );
}