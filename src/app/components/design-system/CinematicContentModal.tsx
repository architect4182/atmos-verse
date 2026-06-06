import { motion, AnimatePresence } from "motion/react";
import { X, Play, Plus, Info } from "lucide-react";
import { useNavigate } from "react-router";
import { cn } from "@/app/components/ui/utils";
import { ModalContentData } from "../../context/CinematicModalContext";
import { ContentPosterCard } from "./ContentPosterCard";
import { getRandomPoster } from "../../data/mockData";

export interface CinematicContentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: ModalContentData | null;
}

export function CinematicContentModal({ open, onOpenChange, data }: CinematicContentModalProps) {
  const navigate = useNavigate();

  if (!data) return null;

  // Generate some dummy tags based on the title
  const tags = ["Action", "Sci-Fi", "Mind Bending"];
  const year = "2023";
  const runtime = "2h 15m";
  const defaultDesc = "When a devastating event threatens the world, a group of unlikely heroes must band together to save humanity. With incredible visuals, mind-bending twists, and breathtaking action, this is a cinematic journey you won't forget.";

  const handleExplore = () => {
    onOpenChange(false);
    if (data.navigateUrl) {
      navigate(data.navigateUrl);
    } else {
      navigate(`/content/${data.title.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 overflow-hidden md:py-12">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => onOpenChange(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[1000px] h-full md:h-auto md:max-h-full bg-[#0a0a0a] rounded-none md:rounded-2xl overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] shadow-[0_0_50px_rgba(0,0,0,0.8)] border-x-0 md:border md:border-white/10 flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 backdrop-blur-md transition-all duration-300"
            >
              <X className="size-6" />
            </button>

            {/* Hero / Backdrop Section */}
            <div className="relative aspect-video w-full shrink-0">
              <img 
                src={data.image} 
                alt={data.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">
                  {data.title}
                </h2>
                
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-white/80 mb-6">
                  {data.rating && <span className="text-green-400 font-bold">{data.rating} Match</span>}
                  <span>{year}</span>
                  <span>{runtime}</span>
                  <span className="border border-white/20 px-1 rounded text-xs text-white/60">HD</span>
                </div>

                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-lg font-bold hover:bg-white/90 transition-colors">
                    <Play className="size-5 fill-black" />
                    Trailer
                  </button>
                  <button className="flex size-11 items-center justify-center rounded-full border-2 border-white/20 bg-black/40 backdrop-blur-sm hover:border-white hover:bg-white/10 transition-colors text-white">
                    <Plus className="size-5" />
                  </button>
                  {/* Explore / Full Page Button */}
                  <button 
                    onClick={handleExplore}
                    className="flex size-11 items-center justify-center rounded-full border-2 border-white/20 bg-black/40 backdrop-blur-sm hover:border-white hover:bg-white/10 transition-colors text-white"
                  >
                    <Info className="size-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content Details Section */}
            <div className="p-8 pt-4 flex flex-col md:flex-row gap-8 shrink-0">
              {/* Left Col: Description */}
              <div className="w-full md:w-2/3">
                <p className="text-white/80 leading-relaxed text-base md:text-lg mb-6">
                  {data.description || defaultDesc}
                </p>
              </div>

              {/* Right Col: Metadata */}
              <div className="w-full md:w-1/3 space-y-4 text-sm">
                <div>
                  <span className="text-white/50">Cast: </span>
                  <span className="text-white/90">Actor 1, Actor 2, Actor 3...</span>
                </div>
                <div>
                  <span className="text-white/50">Genres: </span>
                  <span className="text-white/90">{tags.join(", ")}</span>
                </div>
                <div>
                  <span className="text-white/50">Moods: </span>
                  <span className="text-white/90">Mind Bending, Adrenaline</span>
                </div>
              </div>
            </div>

            {/* Similar Titles Section */}
            <div className="p-8 pt-0">
              <h3 className="text-xl font-bold text-white mb-6">More Like This</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <ContentPosterCard 
                    key={i}
                    title={`Similar Title ${i + 1}`}
                    image={getRandomPoster()}
                    metadata="Action • Sci-Fi"
                    rating={(Math.random() * 1.5 + 7.5).toFixed(1)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
