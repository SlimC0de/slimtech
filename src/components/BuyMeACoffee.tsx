import { Coffee } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

export default function BuyMeACoffee() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionLink
      to="/support"
      initial={false}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      aria-label="Buy me a coffee"
      className="
        fixed bottom-5 right-5 z-40
        inline-flex items-center gap-2
        rounded-full border border-yellow-300
        bg-yellow-400 px-6 py-2.5
        text-gray-950
        shadow-lg shadow-yellow-500/20
        transition-colors duration-150
        hover:bg-yellow-300
        md:bottom-7 md:right-7
      "
    >
      <Coffee
        size={16}
        strokeWidth={2}
        className="shrink-0 text-gray-950"
      />

      <span className="whitespace-nowrap text-xs font-bold tracking-wide">
        Buy me a coffee
      </span>
    </MotionLink>
  );
}