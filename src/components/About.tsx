import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-white text-[#090909]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/35">
              About SlimTech
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
              Small studio.
              <br />
              Serious products.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:pt-14"
          >
            <p className="text-xl leading-9 text-black/65 md:text-2xl">
              SlimTech is a digital studio focused on building modern
              websites, mobile applications and digital products.
            </p>

            <p className="mt-7 max-w-xl text-base leading-7 text-black/45">
              We care about the details that make a product feel finished:
              thoughtful interfaces, clear communication, reliable technology
              and experiences that make sense to the people using them.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}