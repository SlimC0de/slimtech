import { ArrowUpRight } from "lucide-react";
import { profile, siteData } from "../data/siteData";
import AnimatedLogo from "./AnimatedLogo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 pb-8 md:px-10 lg:px-14">
        <div className="pt-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            {/* Brand and description */}
            <div className="max-w-md">
              <a
                href="#top"
                aria-label="HebTech home"
                className="inline-flex items-center"
              >
                <AnimatedLogo className="h-9 w-auto" />
              </a>

              <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
                {siteData.description}
              </p>

              {/* Social links */}
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                {profile.links.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted transition-colors hover:text-iris"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer navigation */}
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-2"
            >
              <a
                href="#work"
                className="rounded-full border border-line px-4 py-2.5 text-sm text-muted transition-colors hover:border-iris hover:text-text"
              >
                Work
              </a>

              <a
                href="#services"
                className="rounded-full border border-line px-4 py-2.5 text-sm text-muted transition-colors hover:border-iris hover:text-text"
              >
                Services
              </a>

              <a
                href="#about"
                className="rounded-full border border-line px-4 py-2.5 text-sm text-muted transition-colors hover:border-iris hover:text-text"
              >
                About
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-iris px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
              >
                Contact
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </nav>
          </div>

          {/* Copyright */}
          <div className="mt-10 flex flex-col gap-3 border-t border-line pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </span>

            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}