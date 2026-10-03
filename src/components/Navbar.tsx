
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <div className="mx-auto max-w-6xl">
        <div className="glass glass-highlight flex h-16 items-center justify-between rounded-full px-4 md:px-6">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2"
          >
            <span className="text-lg font-semibold tracking-[-0.05em] text-white">
              Slim
              <span className="text-white/45">Tech</span>
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-white/55 transition-all duration-300 hover:bg-white/[0.07] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="glass-button group hidden items-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 md:flex"
          >
            Start a project

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="glass-button flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass mt-2 overflow-hidden rounded-[1.75rem] p-2 md:hidden"
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-4 text-sm text-white/65 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}

                  <ArrowUpRight size={15} />
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="glass-button mt-2 flex items-center justify-center gap-2 rounded-2xl px-4 py-4 text-sm font-medium text-white"
              >
                Start a project
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}