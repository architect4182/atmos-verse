import { useParams } from "react-router";
import { HeroComponent, CollectionRow, ContentPosterCard } from "../components/design-system";
import { getRandomHero, getRandomPoster } from "../data/mockData";

export function Mood() {
  const { id } = useParams<{ id: string }>();

  // Formatting id to be a nice title
  const moodName = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Mood";

  // Dynamic descriptions based on mood
  let description = "Explore movies and shows curated for your current emotional state.";
  if (moodName.toLowerCase() === "mind bending") {
    description = "Prepare to question reality. These narratives feature complex twists, psychological thrills, and thought-provoking concepts that will linger long after the credits roll.";
  } else if (moodName.toLowerCase() === "late night") {
    description = "Perfect for when the lights go down. A mix of moody thrillers, dark comedies, and atmospheric dramas that set the perfect midnight tone.";
  } else if (moodName.toLowerCase() === "romance") {
    description = "Sweeping love stories, tragic heartbreak, and modern meet-cutes. Get ready to feel everything.";
  }

  return (
    <div className="min-h-screen bg-[#030712] pb-24">
      {/* 1. Hero Banner */}
      <HeroComponent 
        variant="mood"
        title={moodName}
        description={description}
        image={getRandomHero()}
        metadata={["Curated Mood Collection", "Over 50 Titles"]}
      />

      <div className="space-y-4 pt-12">
        {/* Curated Collection Rows */}
        <CollectionRow title={`Essential ${moodName} Watches`}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="snap-start min-w-[160px] md:min-w-[200px]">
              <ContentPosterCard 
                title={`${moodName} Masterpiece ${i + 1}`}
                image={getRandomPoster()}
                metadata="Highly Recommended"
                rating={(Math.random() * 1.5 + 8.0).toFixed(1)}
              />
            </div>
          ))}
        </CollectionRow>

        <CollectionRow title="Hidden Gems">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="snap-start min-w-[160px] md:min-w-[200px]">
              <ContentPosterCard 
                title={`Underrated Gem ${i + 1}`}
                image={getRandomPoster()}
                metadata="Cult Classic"
                rating={(Math.random() * 1.5 + 7.5).toFixed(1)}
              />
            </div>
          ))}
        </CollectionRow>

        <CollectionRow title="Recent Releases">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="snap-start min-w-[160px] md:min-w-[200px]">
              <ContentPosterCard 
                title={`New Release ${i + 1}`}
                image={getRandomPoster()}
                metadata="2024"
                rating={(Math.random() * 2 + 6.0).toFixed(1)}
              />
            </div>
          ))}
        </CollectionRow>
      </div>
    </div>
  );
}
