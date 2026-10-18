
import { useState } from "react";
import {
  ArrowLeft,
  Check,
  Copy,
  Coffee,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const bankDetails = {
  bankName: "Opay",
  accountName: "Onyeke Ebubechukwu Henry",
  accountNumber: "8153988773",
};

export default function Support() {
  const [copied, setCopied] = useState(false);

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(bankDetails.accountNumber);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#faf9f6] px-5 py-6 text-[#172033] sm:px-8 sm:py-10">
      {/* Subtle ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-amber-100/40 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-[28rem] h-72 w-72 rounded-full bg-stone-200/50 blur-[100px]"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Navigation */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-full border border-stone-200/80 bg-white/80 px-4 py-2.5 text-sm font-medium text-stone-600 transition hover:border-stone-300 hover:text-[#172033]"
        >
          <ArrowLeft
            size={15}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Back to home
        </Link>

        {/* Hero */}
        <section className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#172033] text-amber-300 shadow-lg shadow-slate-900/10"
          >
            <Coffee size={24} strokeWidth={1.7} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#94794f]">
              A little support goes a long way
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-[-0.055em] text-[#172033] sm:text-6xl">
              Buy me a coffee.
              <span className="mt-2 block text-stone-400">
                Help me build what's next.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
              Enjoy the things I create? Your support helps me keep building
              useful digital products, improving my work, and bringing new
              ideas to life. Every contribution is appreciated.
            </p>
          </motion.div>
        </section>

        {/* Transfer card */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-10 max-w-lg overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-[0_18px_55px_rgba(23,32,51,0.055)] sm:mt-12"
        >
          <div className="flex items-center justify-between border-b border-stone-100 px-5 py-5 sm:px-7">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                Your contribution
              </p>
              <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-[#172033]">
                Bank transfer
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5f2e9] text-[#806c4c]">
              <ArrowUpRight size={19} />
            </div>
          </div>

          <div className="space-y-5 px-5 py-6 sm:px-7 sm:py-7">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-400">
                Bank
              </p>
              <p className="mt-2 text-sm font-semibold text-[#172033]">
                {bankDetails.bankName}
              </p>
            </div>

            <div className="h-px bg-stone-100" />

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-400">
                Account name
              </p>
              <p className="mt-2 break-words text-sm font-semibold leading-6 text-[#172033]">
                {bankDetails.accountName}
              </p>
            </div>

            <div className="h-px bg-stone-100" />

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-400">
                Account number
              </p>

              <div className="mt-2.5 flex items-center justify-between gap-3 rounded-2xl border border-stone-200 bg-[#faf9f6] p-3.5">
                <span className="min-w-0 break-all font-mono text-xl font-semibold tracking-[0.08em] text-[#172033] sm:text-2xl">
                  {bankDetails.accountNumber}
                </span>

                <button
                  type="button"
                  onClick={copyAccountNumber}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-semibold transition active:scale-[0.97] ${
                    copied
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-[#172033] text-white hover:bg-[#28354b]"
                  }`}
                  aria-label="Copy account number"
                >
                  {copied ? (
                    <>
                      <Check size={14} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-[#f7f5ef] p-4">
              <div className="flex items-start gap-3">
                <Coffee
                  size={17}
                  className="mt-0.5 shrink-0 text-[#94794f]"
                />
                <p className="text-xs leading-6 text-stone-600 sm:text-sm">
                  Transfer any amount you're comfortable with using your
                  banking app. There's no fixed amount and absolutely no
                  pressure.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-8 max-w-md pb-6 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-stone-500">
            Thanks for being part of the journey
            <Heart size={14} className="fill-rose-400 text-rose-400" />
          </div>

          <p className="mt-2 text-xs text-stone-400">
            Every bit of encouragement means a lot.
          </p>

          <Link
            to="/"
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#172033] transition hover:text-[#94794f]"
          >
            Return to website
            <ArrowUpRight size={13} />
          </Link>
        </motion.footer>
      </div>
    </main>
  );
}
