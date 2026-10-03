import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { siteData } from "../data/siteData";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-14 lg:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="glass glass-highlight relative overflow-hidden rounded-[2.5rem] p-8 text-center md:p-12 lg:p-14"
        >
          {/* Soft reflection */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.75),transparent_45%)]" />

          <div className="relative">
            {/* Icon */}
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/50 shadow-sm">
              <Sparkles
                size={18}
                className="text-blue-500"
              />
            </div>

            <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-slate-400">
              06 — Start something new
            </p>

            <h2 className="mx-auto mt-5 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-slate-900">
              Have an idea?
              <br />
              <span className="text-slate-400">
                Let's build it.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-500">
              Tell us what you're thinking, what you're trying to solve,
              or simply where you'd like to go next.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${siteData.email}`}
                className="glass-button glass-highlight group flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium text-slate-900 transition-transform duration-300 hover:-translate-y-1"
              >
                <Mail size={16} />

                {siteData.email}

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}