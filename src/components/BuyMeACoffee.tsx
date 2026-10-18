
import { Coffee } from "lucide-react";
import { motion } from "framer-motion";

export default function BuyMeACoffee() {
  return (
    <motion.a
      href="/support"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      aria-label="Buy me a coffee"
      className="
        fixed bottom-5 right-5 z-40
        inline-flex items-center gap-2
        rounded-full border border-white/10
        bg-[#172033]/95 px-3.5 py-2.5
        text-white shadow-lg shadow-black/10
        backdrop-blur-xl
        transition-colors duration-200
        hover:bg-[#243149]
        md:bottom-7 md:right-7
      "
    >
      <Coffee
        size={16}
        strokeWidth={1.8}
        className="text-amber-300"
      />

      <span className="text-xs font-medium tracking-wide">
        Buy me a coffee
      </span>
    </motion.a>
  );
}
