import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const MIN_DURATION = 800;
const DRAW_DURATION = 2.6;
const HOLD_DURATION = 1800;

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const startedAt = performance.now();
    let timeout: number | undefined;

    const finish = () => {
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(
        0,
        MIN_DURATION + DRAW_DURATION * 1000 + HOLD_DURATION - elapsed
      );

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
      if (timeout !== undefined) window.clearTimeout(timeout);
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
      ease: [0.65, 0, 0.35, 1] as const,
    },
  });

  const point = (delay: number) => ({
    initial: { scale: reduceMotion ? 1 : 0 },
    animate: { scale: 1 },
    transition: {
      duration: reduceMotion ? 0 : 0.3,
      delay: reduceMotion ? 0 : delay,
      type: "spring" as const,
      stiffness: 180,
      damping: 14,
    },
  });

  const fadeDuration = reduceMotion ? 0 : 0.35;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: fadeDuration,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <span className="sr-only">Loading HebTech</span>

          <svg
            viewBox="0 0 200 200"
            fill="none"
            aria-hidden="true"
            className="w-64 h-64 max-w-[82vw] max-h-[82vw] text-[#0875F9] sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            {/* Upper circuit */}
            <motion.path
              d="M24 24 H68 V80 H116 V24 H160 V176 H140 V40"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...draw(0, 1.2)}
            />

            {/* Left circuit */}
            <motion.path
              d="M44 160 V40 H24 V176 H68 V100 H108"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...draw(0.7, 1.2)}
            />

            {/* Middle and lower circuit */}
            <motion.path
              d="M60 100 H116 V176"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...draw(1.4, 0.9)}
            />

            {/* Circuit endpoints */}
            {[
              { cx: 24, cy: 24, delay: 0 },
              { cx: 44, cy: 160, delay: 1.3 },
              { cx: 140, cy: 40, delay: 1.8 },
              { cx: 116, cy: 176, delay: 2.1 },
            ].map(({ cx, cy, delay }) => (
              <motion.circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="6"
                fill="currentColor"
                style={{ transformOrigin: `${cx}px ${cy}px` }}
                {...point(delay)}
              />
            ))}
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}