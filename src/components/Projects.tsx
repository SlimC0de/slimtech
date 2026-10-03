
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";

export default function Projects() {
  return (
    <section
      id="work"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-14 lg:py-16">
        {/* Section heading */}
        <div className="grid gap-6 md:grid-cols-[1fr_0.45fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
              01 — Selected work
            </p>

            <h2 className="mt-5 text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              <span className="text-slate-900">
                Built to be
              </span>
              <br />
              <span className="text-slate-400">
                experienced.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-sm text-sm leading-7 text-slate-500"
          >
            A selection of digital products and experiences created by
            SlimTech.
          </motion.p>
        </div>

        {/* Projects */}
        <div className="mt-12 space-y-6">
          {siteData.projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="glass glass-highlight relative overflow-hidden rounded-[2rem] p-2">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-[1.5rem]">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="h-[340px] w-full object-cover md:h-[500px] lg:h-[580px]"
                      whileHover={{ scale: 1.035 }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Darken only the bottom behind the text */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 45%, transparent 75%)",
                      }}
                    />

                    {/* Number */}
                    <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] !text-white backdrop-blur-xl">
                      {project.number}
                    </div>

                    {/* Arrow */}
                    <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/20 !text-white backdrop-blur-xl transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight size={19} />
                    </div>

                    {/* Image title */}
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                      <p className="text-[10px] uppercase tracking-[0.25em] !text-white">
                        {project.category}
                      </p>

                      <h3 className="mt-2 text-4xl font-semibold tracking-[-0.055em] !text-white md:text-6xl">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Project information */}
                  <div className="grid gap-5 px-4 py-5 md:grid-cols-[1fr_auto] md:items-center md:px-6 md:py-5">
                    <p className="max-w-2xl text-sm leading-7 text-slate-500">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-slate-200 bg-white/40 px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-slate-500"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}