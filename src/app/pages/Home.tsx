import { 
  HeroComponent, 
  DiscoveryCard, 
  ContentPosterCard, 
  CollectionRow, 
  RankingCarousel,
  StreamingServices
} from "../components/design-system";
import { UNIVERSE_BGS, getTrailerForTitle, REAL_DATA } from "../data/realData";

import { useState, useEffect } from "react";
import { useTrailerModal } from "../context/TrailerModalContext";

import { useCinematicModal } from "../context/CinematicModalContext";
import { useWatchlist } from "../context/WatchlistContext";

// Use real items for the hero
const DYNAMIC_HEROES = [
  {
    ...REAL_DATA.marvel[21], // Avengers Endgame
    metadata: ["2019", "PG-13", "3h 1m", "Action", "Sci-Fi"]
  },
  {
    ...REAL_DATA.tvShows[3], // Stranger Things
    metadata: ["TV-14", "Sci-Fi", "Horror"]
  },
  {
    ...REAL_DATA.anime[0], // Attack on Titan
    metadata: ["Anime", "TV-MA", "Dark Fantasy"]
  },
  {
    ...REAL_DATA.harrypotter[7], // Deathly Hallows Part 2
    metadata: ["2011", "PG-13", "Fantasy"]
  }
];

export function Home() {
  const trailer = useTrailerModal();
  const modal = useCinematicModal();
  const watchlist = useWatchlist();
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % DYNAMIC_HEROES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const activeHero = DYNAMIC_HEROES[heroIndex];

  // We need a fallback if some data is missing
  if (!activeHero) return null;

  const handleWatchlist = () => {
    const id = activeHero.title.toLowerCase().replace(/\s+/g, '-');
    if (watchlist.isInWatchlist(id)) {
      watchlist.removeFromWatchlist(id);
    } else {
      watchlist.addToWatchlist({
        id,
        title: activeHero.title,
        image: activeHero.image,
        backdrop: activeHero.backdrop,
        metadata: activeHero.metadata,
        rating: activeHero.rating,
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] pb-24">
      {/* 1. Dynamic Hero Engine */}
      <div className="relative transition-opacity duration-1000 ease-in-out">
        <HeroComponent 
          key={heroIndex}
          title={activeHero.title}
          description={activeHero.description}
          image={activeHero.backdrop || activeHero.image}
          metadata={activeHero.metadata}
          onPlay={() => trailer.openTrailer(activeHero.title, getTrailerForTitle(activeHero.title))}
          onInfo={() => modal.openModal({
            ...activeHero,
            metadata: Array.isArray(activeHero.metadata) ? activeHero.metadata.join(" • ") : activeHero.metadata,
          })}
          onWatchlist={handleWatchlist}
        />
      </div>

      <div className="space-y-4">
        {/* 2. Ranking Carousel */}
        <RankingCarousel 
          title="Top 10 Trending Today"
          items={REAL_DATA.tvShows.slice(0, 10).map((item, i) => ({
            ...item,
            rank: i + 1
          }))}
          onItemClick={(item) => modal.openModal({
            ...item,
            metadata: Array.isArray(item.metadata) ? item.metadata.join(" • ") : item.metadata,
          })}
        />

        {/* 3. AtmosVerse AI Collections */}
        <CollectionRow title="Because you liked Marvel" viewAllLink="/explore">
          {REAL_DATA.dc.map((item, i) => (
            <div key={i} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
              <ContentPosterCard 
                {...item}
                universe={{ title: "DC Universe", route: "/universe/dc" }}
              />
            </div>
          ))}
        </CollectionRow>

        <CollectionRow title="Mind Bending Anime" viewAllLink="/anime">
          {REAL_DATA.anime.map((item, i) => (
            <div key={i} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
              <ContentPosterCard 
                {...item}
              />
            </div>
          ))}
        </CollectionRow>

        <CollectionRow title="Best Korean Thrillers">
          {REAL_DATA.koreanDramas.map((item, i) => (
            <div key={i} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
              <ContentPosterCard 
                {...item}
              />
            </div>
          ))}
        </CollectionRow>

        <CollectionRow title="Fast & Furious Saga">
          {REAL_DATA.fastandfurious.map((item, i) => (
            <div key={i} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
              <ContentPosterCard 
                {...item}
                universe={{ title: "Fast & Furious", route: "/universe/fastandfurious" }}
              />
            </div>
          ))}
        </CollectionRow>

        <CollectionRow title="Hidden Gems">
          {REAL_DATA.missionimpossible.map((item, i) => (
            <div key={i} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
              <ContentPosterCard 
                {...item}
                universe={{ title: "Mission Impossible", route: "/universe/missionimpossible" }}
              />
            </div>
          ))}
        </CollectionRow>

        {/* 4. Collection Row (Discovery Cards for Universes) */}
        <CollectionRow title="Cinematic Universes" viewAllLink="/explore">
          {Object.entries(UNIVERSE_BGS).slice(0, 4).map(([key, bgImage], i) => {
            const titles = ["Marvel", "DC", "Fast & Furious", "Harry Potter"];
            return (
              <div key={key} className="snap-start min-w-[280px] md:min-w-[400px] w-full">
                <DiscoveryCard 
                  title={titles[i]}
                  subtitle="Explore the complete timeline and collections."
                  image={bgImage}
                  badge="Universe"
                  navigateUrl={`/universe/${key}`}
                />
              </div>
            );
          })}
        </CollectionRow>

        {/* 5. Streaming Services */}
        <StreamingServices />
      </div>
    </div>
  );
}
