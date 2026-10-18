import { useEffect, useState } from "react";
import hebtechLogo from "../assets/hebtech-logo.png";

import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "TechStack", href: "#techStack" },
  { label: "Process", href: "#process" },
];

const sectionIds = [
  "work",
  "services",
  "about",
  "techStack",
  "process",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Track the active section and hide the indicator outside the main sections.
  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = pageHeight - viewportHeight;

      // Hide the indicator near the top of the page.
      if (scrollY < 120) {
        setActiveSection("");
        ticking = false;
        return;
      }

      // Hide the indicator when the footer is reached.
      if (maxScroll > 0 && scrollY >= maxScroll - 80) {
        setActiveSection("");
        ticking = false;
        return;
      }

      const marker = 160;
      let currentSection = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (
          section &&
          section.getBoundingClientRect().top <= marker
        ) {
          currentSection = id;
        }
      }

      // If no tracked section is active, hide the indicator.
      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection,
      );

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Glass effect after scrolling.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`pointer-events-none fixed left-0 right-0 top-0 z-50 px-2.5 transition-[padding] duration-300 md:px-6 ${
        scrolled ? "pt-1.5 md:pt-3" : "pt-2.5 md:pt-5"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`pointer-events-auto relative flex items-center justify-between overflow-hidden rounded-full border pl-4 pr-1.5 backdrop-blur-xl transition-all duration-300 md:px-6 ${
            scrolled
              ? "h-14 border-line bg-surface/80 shadow-lg shadow-slate-900/[0.07]"
              : "h-14 border-line/70 bg-surface/60 shadow-sm md:h-16"
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            aria-label="HebTech home"
            className="group flex items-center"
            onClick={() => {
              setOpen(false);
              setActiveSection("");
            }}
          >
            <img
              src={hebtechLogo}
              alt="HebTech"
              className="h-9 w-auto transition-transform duration-300 group-hover:-rotate-2"
            />
          </a>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {links.map((link) => {
              const isActive = activeSection === link.href.slice(1);

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setActiveSection(link.href.slice(1))}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                    isActive
                      ? "font-medium text-text"
                      : "text-muted hover:text-text"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-surface-2 ring-1 ring-line"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}

                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={() => setActiveSection("")}
            className="group hidden items-center gap-2 rounded-full bg-iris px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-iris/30 ring-1 ring-inset ring-white/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg hover:shadow-iris/40 md:flex"
          >
            Start a project

            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex size-11 items-center justify-center rounded-full border border-line bg-surface/90 text-text transition-colors hover:bg-surface-2 md:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Scroll progress line */}
          <motion.div
            aria-hidden="true"
            style={{ scaleX: progress }}
            className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-iris/80"
          />
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pointer-events-auto mt-2 overflow-hidden rounded-[1.75rem] border border-line bg-surface/95 p-2 shadow-2xl shadow-slate-900/15 backdrop-blur-xl md:hidden"
            >
              {links.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.05,
                      duration: 0.2,
                    }}
                    onClick={() => {
                      setOpen(false);
                      setActiveSection(link.href.slice(1));
                    }}
                    className={`flex items-center justify-between rounded-full px-5 py-4 text-sm transition-colors ${
                      isActive
                        ? "bg-surface-2 font-medium text-text"
                        : "text-muted hover:bg-surface-2 hover:text-text"
                    }`}
                  >
                    {link.label}

                    {isActive ? (
                      <span className="size-1.5 rounded-full bg-iris" />
                    ) : (
                      <ArrowUpRight size={15} />
                    )}
                  </motion.a>
                );
              })}

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.05 + links.length * 0.05,
                  duration: 0.2,
                }}
                onClick={() => {
                  setOpen(false);
                  setActiveSection("");
                }}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-iris px-4 py-4 text-sm font-semibold text-white shadow-md shadow-iris/30 ring-1 ring-inset ring-white/20 transition-colors hover:bg-indigo-700"
              >
                Start a project
                <ArrowUpRight size={16} />
              </motion.a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}