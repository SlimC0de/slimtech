import type { CSSProperties, ReactNode } from "react";
import type { ScreenVariant } from "../data/siteData";

/* ───────── Device frames ───────── */

export function BrowserFrame({ children, url = "app.example.com" }: { children: ReactNode; url?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-slate-900/15">
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-3 py-2">
        <span className="size-2.5 rounded-full bg-[#ff6b6b]/80" />
        <span className="size-2.5 rounded-full bg-[#ffd166]/80" />
        <span className="size-2.5 rounded-full bg-[#6ee7b7]/80" />
        <span className="ml-3 truncate rounded-md bg-night/60 px-3 py-0.5 text-[10px] text-muted">{url}</span>
      </div>
      <div className="aspect-[16/10]">{children}</div>
    </div>
  );
}

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto aspect-[9/19] w-full overflow-hidden rounded-[1.25rem] border-[4px] border-[#1d2842] bg-surface shadow-2xl shadow-slate-900/25 sm:rounded-[1.75rem] sm:border-[5px] md:rounded-[2rem] md:border-[6px]">
      <div className="absolute left-1/2 top-1 z-10 h-2.5 w-12 -translate-x-1/2 rounded-full bg-black sm:top-1.5 sm:h-3.5 sm:w-16" />
      <div className="h-full pt-5 sm:pt-7">{children}</div>
    </div>
  );
}

/* ───────── Mock app screens ───────── */

const bar = "rounded-full bg-text/10";

function Dashboard() {
  return (
    <div className="flex h-full gap-3 p-3">
      <div className="hidden w-1/6 flex-col gap-2 sm:flex">
        <div className="h-3 w-3/4 rounded bg-[var(--a)]" />
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className={`h-2 ${bar}`} style={{ width: `${90 - i * 8}%` }} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg bg-surface-2 p-2">
              <div className={`mb-2 h-1.5 w-1/2 ${bar}`} />
              <div className="h-3 w-2/3 rounded bg-[var(--a)]/70" />
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-lg bg-surface-2 p-2">
          <svg viewBox="0 0 200 70" className="size-full" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="dg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="var(--a)" stopOpacity="0.4" />
                <stop offset="1" stopColor="var(--a)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 55 L25 45 L50 50 L75 28 L100 34 L125 18 L150 24 L175 8 L200 12 L200 70 L0 70Z" fill="url(#dg)" />
            <path d="M0 55 L25 45 L50 50 L75 28 L100 34 L125 18 L150 24 L175 8 L200 12" fill="none" stroke="var(--a)" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="space-y-1.5">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-[var(--a)]/50" />
              <div className={`h-1.5 flex-1 ${bar}`} />
              <div className="h-1.5 w-8 rounded-full bg-[var(--a)]/60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Store() {
  const tones = ["#6ee7b7", "#fcd34d", "#a5b4fc", "#fda4af"];
  return (
    <div className="flex h-full flex-col gap-2 p-3">
      <div className="flex items-center gap-2">
        <div className="h-3 w-12 rounded bg-[var(--a)]" />
        <div className="h-4 flex-1 rounded-full bg-surface-2" />
        <div className="size-4 rounded-full bg-surface-2" />
      </div>
      <div className="grid flex-1 grid-cols-4 gap-2">
        {tones.concat(tones).map((t, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex-1 rounded-lg opacity-80" style={{ background: `linear-gradient(135deg, ${t}, ${t}55)` }} />
            <div className={`h-1.5 w-4/5 ${bar}`} />
            <div className="h-1.5 w-1/3 rounded-full bg-[var(--a)]/70" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Feed() {
  return (
    <div className="flex h-full flex-col gap-2.5 p-3">
      <div className="h-3 w-1/3 rounded bg-[var(--a)]" />
      {[0, 1, 2].map((i) => (
        <div key={i} className="rounded-xl bg-surface-2 p-2.5">
          <div className="flex items-center gap-2">
            <div className="size-5 rounded-full bg-[var(--a)]/60" />
            <div className={`h-1.5 w-1/3 ${bar}`} />
          </div>
          <div className={`mt-2 h-1.5 w-full ${bar}`} />
          <div className={`mt-1.5 h-1.5 w-4/5 ${bar}`} />
          {i === 0 && <div className="mt-2 h-8 rounded-lg bg-[var(--a)]/25" />}
        </div>
      ))}
    </div>
  );
}

function Wallet() {
  return (
    <div className="flex h-full flex-col gap-3 p-3">
      <div className="rounded-2xl p-3" style={{ background: "linear-gradient(140deg, var(--a), #ff8a5c)" }}>
        <div className="h-1.5 w-1/4 rounded-full bg-black/25" />
        <div className="mt-2 h-4 w-2/3 rounded bg-black/35" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="aspect-square rounded-full bg-surface-2" />
        ))}
      </div>
      <div className="space-y-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="size-5 rounded-full bg-surface-2" />
            <div className={`h-1.5 flex-1 ${bar}`} />
            <div className="h-1.5 w-8 rounded-full bg-[var(--a)]/60" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Fitness() {
  return (
    <div className="flex h-full flex-col items-center gap-3 p-3">
      <svg viewBox="0 0 100 100" className="w-2/3" aria-hidden="true">
        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(18,24,41,0.08)" strokeWidth="9" />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="var(--a)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray="190 251"
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div className="flex w-full flex-1 items-end gap-1.5">
        {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-[var(--a)]/55" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

const screens: Record<ScreenVariant, () => ReactNode> = {
  dashboard: Dashboard,
  store: Store,
  feed: Feed,
  wallet: Wallet,
  fitness: Fitness,
};

export function Screen({ variant, accent }: { variant: ScreenVariant; accent: string }) {
  const Comp = screens[variant];
  return (
    <div className="size-full" style={{ "--a": accent } as CSSProperties}>
      <Comp />
    </div>
  );
}