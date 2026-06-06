import { HeroComponent, ContentPosterCard, CollectionRow } from "../components/design-system";
import { REAL_DATA } from "../data/realData";
import { useTrailerModal } from "../context/TrailerModalContext";

export function Anime() {
  const trailer = useTrailerModal();
  const activeHero = REAL_DATA.anime[0]; // Attack on Titan

  return (
    <div className="min-h-screen bg-[#030712] pb-24">
      <HeroComponent 
        variant="universe"
        title="Anime Masterpieces"
        description="Experience breathtaking animation and stories that transcend imagination. The very best of Japanese animation."
        image={activeHero.backdrop || activeHero.image}
      />

      <div className="space-y-8 py-12">
        <CollectionRow title="Trending Anime">
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
