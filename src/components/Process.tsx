import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-14 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              05 — Process
            </p>

            <h2 className="mt-6 text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              <span className="text-white">From idea</span>
              <br />
              <span className="text-white/25">to reality.</span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/40">
              A simple, focused process that keeps the project clear from
              the first conversation to the final launch.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute bottom-8 left-[23px] top-8 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent md:left-[27px]" />

            <div className="space-y-4">
              {siteData.process.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className="relative flex gap-5 md:gap-7"
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#050505] text-[10px] font-medium text-white/50 md:h-14 md:w-14">
                    {step.number}
                  </div>

                  <div className="glass glass-highlight flex-1 rounded-[1.75rem] p-6 md:p-8">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="text-2xl font-medium tracking-[-0.04em] text-white md:text-3xl">
                          {step.title}
                        </h3>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-white/35">
                          {step.description}
                        </p>
                      </div>

                      <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/40 md:flex">
                        {index === siteData.process.length - 1 ? (
                          <Check size={15} />
                        ) : (
                          <ArrowRight size={15} />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}