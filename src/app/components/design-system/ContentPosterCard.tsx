import { motion } from "motion/react";
import { Play } from "lucide-react";
import { cn } from "@/app/components/ui/utils";

export interface ContentPosterCardProps {
  title: string;
  image: string;
  metadata?: string; // e.g., "2023 • Action"
  rating?: string; // e.g., "9.8"
  onClick?: () => void;
  className?: string;
}

export function ContentPosterCard({
  title,
  image,
  metadata,
  rating,
  onClick,
  className,
}: ContentPosterCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover="hover"
      initial="initial"
      className={cn(
        "group relative flex cursor-pointer flex-col gap-3",
        className
      )}
    >
      {/* Poster Image Container */}
      <div className="relative overflow-hidden rounded-xl aspect-[2/3] w-full bg-white/5 isolate">
        <motion.img
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-60"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
          <div className="flex size-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xl">
            <Play className="size-6 fill-white ml-1" />
          </div>
        </div>

        {/* Rating Badge */}
        {rating && (
          <div className="absolute top-2 right-2">
            <span className="inline-flex items-center rounded bg-black/60 px-2 py-1 text-xs font-bold text-yellow-500 backdrop-blur-md shadow-sm">
              ★ {rating}
            </span>
          </div>
        )}
      </div>

      {/* Content Meta */}
      <div className="space-y-1">
        <h4 className="font-bold text-white line-clamp-1 group-hover:text-blue-400 transition-colors duration-300 text-sm md:text-base">
          {title}
        </h4>
        {metadata && (
          <p className="text-xs text-white/50 line-clamp-1 font-medium">
            {metadata}
          </p>
        )}
      </div>
    </motion.div>
  );
}
