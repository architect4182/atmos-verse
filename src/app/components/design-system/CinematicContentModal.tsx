import { motion, AnimatePresence } from "motion/react";
import { X, Play, Plus, Info, Check } from "lucide-react";
import { cn } from "@/app/components/ui/utils";
import { ModalContentData } from "../../context/CinematicModalContext";
import { ContentPosterCard } from "./ContentPosterCard";
import { getSimilarTitles, getTrailerForTitle } from "../../data/realData";
import { useTrailerModal } from "../../context/TrailerModalContext";
import { useWatchlist } from "../../context/WatchlistContext";
import { Link } from "react-router";

export interface CinematicContentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: ModalContentData | null;
}

export function CinematicContentModal({ open, onOpenChange, data }: CinematicContentModalProps) {
  const trailer = useTrailerModal();
  const watchlist = useWatchlist();

  if (!data) return null;

  const tags = data.genres || ["Action", "Sci-Fi", "Drama"];
  const year = data.metadata && typeof data.metadata === "string" ? data.metadata.split("•")[0]?.trim() || "2024" : "2024";
  
  let durationStr = "2h 15m";
  if (data.type === 'tv' || data.type === 'anime') {
    const seasons = data.number_of_seasons || 1;
    durationStr = `${seasons} ${seasons === 1 ? 'Season' : 'Seasons'}`;
    if (data.number_of_episodes) {
      durationStr += ` • ${data.number_of_episodes} Episodes`;
    }
  } else if (data.runtime) {
    if (data.runtime > 60) {
      durationStr = `${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m`;
    } else {
      durationStr = `${data.runtime}m`;
    }
  }

  const defaultDesc = "When a devastating event threatens the world, a group of unlikely heroes must band together to save humanity. With incredible visuals, mind-bending twists, and breathtaking action, this is a cinematic journey you won't forget.";
  
  const similarTitles = getSimilarTitles(data.title);

  const id = data.title.toLowerCase().replace(/\s+/g, '-');
  const inWatchlist = watchlist.isInWatchlist(id);

  const handleWatchlistClick = () => {
    if (inWatchlist) {
      watchlist.removeFromWatchlist(id);
    } else {
      watchlist.addToWatchlist({ 
        id, 
        title: data.title, 
        image: data.image, 
        backdrop: data.backdrop, 
        metadata: data.metadata, 
        rating: data.rating, 
        navigateUrl: data.navigateUrl,
        type: data.type,
        runtime: data.runtime,
        number_of_seasons: data.number_of_seasons,
        number_of_episodes: data.number_of_episodes
      });
    }
  };

  const bgImage = data.backdrop || data.image;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 overflow-hidden md:py-12">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => onOpenChange(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[1200px] h-full md:h-auto md:max-h-[90vh] bg-[#0a0a0a] md:rounded-2xl overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] shadow-[0_0_50px_rgba(0,0,0,0.8)] border-x-0 md:border md:border-white/10 flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 backdrop-blur-md transition-all duration-300"
            >
              <X className="size-6" />
            </button>

            {/* Hero / Backdrop Section */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.35/1] shrink-0">
              {/* Immersive Background Image */}
              <img 
                src={bgImage} 
                alt={data.title} 
                className="w-full h-full object-cover"
              />
              
              {/* Gradients for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-end p-6 md:p-12">
                <div className="w-full max-w-5xl flex gap-8 items-end justify-between">
                  
                  {/* Left Col: Main Info */}
                  <div className="flex-1 space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl tracking-tight leading-none mb-2">
                      {data.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium text-white/80">
                      {data.rating && <span className="text-green-400 font-bold">{data.rating} Match</span>}
                      <span>{year}</span>
                      <span className="border border-white/20 px-1.5 py-0.5 rounded-md text-white/60 bg-white/5 backdrop-blur-sm">HD</span>
                      <span className="border border-white/20 px-1.5 py-0.5 rounded-md text-white/60 bg-white/5 backdrop-blur-sm">5.1</span>
                      <span>{durationStr}</span>
                    </div>

                    <p className="text-white/80 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-4 max-w-2xl drop-shadow-lg">
                      {data.description || defaultDesc}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-2 text-sm text-white/60 font-medium hidden md:flex">
                      {tags.map((tag, i) => (
                        <span key={tag} className="hover:text-white transition-colors cursor-pointer">
                          {tag}{i < tags.length - 1 && <span className="mx-2 text-white/20">•</span>}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-4">
                      <button 
                        onClick={() => trailer.openTrailer(data.title, getTrailerForTitle(data.title))}
                        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold text-base hover:bg-white/90 active:scale-95 transition-all"
                      >
                        <Play className="size-5 fill-black ml-0.5" />
                        Play Trailer
                      </button>
                      <button 
                        onClick={handleWatchlistClick}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-black/40 backdrop-blur-md hover:border-white hover:bg-white/10 active:scale-95 transition-all text-white font-medium"
                      >
                        {inWatchlist ? <Check className="size-5" /> : <Plus className="size-5" />}
                        <span className="hidden sm:inline">{inWatchlist ? "In Watchlist" : "Add to Watchlist"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Col: Desktop Poster Thumbnail */}
                  <div className="hidden lg:block w-48 shrink-0 relative z-10 translate-y-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-xl overflow-hidden ring-1 ring-white/10">
                    <img src={data.image} alt={data.title} className="w-full aspect-[2/3] object-cover" />
                  </div>

                </div>
              </div>
            </div>

            {/* Content Details Section */}
            <div className="p-6 md:p-12 pt-0 md:pt-16 flex flex-col md:flex-row gap-8 shrink-0 border-b border-white/10 pb-12">
              <div className="w-full space-y-4 text-sm md:text-base">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <span className="block text-white/50 mb-1">Cast</span>
                    <span className="text-white/90">Lead Actor, Supporting Actor...</span>
                  </div>
                  <div>
                    <span className="block text-white/50 mb-1">Director</span>
                    <span className="text-white/90">Acclaimed Director</span>
                  </div>
                  {(data.universe || data.mood) && (
                    <div>
                      <span className="block text-white/50 mb-1">Explore More</span>
                      <div className="flex flex-col gap-1">
                        {data.universe && (
                          <Link to={data.universe.route} onClick={() => onOpenChange(false)} className="text-white/90 hover:text-blue-400 underline decoration-white/20 underline-offset-4 transition-colors inline-block w-fit">
                            {data.universe.title} Universe
                          </Link>
                        )}
                        {data.mood && (
                          <Link to={data.mood.route} onClick={() => onOpenChange(false)} className="text-white/90 hover:text-purple-400 underline decoration-white/20 underline-offset-4 transition-colors inline-block w-fit">
                            {data.mood.title} Mood
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                  <div className="md:hidden">
                    <span className="block text-white/50 mb-1">Genres</span>
                    <span className="text-white/90">{tags.join(", ")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Titles Section */}
            <div className="p-6 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-6">Because You Opened {data.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {similarTitles.map((item, i) => (
                  <ContentPosterCard 
                    key={i}
                    title={item.title}
                    image={item.image}
                    backdrop={item.backdrop}
                    metadata={item.metadata}
                    rating={item.rating}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
