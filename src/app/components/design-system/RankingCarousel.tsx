import { motion } from "motion/react";
import { Play } from "lucide-react";
import { cn } from "@/app/components/ui/utils";

export interface RankingItem {
  id: string | number;
  title: string;
  image: string;
  rank: number;
}

export interface RankingCarouselProps {
  title: string;
  items: RankingItem[];
  onItemClick?: (item: RankingItem) => void;
  className?: string;
}

export function RankingCarousel({ title, items, onItemClick, className }: RankingCarouselProps) {
  return (
    <section className={cn("w-full py-12 md:py-16", className)}>
      <div className="mx-auto max-w-[1800px] px-6 md:px-12">
        <h2 className="mb-10 text-3xl md:text-4xl font-black tracking-tighter text-white">
          {title}
        </h2>
        
        <div className="relative -mx-6 px-6 md:-mx-12 md:px-12">
          {/* Fading Edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 md:w-16 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 md:w-16 bg-gradient-to-l from-black to-transparent" />
          
          <div className="flex gap-8 md:gap-12 overflow-x-auto pb-12 pt-4 scrollbar-hide snap-x snap-mandatory">
            {items.map((item) => (
              <motion.div
                key={item.id}
                whileHover="hover"
                initial="initial"
                onClick={() => onItemClick?.(item)}
                className="relative flex min-w-[200px] md:min-w-[280px] cursor-pointer items-end snap-start group"
              >
                {/* Huge Ranking Number */}
                <span className="absolute -left-6 md:-left-10 -bottom-6 z-0 text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent select-none transition-all duration-300"
                  style={{
                    WebkitTextStroke: "2px rgba(255,255,255,0.2)",
                    textShadow: "0 0 40px rgba(255,255,255,0.05)"
                  }}
                >
                  {item.rank}
                </span>

                {/* Poster Image */}
                <div className="relative z-10 ml-8 md:ml-12 aspect-[2/3] w-[140px] md:w-[180px] overflow-hidden rounded-xl shadow-2xl bg-white/5 isolate border border-white/10 group-hover:border-white/30 transition-colors duration-300">
                  <motion.img
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.05 },
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-60"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <div className="flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xl">
                      <Play className="size-5 fill-white ml-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
