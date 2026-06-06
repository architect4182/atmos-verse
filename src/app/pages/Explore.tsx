import { motion } from "motion/react";

export function Explore() {
  return (
    <div className="min-h-screen pt-32 px-6 md:px-12 lg:px-16 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl space-y-6"
      >
        <h1 className="text-5xl md:text-7xl tracking-tight text-white">
          Explore
        </h1>
        <p className="text-xl text-white/70">
          Discover curated collections and hidden gems
        </p>
      </motion.div>
    </div>
  );
}
