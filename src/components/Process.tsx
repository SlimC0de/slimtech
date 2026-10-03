import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

export default function Process() {
  return (
    <section className="bg-[#f3f3f1] text-[#090909]">
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/35">
            Our process
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Simple process.
            <br />
            Thoughtful execution.
          </h2>
        </motion.div>

        <div className="mt-10 grid border-l border-t border-black/10 md:grid-cols-2 lg:grid-cols-4">
          {siteData.process.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="border-b border-r border-black/10 p-6 md:p-7"
            >
              <span className="text-xs text-black/30">
                {item.number}
              </span>

              <h3 className="mt-12 text-2xl font-semibold tracking-[-0.03em]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/50">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}