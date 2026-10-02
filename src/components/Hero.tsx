import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-[#090909]">
      <div className="absolute inset-0">
        <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-white/[0.035] blur-3xl" />

        <div className="absolute bottom-[-20%] left-[20%] h-[450px] w-[450px] rounded-full bg-white/[0.025] blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#090909_75%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-20 pt-36 lg:px-10 lg:pb-24">
        <div className="max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 text-xs font-medium uppercase tracking-[0.3em] text-white/40"
          >
            Independent digital studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-6xl text-[clamp(3.5rem,9vw,9rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-white"
          >
            Digital products,
            <br />
            <span className="text-white/35">built to stand out.</span>
          </motion.h1>

          <div className="mt-12 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-xl text-base leading-7 text-white/50 md:text-lg"
            >
              {siteData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex shrink-0 gap-3"
            >
              <a
                href="#work"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-1"
              >
                View our work
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="flex items-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
              >
                Start a project
              </a>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/30"
        >
          Scroll to explore
          <ArrowDown size={15} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}