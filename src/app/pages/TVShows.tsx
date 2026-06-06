import { HeroComponent, ContentPosterCard, CollectionRow } from "../components/design-system";
import { REAL_DATA } from "../data/realData";
import { useTrailerModal } from "../context/TrailerModalContext";

export function TVShows() {
  const trailer = useTrailerModal();
  const activeHero = REAL_DATA.tvShows[0]; // Breaking Bad

  return (
    <div className="min-h-screen bg-[#030712] pb-24">
      <HeroComponent 
        variant="universe"
        title="Premium Television"
        description="Binge-worthy shows that redefine storytelling. Dive into epic sagas and gripping character studies."
        image={activeHero.backdrop || activeHero.image}
      />

      <div className="space-y-8 py-12">
        <CollectionRow title="Critically Acclaimed Series">
          {REAL_DATA.tvShows.map((item, i) => (
            <div key={i} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
              <ContentPosterCard 
                {...item}
              />
            </div>
          ))}
        </CollectionRow>

        <CollectionRow title="Global Phenomenons (K-Dramas)">
          {REAL_DATA.koreanDramas.map((item, i) => (
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
