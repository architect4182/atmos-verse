import { useParams } from "react-router";
import { HeroComponent, CollectionRow, ContentPosterCard } from "../components/design-system";
import { getRandomHero, getRandomPoster } from "../data/mockData";
import { useState } from "react";
import { TrailerModal } from "../components/design-system";

export function ContentDetail() {
  const { id } = useParams<{ id: string }>();
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  // Formatting id to be a nice title
  const title = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Movie Title";

  return (
    <div className="min-h-screen bg-[#030712] pb-24">
      {/* 1. Hero Banner */}
      <HeroComponent 
        title={title}
        description="When a devastating event threatens the world, a group of unlikely heroes must band together to save humanity. With incredible visuals, mind-bending twists, and breathtaking action, this is a cinematic journey you won't forget."
        image={getRandomHero()}
        metadata={["2023", "PG-13", "2h 15m", "Sci-Fi", "Action"]}
        onPlay={() => setIsTrailerOpen(true)}
      />

      <TrailerModal 
        open={isTrailerOpen} 
        onOpenChange={setIsTrailerOpen} 
        title={title}
        youtubeId="e1k1PC0TtmE"
      />

      <div className="mx-auto max-w-[1800px] px-6 md:px-12 py-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-16">
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors cursor-pointer backdrop-blur-md">
            Mind Bending
          </span>
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors cursor-pointer backdrop-blur-md">
            Adrenaline
          </span>
          <span className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-sm font-medium text-blue-400 hover:bg-blue-500/20 transition-colors cursor-pointer backdrop-blur-md">
            Marvel Universe
          </span>
        </div>

        {/* Cast & Crew */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-6">Top Cast</h2>
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-3 snap-start min-w-[100px] md:min-w-[120px]">
                <div className="size-20 md:size-24 rounded-full overflow-hidden border-2 border-white/10 bg-white/5">
                  <img src={getRandomPoster()} alt="Actor" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-white leading-tight">Actor {i + 1}</p>
                  <p className="text-xs text-white/50 mt-1">Character Name</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Titles */}
        <CollectionRow title="More Like This" className="px-0 -mx-6 md:-mx-12">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="snap-start min-w-[160px] md:min-w-[200px]">
              <ContentPosterCard 
                title={`Similar Title ${i + 1}`}
                image={getRandomPoster()}
                metadata="Action • Sci-Fi"
                rating={(Math.random() * 1.5 + 7.5).toFixed(1)}
              />
            </div>
          ))}
        </CollectionRow>
      </div>
    </div>
  );
}
