import { useState } from "react";
import {
  ArrowLeft,
  Check,
  Copy,
  Coffee,
  Heart,
  ArrowUpRight,
} from "lucide-react";
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
    <main className="relative min-h-screen overflow-hidden bg-transparent px-5 py-6 text-text sm:px-8 sm:py-10">
      <div className="relative mx-auto max-w-5xl">
        {/* Navigation */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:border-iris/40 hover:text-text"
        >
          <ArrowLeft
            size={15}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Back to home
        </Link>

        {/* Hero */}
        <section className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-iris/20 bg-iris/10 text-iris">
            <Coffee size={24} strokeWidth={1.7} />
          </div>

          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-iris">
            A little support goes a long way
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-[-0.055em] text-text sm:text-6xl">
            Buy me a coffee.
            <span className="mt-2 block text-muted">
              Help me build what's next.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted sm:text-base sm:leading-8">
            Enjoy the things I create? Your support helps me keep building
            useful digital products, improving my work, and bringing new
            ideas to life. Every contribution is appreciated.
          </p>
        </section>

        {/* Transfer card */}
        <section className="mx-auto mt-10 max-w-lg overflow-hidden rounded-3xl border border-line bg-surface shadow-sm sm:mt-12">
          <div className="flex items-center justify-between border-b border-line px-5 py-5 sm:px-7">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                Your contribution
              </p>
              <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-text">
                Bank transfer
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-iris/15 bg-iris/10 text-iris">
              <ArrowUpRight size={19} />
            </div>
          </div>

          <div className="space-y-5 px-5 py-6 sm:px-7 sm:py-7">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                Bank
              </p>
              <p className="mt-2 text-sm font-semibold text-text">
                {bankDetails.bankName}
              </p>
            </div>

            <div className="h-px bg-line" />

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                Account name
              </p>
              <p className="mt-2 break-words text-sm font-semibold leading-6 text-text">
                {bankDetails.accountName}
              </p>
            </div>

            <div className="h-px bg-line" />

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                Account number
              </p>

              <div className="mt-2.5 flex items-center justify-between gap-3 rounded-2xl border border-line bg-surface-2 p-3.5">
                <span className="min-w-0 break-all font-mono text-xl font-semibold tracking-[0.08em] text-text sm:text-2xl">
                  {bankDetails.accountNumber}
                </span>

                <button
                  type="button"
                  onClick={copyAccountNumber}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-semibold transition active:scale-[0.97] ${
                    copied
                      ? "bg-emerald-500/10 text-emerald-600"
                      : "bg-iris text-white shadow-sm hover:bg-indigo-700"
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

            <div className="rounded-2xl border border-line bg-surface-2 p-4">
              <div className="flex items-start gap-3">
                <Coffee size={17} className="mt-0.5 shrink-0 text-iris" />
                <p className="text-xs leading-6 text-muted sm:text-sm">
                  Transfer any amount you're comfortable with using your
                  banking app. There's no fixed amount and absolutely no
                  pressure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mx-auto mt-8 max-w-md pb-6 text-center">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-muted">
            Thanks for being part of the journey
            <Heart size={14} className="fill-rose-400 text-rose-400" />
          </div>

          <p className="mt-2 text-xs text-muted">
            Every bit of encouragement means a lot.
          </p>

          <Link
            to="/"
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-iris transition-colors hover:text-indigo-700"
          >
            Return to website
            <ArrowUpRight size={13} />
          </Link>
        </footer>
      </div>
    </main>
  );
}