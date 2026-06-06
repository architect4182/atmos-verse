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

  const MOOD_CARDS = [
    {
      title: "Mind Bending",
      image: "https://image.tmdb.org/t/p/original/3jDXL4Xvj3AzDOF6UH1xeyHW8MH.jpg", // Dark - Abstract/Time
    },
    {
      title: "Late Night",
      image: "https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?auto=format&fit=crop&w=1200&q=80", // Neon cityscape
    },
    {
      title: "Feel Good",
      image: "https://image.tmdb.org/t/p/original/lysUnU6V0VfcthDbviuVlIqgHOR.jpg", // Spy x Family - Warm/Bright
    },
    {
      title: "Adrenaline",
      image: "https://image.tmdb.org/t/p/original/5jnoAA74Qwb5w6B9FMvnc20n6Ie.jpg", // Mission Impossible - Action/Explosions
    },
    {
      title: "Cozy",
      image: "https://image.tmdb.org/t/p/original/1XAC6RPT01UX9EQGy2JVn5c8pgy.jpg", // Harry Potter - Warm orange/Comfort
    },
    {
      title: "Nostalgic",
      image: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg", // Stranger Things - 80s/Neon
    }
  ];

  const GENRE_CARDS = [
    {
      title: "Action",
      image: "https://image.tmdb.org/t/p/original/5jnoAA74Qwb5w6B9FMvnc20n6Ie.jpg", // Mission: Impossible
    },
    {
      title: "Sci-Fi",
      image: "https://image.tmdb.org/t/p/original/uLtVbjvS1O7gXL8lUOwsFOH4man.jpg", // Guardians of the Galaxy
    },
    {
      title: "Romance",
      image: "https://image.tmdb.org/t/p/original/gRBToD4AcpWJhHQraA69CeMLNXu.jpg", // Radhe Shyam
    },
    {
      title: "Horror",
      image: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg", // Stranger Things
    },
    {
      title: "Comedy",
      image: "https://image.tmdb.org/t/p/original/o7JVhqMmrex1TPbmuxl8YXVlcfl.jpg", // Shazam!
    },
    {
      title: "Drama",
      image: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg", // Breaking Bad
    },
    {
      title: "Thriller",
      image: "https://image.tmdb.org/t/p/original/2meX1nMdScFOoV4370rqHWKmXhY.jpg", // Squid Game
    },
    {
      title: "Documentary",
      image: "https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&w=800&q=80", // Nature/Earth
    }
  ];

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
          {GENRE_CARDS.map((genre, i) => (
            <div key={i} className="snap-start min-w-[240px] md:min-w-[320px]">
              <DiscoveryCard 
                title={genre.title}
                image={genre.image}
                badge="Genre"
                navigateUrl={`/explore?genre=${genre.title.toLowerCase()}`}
              />
            </div>
          ))}
        </CollectionRow>

        {/* 3. Collection Row - Moods */}
        <CollectionRow title="What's your mood?">
          {MOOD_CARDS.map((mood, i) => (
            <div key={i} className="snap-start min-w-[240px] md:min-w-[320px]">
              <DiscoveryCard 
                title={mood.title}
                image={mood.image}
                badge="Mood"
                navigateUrl={`/mood/${mood.title.toLowerCase().replace(/\s+/g, '-')}`}
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
