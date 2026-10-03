
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { siteData } from "../data/siteData";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-14 lg:py-16">
        {/* Main About */}
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
                {siteData.description}
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

        {/* Founder */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6"
        >
          <div className="glass glass-highlight relative overflow-hidden rounded-[2rem] p-7 md:p-10 lg:p-12">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute left-[-10%] top-[-30%] h-[300px] w-[300px] rounded-full bg-blue-500/[0.08] blur-[100px]" />

            <div className="relative grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-center">
              {/* Founder image */}
              <div className="flex justify-center md:justify-start">
                <div className="flex h-52 w-52 items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/50 shadow-lg md:h-64 md:w-64">
                  {siteData.founder.image ? (
                    <img
                      src={siteData.founder.image}
                      alt={siteData.founder.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-300">
                      Founder
                    </span>
                  )}
                </div>
              </div>

              {/* Founder information */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                  The Founder
                </p>

                <h3 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-slate-900">
                  {siteData.founder.name}
                </h3>

                <p className="mt-3 text-sm font-medium text-blue-500">
                  {siteData.founder.role}
                </p>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
                  {siteData.founder.bio}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6"
        >
          <div className="glass glass-highlight relative overflow-hidden rounded-[2rem] p-7 md:p-10 lg:p-12">
            {/* Soft reflection */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.7),transparent_40%)]" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/50 shadow-sm">
                  <Sparkles
                    size={14}
                    className="text-blue-500"
                  />
                </div>

                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                  Our Team
                </p>
              </div>

              <div className="mt-7 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
                <h3 className="max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-slate-900">
                  A growing team building{" "}
                  <span className="text-slate-400">
                    what comes next.
                  </span>
                </h3>

                <p className="text-sm leading-7 text-slate-500">
                  SlimTech brings together technology, creativity and
                  problem-solving to turn ideas into meaningful digital
                  experiences.
                </p>
              </div>

              {/* Team member cards */}
              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {siteData.team.map((member) => (
                  <div
                    key={`${member.name}-${member.role}`}
                    className="glass-soft rounded-[1.5rem] p-5"
                  >
                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white/50">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-[9px] uppercase tracking-[0.15em] text-slate-300">
                          Photo
                        </span>
                      )}
                    </div>

                    <h4 className="mt-5 text-lg font-medium tracking-[-0.03em] text-slate-900">
                      {member.name}
                    </h4>

                    <p className="mt-1 text-xs text-slate-400">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}