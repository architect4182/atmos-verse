import { 
  HeroComponent, 
  DiscoveryCard, 
  ContentPosterCard, 
  CollectionRow,
  StreamingServices
} from "../components/design-system";
import { getRandomPoster, getRandomHero } from "../data/mockData";

export function Explore() {
  const GENRES = ["Action", "Sci-Fi", "Romance", "Horror", "Comedy", "Drama", "Thriller", "Documentary"];
  const MOODS = ["Mind Bending", "Late Night", "Feel Good", "Adrenaline", "Cozy", "Nostalgic"];

  return (
    <div className="min-h-screen bg-[#030712] pb-24">
      {/* 1. Hero Component - Mood Variant */}
      <HeroComponent 
        variant="mood"
        title="Mind Bending"
        description="Explore stories that will challenge your perception of reality. Dive into complex narratives, unexpected twists, and cerebral masterpieces."
        image={getRandomHero()}
        metadata={["Curated Collection", "24 Titles"]}
      />

      <div className="space-y-4">
        {/* 2. Collection Row - Genres */}
        <CollectionRow title="Explore by Genre">
          {GENRES.map((genre, i) => (
            <div key={i} className="snap-start min-w-[240px] md:min-w-[320px]">
              <DiscoveryCard 
                title={genre}
                image={getRandomPoster()}
                badge="Genre"
              />
            </div>
          ))}
        </CollectionRow>

        {/* 3. Collection Row - Moods */}
        <CollectionRow title="What's your mood?">
          {MOODS.map((mood, i) => (
            <div key={i} className="snap-start min-w-[240px] md:min-w-[320px]">
              <DiscoveryCard 
                title={mood}
                image={getRandomPoster()}
                badge="Mood"
              />
            </div>
          ))}
        </CollectionRow>

        {/* 4. Collection Row - Hidden Gems */}
        <CollectionRow title="Hidden Gems">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="snap-start min-w-[160px] md:min-w-[200px]">
              <ContentPosterCard 
                title={`Underrated Masterpiece ${i + 1}`}
                image={getRandomPoster()}
                metadata="Critically Acclaimed"
                rating={(Math.random() * 1.5 + 8.0).toFixed(1)}
              />
            </div>
          ))}
        </CollectionRow>

        {/* 5. Streaming Services */}
        <StreamingServices />
      </div>
    </div>
  );
}
