import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

export default function TechStack() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
              04 — Technology
            </p>

            <h2 className="mt-5 text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              <span className="text-slate-900">
                Built with
              </span>
              <br />
              <span className="text-slate-400">
                the right tools.
              </span>
            </h2>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass glass-highlight rounded-[2rem] p-6 md:p-8"
          >
            <div className="flex flex-wrap gap-2.5">
              {siteData.technologies.map((technology, index) => (
                <motion.div
                  key={technology}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.03,
                  }}
                  className="glass-soft cursor-default rounded-full px-4 py-2.5 text-sm text-slate-500 transition-colors duration-300 hover:text-slate-900"
                >
                  {technology}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}