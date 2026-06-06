import { CollectionRow, ContentPosterCard } from "../components/design-system";
import { REAL_DATA } from "../data/realData";

export function Collections() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#030712]">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Curated Collections
        </h1>
        <p className="text-white/60 text-lg max-w-2xl">
          Dive into hand-picked selections of the finest cinema, grouped by franchise, style, and thematic resonance.
        </p>
      </div>

      <div className="space-y-4">
        <CollectionRow title="Marvel Saga">
          {REAL_DATA.marvel.map((item, i) => (
            <div key={i} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
              <ContentPosterCard 
                {...item}
                universe={{ title: "Marvel Universe", route: "/universe/marvel" }}
              />
            </div>
          ))}
        </CollectionRow>

        <CollectionRow title="Prabhas Collection">
          {REAL_DATA.prabhas.map((item, i) => (
            <div key={i} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
              <ContentPosterCard 
                {...item}
                universe={{ title: "Prabhas", route: "/universe/prabhas" }}
              />
            </div>
          ))}
        </CollectionRow>

        <CollectionRow title="Korean Essentials">
          {REAL_DATA.koreanDramas.map((item, i) => (
            <div key={i} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
              <ContentPosterCard 
                {...item}
              />
            </div>
          ))}
        </CollectionRow>

        <CollectionRow title="Mind Bending Sci-Fi">
          {REAL_DATA.missionimpossible.map((item, i) => (
            <div key={i} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
              <ContentPosterCard 
                {...item}
              />
            </div>
          ))}
        </CollectionRow>

        <CollectionRow title="Anime Masterpieces">
          {REAL_DATA.anime.map((item, i) => (
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
