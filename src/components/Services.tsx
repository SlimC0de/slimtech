import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Services() {
  return (
    <section id="services" className="bg-[#090909]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
              What we do
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              From idea
              <br />
              to interface.
            </h2>

            <p className="mt-7 max-w-md text-base leading-7 text-white/45">
              We combine strategy, design and technology to create digital
              experiences that are useful, memorable and built to last.
            </p>
          </motion.div>

          <div>
            {siteData.services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="group border-t border-white/10 py-7"
              >
                <div className="flex gap-5 md:gap-10">
                  <span className="pt-1 text-xs text-white/25">
                    {service.number}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                        {service.title}
                      </h3>

                      <ArrowUpRight
                        size={20}
                        className="shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                      />
                    </div>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/40">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="border-t border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}