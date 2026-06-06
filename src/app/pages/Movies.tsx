import { HeroComponent, ContentPosterCard, CollectionRow } from "../components/design-system";
import { UNIVERSE_BGS } from "../data/realData";
import { REAL_DATA } from "../data/realData";

export function Movies() {
  // Combine all movies into a single array to filter against
  const allMovies = [
    ...REAL_DATA.marvel,
    ...REAL_DATA.dc,
    ...REAL_DATA.fastandfurious,
    ...REAL_DATA.harrypotter,
    ...REAL_DATA.missionimpossible,
    ...REAL_DATA.jurassic,
    ...REAL_DATA.prabhas
  ];

  // Helper to filter movies by a genre keyword
  const getByGenre = (...genres: string[]) => {
    const lowerGenres = genres.map(g => g.toLowerCase());
    return allMovies.filter(m => 
      m.genres?.some(g => 
        lowerGenres.some(lg => g.toLowerCase().includes(lg))
      )
    ).slice(0, 15); // Limit each row to 15 to keep it fast
  };

  // Helper for high-rated award winners
  const getAwardWinners = () => {
    return allMovies
      .filter(m => {
        const ratingNum = parseFloat(m.rating || "0");
        return ratingNum >= 8.0;
      })
      .sort((a, b) => parseFloat(b.rating || "0") - parseFloat(a.rating || "0"))
      .slice(0, 15);
  };

  const actionAndAdventure = getByGenre("Action", "Adventure");
  const sciFi = getByGenre("Sci-Fi", "Science Fiction");
  const thriller = getByGenre("Thriller");
  const fantasy = getByGenre("Fantasy");
  const crimeAndMystery = getByGenre("Crime", "Mystery");
  const drama = getByGenre("Drama");
  const comedy = getByGenre("Comedy");
  
  // Specific curated categories
  const indianCinema = REAL_DATA.prabhas.slice(0, 15);
  const mindBending = [...sciFi, ...thriller].sort(() => Math.random() - 0.5).slice(0, 15);
  const awardWinners = getAwardWinners();
  const recentlyAdded = [...allMovies].reverse().slice(0, 15);

  const activeHero = REAL_DATA.marvel[21] || allMovies[0];

  return (
    <div className="min-h-screen bg-[#030712] pb-24">
      <HeroComponent 
        variant="universe"
        title="Cinematic Masterpieces"
        description="Explore the greatest stories ever told on the silver screen. Filter by your favorite genre and dive into immersive worlds."
        image={activeHero.backdrop || activeHero.image || UNIVERSE_BGS.marvel}
      />

      <div className="space-y-8 py-12">
        {recentlyAdded.length > 0 && (
          <CollectionRow title="Recently Added" viewAllLink="/explore">
            {recentlyAdded.map((item, i) => (
              <div key={`recent-${i}`} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
                <ContentPosterCard {...item} />
              </div>
            ))}
          </CollectionRow>
        )}

        {actionAndAdventure.length > 0 && (
          <CollectionRow title="Action & Adventure" viewAllLink="/explore?genre=action">
            {actionAndAdventure.map((item, i) => (
              <div key={`action-${i}`} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
                <ContentPosterCard {...item} />
              </div>
            ))}
          </CollectionRow>
        )}

        {sciFi.length > 0 && (
          <CollectionRow title="Sci-Fi" viewAllLink="/explore?genre=scifi">
            {sciFi.map((item, i) => (
              <div key={`scifi-${i}`} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
                <ContentPosterCard {...item} />
              </div>
            ))}
          </CollectionRow>
        )}

        {awardWinners.length > 0 && (
          <CollectionRow title="Award Winners & Critically Acclaimed" viewAllLink="/explore">
            {awardWinners.map((item, i) => (
              <div key={`awards-${i}`} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
                <ContentPosterCard {...item} />
              </div>
            ))}
          </CollectionRow>
        )}

        {thriller.length > 0 && (
          <CollectionRow title="Thriller" viewAllLink="/explore?genre=thriller">
            {thriller.map((item, i) => (
              <div key={`thriller-${i}`} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
                <ContentPosterCard {...item} />
              </div>
            ))}
          </CollectionRow>
        )}

        {fantasy.length > 0 && (
          <CollectionRow title="Fantasy" viewAllLink="/explore?genre=fantasy">
            {fantasy.map((item, i) => (
              <div key={`fantasy-${i}`} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
                <ContentPosterCard {...item} />
              </div>
            ))}
          </CollectionRow>
        )}

        {crimeAndMystery.length > 0 && (
          <CollectionRow title="Crime & Mystery" viewAllLink="/explore?genre=crime">
            {crimeAndMystery.map((item, i) => (
              <div key={`crime-${i}`} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
                <ContentPosterCard {...item} />
              </div>
            ))}
          </CollectionRow>
        )}

        {mindBending.length > 0 && (
          <CollectionRow title="Mind-Bending Movies" viewAllLink="/explore">
            {mindBending.map((item, i) => (
              <div key={`mind-${i}`} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
                <ContentPosterCard {...item} />
              </div>
            ))}
          </CollectionRow>
        )}

        {drama.length > 0 && (
          <CollectionRow title="Drama" viewAllLink="/explore?genre=drama">
            {drama.map((item, i) => (
              <div key={`drama-${i}`} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
                <ContentPosterCard {...item} />
              </div>
            ))}
          </CollectionRow>
        )}

        {comedy.length > 0 && (
          <CollectionRow title="Comedy" viewAllLink="/explore?genre=comedy">
            {comedy.map((item, i) => (
              <div key={`comedy-${i}`} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
                <ContentPosterCard {...item} />
              </div>
            ))}
          </CollectionRow>
        )}

        {indianCinema.length > 0 && (
          <CollectionRow title="Indian Cinema" viewAllLink="/explore">
            {indianCinema.map((item, i) => (
              <div key={`indian-${i}`} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
                <ContentPosterCard {...item} />
              </div>
            ))}
          </CollectionRow>
        )}
      </div>
    </div>
  );
}
