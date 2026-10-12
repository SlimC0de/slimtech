import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Layers3,
  PenTool,
  Globe,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import { siteData } from "../data/siteData";

const icons = [
  Code2,
  Smartphone,
  Layers3,
  PenTool,
  Globe,
  GraduationCap,
  Lightbulb,
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 md:px-10 lg:px-14 lg:py-36">
        <div className="grid gap-14 sm:gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
              02 — What we do
            </p>

            <h2 className="mt-6 text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              <span className="text-slate-900">Ideas into</span>
              <br />
              <span className="text-slate-400">experiences.</span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-slate-500">
              We combine design, technology and strategy to create digital
              products that are useful, beautiful and built to last.
            </p>
          </motion.div>

          {/* Services */}
          <div className="space-y-5 lg:space-y-6">
            {siteData.services.map((service, index) => {
              const Icon = icons[index] ?? Code2;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="glass glass-highlight group rounded-[1.75rem] p-7 transition-transform duration-500 hover:-translate-y-1 md:p-8"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/50 text-slate-500 shadow-sm">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>

                    <span className="text-[10px] tracking-[0.2em] text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  <div className="mt-10">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-medium tracking-[-0.04em] text-slate-900 md:text-3xl">
                        {service.title}
                      </h3>

                      <ArrowUpRight
                        size={19}
                        className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-700"
                      />
                    </div>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}