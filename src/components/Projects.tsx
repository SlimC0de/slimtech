
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";

export default function Projects() {
  return (
    <section id="work" className="bg-[#f3f3f1] text-[#0b0b0b]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
              Selected work
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Ideas turned into
              <br />
              real products.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/50">
            A selection of digital experiences designed and developed by
            SlimTech.
          </p>
        </motion.div>

        <div className="mt-16 space-y-20">
          {siteData.projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
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
                <div className="relative overflow-hidden rounded-[2rem] bg-[#dededb]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-[420px] w-full object-cover md:h-[650px]"
                    whileHover={{ scale: 1.035 }}
                    transition={{ duration: 0.8 }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-80" />

                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                          {project.category}
                        </p>

                        <h3 className="mt-3 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                          {project.title}
                        </h3>

                        <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 md:text-base">
                          {project.description}
                        </p>
                      </div>

                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight size={21} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-black/10 px-3 py-1.5 text-xs text-black/50"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}