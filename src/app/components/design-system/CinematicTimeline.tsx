import { motion } from "motion/react";
import { cn } from "@/app/components/ui/utils";
import { ContentPosterCard } from "./ContentPosterCard";

export interface TimelineItem {
  id: string | number;
  title: string;
  image: string;
  metadata?: string;
  rating?: string;
  description?: string;
  year?: string;
}

export interface TimelinePhase {
  title: string;
  description?: string;
  items: TimelineItem[];
}

export interface CinematicTimelineProps {
  phases: TimelinePhase[];
  className?: string;
}

export function CinematicTimeline({ phases, className }: CinematicTimelineProps) {
  return (
    <div className={cn("relative mx-auto max-w-[1200px] px-6 md:px-12 py-24", className)}>
      {/* The Central Glowing Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/10" />
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-blue-500/50 blur-[4px]" />

      <div className="space-y-32">
        {phases.map((phase, phaseIndex) => (
          <div key={phaseIndex} className="relative z-10">
            {/* Phase Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24 flex flex-col items-start md:items-center text-left md:text-center ml-12 md:ml-0 pl-4 md:pl-0"
            >
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {phase.title}
              </h2>
              {phase.description && (
                <p className="mt-4 max-w-2xl text-lg text-white/60">
                  {phase.description}
                </p>
              )}
            </motion.div>

            {/* Phase Items */}
            <div className="space-y-16 md:space-y-32">
              {phase.items.map((item, itemIndex) => {
                // Determine if it's rendered on the left or right (on desktop)
                const isLeft = itemIndex % 2 === 0;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "relative flex flex-col md:flex-row items-center gap-8 md:gap-16",
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    )}
                  >
                    {/* Node on the central line */}
                    <div className="absolute left-0 md:left-1/2 top-8 md:top-1/2 h-4 w-4 -translate-x-1/2 md:-translate-y-1/2 rounded-full border-4 border-blue-500 bg-[#030712] shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20" />

                    {/* Poster Side */}
                    <div className={cn(
                      "w-full md:w-1/2 flex ml-12 md:ml-0",
                      isLeft ? "md:justify-end" : "md:justify-start"
                    )}>
                      <div className="w-[160px] md:w-[240px]">
                        <ContentPosterCard 
                          title={item.title}
                          image={item.image}
                          rating={item.rating}
                          metadata={item.metadata}
                        />
                      </div>
                    </div>

                    {/* Info Side */}
                    <div className={cn(
                      "w-full md:w-1/2 ml-12 md:ml-0",
                      isLeft ? "md:pl-8 text-left" : "md:pr-8 md:text-right"
                    )}>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      {item.year && (
                        <p className="text-blue-400 font-mono text-sm mb-4">
                          {item.year}
                        </p>
                      )}
                      {item.description && (
                        <p className="text-white/60 leading-relaxed max-w-md">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
