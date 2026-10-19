import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const MIN_DURATION = 800;

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const startedAt = performance.now();
    let timeout: number | undefined;

    const finish = () => {
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(0, MIN_DURATION - elapsed);

      timeout = window.setTimeout(() => {
        setVisible(false);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);

      if (timeout !== undefined) {
        window.clearTimeout(timeout);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const draw = (delay: number, duration: number) => ({
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
          transition={{
            duration: reduceMotion ? 0 : 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <span className="sr-only">Loading HebTech</span>

          <svg
            viewBox="0 0 96 96"
            fill="none"
            aria-hidden="true"
            className="size-12 text-iris sm:size-14"
          >
            <motion.path
              d="M48 4 L86 26 V70 L48 92 L10 70 V26 Z"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinejoin="round"
              {...draw(0, 0.5)}
            />

            <motion.path
              d="M34 30 V66 M62 30 V66 M34 48 H62"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              {...draw(0.2, 0.4)}
            />

            <motion.circle
              cx="48"
              cy="48"
              r="5"
              fill="currentColor"
              initial={{ scale: reduceMotion ? 1 : 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                delay: reduceMotion ? 0 : 0.55,
                type: "spring",
                stiffness: 400,
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