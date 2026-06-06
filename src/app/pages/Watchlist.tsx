import { motion } from "motion/react";
import { useWatchlist } from "../context/WatchlistContext";
import { ContentPosterCard } from "../components/design-system";

export function Watchlist() {
  const { items } = useWatchlist();

  return (
    <div className="min-h-screen pt-32 px-6 md:px-12 lg:px-16 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1800px] mx-auto space-y-12"
      >
        <div>
          <h1 className="text-5xl md:text-7xl tracking-tight font-bold text-white mb-4">
            Watchlist
          </h1>
          <p className="text-xl text-white/70">
            {items.length} items in your curated collection
          </p>
        </div>

        {items.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-2xl text-white/40">Your watchlist is empty.</p>
            <p className="text-white/30 mt-2">Discover movies and shows to add them here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {items.map((item) => (
              <ContentPosterCard 
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                backdrop={item.backdrop}
                metadata={item.metadata}
                rating={item.rating}
                navigateUrl={item.navigateUrl}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
