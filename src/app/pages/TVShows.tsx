import { 
  HeroComponent, 
  ContentPosterCard, 
  CollectionRow, 
  RankingCarousel 
} from "../components/design-system";
import { getRandomPoster, getRandomHero } from "../data/mockData";

export function TVShows() {
  return (
    <div className="min-h-screen bg-[#030712] pb-24">
      {/* 1. Hero Component - TV Show Variant */}
      <HeroComponent 
        variant="content"
        title="Succession"
        description="The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company."
        image={getRandomHero()}
        metadata={["2018-2023", "TV-MA", "4 Seasons", "Drama"]}
      />

      <div className="space-y-4">
        {/* 2. Ranking Carousel - Top TV Shows */}
        <RankingCarousel 
          title="Top 10 TV Shows Today"
          items={Array.from({ length: 10 }).map((_, i) => ({
            id: i,
            rank: i + 1,
            title: `Hit Series ${i + 1}`,
            image: getRandomPoster()
          }))}
        />

        {/* 3. Collection Row - Airing Today */}
        <CollectionRow title="Airing Today" viewAllLink="/tv/airing-today">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="snap-start min-w-[160px] md:min-w-[200px]">
              <ContentPosterCard 
                title={`New Episode ${i + 1}`}
                image={getRandomPoster()}
                metadata="S2 E4 • 8:00 PM"
                rating={(Math.random() * 2 + 7).toFixed(1)}
              />
            </div>
          ))}
        </CollectionRow>

        {/* 4. Collection Row - Binge-Worthy */}
        <CollectionRow title="Binge-Worthy Series">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="snap-start min-w-[160px] md:min-w-[200px]">
              <ContentPosterCard 
                title={`Addictive Show ${i + 1}`}
                image={getRandomPoster()}
                metadata="Completed • 5 Seasons"
                rating={(Math.random() * 1 + 8.5).toFixed(1)}
              />
            </div>
          ))}
        </CollectionRow>

        {/* 5. Collection Row - Limited Series */}
        <CollectionRow title="Limited Series">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="snap-start min-w-[160px] md:min-w-[200px]">
              <ContentPosterCard 
                title={`Miniseries ${i + 1}`}
                image={getRandomPoster()}
                metadata="Limited Series • Drama"
                rating={(Math.random() * 1 + 8.0).toFixed(1)}
              />
            </div>
          ))}
        </CollectionRow>
      </div>
    </div>
  );
}
