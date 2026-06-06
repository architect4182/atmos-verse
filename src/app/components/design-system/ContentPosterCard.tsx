import { motion } from "motion/react";
import { Play, Plus } from "lucide-react";
import { cn } from "@/app/components/ui/utils";
import { useCinematicModal } from "../../context/CinematicModalContext";

export interface ContentPosterCardProps {
  title: string;
  image: string;
  metadata?: string; // e.g., "2023 • Action"
  rating?: string; // e.g., "9.8"
  onClick?: () => void;
  className?: string;
  navigateUrl?: string;
}

export function ContentPosterCard({
  title,
  image,
  metadata,
  rating,
  onClick,
  className,
  navigateUrl
}: ContentPosterCardProps) {
  const modal = useCinematicModal();

  const handleClick = () => {
    // If a custom onClick was provided (e.g. from the timeline), call it, 
    // otherwise default to opening the cinematic modal.
    if (onClick) {
      onClick();
    } else {
      modal.openModal({
        title,
        image,
        metadata,
        rating,
        navigateUrl
      });
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover="hover"
      initial="initial"
      className={cn(
        "group relative flex cursor-pointer flex-col gap-3 rounded-xl",
        className
      )}
    >
      {/* Poster Image Container */}
      <div className="relative overflow-hidden rounded-xl aspect-[2/3] w-full bg-[#111] isolate shadow-lg transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:-translate-y-2">
        <motion.img
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.1 }, // Image zoom
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-40"
        />
        
        {/* Hover Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Glow Border */}
        <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />
        
        {/* Hover State Info (Lightweight Preview) */}
        <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none translate-y-4 group-hover:translate-y-0">
          <h4 className="font-bold text-white text-sm md:text-base leading-tight mb-1 drop-shadow-md">
            {title}
          </h4>
          
          <div className="flex items-center gap-2 mb-3">
            {rating && (
              <span className="text-green-400 text-xs font-bold drop-shadow-sm">
                {rating} Match
              </span>
            )}
            {metadata && (
              <span className="text-white/70 text-xs line-clamp-1 drop-shadow-sm">
                {metadata}
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button 
              onClick={(e) => {
                e.stopPropagation(); // Don't trigger modal
                // Usually plays trailer directly
              }}
              className="flex size-8 items-center justify-center rounded-full bg-white text-black hover:bg-white/80 transition-colors"
            >
              <Play className="size-4 fill-black ml-0.5" />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="flex size-8 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white hover:border-white transition-colors"
            >
              <Plus className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
