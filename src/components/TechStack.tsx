import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

export default function TechStack() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-14 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              04 — Technology
            </p>

            <h2 className="mt-6 text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              <span className="text-white">Built with</span>
              <br />
              <span className="text-white/25">the right tools.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-[2rem] p-6 md:p-10"
          >
            <div className="flex flex-wrap gap-3">
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
                  className="glass-soft cursor-default rounded-full px-5 py-3 text-sm text-white/55 transition-colors duration-300 hover:text-white"
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