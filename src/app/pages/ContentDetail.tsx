import { useParams } from "react-router";
import { HeroComponent, CollectionRow, ContentPosterCard } from "../components/design-system";
import { getSimilarTitles, getTrailerForTitle, REAL_DATA } from "../data/realData";
import { useState } from "react";
import { TrailerModal } from "../components/design-system";

export function ContentDetail() {
  const { id } = useParams<{ id: string }>();
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  // Formatting id to be a nice title
  const title = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Movie Title";
  
  // Find the actual item from REAL_DATA
  const allData = [
    ...REAL_DATA.marvel,
    ...REAL_DATA.dc,
    ...REAL_DATA.tvShows,
    ...REAL_DATA.anime,
    ...REAL_DATA.koreanDramas,
    ...REAL_DATA.fastandfurious,
    ...REAL_DATA.harrypotter,
    ...REAL_DATA.missionimpossible,
    ...REAL_DATA.jurassic,
    ...REAL_DATA.prabhas
  ];
  
  const foundItem = allData.find(item => item.title.toLowerCase() === title.toLowerCase()) || allData[0];
  const similarTitles = getSimilarTitles(foundItem.title);

  return (
    <div className="min-h-screen bg-[#030712] pb-24">
      {/* 1. Hero Banner */}
      <HeroComponent 
        title={foundItem.title}
        description={foundItem.description}
        image={foundItem.backdrop || foundItem.image}
        metadata={foundItem.metadata ? (Array.isArray(foundItem.metadata) ? foundItem.metadata : [foundItem.metadata]) : []}
        onPlay={() => setIsTrailerOpen(true)}
      />

      <TrailerModal 
        open={isTrailerOpen} 
        onOpenChange={setIsTrailerOpen} 
        title={foundItem.title}
        youtubeId={getTrailerForTitle(foundItem.title)}
      />

      <div className="mx-auto max-w-[1800px] px-6 md:px-12 py-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-16">
          {foundItem.genres?.map((genre, i) => (
            <span key={i} className="px-4 py-2 rounded-full border border-border bg-secondary text-sm font-medium text-secondary-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer backdrop-blur-md">
              {genre}
            </span>
          ))}
          <span className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-sm font-medium text-blue-400 hover:bg-blue-500/20 transition-colors cursor-pointer backdrop-blur-md">
            AtmosVerse Curated
          </span>
        </div>

        {/* Similar Titles */}
        <CollectionRow title="More Like This" className="px-0 -mx-6 md:-mx-12">
          {similarTitles.map((item, i) => (
            <div key={i} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
              <ContentPosterCard 
                {...item}
              />
            </div>
          ))}
        </CollectionRow>
      </div>
    </div>
  );
}
