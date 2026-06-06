import { 
  HeroComponent, 
  DiscoveryCard, 
  ContentPosterCard, 
  CollectionRow, 
  RankingCarousel,
  StreamingServices
} from "../components/design-system";
import { getRandomPoster, getRandomHero, UNIVERSE_BGS } from "../data/mockData";

import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#030712] pb-24">
      {/* 1. Hero Component */}
      <HeroComponent 
        title="Dune: Part Two"
        description="Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family."
        image={getRandomHero()}
        metadata={["2024", "PG-13", "2h 46m", "Sci-Fi"]}
      />

      <div className="space-y-4">
        {/* 2. Ranking Carousel */}
        <RankingCarousel 
          title="Top 10 Trending Today"
          items={Array.from({ length: 10 }).map((_, i) => ({
            id: i,
            rank: i + 1,
            title: `Trending Masterpiece ${i + 1}`,
            image: getRandomPoster()
          }))}
        />

        {/* 3. Collection Row (Posters) */}
        <CollectionRow title="Continue Watching" viewAllLink="/watchlist">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="snap-start min-w-[160px] md:min-w-[200px]">
              <ContentPosterCard 
                title={`Recently Watched ${i + 1}`}
                image={getRandomPoster()}
                metadata="2023 • Action"
                rating={(Math.random() * 2 + 7).toFixed(1)}
              />
            </div>
          ))}
        </CollectionRow>

        {/* 4. Collection Row (Discovery Cards for Universes) */}
        <CollectionRow title="Cinematic Universes" viewAllLink="/explore">
          {Object.entries(UNIVERSE_BGS).map(([key, bgImage], i) => {
            const titles = ["Marvel", "DC", "Star Wars", "Harry Potter"];
            return (
              <div key={key} className="snap-start min-w-[280px] md:min-w-[400px] w-full">
                <DiscoveryCard 
                  title={titles[i]}
                  subtitle="Explore the complete timeline and collections."
                  image={bgImage}
                  badge="Universe"
                  onClick={() => navigate(`/universe/${key}`)}
                />
              </div>
            );
          })}
        </CollectionRow>

        {/* 5. Collection Row (Discovery Cards for Moods) */}
        <CollectionRow title="Explore by Mood">
          {["Mind Bending", "Late Night", "Romantic", "Adrenaline", "Feel Good"].map((mood, i) => (
            <div key={i} className="snap-start min-w-[240px] md:min-w-[320px]">
              <DiscoveryCard 
                title={mood}
                image={getRandomPoster()}
              />
            </div>
          ))}
        </CollectionRow>

        {/* 6. Streaming Services */}
        <StreamingServices />
      </div>
    </div>
  );
}
