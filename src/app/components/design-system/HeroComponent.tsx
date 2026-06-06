import { motion } from "motion/react";
import { Play, Plus, Info } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/components/ui/utils";

export type HeroVariant = "content" | "mood" | "universe";

export interface HeroComponentProps {
  variant?: HeroVariant;
  title: string;
  description: string;
  image: string;
  logo?: string;
  metadata?: string[]; // e.g., ["2023", "PG-13", "2h 15m", "Action"]
  onPlay?: () => void;
  onWatchlist?: () => void;
  onInfo?: () => void;
  className?: string;
}

export function HeroComponent({
  variant = "content",
  title,
  description,
  image,
  logo,
  metadata = [],
  onPlay,
  onWatchlist,
  onInfo,
  className,
}: HeroComponentProps) {
  // We can tweak styling based on variant if needed, 
  // e.g., universe might have a centered logo, mood might have a different gradient hue.
  
  return (
    <div className={cn("relative h-[85vh] w-full min-h-[600px] overflow-hidden", className)}>
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover object-top"
        />
      </motion.div>

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent w-[80%]" />
      
      {/* Variant-specific overlays */}
      {variant === "mood" && (
        <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay" />
      )}
      {variant === "universe" && (
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-color" />
      )}

      {/* Content Container */}
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-[1800px] px-6 pb-24 md:px-12 md:pb-32">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl space-y-6"
          >
            {/* Title / Logo */}
            {logo ? (
              <img src={logo} alt={title} className="max-h-[120px] object-contain drop-shadow-2xl mb-4" />
            ) : (
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-xl">
                {title}
              </h1>
            )}

            {/* Metadata */}
            {metadata.length > 0 && (
              <div className="flex flex-wrap items-center gap-4 text-sm md:text-base font-medium text-white/80">
                {metadata.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span>{item}</span>
                    {index < metadata.length - 1 && (
                      <div className="size-1 rounded-full bg-white/40" />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Description */}
            <p className="text-lg md:text-xl text-white/70 line-clamp-3 leading-relaxed drop-shadow-md">
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button 
                onClick={onPlay}
                size="lg" 
                className="bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 font-bold px-8 h-14 rounded-xl text-lg group"
              >
                <Play className="mr-2 size-5 fill-current group-hover:scale-110 transition-transform" />
                Play Now
              </Button>
              <Button 
                onClick={onInfo}
                size="lg" 
                variant="secondary" 
                className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 font-semibold px-8 h-14 rounded-xl text-lg group"
              >
                <Info className="mr-2 size-5 group-hover:scale-110 transition-transform" />
                More Info
              </Button>
              <Button 
                onClick={onWatchlist}
                size="icon" 
                variant="secondary" 
                className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 size-14 rounded-xl group"
              >
                <Plus className="size-6 group-hover:rotate-90 transition-transform duration-300" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
