import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-14 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass glass-highlight relative overflow-hidden rounded-[2rem] p-7 md:p-10 lg:p-12"
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute right-[-10%] top-[-30%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[100px]" />

          {/* Soft reflection */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.7),transparent_40%)]" />

          <div className="relative">
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/50 shadow-sm">
                <Sparkles
                  size={14}
                  className="text-blue-500"
                />
              </div>

              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                03 — About SlimTech
              </p>
            </div>

            {/* Heading */}
            <h2 className="mt-7 max-w-5xl text-[clamp(2.7rem,6vw,6rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-slate-900">
              We build digital experiences that make{" "}
              <span className="text-slate-400">
                ideas feel real.
              </span>
            </h2>

            {/* Content */}
            <div className="mt-8 grid gap-8 border-t border-slate-200/70 pt-8 md:grid-cols-[1fr_0.65fr]">
              <p className="max-w-2xl text-base leading-8 text-slate-500">
                SlimTech is an independent digital studio focused on
                creating modern websites, mobile applications and digital
                products.
              </p>

              <div>
                <p className="text-xs leading-6 text-slate-400">
                  From the first idea to the finished product, we focus on
                  clarity, usability and details that make the experience
                  feel considered.
                </p>

                <a
                  href="#contact"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-900"
                >
                  Work with us

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}