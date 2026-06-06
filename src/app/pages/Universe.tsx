import { useParams } from "react-router";
import { HeroComponent, CinematicTimeline } from "../components/design-system";
import { UNIVERSE_BGS, getRandomPoster } from "../data/mockData";

export function Universe() {
  const { id } = useParams<{ id: string }>();

  // Determine the title based on the route ID
  let title = "Cinematic Universe";
  let description = "Explore the complete timeline.";
  let bgImage = UNIVERSE_BGS.marvel;

  if (id?.toLowerCase() === "marvel") {
    title = "Marvel Cinematic Universe";
    description = "The expansive, interconnected universe of Marvel's greatest heroes and villains.";
    bgImage = UNIVERSE_BGS.marvel;
  } else if (id?.toLowerCase() === "dc") {
    title = "DC Extended Universe";
    description = "The legendary realm of gods, vigilantes, and superhumans.";
    bgImage = UNIVERSE_BGS.dc;
  } else if (id?.toLowerCase() === "starwars") {
    title = "Star Wars";
    description = "A long time ago in a galaxy far, far away...";
    bgImage = UNIVERSE_BGS.starwars;
  }

  // Mock Timeline Data
  const mockPhases = [
    {
      title: "Phase One",
      description: "The assembling of the greatest heroes the universe has ever seen.",
      items: Array.from({ length: 6 }).map((_, i) => ({
        id: `p1-${i}`,
        title: `Origin Story ${i + 1}`,
        image: getRandomPoster(),
        year: `201${i}`,
        rating: (Math.random() * 2 + 7).toFixed(1),
        description: "An incredible journey begins as our hero discovers their true potential and faces their first major threat."
      }))
    },
    {
      title: "Phase Two",
      description: "New threats emerge from the shadows, testing the limits of our heroes.",
      items: Array.from({ length: 6 }).map((_, i) => ({
        id: `p2-${i}`,
        title: `The Sequel ${i + 1}`,
        image: getRandomPoster(),
        year: `201${i + 6}`,
        rating: (Math.random() * 2 + 7).toFixed(1),
        description: "The stakes are higher than ever as the universe expands into unexplored territories."
      }))
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

      {/* The Cinematic Timeline Experience */}
      <CinematicTimeline phases={mockPhases} />
    </div>
  );
}
