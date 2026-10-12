import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const MIN_DURATION = 1400; // minimum time the loader stays visible (ms)

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  /* Hide once the page has loaded (and the minimum time has passed) */
  useEffect(() => {
    let timeout: number;

    const finish = () => {
      const wait = Math.max(0, MIN_DURATION - performance.now());
      timeout = window.setTimeout(() => setVisible(false), wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(timeout);
    };
  }, []);

  /* Lock scrolling while the loader is showing */
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const draw = (delay: number, duration = 0.9) => ({
    initial: { pathLength: reduceMotion ? 1 : 0 },
    animate: { pathLength: 1 },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface"
        >
          <span className="sr-only">Loading HebTech</span>

          <svg
            viewBox="0 0 96 96"
            fill="none"
            aria-hidden="true"
            className="size-20 text-iris sm:size-24"
          >
            {/* Hexagon */}
            <motion.path
              d="M48 4 L86 26 V70 L48 92 L10 70 V26 Z"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinejoin="round"
              {...draw(0, 1)}
            />

            {/* H */}
            <motion.path
              d="M34 30 V66 M62 30 V66 M34 48 H62"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              {...draw(0.5, 0.8)}
            />

            {/* Center dot */}
            <motion.circle
              cx="48"
              cy="48"
              r="5"
              fill="currentColor"
              initial={{ scale: reduceMotion ? 1 : 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : 1,
                type: "spring",
                stiffness: 300,
                damping: 16,
              }}
              style={{ transformOrigin: "48px 48px" }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}