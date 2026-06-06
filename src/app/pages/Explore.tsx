import { 
  HeroComponent, 
  DiscoveryCard, 
  ContentPosterCard, 
  CollectionRow,
  StreamingServices
} from "../components/design-system";
import { REAL_DATA } from "../data/realData";
import { useNavigate } from "react-router";

export function Explore() {
  const navigate = useNavigate();

  const allMovies = [
    ...REAL_DATA.marvel,
    ...REAL_DATA.dc,
    ...REAL_DATA.koreanDramas,
    ...REAL_DATA.anime,
    ...REAL_DATA.fastandfurious,
    ...REAL_DATA.harrypotter,
    ...REAL_DATA.missionimpossible,
    ...REAL_DATA.jurassic,
    ...REAL_DATA.prabhas
  ].sort(() => Math.random() - 0.5);

  return (
    <div className="min-h-screen bg-[#030712] pb-24">
      {/* 1. Hero Component - Mood Variant */}
      <HeroComponent 
        variant="mood"
        title="Explore AtmosVerse"
        description="Discover your next favorite story. Browse by genre, mood, or uncover hidden gems across our curated collections."
        image={REAL_DATA.anime[3]?.backdrop || REAL_DATA.anime[3]?.image}
        metadata={["Curated Collection", "Endless Discovery"]}
      />

      <div className="space-y-4">
        {/* 2. Collection Row - Genres */}
        <CollectionRow title="Explore by Genre">
          {["Action", "Sci-Fi", "Romance", "Horror", "Comedy", "Drama", "Thriller", "Documentary"].map((genre, i) => (
            <div key={i} className="snap-start min-w-[240px] md:min-w-[320px]">
              <DiscoveryCard 
                title={genre}
                image={allMovies[i]?.image || allMovies[i+10]?.image}
                badge="Genre"
                navigateUrl={`/explore?genre=${genre.toLowerCase()}`}
              />
            </div>
          ))}
        </CollectionRow>

        {/* 3. Collection Row - Moods */}
        <CollectionRow title="What's your mood?">
          {["Mind Bending", "Late Night", "Feel Good", "Adrenaline", "Cozy", "Nostalgic"].map((mood, i) => (
            <div key={i} className="snap-start min-w-[240px] md:min-w-[320px]">
              <DiscoveryCard 
                title={mood}
                image={allMovies[i+5]?.image || allMovies[i+15]?.image}
                badge="Mood"
                navigateUrl={`/mood/${mood.toLowerCase().replace(/\s+/g, '-')}`}
              />
            </div>
          ))}
        </CollectionRow>

        {/* 4. Collection Row - Hidden Gems */}
        <CollectionRow title="Hidden Gems">
          {allMovies.slice(0, 12).map((item, i) => (
            <div key={i} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
              <ContentPosterCard 
                {...item}
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
