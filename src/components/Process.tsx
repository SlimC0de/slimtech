
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute left-[10%] top-[15%] h-[320px] w-[320px] rounded-full bg-blue-500/[0.07] blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-14 lg:py-16">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/50 shadow-sm">
              <Sparkles
                size={14}
                className="text-blue-500"
              />
            </div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
              05 — Our process
            </p>
          </div>

          <h2 className="mt-6 max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
            <span className="text-slate-900">
              Simple process.
            </span>
            <br />
            <span className="text-slate-400">
              Thoughtful execution.
            </span>
          </h2>
        </motion.div>

        {/* Process cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {siteData.process.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="glass glass-highlight group relative overflow-hidden rounded-[1.75rem] p-6 md:p-7"
            >
              {/* Soft highlight */}
              <div className="pointer-events-none absolute right-[-25%] top-[-25%] h-40 w-40 rounded-full bg-blue-500/[0.06] blur-[60px] transition-all duration-500 group-hover:bg-blue-500/[0.1]" />

              <div className="relative">
               {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Step
                  </span>

                  <span className="text-xs text-slate-300">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}