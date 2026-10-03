import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-orb ambient-blue left-[-12%] top-[20%] h-[420px] w-[420px] md:h-[600px] md:w-[600px]" />

        <div className="ambient-orb ambient-white right-[-10%] top-[5%] h-[350px] w-[350px] md:h-[500px] md:w-[500px]" />

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="ambient-orb ambient-blue bottom-[-15%] left-[35%] h-[400px] w-[400px]"
        />
      </div>

      {/* Hero content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32 md:px-10 lg:px-14">
        <div className="mx-auto w-full max-w-6xl text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex justify-center"
          >
            <div className="glass flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
              <Sparkles
                size={12}
                className="text-blue-500"
              />

              Independent digital studio
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-balance text-[clamp(3.5rem,10vw,9rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-slate-900"
          >
            Digital products
            <br />

            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-400 bg-clip-text text-transparent">
              made beautifully.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="mx-auto mt-9 max-w-2xl text-sm leading-7 text-slate-500 md:text-base"
          >
            {siteData.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#work"
              className="glass-button glass-highlight group flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-transform duration-300 hover:-translate-y-1"
            >
              View our work

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full px-6 py-3.5 text-sm text-slate-500 transition-colors duration-300 hover:text-slate-900"
            >
              Start a project
            </a>
          </motion.div>
        </div>

        {/* Floating glass panel */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-20 w-full max-w-5xl"
        >
          <div className="glass relative overflow-hidden rounded-[2rem] p-2">

            {/* Inner light */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.8),transparent_55%)]" />

            <div className="relative flex min-h-[190px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white/35 md:min-h-[260px]">

              {/* Decorative ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-32 w-32 rounded-full border border-slate-300/50 md:h-48 md:w-48"
              />

              {/* Blue glow */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.25, 0.5, 0.25],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-20 w-20 rounded-full bg-blue-400/20 blur-2xl md:h-32 md:w-32"
              />

              <div className="relative text-center">
                <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">
                  SlimTech
                </p>

                <p className="mt-3 text-sm text-slate-500 md:text-base">
                  Websites · Mobile Apps · Digital Products
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mx-auto mt-12 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-slate-400 transition-colors hover:text-slate-700"
        >
          Explore

          <ArrowDown
            size={13}
            className="animate-bounce"
          />
        </motion.a>
      </div>
    </section>
  );
}