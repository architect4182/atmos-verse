import { useParams } from "react-router";
import { HeroComponent, CinematicTimeline, CollectionRow, ContentPosterCard } from "../components/design-system";
import { UNIVERSE_BGS } from "../data/realData";
import { REAL_DATA } from "../data/realData";

type UniverseKey = keyof typeof REAL_DATA;

export function Universe() {
  const { id } = useParams<{ id: string }>();
  const normalizedId = (id?.toLowerCase() || "marvel") as UniverseKey;
  const universeData = REAL_DATA[normalizedId] || [];

  // Determine the title based on the route ID
  let title = "Cinematic Universe";
  let description = "Explore the complete timeline.";
  let bgImage = UNIVERSE_BGS.marvel;

  if (normalizedId === "marvel") {
    title = "Marvel Cinematic Universe";
    description = "The expansive, interconnected universe of Marvel's greatest heroes and villains.";
    bgImage = UNIVERSE_BGS.marvel;
  } else if (normalizedId === "dc") {
    title = "DC Extended Universe";
    description = "The legendary realm of gods, vigilantes, and superhumans.";
    bgImage = UNIVERSE_BGS.dc;
  } else if (normalizedId === "fastandfurious") {
    title = "Fast & Furious Collection";
    description = "A quarter mile at a time. The ultimate saga of speed and family.";
    bgImage = UNIVERSE_BGS.fastandfurious;
  } else if (normalizedId === "harrypotter") {
    title = "Harry Potter & Fantastic Beasts";
    description = "The magical world of Hogwarts, wizards, and fantastic beasts.";
    bgImage = UNIVERSE_BGS.harrypotter;
  } else if (normalizedId === "missionimpossible") {
    title = "Mission Impossible Collection";
    description = "Your mission, should you choose to accept it.";
    bgImage = UNIVERSE_BGS.missionimpossible;
  } else if (normalizedId === "jurassic") {
    title = "Jurassic Franchise";
    description = "Life finds a way. The definitive collection of prehistoric adventures.";
    bgImage = UNIVERSE_BGS.jurassic;
  } else if (normalizedId === "prabhas") {
    title = "Prabhas Filmography";
    description = "The rebel star's cinematic journey through epic blockbusters.";
    bgImage = UNIVERSE_BGS.prabhas;
  }

  // Construct real phases based on the data length
  const midPoint = Math.ceil(universeData.length / 2);
  const phases = [
    {
      title: "The Beginning",
      description: "Where it all started. The origin stories and early adventures.",
      items: universeData.slice(0, midPoint)
    },
    {
      title: "The Escalation",
      description: "The stakes get higher and the world expands.",
      items: universeData.slice(midPoint)
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712]">
      {/* Immersive Universe Hero */}
      <HeroComponent 
        variant="universe"
        title={title}
        description={description}
        image={bgImage}
      />

      <div className="space-y-8 pb-24">
        {/* The Cinematic Timeline Experience */}
        {universeData.length > 0 && (
          <CinematicTimeline phases={phases} />
        )}

        {/* Essential Movies */}
        <div className="pt-8 border-t border-white/5">
          <CollectionRow title="Essential Movies">
            {universeData.slice(0, 8).map((item, i) => (
              <div key={`${item.id}-essential-${i}`} className="snap-start w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] shrink-0">
                <ContentPosterCard 
                  {...item}
                />
              </div>
            ))}
          </CollectionRow>
        </div>

        {/* Complete Collection Grid */}
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 pt-8 border-t border-white/5">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6 flex items-center gap-2">
            Complete Collection
            <div className="h-2 w-2 rounded-full bg-blue-500" />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {universeData.map((item, i) => (
              <ContentPosterCard 
                key={`${item.id}-complete-${i}`}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
