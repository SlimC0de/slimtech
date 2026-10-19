import { Coffee } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

export default function BuyMeACoffee() {
  return (
    <MotionLink
      to="/support"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      aria-label="Buy me a coffee"
      className="
        fixed bottom-5 right-5 z-40
        inline-flex items-center gap-2
        rounded-full
        border border-yellow-300
        bg-yellow-400 px-6 py-2.5
        text-gray-950
        shadow-lg shadow-yellow-500/25
        transition-all duration-200
        hover:bg-yellow-300
        hover:shadow-xl hover:shadow-yellow-500/30
        md:bottom-7 md:right-7
      "
    >
      <Coffee
        size={16}
        strokeWidth={2}
        className="text-gray-950"
      />

      <span className="text-xs font-bold tracking-wide">
        Buy me a coffee
      </span>
    </MotionLink>
  );
}