import { useParams } from "react-router";
import { HeroComponent, CollectionRow, ContentPosterCard } from "../components/design-system";
import { REAL_DATA } from "../data/realData";

export function Mood() {
  const { id } = useParams<{ id: string }>();

  // Formatting id to be a nice title
  const moodName = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Mood";

  // Dynamic descriptions based on mood
  let description = "Explore movies and shows curated for your current emotional state.";
  let heroImage = REAL_DATA.tvShows[0]?.backdrop || REAL_DATA.tvShows[0]?.image;
  let essentialList = [...REAL_DATA.marvel, ...REAL_DATA.dc].sort(() => Math.random() - 0.5);
  let hiddenGems = [...REAL_DATA.koreanDramas, ...REAL_DATA.anime].sort(() => Math.random() - 0.5);
  let recentReleases = [...REAL_DATA.fastandfurious, ...REAL_DATA.missionimpossible].sort(() => Math.random() - 0.5);

  if (moodName.toLowerCase() === "mind bending") {
    description = "Prepare to question reality. These narratives feature complex twists, psychological thrills, and thought-provoking concepts that will linger long after the credits roll.";
    heroImage = REAL_DATA.anime[3]?.backdrop || REAL_DATA.anime[3]?.image; // Steins;Gate
    essentialList = [...REAL_DATA.anime, ...REAL_DATA.missionimpossible].sort(() => Math.random() - 0.5);
  } else if (moodName.toLowerCase() === "emotional") {
    description = "Sweeping love stories, tragic heartbreak, and profound human connections. Have some tissues ready.";
    heroImage = REAL_DATA.koreanDramas[2]?.backdrop || REAL_DATA.koreanDramas[2]?.image; // Crash Landing On You
    essentialList = [...REAL_DATA.koreanDramas, ...REAL_DATA.harrypotter].sort(() => Math.random() - 0.5);
  } else if (moodName.toLowerCase() === "epic journeys") {
    description = "Grand adventures, expansive worlds, and heroic quests. Embark on tales that span across space, time, and imagination.";
    heroImage = REAL_DATA.marvel[21]?.backdrop || REAL_DATA.marvel[21]?.image; // Endgame
    essentialList = [...REAL_DATA.marvel, ...REAL_DATA.dc, ...REAL_DATA.harrypotter].sort(() => Math.random() - 0.5);
  }

  return (
    <div className="min-h-screen bg-[#030712] pb-24">
      {/* 1. Hero Banner */}
      <HeroComponent 
        variant="mood"
        title={moodName}
        description={description}
        image={heroImage}
        metadata={["Curated Mood Collection", "Over 50 Titles"]}
      />

      <div className="space-y-4 pt-12">
        {/* Curated Collection Rows */}
        <CollectionRow title={`Essential ${moodName} Watches`}>
          {essentialList.slice(0, 12).map((item, i) => (
            <div key={`${item.id}-essential-${i}`} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
              <ContentPosterCard 
                {...item}
              />
            </div>
          ))}
        </CollectionRow>

        <CollectionRow title="Hidden Gems">
          {hiddenGems.slice(0, 12).map((item, i) => (
            <div key={`${item.id}-hidden-${i}`} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
              <ContentPosterCard 
                {...item}
              />
            </div>
          ))}
        </CollectionRow>

        <CollectionRow title="Curator's Picks">
          {recentReleases.slice(0, 12).map((item, i) => (
            <div key={`${item.id}-recent-${i}`} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
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
