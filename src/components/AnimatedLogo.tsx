
import { motion, useReducedMotion } from "framer-motion";

type AnimatedLogoProps = {
  className?: string;
};

export default function AnimatedLogo({
  className = "h-7 w-auto",
}: AnimatedLogoProps) {
  const reduceMotion = useReducedMotion();

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

  return (
    <div
      className={`inline-flex items-center gap-0 ${className}`}
      role="img"
      aria-label="HebTech"
    >
      {/* Animated circuit H */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-7 w-7 shrink-0"
        style={{ color: "#554BFF" }}
      >
        <motion.path
          d="M24 24 H68 V80 H116 V24 H160 V176 H140 V40"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...draw(0, 1.2)}
        />

        <motion.path
          d="M44 160 V40 H24 V176 H68 V100 H108"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...draw(0.7, 1.2)}
        />

        <motion.path
          d="M60 100 H116 V176"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...draw(1.4, 0.9)}
        />

        <motion.circle
          cx="24"
          cy="24"
          r="6"
          fill="currentColor"
          style={{ transformOrigin: "24px 24px" }}
          {...point(0)}
        />

        <motion.circle
          cx="44"
          cy="160"
          r="6"
          fill="currentColor"
          style={{ transformOrigin: "44px 160px" }}
          {...point(1.3)}
        />

        <motion.circle
          cx="140"
          cy="40"
          r="6"
          fill="currentColor"
          style={{ transformOrigin: "140px 40px" }}
          {...point(1.8)}
        />

        <motion.circle
          cx="116"
          cy="176"
          r="6"
          fill="currentColor"
          style={{ transformOrigin: "116px 176px" }}
          {...point(2.1)}
        />
      </svg>

      {/* Original-style wordmark */}
      <motion.span
        className="whitespace-nowrap text-[20px] leading-none tracking-tight"
        initial={{
          opacity: reduceMotion ? 1 : 0,
          x: reduceMotion ? 0 : -5,
        }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.5,
          delay: reduceMotion ? 0 : 1.5,
          ease: "easeOut",
        }}
      >
        <span className="font-semibold text-[#172033]">eb</span>
        <span className="font-medium text-[#687994]">Tech</span>
      </motion.span>
    </div>
  );
}