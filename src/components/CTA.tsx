import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="bg-[#090909]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/10 pt-16 md:pt-24"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
            Start a project
          </p>

          <h2 className="mt-6 max-w-5xl text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
            Have an idea
            <br />
            <span className="text-white/35">worth building?</span>
          </h2>

          <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <p className="max-w-md text-base leading-7 text-white/45">
              Tell us what you're building and let's turn the idea into a
              digital product people will remember.
            </p>

            <a
              href="mailto:hello@slimtech.dev"
              className="group flex w-fit items-center gap-3 border-b border-white/30 pb-3 text-lg font-medium transition-colors hover:border-white"
            >
              hello@slimtech.dev
              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}