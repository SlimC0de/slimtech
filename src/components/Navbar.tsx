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

return ( <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5"> <div className="mx-auto max-w-6xl"> <div className="flex h-16 items-center justify-between rounded-2xl border border-line bg-surface px-4 shadow-sm md:rounded-full md:px-6">
{/* Logo */}
<a
href="#"
aria-label="HebTech home"
className="group flex items-center gap-2"
onClick={() => setOpen(false)}
> <span className="text-lg font-semibold tracking-[-0.05em] text-text">
  Heb<span className="text-gray-400">Tech</span>
</span>

        <span
          className="size-1.5 rounded-full bg-iris"
          aria-hidden="true"
        />
      </a>

      {/* Desktop navigation */}
      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-1 md:flex"
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="rounded-full px-4 py-2 text-sm text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-text"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Desktop CTA */}
      <a
        href="#contact"
        className="group hidden items-center gap-2 rounded-full bg-iris px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-indigo-700 md:flex"
      >
        Start a project

        <ArrowUpRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>

      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex size-10 items-center justify-center rounded-full border border-line bg-surface text-text transition-colors hover:bg-surface-2 md:hidden"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
    </div>

    {/* Mobile navigation */}
    <AnimatePresence>
      {open && (
        <motion.nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-2 overflow-hidden rounded-2xl border border-line bg-surface p-2 shadow-lg md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-4 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-text"
            >
              {link.label}

              <ArrowUpRight size={15} />
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-iris px-4 py-4 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Start a project
            <ArrowUpRight size={16} />
          </a>
        </motion.nav>
      )}
    </AnimatePresence>
  </div>
</header>

);
}
