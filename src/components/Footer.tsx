import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090909]">
      <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-bold tracking-[-0.04em]">
              Slim<span className="text-white/40">Tech</span>
            </p>

            <p className="mt-2 text-sm text-white/30">
              Digital products, built to stand out.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/40">
            <a href="#work" className="transition-colors hover:text-white">
              Work
            </a>

            <a
              href="#services"
              className="transition-colors hover:text-white"
            >
              Services
            </a>

            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>

            <a
              href="mailto:hello@slimtech.dev"
              className="group flex items-center gap-1 transition-colors hover:text-white"
            >
              Email
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/25">
          © {new Date().getFullYear()} SlimTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}