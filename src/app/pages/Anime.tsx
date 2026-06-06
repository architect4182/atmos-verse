import { 
  HeroComponent, 
  ContentPosterCard, 
  CollectionRow, 
  RankingCarousel 
} from "../components/design-system";
import { getRandomPoster, getRandomHero } from "../data/mockData";

export function Anime() {
  return (
    <div className="min-h-screen bg-[#030712] pb-24">
      {/* 1. Hero Component - Anime Variant */}
      <HeroComponent 
        variant="content"
        title="Jujutsu Kaisen"
        description="A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself."
        image={getRandomHero()}
        metadata={["2020", "TV-MA", "2 Seasons", "Action", "Supernatural"]}
      />

      <div className="space-y-4">
        {/* 2. Ranking Carousel - Top Anime */}
        <RankingCarousel 
          title="Top 10 Anime Today"
          items={Array.from({ length: 10 }).map((_, i) => ({
            id: i,
            rank: i + 1,
            title: `Trending Anime ${i + 1}`,
            image: getRandomPoster()
          }))}
        />

        {/* 3. CollectionRow - Simulcasts */}
        <CollectionRow title="Simulcasts" viewAllLink="/anime/simulcasts">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="snap-start min-w-[160px] md:min-w-[200px]">
              <ContentPosterCard 
                title={`Simulcast Episode ${i + 1}`}
                image={getRandomPoster()}
                metadata="Sub | Dub"
                rating={(Math.random() * 2 + 7).toFixed(1)}
              />
            </div>
          ))}
        </CollectionRow>

        {/* 4. CollectionRow - Shounen Masterpieces */}
        <CollectionRow title="Shounen Masterpieces">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="snap-start min-w-[160px] md:min-w-[200px]">
              <ContentPosterCard 
                title={`Shounen Classic ${i + 1}`}
                image={getRandomPoster()}
                metadata="Action • Adventure"
                rating={(Math.random() * 1 + 8.5).toFixed(1)}
              />
            </div>
          ))}
        </CollectionRow>

        {/* 5. CollectionRow - Slice of Life */}
        <CollectionRow title="Slice of Life">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="snap-start min-w-[160px] md:min-w-[200px]">
              <ContentPosterCard 
                title={`Cozy Anime ${i + 1}`}
                image={getRandomPoster()}
                metadata="Slice of Life • Comedy"
                rating={(Math.random() * 1 + 7.5).toFixed(1)}
              />
            </div>
          ))}
        </CollectionRow>
      </div>
    </div>
  );
}
