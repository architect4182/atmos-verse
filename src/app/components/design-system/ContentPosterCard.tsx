import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Plus, Check, Info } from "lucide-react";
import { cn } from "@/app/components/ui/utils";
import { useCinematicModal } from "../../context/CinematicModalContext";
import { useTrailerModal } from "../../context/TrailerModalContext";
import { useWatchlist } from "../../context/WatchlistContext";
import { useNavigate } from "react-router";
import { getTrailerForTitle } from "../../data/realData";

export interface ContentPosterCardProps {
  id?: string;
  title: string;
  image: string;
  backdrop?: string;
  metadata?: string | string[]; // e.g., "2023 • Action" or ["2023", "Action"]
  rating?: string; // e.g., "9.8"
  description?: string;
  genres?: string[];
  universe?: { title: string; route: string; };
  mood?: { title: string; route: string; };
  type?: 'movie' | 'tv' | 'anime';
  runtime?: number;
  number_of_seasons?: number;
  number_of_episodes?: number;
  onClick?: () => void;
  className?: string;
  navigateUrl?: string;
}

export function ContentPosterCard({
  id: propId,
  title,
  image,
  backdrop,
  metadata,
  rating,
  description,
  genres,
  universe,
  mood,
  type = 'movie',
  runtime,
  number_of_seasons,
  number_of_episodes,
  onClick,
  className,
  navigateUrl
}: ContentPosterCardProps) {
  const modal = useCinematicModal();
  const trailer = useTrailerModal();
  const watchlist = useWatchlist();
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Generate a fallback ID if none provided
  const id = propId || title.toLowerCase().replace(/\s+/g, '-');

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 400); // 400ms delay to prevent flashing
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsHovered(false);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (navigateUrl) {
      navigate(navigateUrl);
    } else {
      modal.openModal({
        title,
        image,
        backdrop,
        metadata: Array.isArray(metadata) ? metadata.join(" • ") : metadata,
        rating,
        description,
        genres,
        universe,
        mood,
        navigateUrl,
        type,
        runtime,
        number_of_seasons,
        number_of_episodes
      });
    }
  };

  const inWatchlist = watchlist.isInWatchlist(id || title);

  const handleWatchlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWatchlist) {
      watchlist.removeFromWatchlist(id || title);
    } else {
      watchlist.addToWatchlist({ 
        id: id || title, 
        title, 
        image, 
        metadata, 
        rating, 
        navigateUrl,
        type,
        runtime,
        number_of_seasons,
        number_of_episodes
      });
    }
  };

  const handleTrailerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    trailer.openTrailer(title, getTrailerForTitle(title));
  };

  const displayImage = backdrop || image;

  // Format Duration
  let durationStr = "132m";
  if (type === 'tv' || type === 'anime') {
    const seasons = number_of_seasons || 1;
    durationStr = `${seasons} ${seasons === 1 ? 'Season' : 'Seasons'}`;
    if (number_of_episodes) {
      durationStr += ` • ${number_of_episodes} Episodes`;
    }
  } else if (runtime) {
    if (runtime > 60) {
      durationStr = `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
    } else {
      durationStr = `${runtime}m`;
    }
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative flex flex-col gap-3 rounded-xl aspect-[2/3] w-full", className)}
    >
      {/* Base Static Card */}
      <div 
        onClick={handleClick}
        className="relative h-full w-full overflow-hidden rounded-xl bg-[#111] cursor-pointer ring-1 ring-white/5 shadow-lg"
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-opacity duration-300 hover:opacity-80"
        />
      </div>

      {/* Expanded Hover Card */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1.15 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] z-[100] flex flex-col overflow-hidden rounded-xl bg-[#141414] shadow-2xl shadow-black ring-1 ring-white/10 origin-center cursor-pointer"
            onClick={handleClick}
          >
            {/* Top Image (Backdrop) - Fixed 140px */}
            <div className="relative h-[140px] w-full bg-black shrink-0">
              <img
                src={displayImage}
                alt={title}
                className="h-full w-full object-cover opacity-90"
                style={{ objectPosition: "center 25%" }}
              />
              <div 
                className="absolute inset-0" 
                style={{ 
                  background: "linear-gradient(to bottom, rgba(20,20,20,0) 0%, rgba(20,20,20,0.4) 50%, rgba(20,20,20,1) 100%)" 
                }} 
              />
            </div>

            {/* Content Container */}
            <div className="flex flex-col px-4 pb-4 pt-3 flex-1">
              {/* Title Area: Fixed 56px */}
              <div className="h-[56px] min-h-[56px] max-h-[56px] mb-1 flex flex-col justify-start">
                <h4 className="font-bold text-white text-base md:text-lg leading-snug line-clamp-2">
                  {title}
                </h4>
              </div>

              {/* Actions Area: Fixed 48px */}
              <div className="h-[48px] min-h-[48px] mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleTrailerClick}
                    className="flex size-9 items-center justify-center rounded-full bg-white text-black hover:bg-white/80 transition-colors"
                  >
                    <Play className="size-4 fill-black ml-0.5" />
                  </button>
                  <button 
                    onClick={handleWatchlistClick}
                    className="flex size-9 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white hover:border-white hover:bg-white/10 transition-colors"
                  >
                    {inWatchlist ? <Check className="size-4" /> : <Plus className="size-4" />}
                  </button>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick();
                  }}
                  className="flex size-9 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white hover:border-white hover:bg-white/10 transition-colors"
                >
                  <Info className="size-4" />
                </button>
              </div>
              
              {/* Metadata Area: Remaining Space */}
              <div className="flex flex-col flex-1 justify-start">
                <div className="flex flex-wrap items-center gap-2 mb-2 text-xs">
                  {rating && <span className="text-green-400 font-bold">{rating} Match</span>}
                  <span className="text-white/80 border border-white/20 px-1 rounded bg-white/5">{durationStr}</span>
                  <span className="border border-white/20 px-1 rounded text-white/60">HD</span>
                </div>
                
                {metadata && (
                  <span className="text-white/60 text-xs line-clamp-1">
                    {metadata}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
