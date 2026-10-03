import { ArrowUpRight } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-8 md:px-10 lg:px-14">
        <div className="border-t border-slate-200/70 pt-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <a
                href="#"
                className="text-2xl font-semibold tracking-[-0.06em] text-slate-900"
              >
                Slim<span className="text-slate-400">Tech</span>
              </a>

              <p className="mt-3 max-w-sm text-xs leading-6 text-slate-400">
                Digital products, websites and mobile experiences built
                with care.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href="#work"
                className="glass-soft rounded-full px-4 py-2.5 text-xs text-slate-500 transition-colors hover:text-slate-900"
              >
                Work
              </a>

              <a
                href="#services"
                className="glass-soft rounded-full px-4 py-2.5 text-xs text-slate-500 transition-colors hover:text-slate-900"
              >
                Services
              </a>

              <a
                href="#about"
                className="glass-soft rounded-full px-4 py-2.5 text-xs text-slate-500 transition-colors hover:text-slate-900"
              >
                About
              </a>

              <a
                href="#contact"
                className="glass-button group flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium"
              >
                Contact

                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-slate-200/60 pt-5 text-[10px] uppercase tracking-[0.18em] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} SlimTech
            </span>

            <span>
              {siteData.tagline}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}