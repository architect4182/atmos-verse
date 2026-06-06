import { HeroSection } from "../components/home/HeroSection";
import { TrendingTop10 } from "../components/home/TrendingTop10";
import { CinematicUniverses } from "../components/home/CinematicUniverses";
import { MoodDiscovery } from "../components/home/MoodDiscovery";
import { GenreDiscovery } from "../components/home/GenreDiscovery";

export function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="space-y-16 md:space-y-24 pb-24">
        <TrendingTop10 />
        <CinematicUniverses />
        <MoodDiscovery />
        <GenreDiscovery />
      </div>
    </div>
  );
}
