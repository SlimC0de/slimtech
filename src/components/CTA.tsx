import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { siteData } from "../data/siteData";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505]"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-14 lg:py-36">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="glass glass-highlight relative overflow-hidden rounded-[2.5rem] p-8 text-center md:p-14 lg:p-20"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_45%)]" />

          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
              <Sparkles size={18} className="text-blue-300" />
            </div>

            <p className="mt-7 text-[10px] uppercase tracking-[0.3em] text-white/30">
              06 — Start something new
            </p>

            <h2 className="mx-auto mt-6 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white">
              Have an idea?
              <br />
              <span className="text-white/25">Let's build it.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/40">
              Tell us what you're thinking, what you're trying to solve,
              or simply where you'd like to go next.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${siteData.email}`}
                className="glass-button glass-highlight group flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-1"
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