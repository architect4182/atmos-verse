import { 
  HeroComponent, 
  ContentPosterCard, 
  CollectionRow, 
  RankingCarousel 
} from "../components/design-system";
import { getRandomPoster, getRandomHero } from "../data/mockData";

export function Movies() {
  return (
    <div className="min-h-screen bg-[#030712] pb-24">
      {/* 1. Hero Component - Movie Variant */}
      <HeroComponent 
        variant="content"
        title="Oppenheimer"
        description="The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb."
        image={getRandomHero()}
        metadata={["2023", "R", "3h", "Biography", "Drama", "History"]}
      />

      <div className="space-y-4">
        {/* 2. Ranking Carousel - Top Movies */}
        <RankingCarousel 
          title="Top 10 Movies Today"
          items={Array.from({ length: 10 }).map((_, i) => ({
            id: i,
            rank: i + 1,
            title: `Blockbuster Movie ${i + 1}`,
            image: getRandomPoster()
          }))}
        />

        {/* 3. Collection Row - Now Playing */}
        <CollectionRow title="Now Playing in Theaters" viewAllLink="/movies/now-playing">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="snap-start min-w-[160px] md:min-w-[200px]">
              <ContentPosterCard 
                title={`Cinema Release ${i + 1}`}
                image={getRandomPoster()}
                metadata="2024 • In Theaters"
                rating={(Math.random() * 2 + 7).toFixed(1)}
              />
            </div>
          ))}
        </CollectionRow>

        {/* 4. Collection Row - Critically Acclaimed */}
        <CollectionRow title="Critically Acclaimed">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="snap-start min-w-[160px] md:min-w-[200px]">
              <ContentPosterCard 
                title={`Award Winner ${i + 1}`}
                image={getRandomPoster()}
                metadata="Oscar Winner"
                rating={(Math.random() * 1 + 8.5).toFixed(1)}
              />
            </div>
          ))}
        </CollectionRow>

        {/* 5. Collection Row - Action Thrillers */}
        <CollectionRow title="Action Thrillers">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="snap-start min-w-[160px] md:min-w-[200px]">
              <ContentPosterCard 
                title={`Action Movie ${i + 1}`}
                image={getRandomPoster()}
                metadata="Action • Thriller"
                rating={(Math.random() * 2 + 6).toFixed(1)}
              />
            </div>
          ))}
        </CollectionRow>
      </div>
    </div>
  );
}
