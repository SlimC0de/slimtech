import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505]"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-14 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass glass-highlight relative overflow-hidden rounded-[2rem] p-7 md:p-12 lg:p-16"
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute right-[-10%] top-[-30%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <Sparkles size={14} className="text-blue-300" />
              </div>

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                03 — About SlimTech
              </p>
            </div>

            <h2 className="mt-10 max-w-5xl text-[clamp(2.7rem,6vw,6rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-white">
              We build digital experiences that make{" "}
              <span className="text-white/25">
                ideas feel real.
              </span>
            </h2>

            <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1fr_0.65fr]">
              <p className="max-w-2xl text-base leading-8 text-white/45">
                SlimTech is an independent digital studio focused on
                creating modern websites, mobile applications and digital
                products.
              </p>

              <div>
                <p className="text-xs leading-6 text-white/30">
                  From the first idea to the finished product, we focus on
                  clarity, usability and details that make the experience
                  feel considered.
                </p>

                <a
                  href="#contact"
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-white"
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