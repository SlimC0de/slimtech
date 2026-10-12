import type { CSSProperties } from "react";
import { profile, projects } from "../data/siteData";
import { BrowserFrame, PhoneFrame, Screen } from "./Frames";

const idx = (i: number) => ({ "--i": i }) as CSSProperties;

export default function Hero() {
  const web = projects.find((p) => p.kind === "web")!;
  const mobile = projects.find((p) => p.kind === "mobile")!;

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 size-[28rem] rounded-full bg-iris/10 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-8 pt-28 sm:gap-14 sm:px-8 sm:pb-12 sm:pt-36 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-16 lg:pt-40">
        {/* Introduction */}
        <div>
          <p
            className="hero-in inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted sm:text-sm"
            style={idx(0)}
          >
            <img
              src={profile.photo}
              alt=""
              className="size-5 rounded-full object-cover"
            />
            {profile.availability}
          </p>

          <h1
            className="hero-in mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            style={idx(1)}
          >
            {profile.headline}
          </h1>

          <p
            className="hero-in mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
            style={idx(2)}
          >
            {profile.intro}
          </p>

          <div
            className="hero-in mt-9 flex flex-wrap items-center gap-3"
            style={idx(3)}
          >
            <a
              href="#work"
              className="rounded-full bg-iris px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:px-6 sm:py-3 sm:text-base"
            >
              See selected work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold transition-colors hover:border-iris hover:text-iris sm:px-6 sm:py-3 sm:text-base"
            >
              Start a project
            </a>
          </div>
        </div>

        {/* Web and mobile application previews */}
        <div
          className="relative mx-auto w-full max-w-lg pb-4 sm:pb-8 lg:pb-0"
          aria-label="Preview of a web app and a mobile app"
        >
          <div className="stage-in" style={idx(0)}>
            <BrowserFrame url={`${web.id}.app`}>
              <Screen variant={web.variant} accent={web.accent} />
            </BrowserFrame>
          </div>

          <div
            className="stage-in absolute -bottom-1 right-0 w-[29%] sm:-right-3 lg:-right-6"
            style={{
              ...idx(1),
              ["--r" as string]: "4deg",
            }}
          >
            <PhoneFrame>
              <Screen variant={mobile.variant} accent={mobile.accent} />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}