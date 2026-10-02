import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

export default function TechStack() {
  return (
    <section className="border-t border-white/10 bg-[#090909]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
            Technology
          </p>

          <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            The tools behind
            <br />
            the work.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-4">
          {siteData.technologies.map((technology, index) => (
            <motion.div
              key={technology}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-r border-white/10 px-5 py-8 text-sm text-white/50 transition-colors duration-300 hover:bg-white/[0.03] hover:text-white md:px-7"
            >
              {technology}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}