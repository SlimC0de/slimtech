import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { siteData } from "../data/siteData";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = siteData.projects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#090909] px-6 text-white">
        <div className="text-center">
          <p className="text-sm text-white/40">404</p>

          <h1 className="mt-3 text-4xl font-semibold">
            Project not found.
          </h1>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
          >
            <ArrowLeft size={16} />
            Back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#090909] text-white">
      {/* Header */}
      <header className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-7 lg:px-10">
        <Link
          to="/"
          className="text-xl font-bold tracking-[-0.04em]"
        >
          Slim<span className="text-white/40">Tech</span>
        </Link>

        <Link
          to="/#work"
          className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />
          All work
        </Link>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
            {project.category}
          </p>

          <h1 className="mt-5 max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
            {project.title}
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-white/50">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="border border-white/10 px-4 py-2 text-xs text-white/50"
              >
                {technology}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Main image */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden rounded-[2rem]"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-[450px] w-full object-cover md:h-[700px]"
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-[1200px] px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
              Project overview
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
              Turning an idea into a useful digital experience.
            </h2>

            <p className="mt-7 text-base leading-8 text-white/45">
              This project was designed and developed by SlimTech with a
              focus on clarity, usability and a polished digital
              experience.
            </p>

            <p className="mt-5 text-base leading-8 text-white/45">
              Every part of the product was considered from the interface
              and user experience to the underlying technology used to
              bring the idea to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project image */}
      <section className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[2rem] bg-[#151515]"
        >
          <img
            src={project.image}
            alt={`${project.title} project`}
            className="h-[400px] w-full object-cover md:h-[650px]"
          />
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1200px] px-6 py-24 lg:px-10 lg:py-36">
        <div className="border-t border-white/10 pt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-white/30">
            Have a similar idea?
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Let's build something worth remembering.
          </h2>

          <a
            href="mailto:hello@slimtech.dev"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-1"
          >
            Start a project
            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] justify-between text-xs text-white/25">
          <span>© {new Date().getFullYear()} SlimTech</span>

          <Link
            to="/"
            className="transition-colors hover:text-white"
          >
            Back to home
          </Link>
        </div>
      </footer>
    </main>
  );
}